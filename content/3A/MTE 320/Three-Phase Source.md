---
title: Three-Phase Source
tags:
  - mte320
date: 2024-05-17
aliases:
  - three-phase source
  - 3-phase source
---
A balanced three-phase sinusoidal voltage is comprised of three single-phase sinusoidal voltage sources with the same amplitude and frequency, but phase-shifted by $120\degree$ with respect to one another. 

![[Three-Phase Source.png|500]]

The time and [[Phasor Representation of Sinusoids|phasor representation]] of the three single phase voltages are:
- Voltage A:
$$
\begin{align}
v_{a} & = \sqrt{ 2 }V\cos \omega t \\
\vec{V}_{a} & =V \angle 0\degree \\
\end{align}
$$
- Voltage B:
$$
\begin{align}
v_{b} & = \sqrt{ 2 }V\cos (\omega t - 120\degree) \\
\vec{V}_{b} & =V \angle -120\degree \\
\end{align}
$$
- Voltage C:
$$
\begin{align}
v_{c} & = \sqrt{ 2 }V\cos (\omega t - 240\degree)  = \sqrt{ 2 }V\cos (\omega t + 120\degree)\\
\vec{V}_{c} & =V \angle -240\degree =V \angle +120\degree\\
\end{align}
$$

Phasor diagram:
![[Three-Phase Source-1.png|328]]

Typically, the voltage of phase $a$ is taken as a reference (angle $0\degree$), and the phase angles of voltages other places are measured with respect to that of phase-$a$ voltage.

In *a-b-c* or positive sequence, the phasors of the voltages of the three phases rotate in counterclockwise direction (which is considered the positive direction). 
- Phase-b voltage follows phase-a voltage, and phase-c voltage follows phase-b voltage. 

In *a-c-b* or negative sequence, the phasors of the voltages of the three phases rotate in clockwise direction (which is considered the negative direction). 
- Phase-c voltage follows phase-a voltage, and phase-b voltage follows phase-c voltage. 

The default sequence is a-b-c, unless otherwise stated. Changing the sequence from *a-b-c* to *a-c-b* is used in AC motors to reverse the direction of developed torque and thus the direction of rotation of motor shaft.