---
title: Polling Synchronization
tags: 
date: 2024-05-15
aliases:
  - polling synchronization
  - occasional polling
  - periodic polling
  - tight polling
---
Polling is a synchronization technique using a question-answer sequence that is repeated until the answer is yes. The frequency at which the question is asked determines which of the three  
variants of polling are being used.

With **occasional polling**, the device is checked at the convenience of the software designer. The time between checks will vary based on what else is happening or what has happened to the system.

**Periodic polling** also allows the system to do other work between polling sequences, but the time between them is fixed.  This is usually achieved using an internal timer, with the device being polled each time the timer expires. If the device is not ready, the timer is reset and the process starts again.

**Tight polling** uses a tight loop (often an empty while loop) to repeatedly poll the device. The system is not able to do any useful work while waiting for the device to become ready.
- If the system has nothing better to do, this is a good simple implementation
- Provides the latest latency as the device will be serviced as soon as it becomes ready
- Need to be careful of *hanging* – the device never becomes ready and the code is stuck in the loop indefinitely.