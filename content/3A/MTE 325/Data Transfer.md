---
title: Data Transfer
tags:
  - mte325
date: 2024-05-22
aliases:
  - data transfer
---
The data step of [[Data Transmission Model|data transmission]] in embedded systems is the only level where synchronization is mandatory.
- There has to be some interaction between the two sides to physically transfer the data. 
- The two sides may not have the same view of time, and the nature of the data itself must also be considered.

Some aspects of the transfer to consider:
- *Data persistence* considers how long the data is valid for communication purposes.
	- *Persistent data* remains available and valid until the consumer indicates that it has received it
	- *Transient data* only remains valid for a period of time, which is usually known by the designer. If the consumer doesn’t get the data in time, its gone. This is how synchronous buses operate. Most data we deal with in embedded systems will be transient in nature.
- Synchronization and clocking characterizes the views of time between the two sides and how data is enabled or validated. See [[Synchronous and Asynchronous Systems]] for some options.
- Additional control signals may indicate which device should respond and the type of transaction. See [[Synchronous Buses]] for more information.