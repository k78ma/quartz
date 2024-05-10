---
title: Impedance
tags:
  - mte320
date: 2024-05-10
aliases:
---
Voltage and current phasors are related through the impedance of element $Z$, based on Ohm's law, such that:
$$
\vec{V}=\vec{I}Z
$$
The impedance is a complex number that can be written as:
$$
\begin{align}
Z  & = | Z |\angle \phi \\
	 & =R+jX
\end{align}
$$
where $Z$ is **impedance**, $R$ is the **resistance**, and $X$ is the **reactance**, all in $\Omega$

![[Embedded C Intro.png|276]]

The magnitude of $Z$ can be found in the following way:
$$
Z = \frac{\vec{V}}{\vec{I}} \implies | Z |=\frac{V}{I}
$$
and the phase angle can be found with:
$$
\begin{align}
\phi & =\theta_{\vec{V}}-\theta_{\vec{I}} \\[2ex]
	 & =\tan ^{-1} \frac{X}{R}
\end{align}
$$
The reactance $X$ can be thought of as the imaginary part of $Z$, while $R$ is the real part.

![[Voltage and Current Phasor Relationships.png]]

Understanding resistors, inductors and capacitors in the context of impedance:
- In a resistor, the voltage and current are in phase. 
- In an inductor and capacitor, there is a 90-degree phase shift between the voltage and current.
	- Inductor – voltage leads current by $90\degree$
	- Capacitor – current leads voltage by $90\degree$
$$
\begin{align}
\text{Resistor:}  & \quad \vec{V}=Z_{R}\vec{I}, \quad Z_{R}=R \angle 0\degree \\[2ex]
\text{Inductor:}  &  \quad \vec{V}=Z_{L}\vec{I}, \quad Z_{L}=jX_{L}=j\omega L=\omega L \angle 90\degree \\[2ex]
\text{Capacitor:} &  \quad \vec{V}=Z_{C}\vec{I}, \quad Z_{C}=jX_{C}=-j \frac{1}{\omega C}=\frac{1}{\omega C} \angle -90\degree
\end{align}
$$
## Series and Parallel Impedances
Impedances in series:
$$
Z_{s}=Z_{1}+Z_{2}+\dots+Z_{n}
$$
Impedances in parallel:
$$
\frac{1}{Z_{p}}=\frac{1}{Z_{1}}+\frac{1}{Z_{2}}+\dots+\frac{1}{Z_{N}}
$$
The above can alternatively be written in terms of parallel admittances $Y_{p}=Y_{1}+Y_{2}+\dots+Y_{n}$
## Admittance
The admittance of an element is defined as the inverse of the impedance, or the ratio of current phasor to voltage phasor:
$$
Y=\frac{\vec{I}}{\vec{V}}=\frac{1}{Z}
$$
The unit of admittance is siemens $S$.
