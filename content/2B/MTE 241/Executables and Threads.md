---
title: Executables and Threads
tags:
  - mte241
date: 2023-10-09
aliases:
---
On a general-purpose OS, the executable is a single program that runs amongst possibly hundreds or thousands of others. On your RTOS things are a little different.

- Your RTOS does not run separately from a user’s application. Instead, think of your RTOS as an API that the user includes into their code, then compiles a single executable that contains both the RTOS and their code that uses it. 
- The whole thing is loaded onto the microcontroller to run. This executable will, however, run multiple concurrent threads of operation. For our purposes, we can assume that a thread is made up of three things.

![[Executables and Threads.png|480]]

The user writes the thread functions that include both their code (what the user wants the thread to do) and API calls. The kernel schedules the threads to run through API calls. 

Since we have only a single core processor, the threads will only appear to run at the same time. In reality, each thread is given a time slice to run, then gets swapped out for the other threads to take their turn. As long as the swapping is fast enough and the threads don’t take over the whole processor, the user’s perspective will be multiple threads running at once.
