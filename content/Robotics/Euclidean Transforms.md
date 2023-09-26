---
title: Euclidean Transforms
tags:
  - robotics
date: 2023-09-25
---
The Euclidean transform consists of rotation and translation.

### Rotation
Let’s think about rotation:
- We have a unit length orthogonal base $(\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3})$
- After a rotation it becomes $(\mathbf{e}_{1}',\mathbf{e}_{2}',\mathbf{e}_{3}')$
- A vector $\mathbf{a}$ has coordinate $(a_{1},a_{2},a_{3})$ and $(a_{1}', a_{2}', a_{3}')$ in the two systems.

Because the vector itself has not changed, we have:
$$
[\mathbf{e}_{1},\mathbf{e}_{2},\mathbf{e}_{3}]
\begin{bmatrix}
a_{1} \\
a_{2} \\
a_{3}
\end{bmatrix}
=
[\mathbf{e}_{1}',\mathbf{e}_{2}',\mathbf{e}_{3}']
\begin{bmatrix}
a_{1}' \\
a_{2}' \\
a_{3}'
\end{bmatrix}
$$
To describe the relationship between the coordinates, both sides of the equation are multiplied by 
$$
\begin{bmatrix} \mathbf{e}^T_{1} \\
\mathbf{e}^T_{2} \\
\mathbf{e}^T_{3}
\end{bmatrix}
$$
The matrix on the left becomes an identity matrix, so: 
$$
\left[ \begin{array}{l}
{a_1}\\
{a_2}\\
{a_3}
\end{array}\right]=\underbrace{\left[{\begin{array}{*{20}{c}}    
    {\mathbf{e}_1^T\mathbf{e}_1'} & {\mathbf{e}_1^T\mathbf{e}_2'} & {\mathbf{e}_1^T\mathbf{e}_3'}\\
    {\mathbf{e}_2^T\mathbf{e}_1'} & {\mathbf{e}_2^T\mathbf{e}_2'} & {\mathbf{e}_2^T\mathbf{e}_3'}\\
    {\mathbf{e}_3^T\mathbf{e}_1'} & {\mathbf{e}_3^T\mathbf{e}_2'} & {\mathbf{e}_3^T\mathbf{e}_3'}
    \end{array}} \right]}_{\text{rotation matrix}}\left[ \begin{array}{l}
a_1'\\
a_2'\\
a_3'
\end{array} \right] \buildrel \Delta \over = \mathbf{R} \mathbf{a}'.
$$
The [[Rotation Matrix]] $\mathbf{R}$ consists of an inner product between the two sets of bases, describing the same vector’s coordinate relationship before and after the rotation.

### Translation
For a vector $\mathbf{a}$, after rotation by $\mathbf{R}$ and a translation of $\mathbf{t}$, we get:
$$
\mathbf{a}'=\mathbf{R}\mathbf{a}+\mathbf{t}
$$
where $\mathbf{t}$ is the translation vector. Alternatively, if we call the original coordinate system $1$ and $2$, then we have:
$$
\mathbf{a}_{1}=\mathbf{R}_{12}\mathbf{a}_{2}+\mathbf{t}_{12}
$$
where $\mathbf{R}_{12}$ means “rotation of vector from system 2 to system 1”.
- Note that this is read from right to left!

The translation vector $\mathbf{t}$ corresponds to from system 1’s origin pointing to system 2’s origin. Note that:
$$
\mathbf{t}_{12} \neq -\mathbf{t}_{21}
$$
as $\mathbf{t_{12}}$ needs to be taken in system 2.
