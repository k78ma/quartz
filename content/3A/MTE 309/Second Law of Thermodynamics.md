---
title: Second Law of Thermodynamics
tags:
  - mte309
date: 2024-07-12
aliases:
  - second law of thermodynamics
---
Previously we applied the [[First Law of Thermodynamics|first law of thermodynamics]], or the conservation of energy principle, to processes involving closed and open systems. This states that energy is a conserved property. However, satisfying the first law alone does not ensure that a given process will take place.

For example, hot coffee getting even hotter in a cooler room as a result of heat transfer from the room air does not violate the first law but we know that it never takes place. We see that processes proceed in a certain *direction* and not in the reverse direction. Such violations of the second law can be detected by using the property of [[Thermodynamic Entropy|entropy]].

The second law also asserts that energy has **quality** as well as quantity. The first law is concerned with the quantity of energy and the transformations of energy from one form to another with no regard to its quality.

For a process to proceed, both the first and second laws must be satisfied (*direction*).

## Reversibility
### Irreversibilities
All physical processes contain **irreversibilities** that transform energy from an organized (useful) state to a disorganized (less useful) state.

- Examples of irreversibilities:
	- Friction/drag
	- Heat transfer due to a finite temperature difference
	- Fast or unconstrained expansion/compression
	- Mixing of different species
	- Inelastic deformation
	- Chemical reactions

### Reversible Processes
The system could possibly be restored to its initial state (“internally reversible”), but would then not be possible to also return the surroundings to their initial state.

**Reversible processes** are conceptual, idealized processes where the system and surroundings can be exactly restored to their initial states after the process has taken place. 

- Examples of reversible processes:
	- Frictionless motion
	- Quasi-equilibrium expansion/compression
	- Elastic deformation

These are used to determine the best theoretical performance of cycles, engines, and other devices. We can then quantify factors which reduce performance from maximum.

## Thermal Energy Reservoirs
In the development of the second law of thermodynamics, it's convenient to have a hypothetical body with a relatively large thermal energy capacity
$$
\text{mass}\times \text{specific heat} = mc_{p}
$$
that can supply or absorb finite amounts of heat without undergoing any change in temperature. Such a body is called a **thermal energy reservoir**.

## Statements of the Second Law

>[!definition] Clausius Statement of the Second Law
> A system cannot operate so that its sole outcome is heat transfer from a cold reservoir to a hot reservoir.
>
>This statement deals with the **direction of energy transfer**. 
>
>![[Second Law of Thermodynamics.png]]

>[!definition] Kelvin-Planck Statement of the Second Law
> No system can transform all heat into work. There must always be some heat rejection.
> 
> This deals with thermal efficiency, where:
> $$
>\begin{align}
>\text{Thermal efficiency} & =\frac{\text{Net work output}}{\text{Total heat input}} \\
>\eta_{\text{th}} & =\frac{\dot{W}}{\dot{Q}_{\text{H}}}=\frac{\dot{Q}_{\text{H}}-\dot{Q}_{\text{L}}}{\dot{Q}_{\text{H}}}=1-\frac{\dot{Q}_{\text{L}}}{\dot{Q}_{\text{H}}}
>\end{align}
> $$
> This statement basically says that:
> $$
>\eta_{\text{Th}}<1 
>$$
>
>![[Second Law of Thermodynamics-1.png]]
