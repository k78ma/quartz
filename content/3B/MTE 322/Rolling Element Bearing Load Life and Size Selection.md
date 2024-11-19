---
title: Rolling Element Bearing Analysis
tags:
  - mte322
date: 2024-11-18
aliases:
  - rolling element bearing analysis
---
How do we select rolling element bearings? Specifically, we want to ==determine the outer diameter $D$ and width $B$==, given:
- Bore diameter, $d$ (shaft size)
- Applied load (radial, axial)
- Desired reliability
- Bearing life (in the unit of million revolutions)

![[Rolling Element Bearing Analysis.png|138]]

## Load Rating
Each bearing comes with a basic load rating:
- Static load rating $C_{0}$ or $C_{0r}$ (radial direction). 
	- This is the load at which permanent static deformation will occur in the raceway and rolling element. 
	- This gives us a static safety factor $f_{s}=\frac{C_{0}}{P_{0}}$ where $P_{0}$ is the equivalent static load ($f_{s}$ must be $\geq 1$)
- Dynamic load rating $C$ (or $C_{r}$ to note radial direction)
	- The (hypothetical) load that will give a life of 1 million revolutions. It is used to compute the (surface) fatigue life.

## Bearing Life
Typically, the **bearing life** is denoted by $L_{R}$ where the subscript $R$ denotes the failure rate (in %).
- For example, $L_{10}$ life is the life of a bearing that 90% of the batch is survive under the design load (design load is specified in million rev's)
- $L_{10}=500$ would mean that, out of 100 bearings manufactured as a batch, at least 90 of them will survive after 500 million revolutions of operations. Less than or equal to 10 are expected to fail.

The bearing life may also be given by hours of operation. This is usually the case for constant speed operations. Vehicle wheel bearings may also be specified in terms of mileage. 

Given a speed $n$ in rpm, the hourly life is
$$
L_{h}=\frac{L_{10}\times 10^{6}}{60\cdot n} \text{ hours}
$$
Bearings are typically rated based on $L_{10}$. For other failure percentages (not 10%), use $L_{aR}=C_{R}L_{10}$.

![[Rolling Element Bearing Analysis-1.png|504]]

## Bearing Life Equation (ISO281)
- Ball bearings:
$$
L_{10}= \left( \frac{C}{_{P}} \right)^{3} \quad \longrightarrow \quad C\geq P^{3}\sqrt{ L_{10} }
$$
- Roller bearings
$$
L_{10}=\left( \frac{C}{P} \right)^{\frac{10}{3}}\quad \longrightarrow \quad C\geq P(L_{10})^{\frac{3}{10}}
$$
where $P$ is the equivalent dynamic load.

## Example: Load Life for Radial Load

![[MTE 322 bearings ex 1.pdf]]
