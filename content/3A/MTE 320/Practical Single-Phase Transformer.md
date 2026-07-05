---
title: Practical Single-Phase Transformer
tags:
  - mte320
date: 2024-06-23
aliases:
  - practical single-phase transformer
  - no-load loss
---
Unlike an [[Ideal Single-Phase Transformer|ideal transformer]], in a real transformer, there various things we can't ignore:
- Primary and secondary windings have resistances and inductances
- Core experiences [[Core Losses|eddy current and hysteresis losses]]
- Permeability of the core material is finite, resulting in non-zero reluctance
- Leakage fluxes exist on both primary and secondary sides

![[Practical Single-Phase Transformer.png]]

There are two components of flux on each side of the transformer. 
- **Leakage flux** exists only around the primary and secondary winding. 
- **Mutual flux** is common to primary and secondary windings.

Mutual flux induces voltages $e_{p}$ and $e_{s}$ on the primary and secondary sides. The leakage fluxes on both sides also induce voltages on the primary and secondary sides. These voltages behave as inductive voltage drops in the primary and secondary circuits and are modeled as leakage reactances in series with the primary and secondary circuits. The windings on both sides also have resistances that are in series with the primary and secondary circuits.

## Phasor Equivalent Circuit
Based on the above, we can create a phasor equivalent circuit:

![[Practical Single-Phase Transformer-1.png]]

The voltages, currents, resistances and inductances (or leakage reactances) of the primary and secondary sides can be related as:
$$
\begin{align}
v_{p}=R_{p}i_{p}+L_{p} \frac{di_{p}}{dt}+e_{p}\\[2ex] 
e_{s}=R_{s}i_{s}+L_{s} \frac{di_{s}}{dt}+v_{s}
\end{align}
$$
and
$$
\begin{align}
\vec{V}_{p}=(R_{p}+jX_{p})\,\vec{I}_{p}+\vec{E}_{p} \\
\vec{E}_{s}=(R_{s}+jX_{s})\,\vec{I}_{s}+\vec{E}_{s}
\end{align}
$$
### Core Losses
We also need to account for the [[Core Losses|core losses]]. In order to include the effect of core losses, a shunt branch is added to the primary side of the transformer. This shunt branch is composed of:
- A reactance $R_{c}$. We use the fact that core losses are proportional to the square of the primary-side voltage to model the core loss by a resistance connected across $E_{p}$, such that:
$$
\text{Core Loss}=\frac{E_{p}^{2}}{R_{c}}
$$
- Magnetizing reactance $X_{m}$. This represents the path for the current that magnetizes the core. 

The resistance $R_{c}$ and magnetizing reactance $X_{m}$ are usually very large compared to those of resistances and leakage reactances of the primary and secondary windings. 

![[Practical Single-Phase Transformer-2.png]]

When the transformer is not loaded, $I_s=0$. Thus, we have $I'_{p}= 1 / aI_{s}=0$. However, $I_{p} = I_{o}\neq 0$. This current $I_{o}$ is the total current of the shunt branch, and is called the **no-load current**; it's the current drawn by the transformer from the supply at no-load. This current is divided into two components:
- $I_{c}$ represents core losses, or **no-load losses**. 
- $I_{m}$ represents the magnetizing current.
- Note that $I_{o}$ is usually very small and the losses in $R_{p}$ at no load can be neglected. It is due to the no-load losses that the transformer gets warm even when it is not loaded.
- Under load, copper losses, which are the losses due to the resistances of primary and secondary circuits, are added to the core losses (no-load losses) to make the total loss in the transformer.

Since the impedances of the shunt branch is normally very high (especially in large power transformers), the current $I_{o}$ is negligible compared to the currents in the windings. As a result, **the shunt branch is usually neglected in the analysis of transformers**. If the efficiency of the transformer is to be calculated, the shunt branch cannot be neglected, as it contains the resistance standing for the no-load or core losses.