---
title: Electrical System Modeling
tags:
  - elec3200
date: 2025-03-05
aliases:
  - electrical system modeling
---
## RLC Circuit

![[Pasted image 20250305234729.png|642]]

- $gv_{1}$ is a voltage-controlled current source

We have:
- Input and output of $v_{i}(t)$ and $v_{o}(t)$
- Intermediate variables: Capacitor voltages $v_{1}$ and $v_{2}$, and inductor current $i(t)$

Then, we write down $n$ independent differential equations using Kirchhoff’s current law (KCL) and Kirchhoff’s voltage law (KVL), applied to nodes and loops involving inductors and capacitors.

KCL:
- Node 1 (between $R_{1}$ and $L$):
$$
\frac{v_{i}(t)-v_{1}(t)}{R_{1}} = C_{1} \frac{dv_{1}(t)}{dt} +i(t)
$$
- Node 2 (above $C_{2}$):
$$
i(t)=C_{2} \frac{dv_{2}(t)}{dt}-gv_{1}-\frac{v_{2}(t)}{R_{2}}
$$

KVL:
- Loop 1 (with $L, C_{1}, C_{2}$):
$$
v_{1}- L \frac{di(t)}{dt}-v_{2}=0
$$
The output can be written just as:
$$
v_{o}(t)=v_{2}(t)
$$

Re-writing everything:
$$
\begin{align}
\frac{dv_{1}(t)}{dt} & =\frac{1}{R_{1}C_{1}}v_{i}(t)-\frac{1}{R_{1}C_{1}}v_{1}(t)-\frac{1}{C_{1}}i(t) \\[2ex] 
\frac{dv_{2}(t)}{dt} & =\frac{1}{C_{2}}i(t)-\frac{g}{C_{2}}v_{1}-\frac{v_{2}(t)}{R_{2}C_{2}} \\[2ex] 
\frac{di(t)}{dt} & =\frac{1}{L}v_{1} - \frac{1}{L}v_{2}
\end{align}
$$
In matrix form:
$$
\begin{bmatrix}
\dot{v_{1}}(t) \\
\dot{v_{2}}(t) \\
\dot{i}(t)
\end{bmatrix}=
\begin{bmatrix}
-\frac{1}{R_{1}C_{1}} & 0 & -\frac{1}{C_{1}} \\
-\frac{g}{C_{2}} & -\frac{1}{R_{2}C_{2}}  & \frac{1}{C_{2}} \\
\frac{1}{L} & - \frac{1}{L} & 0
\end{bmatrix}
\begin{bmatrix}
v_{1}(t) \\
v_{2}(t) \\
i(t)
\end{bmatrix}
+
\begin{bmatrix}
\frac{1}{R_{1}C_{1}} \\
0 \\
0
\end{bmatrix} v_{i}(t)
$$
and
$$
v_{o}(t)=\begin{bmatrix}
0 & 1 & 0
\end{bmatrix} \begin{bmatrix}
v_{1}(t) \\
v_{2}(t) \\
i(t)
\end{bmatrix}
$$
