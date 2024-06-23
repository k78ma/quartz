---
title: First Law of Thermodynamics for Open Systems
tags:
  - mte309
date: 2024-06-23
aliases:
  - first law of thermodynamics for open systems
---
For an open system where mass can transfer across boundaries, mass coming in and out of the system carries its energy with it ($e = u +\text{KE} + \text{PE}$).  Note that for an open system, $m$ is not constant so we need to account for its rate of change, $\dot{m}$. This is called the **mass flow rate**.

Thus, the [[First Law of Thermodynamics|first law of thermodynamics]] for an open system can be written as:
$$
\frac{dE_{\text{CV}}}{dt}=\dot{Q}-\dot{W}+\dot{m}_{\text{in}}\left( u+\frac{1}{2}V^{2}+gz \right)_{\text{in}} - \dot{m}_{\text{out}}\left( u+\frac{1}{2}V^{2} + gz \right)_{\text{out}}
$$
When we have flow processes, where there's mass flow across the boundaries of a control volume, it can be more convenient to use enthalpy, as it accounts for flow work done by the fluid entering or leaving the control volume.
$$
\frac{dE_{\text{CV}}}{dt}=\dot{Q}-\dot{W}+\dot{m}_{\text{in}}\left( h+\frac{1}{2}V^{2}+gz \right)_{\text{in}} - \dot{m}_{\text{out}}\left( h+\frac{1}{2}V^{2} + gz \right)_{\text{out}}
$$

![[First Law of Thermodynamics-1.png|576]]


![[First Law of Thermodynamics-2.png|584]]