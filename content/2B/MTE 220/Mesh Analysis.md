---
title: Mesh Analysis
tags:
  - mte220
date: 2023-10-07
---
Mesh analysis refers to the application of [[Kirchhoff’s Voltage Law (KVL)|KVL]] to solve a circuit by finding all the **mesh currents**, which is a component of the actual current you would measure through a wire in a circuit. 

![[mesh example.png|416]]

- $I_{1}$ would be measured flowing out of the $10V$ source and through the $1k\Omega$ resistor.
- $I_{2}$ would be measured out of the top $2k\Omega$ resistor and into the $5V$ source.
- The middle $2k\Omega$ resistor experiences the summation of these two independent mesh currents as $I_{1}-I_{2}$ flowing into the top terminal or $I_{2}-I_{1}$ flowing into the bottom terminal.

Mesh Analysis steps:
1. Label mesh currents and ground.
2. Write the KVL equations around each mesh, referencing mesh currents under consideration as entering the positive terminal of components where no polarity is specified. For example, voltage sources have polarity but resistors do not. 
3. Replace currents with device equations using the node voltages:
$$
\begin{align}
\text{Mesh 1:}& \quad 0 = 10-I_{1}(1) - (I_{1}-I_{2})(2) \\
\text{Mesh 2:}& \quad 0 = -(I_{2}-I_{1})(2) - I_{2}(2)-5
\end{align}
$$

4. Solve $I_{1}=3.75 \text{mA}, I_{2}=0.625\text{mA}$.

Alternatively, you can just write the sign that the mesh current “runs into” as it progresses around the mesh. For example, $I_{1}$ runs into the negative terminal of the 10V source, so the sign of that term is negative:
$$
\begin{align}
\text{Mesh 1:}& \quad 0 = -10+I_{1}(1) +(I_{1}-I_{2})(2) \\
\text{Mesh 2:}& \quad 0 = (I_{2}-I_{1})(2) + I_{2}(2)+5
\end{align}
$$
This is mathematically equivalent (it’s just multiplying both sides by $-1$). This simple change eliminates the need to consider whether a device adds or removes energy from the charge flowing through it, stepping the voltage up or down.