---
title: First Law of Thermodynamics for Closed Systems
tags:
  - mte309
date: 2024-06-22
aliases:
  - first law of thermodynamics for closed systems
---
The energy in a [[Thermodynamic System|closed system]], where there is no mass flow across the system boundary, is balanced such that:
$$
\begin{align}
\Delta E_{\text{system}}  & = E_{\text{in}}-E_{\text{out}}
\end{align}
$$
In rate form:
$$
\dot{E}_{\text{in}}-\dot{E}_{\text{out}}=dE_{\text{system}} / dt
$$
The total energy of the system, $E_{\text{system}}$ is the sum of 3 components:
$$
E_{\text{system}}=U+KE+PE
$$
Often, we only consider the [[Internal Energy|internal energy]], $\Delta E_{\text{system}}=\Delta U$, since much of the time the system is stationary, such that $\Delta KE=\Delta PE=0$. In this case, we write:
$$
\Delta U = Q-W
$$
The sign convention is to assume that heat, $Q$, is being transferred *into* the system and work $W$ is done *by* the system.

![[First Law of Thermodynamics.png|540]]

![[First Law of Thermodynamics for Closed Systems.png|540]]

Note that in the full form with kinetic and potential energy, we have:
$$
\begin{align}
\Delta \text{KE} + \Delta \text{PE}+\Delta U_{\text{system}} & =Q-W \\[2ex]
\frac{d(\text{KE})}{dt} +\frac{d(\text{PE})}{dt} +\frac{dU}{dt}  & = \dot{Q}-\dot{W}
\end{align}
$$
where the left side is the rate at which system energy changed, $\dot{Q}$ is the rate of heat addition, and $\dot{W}$ is the rate of work done (power). 
## Steady-state
At a steady state such that $dE_{\text{CV}} / dt = 0$, we have
$$
0=\dot{Q}-\dot{W}+\dot{m}_{\text{in}}\left( h+\frac{1}{2}V^{2}+gz \right)_{\text{in}} - \dot{m}_{\text{out}}\left( h+\frac{1}{2}V^{2} + gz \right)_{\text{out}}
$$
## One inlet, one outlet and steady
### Extrinsic form
$$
0=\dot{Q}-\dot{V}+\dot{m}\left[\left( h+\frac{1}{2}V^{2}+gz \right)_{\text{in}} -\left( h+\frac{1}{2}V^{2} + gz \right)_{\text{out}}\right]
$$
### Intrinsic form