---
title: Isentropic Process for Ideal Gases
tags:
  - mte309
date: 2024-07-28
aliases:
  - isentropic process for ideal gases
---
Recall that the [[TdS Equations]] state that for ideal gases, we have:
$$
s_{2}-s_{1}=\overline{c}_{v}\ln \frac{T_{2}}{T_{1}}+R\ln \frac{v_{2}}{v_{1}}
$$
For an isentropic process, $s_{2}=s_{1}$, so that $s_{2}-s_{1}=0$. This means
$$
\begin{align}
\ln \left( \frac{T_{2}}{T_{1}} \right)=-\frac{R}{\overline{c}_{v}}\ln \left( \frac{v_{2}}{v_{1}} \right) \\[2ex] 
\ln\left( \frac{T_{2}}{T_{1}} \right)=\ln\left( \frac{v_{1}}{v_{2}} \right)^{R / \bar{c}_{v}}
\end{align}
$$
Recall that the [[Specific Heat Relationships|specific heat ratio]] is given as $\frac{\bar{c}_{p}}{\bar{c}_{v}}=k$, and $R=\bar{c}_{p}-\bar{c}_{v}$. Thus, we have:
$$
\frac{R}{\bar{c}_{v}}=\frac{\bar{c}_{p}-\bar{c}_{v}}{\bar{c}_{v}}=k-1
$$
So:
$$
\begin{align}
\frac{T_{2}}{T_{1}} & =\left( \frac{v_{1}}{v_{2}} \right)^{k-1} \\[2ex]
Tv^{k-1} & =\text{const}
\end{align}
$$
By the ideal gas equation, we also have:
$$
Pv^{k}=\text{const}
$$
which is in the form of a [[Polytropic Process|polytropic process]]. Thus, the polytropic process $Pv^{k}$ is isentropic (reversible and adiabatic) if $n=k$, where $k=\frac{\bar{c}_{p}}{\bar{c}_{v}}$.


![[Isentropic Process for Ideal Gases.png]]