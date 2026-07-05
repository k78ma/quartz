---
title: Transformer Under Load
tags:
  - mte320
date: 2024-06-23
aliases:
  - transformer under load
---
Below is a schematic diagram for a single-phase transformer under load. We assume that the transformer has an ideal-core, but the windings have resistances and inductances.

![[Transformer Under Load.png]]

What happens when a transformer is under load? How are the variations in the load sensed and reacted to on the primary side?

At steady-state:
$$
\begin{align}
E_{p}I_{p}=E_{s}I_{s} \\
N_{p}I_{p}=N_{s}I_{s}
\end{align}
$$
Based on the time-varying primary current, a time-varying flux is developed in the core. According to Faraday's Law, a voltage $e_{s}$ is induced in the primary winding. Under load, a current $i_{s}$ is produced in the secondary circuit. The direction of this current is determined by Lenz’s law.

- If the load is increased, $I_{s}$ also increases. 
- The flux created by $I_{s}$ opposes the original flux. 
- Thus, the net flux of the core decreases. 
- The voltage induced in the primary winding, $E_{p}$, decreases. 
- At the same $V_{p}$ as before, $I_{p}$ increases. 
- The net flux increases and the original value of flux is almost restored.

This means that transformer reacts to the changes in the load and makes changes in the primary current accordingly. At the new steady-state, the power balance and MMF balance between the two sides of the transformer are restored.