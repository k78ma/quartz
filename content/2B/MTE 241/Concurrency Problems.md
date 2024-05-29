---
title: Concurrency Problems
tags:
  - mte241
date: 2023-10-19
aliases:
---
If our OS ran without concurrency the problem of resource management would be hard enough, but would reduce to creating an API that application programmers could use to simplify safe access to the resources. Loosely, this is what happens in an Arduino. When we introduce concurrency into the mix we have greater problems. 

A modern OS must be capable of running multiple concurrent threads. This is why, for instance, you can type, move your mouse, and stream music at the same time. With multiple threads trying to access a limited number of resources, we need to handle the problem of multiple concurrent access attempts. What happens when one thread tries to access the resources currently being used by another?

### Ideal Solution
In the ideal case, the OS forces all threads to access resources via a single interface, like an API. This interface ensures that any given resource is allocated to a single thread at a time, and that only that one thread can access or modify it. Other threads may be able to request access, but they are not automatically given access just because they asked.

#### Problem 1: Race Conditions
In this way, the OS prevents a class of problems called **race conditions**. 
- Race conditions occur when two threads “race” to access a resource, or where the “correct” program flow would be for the computer to perform two operations at the same time. 
- For example, consider one thread that is reading sensor data into an array and one thread that is processing that data using a moving average filter. If the sensor reading thread is updating the array’s values while the moving average thread is trying to do a computation, we have a race condition. 
- It is also not at all clear what should happen in cases such as these. Which one is more important? Whose call is that to make? 

#### Problem 2: Hardware Restrictions
We also have another problem. On a large desktop CPU there is hardware in place that prevents one thread from accessing another thread’s resources. 
- This means that two threads couldn’t access the same resources even if they wanted to. 
- One simple way to do this would be to protect the memory-mapped regions that control the peripherals so that only the OS can access them. 
- If a thread attempts to access that memory, hardware is in place to quickly stop it from doing so, and potentially to stop it from continuing its operation. This is exactly what a segfault is. 
- Therefore, a desktop CPU can force all threads to use a common interface for resource access. 

On a microcontroller, however, such hardware simply doesn’t exist, or if it does it is very limited. The Cortex M4, can block off memory regions, but it does so in a very coarse way – either a thread can access peripherals (and it is running in “privileged mode”) or it cannot (and it is running in “unprivileged mode”). There is no in-between, where a thread can access some hardware but not others. This means that one thread absolutely can take over another’s resources. The interface API is more of a voluntarily agreed to standard rather than a requirement. We are going to ignore such problems and assume that all threads will happily co-operate :)