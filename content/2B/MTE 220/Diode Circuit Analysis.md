---
title: Diode Circuit Analysis
tags:
  - mte220
date: 2023-10-25
---
The general procedure is for diode circuit analysis is:

1. Draw with diode off (removed from circuit). Solve for $V_{D}$ and any other unknowns like $V_{A}$ and $V_{B}$.
2. Draw with diode on (replace with $V_{F}$ source). Solve for $V_{D}$ and any other unknowns, like $V_{A}$ and $V_{B}$.
3. Use "off" model when $V_{D} < V_{F}$ and "on" when $V_{D} \geq V_{F}$

#### Example
Use a basic diode model that does not conduct any current until 0.7V is applied, at which point it conducts any amount of current. Solve for $V_{A}$ and $V_{B}$.

![[Diode Circuit Analysis.png|268]]

##### Step 1: Off model
First, we model the circuit with the diode off. Since the diode is off, we can basically just draw it as an open circuit:

![[Diode Circuit Analysis-2.png|314]]

What's the diode voltage when it's off? We simply have:
$$
\begin{align}
V_{D+}  & = V_{A} \\
V_{D-}  & = V_{B} \\
\therefore V_{D}  & = V_{A} -V_{B}
\end{align}
$$
Solving for $V_{A}$ and $V_{B}$ (as voltage dividers):
$$
\begin{align}
V_{A} = 5 \cdot \frac{4}{1+4} = 4\text{ V} \\
V_{B} = 10 \cdot \frac{12}{48+12} = 2\text{ V}
\end{align}
$$
In the off-state, our diode voltage is $V_{A} - V_{B} = 2\text{ V}$.

Since $2 \text{ V} > 0.7 \text{ V}$ and $V_{A}$ and $V_{B}$ don't change in the problem, we know that the diode is on!

##### Step 2: On model
Now, we model the circuit with the diode on:

![[Diode Circuit Analysis-3.png|334]]

We can solve this using [[Supernodes]]:
![[Diode Circuit Analysis-4.png|326]]

The equations are:
$$
\begin{align}
\frac{V_{A} - 5}{1} + \frac{V_{A}}{4} + \frac{V_{B}-10}{48} + \frac{V_{B}}{12} = 0 \\[3ex] 
\implies 12V_{A} + V_{B} = 50
\end{align}
$$
and
$$
V_{A} = V_{B} + 0.7\text{ V}
$$
Solving this gives:
$$
V_{A} = 3.9\text{ V}, V_{B} = 3.2 \text{ V}
$$