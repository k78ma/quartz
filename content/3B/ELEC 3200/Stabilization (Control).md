---
title: Stabilization (Control)
tags:
  - elec3200
date: 2025-02-06
aliases:
  - stabilization (control)
  - stability
  - stable
---
**Stabilization problem:** Given a plant, select a sensor and an actuator, and design a controller so that the output of the closed-loop system has good stability.

![[Control System.png|608]]

If we take a closer look at a human feedback system when driving a car, we can see that the human actually has to perform several subtasks:
- **Sensing:** Observe the car position. 
    - In general, a sensor measures a physical variable that can be used to deduce the behavior of the concerned output, such as the deviation of the car position, and turn it into a signal, usually an electrical signal, that the controller can read. The controller, often a computer or an electric circuit, takes the reading from the sensor, determines the action needed to correct the car position, and sends the decision to an actuator.
- **Control:** Make decisions regarding which actions to take
    - The controller is typically a computer or an electric circuit that the reading from the sensor, determines the action needed to correct the car position, and sends the decision to an actuator. 
- **Actuation:** Exercise his/her decision and influence the motion of the car.
    - The actuator then generates the quantity which influences the plant.
