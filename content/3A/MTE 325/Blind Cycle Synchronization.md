---
title: Blind Cycle Synchronization
tags:
  - mte325
date: 2024-05-15
aliases:
  - blind cycle synchronization
---
Blind cycle synchronization occurs when software reads or sends data at its convenience, regardless of what's happening on the device side.
- Fast and simple to implement
- Trade-off: No actual synchronization with the device

For example, with a temperature sensor, the value could be read at any time, including while the sensor is in the middle of updating the output. This can result in corrupt data being received by the software. This can be okay in some cases.

Blind cycle is CPU-oriented; the device waits for the CPU to initiate synchronization.