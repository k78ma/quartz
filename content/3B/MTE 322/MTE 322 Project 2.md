---
title: MTE 322 Project 2
tags: 
date: 2024-11-29
aliases:
  - mte 322 project 2
---
Gear information:
-  \textbf{Bevel gear set 1:} $N_{P1} = 35$, $N_{G1} = 56$, $m_1 = 4$ mm, $d_{P1} = 35 \cdot 4 = 140$ mm, $d_{G1} = 56 \cdot 4 = 224$ mm, $\gamma=\tan ^{-1}\left( \frac{35}{56} \right)=32.005\degree, \phi=20\degree$


We begin our load analysis by finding the torque on the bevel pinion shaft using the input power and rotational speed:
$$
T = \frac{200 \text{ Hp} \times  745.7 \text{ W/Hp}}{1720 \text{ rpm} \times \frac{2\pi}{60}} = 828.01 \text{ Nm}
$$
The tangential force is derived from the torque and bevel pinion radius:
$$
W_{tP} = \frac{T}{r_{P}}=\frac{828.01 \text{ Nm}}{0.070 \text{ m}}=11828.75 \text{ N}
$$
From this we can then determine the radial and axial forces:
$$
\begin{align}
W_{rP} & =\cos \gamma \cdot \tan \phi \cdot W_{tP} \\
	 & =(\cos 32.005\degree)(\tan 20\degree)\cdot 11828.75 \text{ N}  \\
 & = 3650.91 \text{ N} \\[2ex]
W_{xP} & =W_{rP}\cdot \tan \gamma \\
	 & =3650.91\cdot \tan 32.005  \\
 & = 2281.79 \text{ N}
\end{align}
$$
To calculate the total radial load on the bearing, we do:
$$
F_{r}=\sqrt{ W_{tP}^{2}+F_{rP}^{2} }=12379.36 \text{ N}
$$
At this point, we create a Python script to select bearings, such that we can load a database of bearing parameters and check them against our desired properties.

First, we roughly filter bearings by shaft geometry; the bearings must be large enough to fit on the shaft (although shaft cutting is permitted for this project). 

The forces $F_{r}$ and $F_{x}$ are distributed between two bearings $C$ and $D$, based on their relative positions on the shaft. For each set of bearings, we determine radial force distribution based on moment equilibrium and shaft geometry:
$$
F_{rC}=\frac{D_{D}}{D_{C}+D_{D}}\cdot F_{r}, \quad F_{rD}=\frac{D_{C}}{D_{C}+D_{D}}
$$
Each bearing also experiences an induced axial force due to its geometry and load:
$$
F_{ai}=\frac{0.6}{Y}F_{r}
$$
We evaluate which bearing can handle the total axial force (induced + applied) more effectively. Based on our evaluation, we choose one bearing to handle the total axial force, which simplifies the load distribution for further calculations. The equivalent loads are computed based on the effective axial loads.

If we have $F_{ae}+\frac{0.6}{Y_{c}}F_{rC}\geq \frac{0.6}{Y_{D}}F_{rD}$, we would have
$$
\begin{cases}
P_{C}=F_{rC} \\
P_{D}=X_{D}F_{rD}+Y_{D}F_{aD}
\end{cases}
$$
where $F_{aD}=F_{ae}+\frac{0.6}{Y_{C}}F_{rC}$.

If we have $\frac{0.6}{Y_{c}}F_{rC}< \frac{0.6}{Y_{D}}F_{rD}-F_{ae}$, then we have:
$$
\begin{cases}
P_{C}=X_{C}F_{rC}+Y_{C}F_{aC} \\
P_{D}=F_{rD}
\end{cases}
$$
where $F_{aC}=0.6F_{rD}-F_{ae}$.

Based on this, we calculate static safety factors and with $f_{s}=\frac{C_{0r}}{P_{0}}$ and $L_{10}=\left( \frac{C_{r}}{P} \right)^{10 / 3}$. We check that these are higher than the required $f_{s}>20$ and $L_{10}>50,000$.

Our script iterates through the database of bearings until we find a valid combination that fulfills all of our requirements. We chose:
- Bearing $C$: HR 32011 XJ
	- Static safety factor: 37.49
	- $L_{10}$ life: 52840.54 hours
	- Outer diameter: 90 mm
- Bearing $D$: HR 30315 J
	- Static safety factor: 32.40
	- $L_{10}$ life: 52538.13 hours
	- Outer diameter: 160 mm



Shaft length to shoulder top:

![[MTE 322 Project 2.png|612]]

Pitch circle to shoulder top:

![[MTE 322 Project 2-1.png|286]]

Shoulder length:

![[MTE 322 Project 2-2.png|416]]

Shoulder top to right housing outside:

![[MTE 322 Project 2-3.png|374]]

We can then find the distances form pitch circles:
$$
\begin{align}
-
	 & =0.145-
\end{align}
$$
where $a_{C}$ is the effective loading center for $C$

## Scripting



$$
\begin{align}
F_{rC} & =\frac{D_{D}}{D_{C}+D_{D}}\cdot F_{r} \\[2ex] 
	 & =\frac{0.084000 \text{ m}}{0.278550 \text{ m} + 0.084000 \text{ m}} \cdot 12379.36 \text{ N} = 2868.20 \text{ N} \\[2ex]
F_{rD} & =\frac{D_{C}}{D_{C}+D_{D}} \cdot F_{r} \\[2ex] 
	 & = \frac{0.278550 \text{ m}}{0.278550 \text{ m}+ 0.084000 \text{ m}} \cdot 12379.36 \text{ N} = 9511.16 \text{ N}
\end{align}
$$

$$
\begin{align}
F_{ai, C} & =\frac{0.6}{Y_{1C}}F_{rC}=\frac{0.6}{1.5}(2868.20 \text{ N})=1147.28 \text{ N} \\[2ex]
F_{ai, D} & =\frac{0.6}{Y_{1D}}F_{rD}=\frac{0.6}{1.7}(9511.16 \text{ N})=3356.88 \text{ N}
\end{align}
$$

$$
\begin{align}
F_{ae}+\frac{0.6}{Y_{C}}F_{rC} & \geq \frac{0.6}{Y_{D}}F_{rD}\\[2ex]
2281.79 \text{ N}+1147.28 \text{ N} & \geq 3356.88 \text{ N}
\end{align}
$$

$$
\begin{cases}
P_{C}=F_{rC} = 2868.20 \\
P_{D}=X_{D}F_{rD}+Y_{D}F_{aD} = 0.4 (9511.16\text{ N})+1.7(3429.88 \text{ N})=9633.88 \text{ N}
\end{cases}
$$

$$
\begin{align}
0.5F_{rC}+Y_{0C}F_{aC}=2363.40 > F_{rC} \quad  & \implies \quad P_{0C}=2363.40 \text{ N}  \\
0.5F_{rD}+Y_{0D}F_{aD} = 8047.49 < F_{rD} \quad  & \implies \quad P_{0D}=F_{rD}=9511.16 \text{ N} 
\end{align}
$$

$$
\begin{align}
f_{sC} & =\frac{C_{0C}}{P_{0C}}=\frac{117000}{2363.40}=49.21 \\
f_{sD}  & = \frac{C_{0D}}{P_{0C}}=\frac{34000}{9511.16}=35.75
\end{align}
$$

$$
\begin{align}
L_{10, C} & =\left( \frac{C_{rC}}{P_{C}} \right)^{\frac{10}{3}}=\left( \frac{81500}{2868.20} \right)^{\frac{10}{3}}=70010.08 \text{ million revs} \\[2ex]
L_{10, D} & =\left( \frac{C_{rD}}{P_{D}} \right)^{\frac{10}{3}}=\left( \frac{267000}{9633.88} \right)^{\frac{10}{3}}=64421.89 \text{ million revs}
\end{align}
$$

$$
\phi 72.000^{+0.059}_{\,\,\,0.000}
$$