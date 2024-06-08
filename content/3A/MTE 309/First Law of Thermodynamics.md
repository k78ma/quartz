---
title: First Law of Thermodynamics
tags: 
date: 2024-05-15
aliases:
  - first law of thermodynamics
  - conservation of energy
---
The first law of thermodynamics is the principle of conservation of energy: Energy can be neither created or destroyed during a process; it can only change forms.
## Closed Systems
For a system which is:
- Closed (no mass transfer across boundaries)
- Stationary ($\Delta \text{KE}= \Delta \text{PE}=0$)

The change in the energy of the system leads us to the first law:
$$
\Delta E_{\text{system}}=Q-W
$$
where $Q$ is the heat added and $W$ is the work done.

The $\Delta E_{\text{system}}$ term can be expanded to include kinetic and potential energy:
$$
\begin{align}
\Delta \text{KE} + \Delta \text{PE}+\Delta U_{\text{system}} & =Q-W \\[2ex]
\frac{d(\text{KE})}{dt} +\frac{d(\text{PE})}{dt} +\frac{dU}{dt}  & = \dot{Q}-\dot{W}
\end{align}
$$
where the left side is the rate at which system energy changed, $\dot{Q}$ is the rate of heat addition, and $\dot{W}$ is the rate of work done (power).

![[First Law of Thermodynamics.png|540]]

## Open Systems
For an open system where mass can transfer across boundaries, mass coming in and out of the system carries its energy with it ($e = u +\text{KE} + \text{PE}$). 

Thus, the first law of thermodynamics for an open system can be written as:
$$
\frac{dE_{\text{CV}}}{dt}=\dot{Q}-\dot{W}+\dot{m}_{\text{in}}\left( u+\frac{1}{2}V^{2}+gz \right)_{\text{in}} - \dot{m}_{\text{out}}\left( u+\frac{1}{2}V^{2} + gz \right)_{\text{out}}
$$
Note that for an open system, $m$ is not constant so we need to account for its rate of change, $\dot{m}$.

When we have flow processes, where there's mass flow across the boundaries of a control volume, it can be more convenient to use enthalpy, as it flow work done by the fluid entering or leaving the control volume.
$$
\frac{dE_{\text{CV}}}{dt}=\dot{Q}-\dot{W}+\dot{m}_{\text{in}}\left( h+\frac{1}{2}V^{2}+gz \right)_{\text{in}} - \dot{m}_{\text{out}}\left( h+\frac{1}{2}V^{2} + gz \right)_{\text{out}}
$$

![[First Law of Thermodynamics-1.png|576]]


![[First Law of Thermodynamics-2.png|584]]