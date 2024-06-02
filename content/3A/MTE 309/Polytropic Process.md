---
title: Polytropic Process
tags:
  - mte309
date: 2024-06-01
aliases:
  - polytropic process
---
Polytropic processes follow the equation
$$
PV^{n}=C \quad \text{or} \quad P=CV^{-n} 
$$
In general, they follow the equation
$$
P_{1}V_{1}^{n}=P_{2}V_{2}^{n}
$$
Recall that the amount of [[Energy Transfer by Work|work]] done in a thermodynamic process is determined by the process path:
$$
\begin{align}
W_{1-2} & =\int_{V_{1}}^{V_{2}} P(V) \, dV \\[2ex] 
	 & = \int_{V_{1}}^{V_{2}} CV^{n} \, dV 
\end{align}
$$
Changing the exponent $n$ allows us to describe many different processes. The value of $n$ for a given process is typically found by curve-fitting experimental data.
## $n\neq 1$
If $n\neq 1$, we have:
$$
W_{1-2}=\frac{CV^{-n+1}}{-n+1}\bigg|^{V_{2}}_{V_{1}} = \frac{CV_{2}^{1-n}-CV_{1}^{1-n}}{1-n}
$$
Since $C=P_{1}V_{1}^{n}=P_{2}V_{2}^{n}$, we have:
$$
\boxed{W_{1-2} = \frac{P_{2}V_{2}-P_{1}V_{1}}{1-n}}
$$
If we are working with an ideal gas, this can be simplified to a temperature-dependent form:
$$
W_{o}=\frac{mR(T_{2}-T_{1})}{1-n}
$$

## $n=1$
If $n=1$, we have:
$$
W_{1-2}=\int_{V_{1}}^{V_{2}} \frac{C}{V} \, dV =C\ln V \bigg|_{V_{1}}^{V_{2}}=C\ln\left( \frac{V_{2}}{V_{1}} \right)
$$
Thus, we have:
$$
W_{1-2}=P_{1}V_{1}\ln\left( \frac{V_{2}}{V_{1}} \right)=P_{2}V_{2}\ln\left( \frac{V_{2}}{V_{1}} \right) 
$$
This can again be simplified for an ideal gas with $PV=mRT$. In this case, this would be an isothermal process, since $R$ and $m$ are constant in the system, so $T$ must also be constant to have $P_{1}V_{1}=P_{2}V_{2}$.

## $n=0$
If $n=0$, we have:
$$
W_{1-2}=P(V_{2}-V_{1})
$$
which is an isobaric process.

## $n=\infty$
If $n=\infty$, we have:
$$
W_{1-2}=0
$$
which is isochoric process.

## $n=\gamma$
For a ratio of specific heat, $\gamma=\frac{c_{p}}{c_{v}}$, which is approximately $1.4$ for air.
