---
date: "2022-03-10"
tags:
- "Go"
- "MongoDB"
title: "How to get status of MongoDB operation"
preview: "Simple solution for fetching the status of long-running MongoDB queries."
draft: false
---

Sometimes you may need to inspect the status of a running DB query. It may be a profiling or even some part of polling mechanism for asynchronous operations. My case was the second one, let's discuss details and implementation.

### Basic example of a task - polling deletion operation

My intention was to make a background service, that handles data-retention. No going much in details of specifics, but it should handle multiple requests and should be tolerant to failures during deletion handling. That's why it should store states of running operations, which may be checked during failure recovery or regular reboot/deployment. A good way to receive requests is using message broker, for example Kafka. Service will receive messages with `TaskId` and info which data to delete. After deletion is completed, it will commit message. If service will be restarted or fails - it will receive the uncommitted message again.

### db.currentOp with modern syntax

Straightforward solution is to store state in another MongoDB collection, but I thought that it may be redundant. The only need of that state is to check if operation was completed, and if not - is it running or failed.

Most of the databases with which I've dealt has special tables or views with information about all running queries. MongoDB is not an exception, it has special query [db.currentOp()](https://www.mongodb.com/docs/manual/reference/method/db.currentOp/), which returns document with all running queries.

This API have limitations, caused by MongoDB specifics, so there's a more modern way of retrieving running queries - [$currentOp](https://www.mongodb.com/docs/manual/reference/operator/aggregation/currentOp/) stage for aggregation pipeline. It works as regular stage and can be combined with other aggregation features, like projection, grouping, etc. So, we will stick with this one.

There are several things to mention.

Firstly aggregation pipeline with this stage should be run on `admin` collection - you need a special user to access it via your application. **ADD INSTRUCTION HOW TO CREATE USER WITH ACCESS TO ADMIN**

Secondly this command returns commands that are started on specific MongoDB node. I've got sharded cluster, and I need to run `$currentOp` on the router, that started specific delete operation. It's also not a big deal - you can run this query all routers in parallel and check if someone has it.

The last thing is that you need somehow distinguish delete operations stated by your service from normal operations. In my case all those data-retention tasks has `TaskId`, which is a unique key for operation, and I need a way to mark MongoDB queries with that key.

### queries has comments, but for deletes you need to make admin command

### Sum-up
