---
title: Equivalent Mass and Inertia
tags:
  - syde351
date: 2024-06-10
aliases:
  - equivalent mass and inertia
---
Some systems composed of translating and rotating parts whose motions are directly coupled can be modeled as a purely translational system or as a purely rotational system, by using the concepts of equivalent mass and equivalent inertia. These models can be derived using kinetic energy equivalence.

Equivalent mass and equivalent inertia. A system should be viewed as an equivalent mass if an external force is applied, and as an equivalent inertia if an external torque is applied.

## Mechanical Drives
Gears, belts, levers, and pulleys transform an input motion, force, or torque into another motion, force, or torque at the output. For example, a gear pair can be used to reduce speed and increase torque, and a lever can increase force.

Several types of gears are used in mechanical drives. These include helical, spur, rack-and-pinion, worm, bevel, and planetary gears. Other mechanical drives use belts or chains. We now use a spur gear pair, a rack-and-pinion gear pair, and a belt drive to demonstrate the use of kinetic energy equivalence to obtain a model. This approach can be used to analyze other gear and drive types.

A pair of spur gears is shown below. The input shaft (shaft 1) is connected to a motor that produces a torque $T_{1}$ at a speed $\omega_{1}$, and drives the output shaft (shaft 2). One use of such a system is to increase the effective motor torque. The gear ratio $N$ is defined as the ratio of the input rotation $\theta_{1}$ to the output rotation $\theta_{2}$. Thus, N = $\theta_{1} / \theta_{2}$. From geometry we can see that $N$ is also the speed ratio $N = w_{1} / w_{2}$. Thus, the pair is a speed reducer if $N > 1$. The gear ratio is also the diameter ratio $N = D_{2}/D_{1}$, and the gear tooth ratio $N = n_{2}/n_{1}$, where $n$ is the number of gear teeth.

![[Equivalent Mass and Inertia.png|336]]

If the gear inertias are negligible or if there is zero acceleration, and if we neglect energy loss due to friction, such as that between the gear teeth, then the input work $T_{1}\theta_{1}$ must be equal to the output work $T_{2}\theta_{2}$. 

Thus, under these conditions, $T_{2}=T_{1}(\theta_{1} / \theta_{2})=NT_{1}$, and the output torque is greater than the input torque for a speed reducer. For cases that involve acceleration and appreciable gear inertia, the output torque is less than $NT_{1}$.

## Spur Gear Example
Consider the spur gears shown above. Derive the expression for the equivalent inertia $I_{e}$ felt on the input shaft, and obtain the equation of motion in terms of the speed $\omega_{1}$.

Let $I_{1}$ and $I_{2}$ be the total moments of inertia on the shafts. Note that $\omega_{2}=\omega_{1}/N$. The kinetic energy of the system is then:
$$
\begin{align}
\text{KE} & =\frac{1}{2}I_{1}\omega_{1}^{2}+\frac{1}{2}I_{2}\omega_{2}^{2} \\[2ex]
	 & = \frac{1}{2}I_{1}\omega_{1}^{2}+\frac{1}{2}I_{2}\left( \frac{\omega_{1}}{N} \right)^{2}
\end{align}
$$
or
$$
\text{KE}=\frac{1}{2}\left( I_{1}+\frac{1}{N^{2}}I_{2} \right)\omega_{1}^{2}
$$
Therefore the equivalent inertia felt on the input shaft is
$$
I_{e}=I_{1}+\frac{I_{2}}{N^{2}}
$$
This means that the dynamics of the system can be described by the model $I_{e}\dot{\omega_{1}}=T_{1}$. 

The torque $T_{2}$ is *not* the torque on the load shaft due to the torque $T_{1}$. Rather, $T_{2}$ is due to external causes. 
- For example, if $I_{1}$ represents a motor, and $I_{2}$ represents a vehicle wheel, then $T_{2}$ would be due to road forces, or gravity. 
- If the vehicle were going downhill, gravity would act to accelerate the vehicle ($\omega_{2} > 0$), and the resulting torque $T_{2}$ would be positive. If the vehicle were going uphill, gravity would act to decelerate the vehicle ($\omega_{2} < 0$), and the resulting torque $T_{2}$ would be negative.