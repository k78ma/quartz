---
title: Transformer Equivalent Circuit
tags:
  - mte320
date: 2024-06-23
aliases:
  - transformer equivalent circuit
---
Below we have the equivalent circuit diagram of a single-phase transformer. The [[Practical Single-Phase Transformer#Phasor Equivalent Circuit|magnetizing branch]] has been neglected for this analysis (can't do this if we're calculating efficiency!).

![[Transformer Equivalent Circuit.png]]

The equivalent circuit above can be simplified if the components on one side are transferred (or referred) to the other side. Below, the secondary circuit has been referred to the primary side.

![[Transformer Equivalent Circuit-1.png]]

## Basic Referral Rules
When secondary current is referred to the primary side, it gets divided by the turns-ratio $a$. This is based on the relation for current transformation:
$$
\frac{I_{s}}{I_{p}}=\frac{N_{p}}{N_{s}}=a \quad \longrightarrow \quad I_{p}=\frac{1}{a}I_{s}
$$
When secondary voltage is referred to the primary side, it gets multiplied by the turns-ratio $a$. This is based on the relation for voltage transformation:
$$
\frac{V_{p}}{V_{s}}=\frac{N_{p}}{N_{s}}=a \quad \longrightarrow \quad V_{p}=aV_{s}
$$
When secondary impedance is referred to the primary side, it gets multiplied by the turns-ratio squared, $a^{2}$. This is based on the relation:
$$
\frac{V_{p}}{I_{p}}=\frac{aV_{s}}{\frac{1}{a}I_{s}}=a^{2} \frac{V_{s}}{I_{s}} \quad \longrightarrow \quad Z_{p}=a^{2}Z_{s}
$$

### Further Simplification
We can combine the resistances and inductances above (9-18) to get an even more simplified circuit.

![[Transformer Equivalent Circuit-2.png]]

Here, we have:
$$
\begin{align}
R_{ep}=R_{p}+a^{2}R_{s} \\
X_{ep}=X_{p}+a^{2}X_{s}
\end{align}
$$
The phasor diagram of the corresponding circuit is given below.

![[Transformer Equivalent Circuit-3.png]]

### Secondary Side Referral
If the primary circuit is referred to the secondary-side, and the resistances and inductances are integrated, we get the equivalent circuit shown in Fig. 9-21 and the phasor diagram shown in Fig. 9-22.

![[Transformer Equivalent Circuit-4.png]]

In this case:
$$
\begin{align}
R_{es}=R_{s}+\frac{R_{s}}{a^{2}} \\[2ex] 
X_{es}=X_{s}+\frac{X_{s}}{a^{2}}
\end{align}
$$