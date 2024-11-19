---
title: Load Life for Combined Load
tags:
  - mte322
date: 2024-11-18
aliases:
  - load life for combined load
---
The analysis done in [[Rolling Element Bearing Load Life and Size Selection]] is primarily for radial load only. 

When there is an axial load, we can still use the load rating values ($C$ and $C_{0}$), but we need to re-compute the equivalent dynamic load $P$.

Specifically, we get the weighted average as:
$$
\begin{align}
P_{0} & =X_{0}F_{r}+Y_{0}F_{a} \quad (\text{for static load}) \\[2ex]
P & =XF_{r}+YF_{a} \quad (\text{for dynamic load})
\end{align}
$$
where $X$ or $X_{0}$ is the radial factor and $Y$ or $Y_{0}$ is the axial factor.

Bearing manufacturers provide a detailed guideline on how to compute the equivalent load, e.g. in the NSK catalogue.
- The equivalent load $P$ (or $P_{0}$) is determined by the linear combination of $F_{r}$ and $F_{a}$
- Radial/axial factors depend on other factors, $e$ and $f_{0}$
- If $F_{a}$ is relatively small (not bigger than $e$), then it can be ignored

![[Load Life for Combined Load.png|372]]

## Example

![[MTE 322 bearings ex 2.pdf]]