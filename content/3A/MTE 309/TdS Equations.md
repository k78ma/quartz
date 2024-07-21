---
title: TdS Equations
tags:
  - mte309
date: 2024-07-21
aliases:
  - tds equations
  - internally reversible process
---
## Internally Reversible Process
A process is called **internally reversible** if no irreversibilities occur within the boundaries of the system during the process. During an internally reversible process, a system proceeds through a series of equilibrium states, and when the process is reversed, the system passes through exactly the same equilibrium states while returning to its initial state. That is, the paths of the forward and reverse processes coincide for an internally reversible process. The quasi-equilibrium process is an example of an internally reversible process.

For an internally reversible process, the [[Entropy Balance in a Closed System|entropy balance in a closed system equation]] becomes
$$
\Delta S_{\text{sys}}=S_{2}-S_{1}=\sum \frac{Q_{k}}{T_{k}}+\cancel{ S_{\text{gen}} }
$$
since there is no entropy generation $S_{\text{gen}}$.

The above equation can be re-arranged to become
$$
Q_{\text{int rev}}=\int_{1}^{2} T \, dS 
$$
such that we can quantify the amount of heat transfer in the system due to change in entropy at a given temperature. 

## P-V : T-S Analogy - Derivation of TdS Equations
Like how [[Moving Boundary Work|moving boundary work]] can be expressed as $W_{1-2}=\int_{1}^{2} P(V) \, dV$, where the area under the P-V curve is the **work output**, we have:
$$
Q_{1-2, \text{ int rev}}=\int_{1}^{2} T(s) \, dS 
$$
where the area under the Temperature-Entropy (T-S) curve is the **heat input**.

![[TdS Equations.png]]

For boundary work, we can write:
$$
\begin{align}
W_{1-2} & =\int_{1}^{2} P(V) \, dV \\[2ex] 
\delta W & =P\,dV
\end{align}
$$
Similarly, for internally reversible heat transfer, we can write
$$
\delta Q=T\,dS
$$
Recall that the [[First Law of Thermodynamics for Closed Systems|first law]] states
$$
dU=\delta Q-\delta W \quad \quad \text{(First Law)}
$$
So we have:
$$
dU  = T \, dS - P\, dV
$$
or
$$
\begin{align}
T\,dS   & =dU + P \, dV \quad \quad \text{(Extrinsic form)} \\[2ex]
T\,ds & =du+P\,dv \quad \quad \text{ (Intrinsic form)}
\end{align}
$$
This is a nice formula because $s, u, P, v$ can be found in data booklet as intensive independent properties. 

## The TdS Equations
Recall that we can write enthalpy as
$$
h=u+Pv
$$
In differential form:
$$
dh=du+P\,dv+v\,dP
$$
Since we established that $T\, ds=du+P\,dv$, we can then write:
$$
\begin{align}
dh & =T\,ds+v\,dP  \\
T\,ds & =dh-v\,dP
\end{align}
$$
Thus, considering a stationary, closed system undergoing a reversible process between State 1 and State 2, we arrive at the TdS equations:
$$
\boxed{
\begin{align}
T\,ds=du+P\,dv \\
T\,ds=dh-v\,dP
\end{align}
}
$$
- The TdS equations relate state properties. Thus, in order to use them, [[Equation of State|equation of state]] must be defined, such as the P-v-T surface.
- ==The TdS equations relate state properties, so they do not rely on the process path. They are valid for reversible or irreversible processes and closed/open systems.== This is a bit of a bait and switch since we specifically used internally reversible processes to do this derivation.
- To use the TdS equations, $T$ and $P$ during the process must be known, and entropy may still be generated.

## Applying TdS Equations
Recall that we apply [[Specific Heat|specific heat]], $c$, differently for each phase of matter to relate $\Delta u$ or $\Delta h$ to $T$.
- For solids or incompressible liquids, we can say that $c_{p}=c_{v}=c$. 
- In or near the vapor dome, we use $h, u$ tabulated for $T, P$
- For ideal gases, we use $u_{2}-u_{1}=\bar{c}_{v}(T_{2}-T_{1})$ and $h_{2}-h_{1}=\bar{c}_{p}(T_{2}-T_{1})$.

Similarly, we can apply the TdS equations in convenient forms depending on the phase.

### Solids + Incompressible Liquids
For solids or incompressible liquids, since the volume cannot change, we have $dv=0$. We can also write change in internal energy in terms of change in temperature as $du=c\,dT$. Then, our TdS equations, we have:
$$
\begin{align}
T\,ds & =du+P\,dv \\
	 & =c\,dT + P(0) \\
	 & =c\,dT
\end{align}
$$
We can then write:
$$
\begin{align}
\int_{1}^{2}  \, ds & =\int_{1}^{2}c(T)  \, \frac{dT}{T} \\[2ex] 
s_{2}-s_{1} & =\overline{c}_{\text{avg}}\ln\left( \frac{T_{2}}{T_{1}} \right)
\end{align}
$$
Note that in the isentropic case, we have $s_{2}-s_{1}=0$ and $T_{2}-T_{1}=0$.

### Vapor Dome
In or near the vapor dome, we use the property tables with $T, P$ to find $u, h, s$.

### Ideal Gases
For ideal gases, we have $du=c_{v}\,dT$ $Pv=RT$, which lets us write
$$
\begin{align} \\
T\,ds & =du+P\,dv\\[2ex] 
T\,ds & =c_{v}dT+\left( \frac{RT}{v} \right)dv \\[2ex] 
\int  \, ds & =\int_{1}^{2} c_{v}(T) \, \frac{dT}{T}+R\ln\left( \frac{v_{2}}{v_{1}} \right)  
\end{align}
$$
This leads to
$$
\begin{align}
s_{2}-s_{1}=\overline{c}_{v}\ln \frac{T_{2}}{T_{1}}+R\ln \frac{v_{2}}{v_{1}}\\[2ex] 
s_{2}-s_{1}=\overline{c}_{p}\ln \frac{T_{2}}{T_{1}}+R\ln \frac{P_{2}}{P_{1}}
\end{align}
$$
## Example

![[MTE 309 - LE28.pdf]]