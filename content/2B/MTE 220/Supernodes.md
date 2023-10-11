---
title: Supernodes
tags:
  - mte220
date: 2023-10-07
---
### The Problem
This is for dealing with a voltage source connecting two unknown node voltages (example: $2V$ source in schematic below). Since a voltage source may have any current flowing through it, there is no device equation to plug into the KCL equations.

![[supernodes.png|432]]

The unknown current through the voltage source can be written as:
$$
\begin{align}
\text{Node A:}& \quad I_{2V} = \frac{V_{A}-10}{4}+\frac{V_{A}}{2} + \frac{V_{A} - V_{B}}{1} \\[3ex]
\text{Node B:}& \quad 0 = I_{2V} + \frac{V_{B}}{3} + \frac{V_{B} - V_{A}}{1}
\end{align}
$$
However, these currents are coupled by $I_{2V}$, which means it can be eliminated.

### Supernode Usage
One may skip the step of defining the unknown current by taking a broader interpretation of KCL: The sum of currents into and out of any boundary in a circuit must equal zero. We can define a supernode that encompasses both nodes A and B. There is now only one nodal equation, with the 2 V source supplying the missing equation.

![[supernode_2.png|424]]

$$
\begin{align}
\text{Supernode:}& \quad 0 = \frac{V_{A}-10}{4} + \frac{V_{A}}{2} + \frac{V_{A} - V_{B}}{1} + \frac{V_{B}}{3} + \frac{V_{B}-V_{A}}{1} \\[3ex]
\text{Voltage Source:}& \quad V_{B} - V_{A} = 2
\end{align}
$$

The currents entering the $1 \Omega$ resistor cancel each other, so the supernode can also be expanded to include the resistor and eliminate the redundant currents:
$$
\begin{align}
\text{Supernode: }& \quad 0=\frac{V_{A}-10}{4}+\frac{V_{A}}{2}+\frac{V_{B}}{3} \\[3ex]
\text{Voltage Source:}& \quad V_{B} - V_{A} = 2
\end{align}
$$
