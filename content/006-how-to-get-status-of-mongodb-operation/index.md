---
date: "2022-04-20"
tags:
- "MongoDB"
title: "How to get status of MongoDB operation"
preview: "Simple solution for polling status of long-running MongoDB queries."
draft: false
---

Sometimes you may need to inspect the status of a running DB query. It may be a profiling or even some part of polling mechanism for asynchronous operations. My case was the second one, let's discuss details and implementation.

My intention was to make a background service, that handles data-retention. Not going much in details, but it should handle multiple requests and should be tolerant to failures during deletion handling. That's why it should store states of running operations, which may be checked during failure recovery or regular reboot/deployment. 

A good way to receive requests is using some message broker, for example Kafka. Service will receive messages with `JobId` and condition which data to delete. After deletion is completed, service will commit message. If service will be restarted or fails - it will receive the uncommitted message again.

Straightforward solution is to store state in another MongoDB collection, but I thought that it may be redundant. The only need of that state is to tell if operation was completed, and if not - is it running or failed.

Most of the databases with which I've dealt has special tables or views with information about all running queries. MongoDB is not an exception, it has special query [db.currentOp()](https://www.mongodb.com/docs/manual/reference/method/db.currentOp/), which returns document with all running queries.

This API have limitations, caused by MongoDB specifics, so there's a more modern way of retrieving running queries - [$currentOp](https://www.mongodb.com/docs/manual/reference/operator/aggregation/currentOp/) stage for aggregation pipeline. It works as regular stage and can be combined with other aggregation features, like projection, grouping, etc. So, we will stick with this one.

There are several things to mention.

Firstly, aggregation pipeline with this stage should be run on `admin` collection - you need a special user to access it via your application.

Secondly, this command returns operation that are started on specific MongoDB node. I've got sharded cluster, and I need to run `$currentOp` on the router, that started specific delete operation. It's also not a big deal - you can run this query against all routers in parallel and check if any has it.

The last thing is that you need to distinguish delete operations stated by your service from normal operations. In my case all those data-retention tasks has `JobId`, which is a unique key for operation. All I need is a way to mark MongoDB queries with this key.

If we look through the output format for `$currentOp`, we will notice that it has a [comment](https://www.mongodb.com/docs/manual/reference/command/currentOp/#mongodb-data-currentOp.command) field, which can be attached when command is started. Some queries (e.g `find`) support [$comment](https://www.mongodb.com/docs/manual/reference/operator/query/comment/) operator, but the most universal way to pass a comment is to run a query via [database command](https://www.mongodb.com/docs/manual/reference/command/#database-commands).

I advise you to have a look, because this API provides many interesting features, for example [delete command](https://www.mongodb.com/docs/manual/reference/command/delete/#mongodb-dbcommand-dbcmd.delete) has limit option, which may be used to delete large amount of data by parts.

Alright, let's try some MongoDB shell.

Now when we start the delete operation we can pass `JobId` into comment:
```js
db.runCommand({
    "delete": "Events",
    "ordered": false,
    "comment": "job:blog-test",
    "deletes": [{
        "q": {"clientId": 0},
        "limit": 0
    }]
})
```

And fetch status via aggregation query:
```js
db.aggregate([
    {"$currentOp": {"localOps": true}},
    {"$match": {"command.comment": "job:blog-test"}},
    {"$limit": 1}
])
```

If operation with such comment is running on the current node (or router), we will receive single document, such like the one below:
```json
{
    "type" : "op",
    "host" : "f0fde895fb50:27017",
    "desc" : "conn65",
    "connectionId" : 65,
    "client" : "172.18.0.1:57176",
    "appName" : "MongoDB Shell",
    "clientMetadata" : {
        "application" : {
            "name" : "MongoDB Shell"
        },
        "driver" : {
            "name" : "MongoDB Internal Client",
            "version" : "4.2.6-18-g6cdb6ab"
        },
        "os" : {
            "type" : "Windows",
            "name" : "Microsoft Windows 8",
            "architecture" : "x86_64",
            "version" : "6.2 (build 9200)"
        },
        "mongos" : {
            "host" : "f0fde895fb50:27017",
            "client" : "172.18.0.1:57176",
            "version" : "4.4.11"
        }
    },
    "active" : true,
    "currentOpTime" : "2022-04-19T22:01:50.629+00:00",
    "opid" : 996,
    "lsid" : {
        "id" : UUID("e42b457e-bc01-4ffa-83dc-343f1f6ea351"),
        "uid" : { "$binary" : "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=", "$type" : "00" }
    },
    "secs_running" : NumberLong(3),
    "microsecs_running" : NumberLong(3406911),
    "op" : "remove",
    "ns" : "testdb.Events",
    "command" : {
        "delete" : "Events",
        "ordered" : false,
        "comment" : "job:blog-test",
        "lsid" : {
            "id" : UUID("e42b457e-bc01-4ffa-83dc-343f1f6ea351")
        },
        "$clusterTime" : {
            "clusterTime" : Timestamp(1650405661, 34),
            "signature" : {
                "hash" : { "$binary" : "AAAAAAAAAAAAAAAAAAAAAAAAAAA=", "$type" : "00" },
                "keyId" : NumberLong(0)
            }
        },
        "$readPreference" : {
            "mode" : "secondaryPreferred"
        },
        "$db" : "testdb"
    },
    "numYields" : 0,
    "waitingForLatch" : {
        "timestamp" : ISODate("2022-04-19T22:01:47.323Z"),
        "captureName" : "ProducerConsumerQueue::_mutex"
    }
}
```
