---
title: Data Transmission Model
tags:
  - mte325
date: 2024-05-21
aliases:
  - data transmission model
  - data transmission
---
## Terminology
*Data* refers to the transfer of state information from producer to consumer. 
- This could be something like the value of a temperature reading.

An *event* can be thought of as control information, indicating the occurrence of some activity. 
- Using the temperature example, an event could be an alert that a limit has been exceeded.

In other cases, we may wish to transfer both an event and data. In the case of a key pad, the producer may tell the consumer both that a key was pressed and the value associated with that key.
## Producer-Consumer
A general model of data transmission involves:
- A *producer* – the hardware/software component producing the information to be transferred
- A *consumer* – the hardware/software component receiving and using the information

![[Data Transmission.png|584]]

How does [[Embedded Systems Synchronization|synchronization]] and transmission occur?
- On the producer side, the system must wait for the producer to create the data, possibly do error checking or validation on the data, wait for this data to be read, and then perform any necessary cleanup before starting over again.
- On the consumer side of the interface, the system has to prepare for new data, then wait for the new data to cross the interface. Depending on the synchronization technique used, it may perform other tasks while waiting. Once the data is available, some processing may be done before the consumer side of the interface passes the data to the consumer and prepares to receive the next piece.

Another consideration is time, as the producer and consumer don't necessarily run on the same clock, or may have very different speeds. 
- How do you make sure data can be transferred smoothly? How does data get read only at the appropriate time? 
- Does the consumer provide any feedback to the producer to indicate it received the data?

## General 3-Level Model
The below is a generalized 3-level producer-consumer model for data transmission/synchronization.

![[Data Transmission Model.png|560]]

The levels are:
- [[Data Generation]], 
- [[Data Notification]] or initiation of transfer
- [[Data Transfer]]. 