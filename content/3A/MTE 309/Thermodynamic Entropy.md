---
title: Thermodynamic Entropy
tags:
  - mte309
date: 2024-07-19
aliases:
  - thermodynamic entropy
---
Per the [[Second Law of Thermodynamics|second law of thermodynamics]], real processes contain irreversibilities like heat transfer and friction. **Entropy** is a thermodynamic property of a system used to quantify the irreversibility of a process or cycle.

Entropy is given as:
- Intrinsic property: $\text{s }[\text{kJ} / \text{kgK}]$
- Extrinsic property: $\text{S [kJ/K]}$

Specifically, entropy is a measure of the **number of possible ways energy can be distributed** in a system of molecules.

![[Thermodynamic Entropy.png]]

For a perfect crystal of a pure substance, microscopic state is certain ("third law"), such that $\lim_{ T \to 0 }S=0$.

## Increase of Entropy Principle
The total entropy (system + surroundings) never decreases. This can be expressed as:
$$
S_{\text{gen}}=\Delta S_{\text{tot}}=\Delta S_{\text{sys}}+\Delta S_{\text{surr}} \geq0
$$

![[Thermodynamic Entropy-1.png]]

Some cases for $S_{\text{gen}}$:
$$
S_{gen}=\begin{cases}
>0 & \text{Irreversible process} \\
=0 & \text{Reversible process} \\
<0 & \text{Impossible process}
\end{cases}
$$
