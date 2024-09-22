---
title: Straight Bevel Gear Load Analysis
tags:
  - mte322
date: 2024-09-22
aliases:
  - straight bevel gear load analysis
---
## Geometry

![[Straight Bevel Gear Load Analysis.png]]

## Loads

![[Straight Bevel Gear Load Analysis-1.png]]


## Loads Analysis

![[Straight Bevel Gear Load Analysis-2.png]]

### Procedure
- Load distribution is similar to [[Helical Gear Load Analysis|helical]] in that it has components in all three directions ($W_{r}, W_{t}, W_{x}$) which are applied at the pitch radii ($r_{P}, r_{G}$). 
	- With $P$ for pinion and $G$ for gear, we have:
$$
W_{tP}=\frac{T_{\text{in}}}{r_{P}}=W_{tG}=\frac{T_{\text{out}}}{r_{G}}
$$
- Given $W_{t}$, other forces are computed using $\phi$ (pressure angle) and $\gamma$ (pitch cone angle for pinion):
$$
\begin{align}
W_{rP} & =W_{tP}\tan \phi \cos \gamma \\[2ex]
W_{xP} & =W_{tP}\tan \phi \sin \gamma
\end{align}
$$
- Pinion is perpendicular r to gear, so the radial direction for pinion becomes the axial direction for the gear:
$$
W_{rP}=W_{xG}, \quad W_{xP}=W_{rG} \quad (W_{tP}=W_{tG})
$$

## Example

![[MTE 322 ex 7.pdf]]