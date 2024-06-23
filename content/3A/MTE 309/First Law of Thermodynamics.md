---
title: First Law of Thermodynamics
tags: 
date: 2024-05-15
aliases:
  - first law of thermodynamics
  - conservation of energy
---
The first law of thermodynamics is the principle of conservation of energy: Energy can be neither created or destroyed during a process; it can only change forms. 

The first law cannot be proven mathematically, but no process in nature is known to have violated the first law, and this should be taken as sufficient proof.

See:
- [[First Law of Thermodynamics for Closed Systems]]

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