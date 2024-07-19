---
title: Electrical Systems Overview
tags:
  - syde351
date: 2024-07-04
aliases:
---
## Current
*Current* if the flow of electrons. It is given by:
$$
\begin{align}
i & =\frac{dQ}{dt} \\[2ex] 
Q(t) & =\int i \, dt 
\end{align}
$$
where $Q$ is the *charge* (number of electrons). Current is given in units of amperes A.

## Voltage
Energy is required to move a charge between two points in a circuit. The work per unit charge required to do this is called **voltage**. The unit of voltage is the volt (V), which is defined to be one joule per coulomb. The voltage difference between two points in a circuit is a measure of the energy required to move charge from one point to the other

## Direction of Current
Positive current is defined to go:
- From $+$ to $-$ in a circuit
- From $-$ to $+$ in a battery

![[Electrical Systems Overview.png|240]]

## Power
Power generated, dissipated, or stored by a circuit element equals the product of the voltage difference across the element and the current flowing through the element:
$$
P=iv
$$

## Governing Laws
1. Kirchoff's Current Law (Conservation of Charge): The algebraic sum of currents at any node is zero.
2. Kirchoff's Voltage Law (Conservation of Energy): The algebraic sum of voltage across elements in a loop is zero.


## Passive Elements
### Resistors
When a current flows through wire or other circuit elements, it encounters resistance. Sometimes this resistance is desirable and intentionally introduced; a resistor is an element designed to provide resistance, such that there is a linear relation between the current passing through them and the voltage difference across them:
$$
v=iR
$$
The power dissipated by a resistor is given by
$$
P=iv=i^{2}R=\frac{v^{2}}{R}
$$
Parallel resistors:
$$
\frac{1}{R_{\text{eq}}}=\frac{1}{R_{1}}+\frac{1}{R_{2}}
$$
For parallel resistors, we should note that:
$$
\frac{i_{1}}{i_{2}}=\frac{R_{2}}{R_{1}}
$$
where $i_{1}$ and $i_{2}$ are the currents flowing through $R_{2}$ and $R_{1}$ respectively.

Series resistors:
$$
R_{\text{eq}}=R_{1}+R_{2}
$$
### Capacitors
A capacitor is designed to store charge. The capacitance $C$ of a capacitor is a measure of how much charge can be stored for a given voltage difference across the element:
$$
C=\frac{Q}{v}
$$
Thus, we also have:
$$
Q=\frac{1}{C}v=\frac{1}{C}\int i \, dt 
$$
which gives:
$$
i=C\frac{dv}{dt}
$$
Capacitors store electrical energy as stored charge:
$$
\begin{align}
E & =\int P \, dt \\[2ex] 
 & =\int iv \, dt \\[2ex]
 & =\int vC\, \frac{dv}{dt} \, dt \\[2ex] 
	 & =C\int v \, dv \\[2ex] 
  & =\frac{C}{2}v^{2}=\frac{1}{2}Cv^{2}

\end{align}
$$
### Inductor
A magnetic field (a flux) surrounds a moving charge or current. If the conductor of the current is coiled, the flux created by the current in one loop affects the adjacent loops. This flux is proportional to the time integral of the applied voltage, and the current is proportional to the flux. 

The relation for an inductor is $\phi=Li$, where $L$ is the inductance and $\phi$ is the flux across the inductor. We can re-arrange this as:
$$
L=\frac{\phi}{i} \quad \text{or} \quad i=\frac{\phi}{L}=\frac{1}{L}\phi
$$
The relation between flux and voltage is
$$
\phi=\int v \, dt 
$$
Combining the two relations above gives:
$$
i=\frac{1}{L}\int v \, dt 
$$
which is equivalent to
$$
v=L \, \frac{di}{dt}
$$
Inductors store electrical energy in a magnetic field, which can be expressed as:
$$
\begin{align}
E & =\int P \, dt  \\[2ex]
	 & =\int vi \, dt \\[2ex]
  & =L \frac{i^{2}}{2} = \frac{1}{2 }Li^{2}
\end{align}
$$
## Examples
 ![[SYDE 351 - Electrical Systems Example.pdf]]