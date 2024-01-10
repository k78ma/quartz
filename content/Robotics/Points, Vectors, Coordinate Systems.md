---
title: Points, Vectors, Coordinate Systems
tags:
  - robotics
date: 2023-09-24
---
Most of this is review but the Visual SLAM uses some fancy notation so I took notes.
- See [[Vector Review]]

A point is a basic element in space with no length or volume. Connecting two points forms a vector.

A vector $\mathbf{a}$ in 3D space can be described by $\mathbb{R}^{3}$ with a set of base $(\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3})$:
$$
\mathbf{a}=[\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3}]
\begin{bmatrix}
a_{1} \\
a_{2} \\
a_{3}
\end{bmatrix}
=a_{1}\mathbf{e}_{1}+a_{2}\mathbf{e}_{2}+a_{3}\mathbf{e}_{3}
$$
where $(a_{1},a_{2},a_{3})^T$ are $\mathbf{a}$‘s coordinates.

### Inner Product
Also called a dot product.
$$
a \cdot b=a^{T}b= \sum_{i=1}^{3} a_{i}b_{i}=\mid a \mid \mid b \mid \cos \langle a,b \rangle
$$
where $\cos \langle a,b \rangle$ refers to the cosine of the angle between vector $a$ and $b$. This is used to describe the projection between vectors

### Outer Product
Also called a cross product.
$$
\begin{align}
a \times b &= \begin{vmatrix}
\mathbf{e}_{1} & \mathbf{e}_{2} & \mathbf{e}_{3} \\
a_{1} & a_{2} & a_{3} \\
b_{1} & b_{2} & b_{3}
\end{vmatrix}
=
\begin{bmatrix}
a_{2}b_{3}-a_{3}b_{2} \\
a_{3}b_{1}-a_{1}b_{3} \\
a_{1}b_{2}-a_{2}b_{1}
\end{bmatrix}
=
\begin{bmatrix}
0 & -a_{3} & a_{2} \\
a_{3} & 0 & -a_{1} \\
-a_{2} & a_{1} & 0
\end{bmatrix}
b \\ \\
&\triangleq  a ^\wedge b
\end{align}
$$
The result of this is a vector whose direction is perpendicular to the two vectors, and the length is $\mid \mathbf{a} \mid \mid \mathbf{b} \mid \sin \langle \mathbf{a,\mathbf{b}} \rangle$. The $\triangleq$ symbol means "is equivalent to".

The $\wedge$ operator is a skew-symmetric symbol, which means writing $\mathbf{a}$ as a skew-symmetric matrix, where:
$$
\mathbf{a} ^\wedge = 
\begin{bmatrix}
0 & -a_{3} & a_{2} \\
a_{3} & 0 & -a_{1} \\
-a_{2} & a_{1} & 0
\end{bmatrix}
$$
The turns the outer product $a\times b$ into the multiplication of the matrix $a^ {\wedge}$ and the matrix $b$, which is a linear operation.

>[!note] Skew-Symmetric
>Skew-symmetric matrix means that $\mathbf{A}$ satisfies $\mathbf{A}^{T}= -\mathbf{A}$.

