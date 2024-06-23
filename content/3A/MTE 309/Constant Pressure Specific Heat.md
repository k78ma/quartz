---
title: Constant Pressure Specific Heat
tags:
  - mte309
date: 2024-06-01
aliases:
  - constant pressure specific heat
---
Constant-volume specific heat $c_{v}$ is a type of [[Specific Heat|specific heat]], signifying the energy required to raise the temperature of a unit mass of a substance by one degree at constant pressure. 

Since the pressure is constant but the volume is not, some of the energy transfer goes into changing the volume, not just the temperature, such that:
$$
q=\Delta(u+PV)=\Delta h
$$
This is given by:
$$
\begin{align}
\int  \, du & =\int c_{v}(T) \, dT   \\[2ex]
dh & =c_{p}\;dT \\[2ex]
h_{2}-h_{1} & =\bar{c_{p}}(T_{2}-T_{1})
\end{align}
$$
where $\bar{c_{p}}$ is the average $c$ within $\Delta T$ (valid if $\Delta T$ is small).

$c_{p}$ is always greater than $c_{v}$. At constant pressure the system is allowed to expand, and the energy for this expansion work must also be supplied to the system.