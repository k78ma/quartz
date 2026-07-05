---
title: Latency and Throughput
tags:
  - mte325
date: 2024-05-15
aliases:
  - latency and throughput
  - latency
  - throughput
---
When a device or program completes its task, the device must synchronize with the processor. In order to quantify the time it takes to complete a task, and to compare different views of time, we need to consider latency and throughput.

- **Latency** – The delay between the arrival of the request and the completion of the service.
- **Throughput** – Measure of how many items can be processed per unit of time.

![[Latency and Throughput.png|452]]


## CPU and Device Latency
CPU latency is the time between the receipt of a service by the CPU and the initiation of this service. 
- Service: Work to be done as a result of the request
- For example, indicating that new data is available is the service request while processing the new data is the service.

Device latency is the time between the generation of a service request and the receipt of notification that the request is being serviced. This latency can involve both hardware and software delays.

![[Latency and Throughput-1.png|496]]