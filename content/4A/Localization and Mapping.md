---
title: Localization and Mapping
tags:
  - mte544
date: 2025-11-01
aliases: localization and mapping
---
A robot needs to be able to localize; without knowing its own location, it cannot move well. It also need to be able to map – understanding its surroundings.

The general approach to localization is to continually fuse internal and external information:
- Proprioception: encoder, IMU, etc. provide odometry data
- Exteroception: GPS, vision, LiDAR, etc. take corrective action

![[Localization and Mapping-20251101143007588.png]]

The above can be done through **state estimation**. What states do we want to estimate?
- Pose of the robot itself (localization). The pose could be given as $(x,y,\theta)$.
- Shape of environment (mapping). This could be given in many ways, but a popular one is to do $p(x,y)$ representing the probability of $(x,y)$ being occupied.

State estimation is inherently probabilistic. This is because mobile robots combine signals from many sensors, and their movements are made by actuators. Each sensor and actuator is prone to errors, uncertainties, failures, etc. These unpredictable behaviors can be best described by statistical models. 