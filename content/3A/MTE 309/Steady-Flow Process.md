---
title: Steady-Flow Process
tags:
  - mte309
date: 2024-06-12
aliases:
  - steady-flow process
---
A steady flow device is an engineering system in which the fluid flows through the device steadily, meaning that the mass flow rate does not change with time. This can be written as:
$$
\sum_{\text{in}}\dot{m}=\sum_{\text{out}}\dot{m}
$$
The total rate of mass entering a control volume is equal to the total rate of mass leaving it.

During a steady-flow process, the total energy content of a control volume remains constant ($E_{\text{cv}}$ = constant), and thus the change in the total energy of the control volume is zero ($\Delta E_{\text{cv}}=0$). Therefore, the amount of energy entering a control volume in all forms (by heat, work, and mass) must be equal to the amount of energy leaving it. Then the rate form of the general energy balance reduces for a steady-flow process to
$$
\begin{align}
\dot{E}_{\text{in}}-\dot{E}_{\text{out}} & =\frac{dE_{\text{system}}}{dt}=0 \\[2ex]
\dot{E}_{\text{in}} & =\dot{E}_{\text{out}}
\end{align}
$$
When performing a general analysis or solving a problem involving an unknown heat or work interaction, we need to assume direction for heat or work interactions. The common practice is to assume that heat is transferred *into* the system at a rate of $\dot{Q}$, and work is produced *by* the system at a rate of $\dot{W}$. Then, the [[First Law of Thermodynamics for Open Systems|first law]] energy balance becomes:
$$
\dot{Q}-\dot{W}=\sum_{\text{out}}\underbrace{ \dot{m}\left( h+\frac{V^{2}}{2}+gz \right) }_{ \text{for each inlet} }-\sum_{\text{in}}\underbrace{ \dot{m}\left( h+\frac{V^{2}}{2}+gz \right) }_{ \text{for each outlet} }
$$
Obtaining a negative quantity for $\dot{Q}$ or $\dot{W}$ means that the assumed direction is wrong and should be reversed.

Steady-flow devices include:
- [[Nozzles and Diffusers]]
- [[Turbines]]
- [[Compressors and Pumps]]
- [[Fluid Throttles]]
- [[Heat Exchangers]]