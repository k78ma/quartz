---
title: Endurance Limit Modifying Factors
tags:
  - mte321
date: 2024-06-18
aliases:
  - endurance limit modifying factors
---
Empirical methods for determining endurance limits, like the rotating-beam test are unrealistic for real life.
- Endurance limit based on testing (i.e., empirical data): $S_{e}'$
- Endurance limit adjusted for specific factors: $S_{e}$

There are some factors that can affect endurance limit:
- Material – composition, basis of failure, variability
- Manufacturing – method, heat treatment, fretting corrosion, surface condition, stress concentration
- Environment – corrosion, temperature, stress state, relaxation times
- Design – size, shape, stress state, speed, fretting, galling

*Marin's equation* provides various correction factors for these:
$$
S_{e}=k_{a}k_{b}k_{c}k_{d}k_{e}S_{e}'
$$
where:
- $k_{a}$ is the surface factor
- $k_{b}$ is the size factor
- $k_{c}$ is the load factor
- $k_{d}$ is the temperature factor
- $k_{e}$ is the reliability factor

## Surface Factor, $k_{a}$
The surface factor accounts for the fact that actual parts rarely have a surface finish as smooth as the polished test specimen. Surface roughness creates many localized stress concentrations, leading to localized plastic strain at the roots of surface imperfections, causing crack initiation.

![[Endurance Limit Modifying Factors.png|584]]

The surface factor $k_{a}$ can be curve fitted with:
$$
k_{a}=aS_{ut}^{b}
$$
![[Endurance Limit Modifying Factors-1.png]]

## Size Factor, $k_{b}$
The endurance limit of specimens has been observed to decrease as specimen size increases for bending and torsion loads. Fatigue is dictated by the "weakest link" in the material; the probability of weaknesses in the material increases with material volume.

For round rotating bars subject to bending and torsion:
$$
k_{b}=\begin{cases}
(d / 0.3)^{-0.107} = 0.879d^{-0.107} & 0.3 \leq d\leq 2 \text{ in} \\
0.91d^{-0.157} & 2<d\leq 10\text{ in} \\\\[2ex] 

(d / 7.62)^{-0.107}=1.24d^{-0.107} & 7.62 \leq d \leq 51 \text{ mm} \\
1.51d^{-0.157} & 51 < d \leq 254 \text{ mm}
\end{cases}
$$
For round rotating bars with axial loading, there is no size effect, so $k_{b}=1$.

For non-round, non-rotating parts, we need to find an equivalent diameter. This can obtained by equating the volume of material stressed at and above 95% of the maximum stress to the same volume in the beam specimen. When volumes are equated, the lengths cancel out and we are left with the cross-sectional area. For a rotating, round section, 95% stress area is the ring on the outside diameter (inner diameter of $0.95d$, outer diameter of $d$):
$$
A_{0.95\sigma}=\frac{\pi}{4}[d^{2}-(0.95d)^{2}]=0.0766d^{2}
$$
For non-rotating, round sections, 95% stress area is
$$
A_{0.95\sigma}=0.01046d^{2}
$$
And thus, the effective diameter is $d_{e}=0.370d$.

![[Endurance Limit Modifying Factors-2.png]]

## Load Factor, $k_{c}$
Endurance limit values are typically obtained from testing with [[Stress-Life Method|completely reversed bending]]. With axial or torsional loading, fatigue tests indicate different relationships between the endurance limit and the ultimate strength for each type of loading. This can be expressed by the load factor:
$$
k_{c}=\begin{cases}
1  & \text{bending} \\
0.85  & \text{axial} \\
0.59  & \text{torsion}
\end{cases}
$$
The load factor for torsion is very close to predictions made by [[Distortion Energy Theory|distortion energy theory]] for ductile materials. 
- As such, load factor for torsion is mainly accounts for difference in shear strength and normal strength.
- We should use the torsion load factor *only* for pure torsional fatigue loading.
- If torsion is combined with another loading, like bending, use $k_{c}=1$ and managed combined loading using the [[Distortion Energy Theory|von Mises stress]].

## Temperature Factor, $k_{d}$
Depending on the difference between tensile strength at room temperature, $S_{RT}$ at $20\degree \text{C}$ and tensile strength at operating temperature $S_{T}$. The temperature factor is given as the ratio between the two:
$$
k_{d}=\frac{S_{T}}{S_{RT}}
$$
For steels:
$$
\begin{align}
S_{T} / S_{RT} = 0.98 + 3.5(10^{-4})T_{F}-6.3(10^{-7})T_{F}^{2} \\
S_{T} / S_{RT} = 0.99 + 5.9(10^{-4})T_{C}-2.1(10^{-6})T_{C}^{2}
\end{align}
$$

## Reliability Factor, $k_{e}$
The reliability factor accounts for scatter in endurance limit fatigue data. Most endurance strength data is reported as mean values. The endurance limit is experimentally determined to be related to the ultimate strength by $S_{e}'=S_{ut}=0.5$. This roughly corresponds to a line through the middle of scattered data. The reliability factor allows the slope of the line to be adjusted to increase the reliability of data points being included above the line.

![[Endurance Limit Modifying Factors-3.png]]

The reliability factor is written as:
$$
k_{e}=1-0.08z_{a}
$$
where $z_{a}$ is defined by $z$-score of the line we want to use.