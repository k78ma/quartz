---
title: DC Motor
tags:
  - mte320
date: 2024-07-07
aliases:
  - DC motor
---
When a current-carrying conductor is placed in a magnetic field, [[Generation of Force with Conductor in a Magnetic Field|a force is exerted on it]]. The magnitude and direction of this force is given as:
$$
\vec{F}=\vec{i}l\times \vec{B}
$$
Consider a simple [[DC Generator|DC generator]] structure. If the prime mover (mechanical device turning the coils, such as steam/gas turbine) is removed, and a DC voltage source is connected to the brushes, the system shown in Fig. (6-13) will result.

![[DC Motor.png|652]]

As the current $I$ flows through the loops of the wire, a force will be developed on each conductor segment. 
- The forces exerted on the segments *ab*, *cd* and *ef* are zero in the horizontal loop position, where $\vec{I}l$ and $\vec{B}$ make angles with zero sine values.

The only forces that will lead to development of torque are those exerted on segments *bc* and *de*. These forces are:
$$
F_{bc}=F_{de}=IlB
$$
where $l=l_{bc}=l_{de}$.

The torque produced due to a force $F$ exerted on an object, which is free to rotate about an axis at a distance $r$ from the axis of rotation is given as:
$$
\tau=Fr
$$
The forces $F_{bc}$ and $F_{de}$ result in torques $\tau_{bc}$ and $\tau_{de}$, which have the same magnitude and direction. Therefore, these two torques add up to give:
$$
\begin{align}
\tau & =\tau_{bc}+\tau_{de}=F_{bc}r+F_{de}r \\
	 & =2IlBr
\end{align}
$$
In general, developed on a single conductor, carrying current $I$, under a pole face, will be:
$$
\tau_{\text{1 conductor}}=IlBr
$$
If the rotor is composed of $Z$ conductors, arranged in $a$ parallel paths, then
$$
I=\frac{I_{a}}{a}
$$
where $I_{a}$, called the **armature current**, is the current drawn from the external source at the terminals of the DC motor.

Therefore, the torque exerted on each conductor will be:
$$
\tau_{\text{1 conductor}}=\frac{I_{a}}{a} lBr
$$
As the torque exerted on all conductors act in the same direction, the total torque exerted on the shaft of the rotor will be:
$$
\tau=Z\tau_{\text{1 conductor}}= Z \frac{I_{a}}{a}lBr
$$
We can also use the relationship
$$
B=\frac{\phi}{A_{p}}=\frac{\phi}{\frac{2\pi rl}{P}}=\frac{\phi P}{2\pi rl}
$$
which turns our previous expression into:
$$
\begin{align}
\tau & =Z \frac{I_{a}}{a}l \frac{\phi P}{2\pi rl}r \\[2ex]
	 & =\left( \frac{ZP}{2\pi a} \right)\phi I_{a} \\[2ex] 
	 & =K\phi I_{a}
\end{align}
$$
where $K=\frac{ZP}{2\pi a}$. Reminder that $P$ is the number of magnetic poles in the generator.

The multiplier $K$ is related to the machine structure and is fixed, whereas $\phi$ and $I_{a}$ can be changed during machine operation.

## Direction of Rotation
The direction of rotation of a DC motor depends on the direction of the developed torque. The direction of torque can be reversed by changing the direction of armature current or magnetic field. Changing the direction of armature current by changing the polarity of the voltage applied to the armature (armature voltage) is the common method for changing the direction of rotation of a DC motor.