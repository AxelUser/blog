---
date: "2018-11-12"
tags:
- "C#"
title: "Testing private logic"
preview: "How to test internal or private logic with the help of attribute InternalsVisibleTo"
draft: false
---

Well, most of the time, if you need to test some private logic, maybe you it's better to be SPECIFIC and extract it to public members of new classes. Sometimes decomposition "rocks" and you code became more clear and maintainable, so check it out before.

However, this private logic can be really specific to domain of single class and it isn't worth of extracting somewhere else, but it somehow must be tested. 

In that case you have 3 simple options to do that and they all break the idea of incapsulation:
- Make those members `public` and treat them in your test-classes as usual. It may be OK, if you writing really simple app and for now you don't care about clean public interfaces. However if you provide it as a public library, This approach opens you internal logic for every user, so, if "dirty" usage of these members could break state of your objects or even whole application.
- Make those members `protected`, inherit from your class in your testable stub, which opens those members, or derive your test-fixture from it. This can also works, but you have to write boilerplate code for that. Howerever, you class can be sealed, for example if you don't want users to extend it, as it may break logic of connected classes.
- Make those members `internal` and add `InternalsVisibleTo` attibute on assembly-level. This approach also breaks incapsulation, but only inside you assembly, all you public interfaces for users will stay clean and secure. And you don't need to use inheritance and write stubs.

## How to use `InternalsVisibleTo`

For example you have got a class `Some` with public method `Increment()` and internal property `Counter` as object's state:
```csharp
namespace InternalsLib
{
    public class Some
    {
        internal int Counter { get; set; }

        public void Increment()
        {
            Counter++;
        }
    }
}
```

You want to assert it's state in some CLI or test-fixture, let it be like that:
```csharp
using System.Diagnostics;
using InternalsLib;

namespace InternalsVisibleTests
{
    class Program
    {
        static void Main(string[] args)
        {
            var someObj = new Some();
            someObj.Increment();
            Trace.WriteLine($"Expected count {1}, real count {someObj.Counter}");
        }
    }
}
```

We can't access property `Counter` in assembly `InternalsVisibleTests`, cause it's modifier is `internal`. To open internal logic for other assemblies, you need to provide attribute for whole testable assembly in file `AssemblyInfo.cs` or just above the definition of your class, it doesn't really matter.
Let's put attribute invocation in `AssemblyInfo.cs` for project `InternalsLib`:
```csharp
[assembly: InternalsVisibleTo("InternalsVisibleTests")]
```

Now `InternalsVisibleTests` became a friend assembly and internal members from assembly `InternalsLib` became visible inside `InternalsVisibleTests`.

You can learn more about `InternalsVisibleTo` at [documentation](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.internalsvisibletoattribute).