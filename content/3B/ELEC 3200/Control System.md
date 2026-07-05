---
title: Control System
tags:
  - elec3200
date: 2025-02-06
aliases:
  - control system
---
Terminology:
- **Plant**: Object to control
- **Controller**
- **Input:** Medium used to influence the plant
- **Output**: Result produced by plant
- **Disturbances:** Factors that influence the behavior of the plant but cannot be controlled

In an example of a car driving down the road, the car is the **plant** (object to control). The driver is the **controller**. The task of making the combined system consisting of the plant and controller stable is called [[Stabilization (Control)|stabilization]].

In this case, we have:
- Input $u$: The wheel angle
- Output $z$: The deviation of the car from the center line
- Disturbance $d$: Wind gust, road conditions, etc
- Measurement $z$: Available information from car

![[Control System-1.png|270]]

## Open-loop vs Closed-loop
**Open-loop control:** Driving the car with eyes closed. This is clearly not going to work well, since the factors that affect the car position, such as wind, road conditions, etc., cannot be predicted. It is impossible to have a predetermined way to drive the car without observing the car position in real time. In general, one can never stabilize an unstable plant by open-loop control. It is possible to improve the performance of a stable plant by open-loop control, but even this is not very good.

**Closed-loop control:** turning the wheel according to the deviation of the car position. Common sense indicates that as long as the wheels are turned in a proper way, the system can indeed be stabilized. Since the driver uses the information on the output to adjust the input, closed-loop control is also called feedback control. In general, feedback is essential to almost all control systems.

Structure of a closed-loop system for stabilization:

![[Control System.png|608]]