---
title: Inertial Sensors
tags:
  - mte544
date: 2025-10-29
aliases:
  - inertial sensors
  - IMU
---
## Accelerometers
MEMS accelerometers rule the market. Structurally, it's a miniature mass-spring system; the main sensor computes translation velocities and positions. Also widely used for tilt sengin (by measuring gravity).

![[Inertial Sensors-20251029203700640.png]]

Properties of accelerometer signals:
- Signals are always very noisy (Gaussian white noise)
- Numerical integration smoothens the noise (but with drift)

![[Inertial Sensors-20251030095433047.png]]

## Gyroscopes
Like MEMS accelerometers, MEMS gyroscopes are prevalent. Conventional (macro scale) gyroscopes used a rotating body, which creates perpendicular (gyroscopic) when steered. MEMS gyros use a vibrating structure, which creates Coriolis force. These are also very noisy; integration provides us with rotation angle.

![[Inertial Sensors-20251030095728414.png|621]]


## Magnetometer
Magnetometers measure the magnetic dipole of the earth. Basically, it consists of a 3 miniaturized compasses for 3 coordinates, measuring 3 DOF absolute orientation. Magnetometers provide important data to correct the drift from integration of accelerometers and gyroscopes; they may not be effective for indoors.

![[Inertial Sensors-20251030100329097.png|284]]

## IMU
IMUs are a multi-axis combination of precision accelerometer, gyroscopes and magnetometers (9DOF). They often include a computer with filtering algorithms, applying a [[Kalman Filter]] to 6DOF rigid body motion model. The Kalman filter works by prediction followed by correction; accelerometer/gyroscope data is numerically integrated to make prediction of 6DOF, then the drifting error is corrected by the 3DOF magnetometer signals.

![[Inertial Sensors-20251030100541622.png]]
