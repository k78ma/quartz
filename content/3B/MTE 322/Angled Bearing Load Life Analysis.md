---
title: Angled Bearing Load Life Analysis
tags:
  - mte322
date: 2024-11-20
aliases:
  - angled bearing load life analysis
---
Angled bearings are often used in pairs to support both axial directions.

![[Angled Bearing Load Life Analysis.png]]

They are used for combined radial and (large) axial loads. 
- Deep groove ball bearings can still be used when $F_{a}$ is comparable to $F_{r}$, but they are not advised if $F_{a}$ is more than 10-30% of $C_{0}$ (static load rating) or $F_{a}\gg F_{r}$ (axial load is excessively larger than radial one)

These bearings require different load analysis due to the "effective load center" $a$, and the "induced axial load", given by 
$$
F_{ai}=\frac{0.6}{Y}F_{r}
$$
where $Y$ is the axial load factor.

Let's say that we have pair of angular contact ball bearings in B2B (or O) configuration. $F_{ae}$ is an external axial load.

![[Angled Bearing Load Life Analysis-1.png|411]]

Equivalent loads are computed based on the effective axial loads. 
- If $F_{ae}+\frac{0.6}{Y_{I I}}F_{r II}\geq \frac{0.6}{Y_{I}F_{r}I}$, we have:
$$
\begin{cases}
P_{I}=XF_{rI}+Y_{I}\underbrace{ \left( F_{ae}+\frac{0.6}{Y_{II}}F_{rII} \right) }_{ =F_{a I} } \\[2ex]
P_{II}= F_{rI I} \quad (\text{i.e. }F_{a II}=0)
\end{cases}
$$
- Otherwise:
$$
\begin{cases}
P_{I}=F_{r I} \quad (\text{i.e. }F_{a II}=0)\\[2ex] 
P_{II}=XF_{r I I} +Y_{II}\underbrace{ \left( \frac{0.6}{Y_{I}}F_{rI} - F_{ae} \right) }_{ =F_{aI I} }
\end{cases}
$$
Note that:
- $\frac{0.6}{Y_{II}}F_{rII}$ is the axial load induced by $F_{r II}(\to)$
- $\frac{0.6}{Y_{I}}F_{r I}$ is the axial load induced by $F_{rI}(\leftarrow)$

## Example

![[MTE 322 bearings ex 3.pdf]]