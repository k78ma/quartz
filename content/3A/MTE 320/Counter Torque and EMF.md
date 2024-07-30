---
title: Counter Torque and EMF
tags:
  - mte320
date: 2024-07-08
aliases:
  - counter torque and emf
  - counter torque
  - counter emf
  - back emf
---
## Counter Torque in DC generators
In a DC generator, a torque is applied by a prime mover to turn the rotor, leading to generation of a DC voltage at the terminals of the machine. When the generator is loaded, such that an electrical load is connected across machine terminals, a current will flow into the load through the armature conductors. 

In the presence of a magnetic field, a force and eventually a torque will be developed and exerted on the current-carrying conductors. This torque will oppose the original torque, i.e., the torque applied by the prime mover, and tends to slow the machine down. This torque is called **counter torque** $\tau_{c}$ and is given by
$$
\tau_{c} =K\phi I_{a}
$$
The larger the electrical load connected to the machine’s terminals, the larger the counter torque produced.

## Counter EMF in DC motors
Similarly, in a DC motor, an emf is applied by an external source to the armature winding. This results in a current and a torque, resulting in the rotation of the rotor. When rotor conductors are moved in the magnetic field of the stator, an emf will be induced in them ([[Faraday’s Law]] and [[Lenz's Law]]). This emf will oppose the original emf applied by the external source, lowering the current. This emf is called **counter emf** $E_{c}$ and is given by
$$
E_{c}=K\phi \omega_{m} = K'\phi n
$$
The larger the mechanical load connected to the machine's shaft, the larger the counter emf produced.

The counter emf opposes the applied voltage, reducing the net voltage across the armature and, consequently, the current flowing through it. This opposition helps regulate the motor's speed:
- Motor speeds up → back emf increases
- Increased back emf →  reduced net voltage or current
- Reduced net voltage/current → limits speed

## Example
*If the DC generator of [[Generated Voltage in DC Generator|Example 6-1]] is feeding a resistive load of $10 \text{ }\Omega$, find the counter torque developed because of loading the generator.*

The generated voltage was found in Example 6-1 to be $E_{\text{gen}}=4320\text{ V}$. Therefore, the armature current is:
$$
I_{a}=\frac{4320\text{ V}}{10\text{ }\Omega}=432 \text{ A}
$$
Then, we can find the counter torque with:
$$
\begin{align}
\tau_{c}&=\left( \frac{ZP}{2\pi a} \right)\phi I_{a} \\\\[2ex] 
	 & =\frac{1440\times 10}{2\pi \times 2}\times 0.01\times 432=\boxed{4950.4 \text{ N}\cdot\text{m}}
\end{align}
$$
