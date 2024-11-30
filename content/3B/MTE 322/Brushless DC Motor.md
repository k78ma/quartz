---
title: Brushless DC Motor
tags:
  - mte322
date: 2024-11-29
aliases:
  - brushless dc motor
---
## From PMSM to Brushless DC Motors
There are two things we can simplify from PMSM:
- Coils can be made concentrated instead of distributed
- Drive signals can be made trapezoidal instead of smooth sinusoid

Operation of [[Brushless DC Motor]] can be viewed as a series of switching actions on stator coils so that coil’s polarities match those of the rotor magnets at each instant of time.

![[Permanent Magnet Synchronous Motor-1.png]]

## 2-Pole BLDC Operation

![[Brushless DC Motor.png|532]]

![[Brushless DC Motor-1.png|524]]

![[Brushless DC Motor-2.png|524]]

![[Brushless DC Motor-3.png|524]]

![[Brushless DC Motor-4.png|512]]

![[Brushless DC Motor-5.png|504]]

![[Brushless DC Motor-6.png|608]]

## 4 Pole (6 Slot) BLDC Operation

![[Brushless DC Motor-7.png|684]]

## Torque-Speed Characteristics
- Torque-speed characteristics of BLDC is very similar to PMDC (because BLDC is simply inside-out of PMDC)

## Notes on BLDC and PMSM
- See [[Permanent Magnet Synchronous Motor|PMSM]] here

Structurally, it’s an inside-out from the brush DC motor. 
- Coils make the stator while the magnet makes the rotor 
- This is very good in terms of thermal performance. (i.e. cooling)
- A key idea is to do the “field switching” (commutation) electrically rather than mechanically (i.e. by brush)

These are technically AC motors running on DC power.
- Stators are very similar to $3$-$\phi$ induction motor
- Rotor is "synchronized" with the stator field rotation by some kind of position sensor (hall effect sensor is widely used)
- Sensorless operation is possible; RC motors
- Can provide constant speed for any load torque and the speed can be controlled by VFD.