---
title: Data Notification
tags:
  - mte325
date: 2024-05-22
aliases:
  - data notification
---
After [[Data Generation|data generation]] has taken place, the second level of synchronization involves notifying that data is ready to transfer. This notification/initiation is started by either the producer or consumer. 

For example, let's say we have a system with a computer, printer, and keyboard. 
- Sending documents to print – The computer is a producer and the printer is a consumer
- Typing – The computer is a consumer and the keyboard is a producer

In both scenarios, the producer could act as the initiator instead.
- The computer could periodically poll the printer to see if it is ready for the next chunk of data, in which case passive synchronization is used. 
- The keyboard could use an interrupt to notify the computer it needs service, which is an active synchronization scenario.

This generalizes to various synchronization scenarios.
- **Scenario 1:** The consumer polls the producer to determine if data is ready to be read. Once the poll result is true, the consumer will initiate the transfer of data.
- **Scenario 2:** Polling is done by the producer to write data to the consumer once it signals it's ready. The actual transfer of the data is being initiated by the producer once it has determined the consumer is ready to receive it.
- **Scenario 3:** The producer sends an interrupt when data has been generated. The producer responsible for the notification, but the consumer takes care of initiating the actual data transfer.

![[Data Notification.png]]