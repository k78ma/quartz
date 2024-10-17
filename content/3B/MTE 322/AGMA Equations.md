---
title: AGMA Equations
tags:
  - mte322
date: 2024-10-15
aliases: []
---
[[Gear Bending Analysis]] and [[Gear Pitting Analysis]] are basic techniques, applicable only to spur gears and helical gears. Those results can only be accepted as preliminary estimates before going into more precise design.

More professional analysis can be conducted through AGMA equations, which refer to many correction and design factors, tables, empirical equations, etc.

Summary:
![[AGMA Equations-1.png]]

AGMA equations for helical gears and bevel gears can be obtained in a very similar form as those for spur gears.

The AGMA equations for worm gears are a bit different. It is less of strength analysis and more of selection or sizing guidelines.

## AGMA Stress Equations

### Bending and Pitting Stresses
Fundamental equation for bending:
$$
\sigma=K_{o}K_{v}K_{s}K_{m}K_{B}\cdot  \frac{W_{t}P}{FJ}
$$
Fundamental equation for pitting:
$$
\sigma_{c}=C_{p} \sqrt{ K_{o}K_{v}K_{s}K_{m}C_{f}\cdot \frac{W_{t}}{Fd_{P}I} }
$$
Coefficients:
- $K_{v}$ – Dynamic factor
- $K_{o}$ – Overload factor
- $K_{s}$ – Size factor
- $K_{m}(K_{H})$ – Load distribution factor
- $K_{B}$ – Rim thickness factor

Other parameters:
- $C_{p}$ – Elastic coefficient
- $d_{P}$ – Pitch diameter of pinion
- $C_{f}$ – Surface condition factor
- $J,I$ – Geometry factor

## AGMA Strength Equations
Equation for allowable bending stress:
$$
\sigma_{\text{all}} = \frac{Y_{N}}{S_{F}K_{T}K_{R}}S_{t}
$$
where $S_{t}$ is gear bending strength.

Equation for allowable contact stress:
$$
\sigma_{c, \text{all}} = \frac{Z_{N}C_{H}}{S_{F}K_{T}K_{R}}S_{c}
$$
where $S_{c}$ is gear strength equations.

Coefficients:
- $S_{F}$ – Safety factor
- $K_{T}$ – Temperature factor
- $K_{R}$ – Reliability factor
- $Y_{N}$ – Stress-cycle factor (for bending)
- $Z_{N}$ – Stress-cycle factor (for pitting)
- $C_{H}$ – Hardness ratio factor

## Example Factors

**Elastic coefficients** $C_{p}$ can be obtained as we computed for the [[Gear Pitting Analysis|basic equations]].
 
 **Geometry factors** ($J$ for bending, $I$ for surface) are usually more complicated than ([[Gear Bending Analysis|Lewis]]) equations. Usually we can get them from tables and graphs.

![[AGMA Equations.png]]

**Reliability factor:**
$$
K_{R}=\begin{cases}
0.658-0.0758\ln(1-R),\quad 0.5 < R < 0.99, \\
0.5-0.109\ln(1-R),\quad 0.99 \leq R\leq 0.9999
\end{cases}
$$

**Dynamic factor** with number $Q_{v}$,
$$
\begin{align}
K_{v} & =\begin{cases}
\left(\frac{\sqrt{A+ A }}{A} \right)^{B}, \quad V \text{ in ft/min} \\[2ex] 
\left( \frac{A+\sqrt{ 200V }}{A}  \right)^{B}, \quad V \text{ in m/s}
\end{cases} \\[2ex]
A  & = 50+56(1-B) \\[2ex] 
B  & =0.25(12-Q_{v})^{2 /3}
\end{align}
$$
- $Q_{v}$ is specified by AGMA to indicate precision. Most commercial gears have $Q_{v}$ from 3 to 7. Precision quality gears have $Q_{v}$ from 8 to 12.

**Size factor** $K_{s}$ can be chosen as 1 for most cases.

**Temperature factor** $K_{T}=1$ up to $250 \degree$.

Other factors ($K_{m}, C_{H}, Y_{N}, Z_{N}$) can be obtained from tables.

## Example

![[MTE 322 ex 12.pdf]]