---
title: Re-entrant Functions
tags:
  - mte241
date: 2023-10-20
aliases:
---
[[Concurrent vs Parallel|Concurrency]] more or less means “out of order execution of code”. 

Interrupts guarantee that the order of execution is not what is specified by the programmer, since they happen at random times. It gets worse, since interrupts can interrupt each other and nest. 

We need to be careful with how we do [[ISR Implementation|implement ISRs]] and any helper functions that they use. This is true whether we write in pure assembly or in a mix of C and assembly. 

A function is referred to as “**re-entrant**” if it can be called multiple times in concurrent operation and where multiple invocations of that function do not interfere with each other. It means that you can re-enter the function even if it’s already running. 

Usually, functions are re-entrant if they depend only on their input parameters and any local variables created inside the function, although this is not strictly true. For instance, a function may depend on a global variable, but the OS protects that variable each time the function gets called, so it doesn’t matter that it has this dependency. Most of the functions you’ve ever written have been re-entrant.

```c
int x; //we assume this is set by some other part of the code 
int doSomething(int y) 
{
	return (++x)+y; 
}
```

Here we have a global variable that is changed by this function. Let’s imagine how this can be a problem:
- Assume ISR1 is running and calls the function
- Assume now that the instruction for ++x has been executed and immediately after a higherpriority interrupt occurs, running ISR2
- ISR2 now also calls this function, and successfully returns to ISR1

In the above example, what is the expected operation? Should ISR1 somehow use the newly updated value for the variable, x? Should it use the value that it computed? How will this information be stored? The function is non-re-entrant. 

In this relatively simple case it probably isn’t a big deal, but imagine a function that toggles the mode of a peripheral, or otherwise modifies the operation of the hardware in some way. What can happen is that our code appears to work just fine until nested interrupts occur. Since it is generally very difficult to debug interrupt-driven code we would see a bug only when both interrupts occur, and then we would need to recognize this and figure out a fix! So, the big takeaway here is – **always make your ISR helper functions re-entrant!**