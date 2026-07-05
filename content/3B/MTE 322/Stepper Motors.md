---
title: Stepper Motors
tags:
  - mte322
date: 2024-11-29
aliases:
  - stepper motors
---
Stepper motors move in discrete steps. A stepper motor can take one of three types:
- Permanent magnet (PM) stepper motor
- Variable reluctance (VR) stepper motor
- Hybrid stepper motor

## Permanent Magnet Stepper Motor
These use a PM rotor + EM stator.

Four phase PM stepper motor:

![[Stepper Motors.png|500]]

- Through a sequence of turning on and off each coil, we can create “stepping” motion 
- This operation makes $90\degree$ step angle (Can we make $45\degree$?) 

## Variable Reluctance Stepper Motor
We can actually do this without permanent magnet!
- Using a principle called reluctance torque
- A tendency of an iron bar to align itself with magnetic field
- The rotor is attracted to the nearest active pole pair

For VR stepper motors, we have
$$
\text{Step angle}=\frac{360\degree}{\text{(rotor teeth)} \times(\text{stator phases})}
$$

![[Stepper Motors-1.png|592]]

Switching sequence for (three phases of) coils:

![[Stepper Motors-2.png|588]]

