---
title: Finite Element Method for Structural Analysis
tags:
  - mte204
date: 2023-12-04
aliases:
---
The local stiffness matrix $k_{\text{local}}$​ for an element of length $L$ and area $A$ and Young's Modulus is given by:
$$
\begin{bmatrix}
F_{1} \\
F_{2}
\end{bmatrix}=
 \begin{bmatrix}
k  & -k \\
-k & k
\end{bmatrix}
\begin{bmatrix}
\delta_{1} \\
\delta_{2}
\end{bmatrix}, \quad k=\frac{EA}{L}
$$
Each element matrix is assembled into the global matrix. Note that if you have 3 elements, there will be 4 nodes so the matrix will be $4 \times 4$!

For example, if we have 3 elements:
- Element 1: Node 1, Node 2, stiffness $k_{1}$
- Element 2: Node 2, Node 3, stiffness $k_{2}$
- Element 3: Node 3, Node 4, stiffness $k_{3}$

Then we can add the local matrices to the global matrix like this:

For Element 1:
$$
\begin{bmatrix}
k_1 & -k_1 & 0 & 0 \\
-k_1 & k_1 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 
\end{bmatrix}
$$


For Element 2:
$$
\begin{bmatrix}
k_1 & -k_1 & 0 & 0 \\
-k_1 & k_1 + k_2 & -k_2 & 0 \\
0 & -k_2 & k_2 & 0 \\
0 & 0 & 0 & 0 
\end{bmatrix}
$$

For Element 3:
$$
\begin{bmatrix}
k_1 & -k_1 & 0 & 0 \\
-k_1 & k_1 + k_2 & -k_2 & 0 \\
0 & -k_2 & k_2 + k_3 & -k_3 \\
0 & 0 & -k_3 & k_3 
\end{bmatrix}
$$
#### Transformation to Global Coordinates
If an element is positioned at angle, such as many truss members, we have to use a transformation matrix.
$$
T=\begin{bmatrix}
\cos \theta & \sin \theta & 0 & 0 \\
-\sin \theta &  \cos \theta & 0 & 0 \\
0 & 0 &  \cos \theta & \sin \theta \\
0 & 0 & -\sin \theta & \cos \theta
\end{bmatrix}
$$
Note that this matrix is $4\times 4$ as truss members have $4\times 4$ local matrices (2 degrees of freedom at each node)

A local element stiffness matrix can be transformed to global coordinates can be found by:
$$
T^{T} \cdot  [k]\cdot T
$$
This can also be directly done with:
$$
[k] = \frac{EA}{L} \begin{bmatrix}
\cos(\theta)^2 & \cos(\theta)\sin(\theta) & -\cos(\theta)^2 & -\cos(\theta)\sin(\theta) \\
\cos(\theta)\sin(\theta) & \sin(\theta)^2 & -\cos(\theta)\sin(\theta) & -\sin(\theta)^2 \\
-\cos(\theta)^2 & -\cos(\theta)\sin(\theta) & \cos(\theta)^2 & \cos(\theta)\sin(\theta) \\
-\cos(\theta)\sin(\theta) & -\sin(\theta)^2 & \cos(\theta)\sin(\theta) & \sin(\theta)^2
\end{bmatrix}
$$
