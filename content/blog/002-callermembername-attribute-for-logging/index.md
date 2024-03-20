---
date: "2018-10-27"
tags:
  - "C#"
keywords:
  - "C#"
  - "CallerMemberName"
title: "Using CallerMemberName for Improved Logging in C#"
preview: 'Learn how to use "magic" attributes in C#, such as CallerFilePath, CallerLineNumber, and CallerMemberName, to retrieve caller information and improve logging functionality.'
draft: false
legacy: true
---

Since C# 4.5 you can use "magic" attributes to retrieve caller information:

- CallerFilePath
- CallerLineNumber
- CallerMemberName

These attributes are targeted to change default value of optional parameters in methods. They pass the information about place in code, where method was called.

Well, compiler always translate optional parameters into default values, if other behavior is not defined.
For example, you have some logging method:

```csharp
void Log(string msg, string method = null)
{
    // logging somewhere
}
```

If you invoke it like `Log(msg)`, compiler will translate this invocation into `Log(msg, null)`.

So, with this trio you can tune this behavior. Just put them before optional parameters at you method and the compiler will change pre-defined values:

- `[CallerFilePath]` will pass the full path of your source code file, where method was invoked.
- `[CallerLineNumber]` will pass the line number (`int`) of code, where method was invoked.
- `[CallerMemberName]` will pass the name of member (ctor, method, property, event, etc), which invoked method.

For example, you want to write tracing or logging, and you want to know place in code, where some event occurred.
Now, you can just write like this:

```csharp
public static void TraceEvent(string message,
    [CallerMemberName] string memberName = "",
    [CallerFilePath] string sourceFilePath = "",
    [CallerLineNumber] int sourceLineNumber = 0)
{
    Trace.WriteLine("event: " + message);
    Trace.WriteLine("member name: " + memberName);
    Trace.WriteLine("source file path: " + sourceFilePath);
    Trace.WriteLine("source line number: " + sourceLineNumber);
}
```

And then invoke like that:

```csharp
static void Main(string[] args)
{
    TraceEvent("Started");
}
```

You will see the output:

```
event: Started
member name: Main
source file path: C:\some\path\to\source\CallerInfoTest.Cli\CallerInfoTest.Cli\Program.cs
source line number: 11
```

And if you aware of `INotifyPropertyChanged`, you can implement `PropertyChanged`
event invocator without any hassle, like always passing name of a property, that was changed:

```csharp
public class ViewModel: INotifyPropertyChanged
{
    private String _message;

    public String Message
    {
        get => _message;
        set
        {
            if (value == _message) return;
            _message = value;
            OnPropertyChanged();
        }
    }

    public event PropertyChangedEventHandler PropertyChanged;

    protected virtual void OnPropertyChanged([CallerMemberName] String propertyName = null)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}
```

[Documentation about these attributes](https://docs.microsoft.com/ru-ru/dotnet/csharp/programming-guide/concepts/caller-information)
