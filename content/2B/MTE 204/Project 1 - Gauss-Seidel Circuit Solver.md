---
title: Project 1 - Gauss-Seidel Circuit Solver
tags:
  - mte204
date: 2023-10-04
---
## Annotated Circuit Diagrams
![[circuit diagrams.png]]
## Circuit 1

KCL and KVL Equations:
$$
\begin{array}{ll}
\text{Junction A: } I_{1}-I_{2}-I_{3}-I_{4}=0 & \quad \text{Loop 1: }I_{1}+3I_{2} = 6 \\
\text{Junction B: } I_{4}-I_{5}-I_{6}=0  & \quad \text{Loop 2: } 6I_{3}-3I_{2} = 0 \\
\text{Junction C: } I_{6}-I_{7}-I_{8}=0 & \quad \text{Loop 3: } 3I_{4}+12I_{5}-6I_{3}= 0 \\
 & \quad \text{Loop 4: } 2I_{6}+3I_{7}-12I_{5}= 0 \\
& \quad\text{Loop 5: } 6I_{8}-3I_{7}= 0 \\
\end{array}
$$

In matrix form, and then with partial pivoting to get rid of diagonal $0$s:
$$
\begin{align}
\begin{bmatrix}
1  & -1 & -1 & -1  & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & -1 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & -1 & -1 \\
1 & 3 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & -3 & 6 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & -6 & 3 & 12 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & -12 & 2 & 3 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & -3 & 6 
\end{bmatrix}
\begin{Bmatrix}
I_{1} \\
I_{2} \\
I_{3} \\
I_{4} \\
I_{5} \\
I_{6} \\
I_{7} \\
I_{8}
\end{Bmatrix}
=
\begin{Bmatrix}
0 \\
0 \\
0 \\
6 \\
0 \\
0 \\
0 \\
0 \\
\end{Bmatrix}
\end{align}
\implies
\begin{bmatrix}
1  & -1 & -1 & -1  & 0 & 0 & 0 & 0 \\
1 & 3 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & -3 & 6 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & -1 & -1 & 0 & 0 \\
0 & 0 & -6 & 3 & 12 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & -12 & 2 & 3 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & -1 & -1 \\
0 & 0 & 0 & 0 & 0 & 0 & -3 & 6 
\end{bmatrix}
\begin{Bmatrix}
I_{1} \\
I_{2} \\
I_{3} \\
I_{4} \\
I_{5} \\
I_{6} \\
I_{7} \\
I_{8}
\end{Bmatrix}
=
\begin{Bmatrix}
0 \\
6 \\
0 \\
0 \\
0 \\
0 \\
0 \\
0 \\
\end{Bmatrix}
$$

Using the initial relaxation parameter of $1$, the solution diverges. Higher relaxation parameter values ($1\leq \omega \leq 2$) also caused divergence. For values of $\omega$ below $1$:
$$
\begin{array}{l|l|l|l|l|l|l|l|l|l|}
\text{Relaxation:} & 0.9 & 0.8 & 0.7 & 0.6 & 0.5 & 0.4 & 0.3 & 0.2 & 0.1 \\
\text{Conv. Iterations:}  & \text{N/A} & \text{N/A} & 20 & 26 & 34 & 46 & 65 & 98 & 206
\end{array}
$$
Thus, the solution converge for values below approximately $\omega \approx 0.8$; the least iterations achieved for all tested values occurred for $\omega = 0.7$. The Gauss-Seidel and MATLAB solutions are:
$$
\begin{array}{l|l|l|l|l|l|l|l|l|}
\text{Current (mA)}& I_{1} & I_{2}  & I_{3} &  I_{4} &  I_{5}  & I_{6}  & I_{7} & I_{8}\\
\text{Gauss-Seidel:} & 2.3999997 & 1.1999969 &  0.5999979 & 0.5999984 & 0.1499989 & 0.4499974 & 0.2999967 & 0.1499996 \\
\text{MATLAB:}  & 2.4 & 1.2 & 0.6 & 0.6 & 0.15 & 0.45 & 0.3 & 0.15
\end{array}
$$

Substituting into original equations to verify correctness:
$$
\begin{array}{ll}
\text{Junction A: } 2.4-1.2-0.6-0.6=0 & \quad \text{Loop 1: }2.4+3(1.2) = 6 \\
\text{Junction B: } 0.6-0.15-0.45=0  & \quad \text{Loop 2: } 6(0.6)-3(1.2) = 0 \\
\text{Junction C: } 0.45-0.3-0.15=0 & \quad \text{Loop 3: } 3(0.6)+12(0.15)-6(0.6)= 0 \\
 & \quad \text{Loop 4: } 2(0.45)+3(0.3)-12(0.15)= 0 \\
& \quad\text{Loop 5: } 6(1.5)-3(0.3)= 0 \\
\end{array}
$$
Note that I kept resistor coefficients as $1\text{k} = 1$ instead of $1\text{k}=1000$, so the resulting currents are in $\text{mA}$. 
## Circuit 2

KCL and KVL Equations:
$$
\begin{array}{ll}
\text{Junction A: } I_{1}-I_{2}-I_{3}=0 & \quad \text{Loop 1: }5I_{3}+105I_{5} = 125 \\
\text{Junction B: } I_{3}-I_{4}-I_{5}=0  & \quad \text{Loop 2: } 5I_{3}+10I_{4}+15I_{6} = 125 \\
\text{Junction C: } I_{2}+I_{4}-I_{6}=0 & \quad \text{Loop 3: } 25I_{2}+15I_{6} = 125 \\
\end{array}
$$
In matrix form, and then with partial pivoting to get rid of diagonal $0$s:
$$
\begin{bmatrix}
1 & -1 & -1 & 0 & 0 & 0 \\
0 & 0 & 1 & -1 & -1 & 0 \\
0 & 1 & 0 & 1 & 0 & -1 \\
0 & 0 & 5 & 0 & 105 & 0 \\
0 & 0 & 5 & 10 & 0 & 15 \\
0 & 25 & 0 & 0 & 0 & 15
\end{bmatrix}
\begin{Bmatrix}
I_{1} \\
I_{2} \\
I_{3} \\
I_{4} \\
I_{5} \\
I_{6}
\end{Bmatrix}
=
\begin{Bmatrix}
0 \\
0 \\
0 \\
125 \\
125 \\
125
\end{Bmatrix}
\implies
\begin{bmatrix}
1 & -1 & -1 & 0 & 0 & 0 \\
0 & 1  & 0 & 1 & 0 & -1 \\
0 & 0 & 1 & -1 & -1 & 0 \\
0 & 0 & 5 & 10 & 0 & 15 \\
0 & 0 & 5 & 0 & 105 & 0 \\
0 & 25 & 0 & 0 & 0 & 15
\end{bmatrix}
\begin{Bmatrix}
I_{1} \\
I_{2} \\
I_{3} \\
I_{4} \\
I_{5} \\
I_{6}
\end{Bmatrix}
=
\begin{Bmatrix}
0 \\
0 \\
0 \\
125 \\
125 \\
125
\end{Bmatrix}
$$

Using the initial relaxation parameter of $1$, the solution diverges. Higher relaxation parameter values ($1\leq \omega \leq 2$) also caused divergence. For values of $\omega$ below $1$:
$$
\begin{array}{l|l|l|l|l|l|l|l|l|l|}
\text{Relaxation:} & 0.9 & 0.8 & 0.7 & 0.6 & 0.5 & 0.4 & 0.3 & 0.2 & 0.1 \\
\text{Conv. Iterations:}  & \text{N/A} & \text{N/A} & 2261 & 116 & 85 & 82 & 93 & 128 & 231
\end{array}
$$
Thus, the solution converge for values below approximately $\omega \approx 0.8$; the least iterations achieved for all tested values occurred for $\omega = 0.4$. The Gauss-Seidel and MATLAB solutions are:
$$
\begin{array}{l|l|l|l|l|l|l|}
\text{Current (A)}& I_{1} & I_{2}  & I_{3} &  I_{4} &  I_{5}  & I_{6}\\
\text{Gauss-Seidel:} & 5.9999989 & 1.9999967 &  4.0000020 & 3.0000017 &  0.9999999 & 5.0000024 \\
\text{MATLAB:}  & 6 & 2 & 4 & 3 & 1 & 5 
\end{array}
$$
Substituting into the original system of equations to verify correctness:
$$
\begin{array}{ll}
\text{Junction A: } 6-2-4=0 & \quad \text{Loop 1: }5(4)+105(1) = 125 \\
\text{Junction B: } 4-3-1=0  & \quad \text{Loop 2: } 5(4)+10(3)+15(5) = 125 \\
\text{Junction C: } 2+3-5=0 & \quad \text{Loop 3: } 25(2)+15(5) = 125 \\
\end{array}
$$
