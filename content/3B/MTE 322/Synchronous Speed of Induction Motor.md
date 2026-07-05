---
title: Synchronous Speed of Induction Motor
tags:
  - mte322
date: 2024-10-19
aliases:
  - synchronous speed of induction motor
---
The synchronous speed ($\omega_{s}$) of an induction motor refers to the speed at which the rotating magnetic field inside the motor operates. It is an ideal speed synchronized with the frequency of the AC power supply.

## Configurations

### Single-Phase Induction Motor Configurations
- In the 2-pole configuration, the alternating magnetic field completes one full rotation for each AC cycle.
- In the 4-pole configuration, the alternating magnetic field completes only half a rotation for each AC cycle. It takes two cycles to complete one full rotation. This reduces the synchronous speed to half compared to the 2-pole configuration.

![[Synchronous Speed of Induction Motor-2.png|548]]

### 2-Phase Induction Motor Configurations
- The two-phase system involves two windings separated by 90 degrees, creating a more balanced rotating magnetic field.
	- As shown in the figure, each winding generates a sinusoidal magnetic field, with a 90-degree phase shift between them, producing a smoother rotation.
	- Similar to single-phase, in a 2-pole configuration, the magnetic field completes one rotation for each AC cycle.

![[Synchronous Speed of Induction Motor-1.png|536]]

## Observations for Phase Configurations
- **Single-Phase Motor**:
    - **2-Pole**: 1 rotation for 1 AC cycle (2 pole faces).
    - **4-Pole**: 1/2 rotation for 1 AC cycle (4 pole faces).
- **2-Phase Motor**:
    - **2-Pole**: 1 rotation for 1 AC cycle (4 pole faces).
    - **4-Pole**: 1/2 rotation for 1 AC cycle (8 pole faces).
- **3-Phase Motor**:
    - **2-Pole**: 1 rotation for 1 AC cycle (6 pole faces).
    - **4-Pole**: 1/2 rotation for 1 AC cycle (12 pole faces).

## Synchronous Speed Formula
The synchronous speed $\omega_{s}$ of an induction motor is given by
$$
\omega_{s}=\frac{120\cdot f}{P}
$$
where $f$ is the AC power frequency in Hz and $P$ is the number of poles. The unit for $\omega_{s}$ is rpm.

Note that the pole number $P$ is independent of the number of phases:
- 2 pole 1-$\phi$ motor has 1 pair (or 2 pole shoes) of coils
- 2 pole 3-$\phi$ motor has 3 pair (or 6 pole shoes) of coils

## Synchronous Speed Example

> [!question] Synchronous Speed Example Question
> - What is the synchronous speed of the shaded pole induction motor (120V 60Hz AC power)?
> - For a 3-phase induction motor, the speed is observed to be around 870 rpm when the AC power runs off 60 Hz frequency. What is the pole number of this induction motor?

A shaded pole motor is essentially a 2-pole single phase motor with a self-starting mechanism. Thus, we have:
$$
\omega_{s}=\frac{120\times 60}{2}=3600 \text{ rpm}
$$
Usually they run $\sim 3000$ rpm.

Note: Capacitor start induction motor also acts as a 2-phase. So, for a 2 pole motor, $\omega_{s}=3600$.

## Slip and Induction Motor Speed
An induction motor can never reach the synchronous speed, because then there is no induction (and thus no torque produces). 

The relationship between the actual speed of the motor $\omega$ and the synchronous speed $\omega_{s}$ is expressed by the **slip** ($s$):
$$
s=\frac{\omega_{s}-\omega}{\omega_{s}}
$$
This can be re-arranged to express the actual speed of the motor:
$$
\omega=(1-s)\omega_{s}
$$
Slip is typically as a percentage and indicates how much slower the rotor is moving compares to the rotating magnetic field. Actual speed $\omega$ is always less than $\omega_{s}$, as some slip is essential for torque production. Higher torque demand causes an increase in slip.