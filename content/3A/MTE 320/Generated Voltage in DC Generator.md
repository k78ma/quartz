---
title: Generated Voltage in DC Generator
tags:
  - mte320
date: 2024-07-05
aliases:
  - generated voltage in dc generator
  - prime mover
---
We saw how the mechanism of how [[DC Generator|DC generators]] generate voltage, and derived a formula for the voltage induced in a loop of wire was derived. Here, an expression for the terminal voltage of a general DC generator in terms of the structural parameters of the machine, field flux and rotor speed will be derived.

The voltage voltage induced in a conductor of length $l$ moving at the linear speed of $v$ under a pole face, where a magnetic flux density of $B$ exits, under the conditions that $v \perp B$ and $v\times B$, is given by:
$$
e_{1\text{ conductor}} =vBl
$$
The output voltage of a DC generator is determined by the number of conductors connected in series and the voltage induced in each conductor:
$$
E_{\text{generated}}=\text{Number of Series Conductors} \times vBl
$$
The number of series conductors can be found with:
$$
\text{Number of series conductors} = \frac{\text{Total number of conductos}}{\text{Number of parallel paths}}=\frac{Z}{a}
$$
where **Z** is the total number of conductors and **a** is the number of parallel paths in the armature between the machine terminals.

Thus, we have:
$$
E_{\text{generated}}=\frac{Z}{a}vBl
$$
If $r$ is the radius of the rotor, and $\omega_{m}$ is the angular speed of the rotor, we have:
$$
v=r\omega_{m}
$$
If $\phi$ is the flux under a pole face and $A_{p}$ is the area per pole face,
$$
B=\frac{\phi}{A_{p}}
$$
where
$$
A_{p}=\frac{\text{Rotor Surface Area}}{\text{Number of Poles}}=\frac{2\pi rl}{P}
$$
In the equation above, the air gap between stator and rotor and the gaps between successive pole faces have been neglected, making the total surface area of $P$ poles equal to the surface area of rotor.

Combining everything, our expression for generated voltage becomes
$$
\begin{align}
E_{\text{generated}} & =\frac{Z}{a}vBl \\[2ex] 
 & =\frac{Z}{a}r\omega_{m} \frac{\phi}{\frac{2\pi rl}{P}}l \\[2ex] 
	 & =\left( \frac{ZP}{2\pi a} \right)\phi \omega_{m} \\[2ex]
	 & =\boxed{K\phi \omega_{m}}
\end{align}
$$
where $K=\frac{ZP}{2\pi a}$.

We can further write $\omega_{m}=\frac{2\pi n}{60}$, where $n$ is the rotor speed in RPM. Thus, we can write the above as:
$$
\begin{align}
E_{\text{generated}} & =\left( \frac{ZP}{2\pi a} \right)\phi \omega_{m}\\[2ex] 
	 & =\left( \frac{ZP}{2\pi a} \right)\phi \frac{2\pi n}{60}\\[2ex] 
	 & =\left( \frac{ZP}{60a} \right)\phi n \\[2ex]
	 & =\boxed{K'\phi n}
\end{align}
$$
where $K'=\frac{ZP}{60a}$.

$K$ and $K'$ are constants determined by the machine structure and cannot be changed during machine operation, whereas $\phi$, $\omega_{m}$, and $n$ can be controlled during the operation of the machine, to vary/adjust the output voltage magnitude.

An interesting and important observation that can be made is that the magnitude of generated voltage in a DC generator is proportional to the product of speed and number of poles:
$$
E_{\text{generated}}\propto \omega_{m}P, \quad E_{\text{generated}}\propto nP
$$
This means that besides the number of conductors in series, the products $\omega_{m}P$ or $nP$ can also affect the magnitude of the generated voltage. 
- To produce a DC voltage of certain magnitude using a low-speed prime mover, a large number of poles are required.
- In the case of a high-speed prime mover, a small number of poles are needed. A similar observation can be made in other types of electric machines, as well.

A **prime mover** is a source of mechanical power, such as a diesel engine, gas turbine, steam turbine, or wind turbine that drives the shaft of the rotor.

>[!example]- Example 6-1
>![[MTE 320 E6-1.pdf]]
> - Note that this example makes reference to [[Field and Armature|lap and wave windings]].