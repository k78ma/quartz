---
title: Shunt DC Motor Starting
tags:
  - mte320
date: 2024-07-24
aliases:
  - shunt dc motor starting
---
A [[Shunt DC Motor|shunt DC motor]] cannot be started from standstill by connecting its armature across the full line voltage due to the high armature current that will result from this practice. Consider the shunt DC motor shown below:

![[Shunt DC Motor Starting.png|488]]

By KVL, we have:
$$
\begin{align}
V_{L} & =R_{a}I_{a}+E_{c} \\[2ex] 
I_{a} & =\frac{V_{L}-E_{c}}{R_{a}}
\end{align}
$$
At standstill, motor speed $n$ is equal to zero. Therefore, [[Counter Torque and EMF|back emf]] ($E_{c}=K'\phi n$) will be zero. As a result, $I_{a}=\frac{V_{L}}{R_{a}}$ can be very large and destructive. If the motor is large, $V_{L}$ is large, $R_{a}$ is small, and startup is slow due to high inertia of the rotor. In this case, the problem of high starting current is more severe. 

The starting current must be limited to protect the motor and supply. A starter system is used to take care of this task. Here, a manual and an automatic starter system will be described to give an idea of how typical starter systems operate.

## Manual Starter
The main component of a manual starter is a manually variable resistor, which is placed in series with the armature of the DC motor. 
- At start-up, the resistor is at its highest resistance position. This results in a safe armature current $I_{a}$ when $E_{c}=0$ and $n=0$.
- As the motor accelerates, and the speed rises, the moving arm of the variable resistor is moved, in several steps, towards the position corresponding to zero resistance.

![[Shunt DC Motor Starting-1.png|592]]

According to $I_{a} =(V_{L}-E_{c})/{R_{a}}$, as $E_{c}$ increases, due to $n$ increasing, $I_{a}$ will be limited by $E_{c}$. Therefore, $R_{a}$ can be reduced while maintaining a safe armature current. When the starting resistance hits zero, a metal piece attached to the moving arm is attracted by an electromagnet, which is already energized through source voltage and shunt field circuit. In this way, the moving arm is held in the final position.

Below we have a plot of variations of armature current as the moving arm of manual starter is moved from position 1 to position 5 in steps.

![[Shunt DC Motor Starting-2.png]]

The need for a human operator and the chance of improper timing in the starting process are the disadvantages of this approach. Automatic starters solve these problems.

## Automatic Starter
An automatic starter eliminates the need for a human operator and ensures proper timing in the startup process.

![[Shunt DC automatic starter.png]]

- When the main switch is turned on, the shunt field is energized, activating the field loss (FL) *contactor*, such that the normally-open (NO) contact $FL$ is closed. 
- As long as there is no overload in the motor, the overload (OL) relay does not operate and the normally-closed (NC) contact $OL$ remains closed.
- When the start button is pressed, $V_{L}$ is is applied to contactor $M$. Upon energization of $M$, all NO $M$ contacts will close. This connects power to the armature.
- As long as motor speed is low, back emf is small, and contactors $A_{1}$, $A_{2}$ and $A_{3}$ are not energized and the NO contacts $A_{1}$, $A_{2}$ and $A_{3}$ remain open. Therefore, the whole $R_{\text{start}}$ is in series with the armature, and $I_{a}$ is limited.
- As the motor accelerates, at different speeds, corresponding to different back emf values, contactors $A_{1}$, $A_{2}$, $A_{3}$ will be energized in turn and the NO contacts $A_{1}$, $A_{2}$ and $A_{3}$ will be closed in turn, short circuiting segments of $R_{\text{start}}$, letting the motor speed up at a safe armature current value.
- $FL$, the field loss contactor, protects against the motor against loss of field, which results in overspeed. 

Note that we have:
$$
\begin{align}
V_{L}-R_{a}I_{a}  =E_{c} =K'\phi n \\[2ex] 
n  =\frac{V_{L}-R_{a}I_{a}}{K'\phi}=\frac{V_{a}-R_{a}I_{a}}{K'\phi}
\end{align}
$$
If for some reason, during the operation of the motor, the field is lost, i.e., $I_{f}$ =0, the flux $\phi$ will drop to the small value of residual flux, and $n$ will rise to dangerously high values. In this case, the $FL$ contactor will operate, and the closed contact $FL$ will open to shut down the motor. 

To stop the motor, one must disconnect power by pressing the stop push button to de-energize contactor $M$ and open $M$ contacts.