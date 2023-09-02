---
title: Subspaces
tags: []
date: 2023-09-01
---
Let’s say we have:
$$
A = \begin{bmatrix}
1 & 0 & 0 \\
-1 & 1 & 0 \\
0 & -1 & 1
\end{bmatrix}, ~ ~
C = \begin{bmatrix}
1 & 0 & -1 \\
-1 & 1 & 0 \\
0 & -1 & 1
\end{bmatrix}
$$
The columns of $C$ lie in the same plane such that they are *dependent*, and the columns of $A$ are *independent*, (see [[Linear Algebra/Linear Independence|Linear Independence]] and [[Linear Algebra/Vector Combinations|Vector Combinations]]). 

There are many vectors in $\mathbb{R}^3$ that don’t lie in the plane; these vectors cannot be written as a linear combination of the columns of $C$ and so correspond to values of $\vec{b}$ for which $C\vec{x}=\vec{b}$ has no solution $\vec{x}$. The linear combinations of the columns of $C$ form a 2-dimensional *subspace* of $\mathbb{R}^3$.

This plane of combinations of $\vec{u}, \vec{v},\vec{w}$ (the columns of $C$) can be described as “all vectors $C\vec{x}$”. But we know that vectors $\vec{b}$ for which $C\vec{x}=\vec{b}$ satisfy the condition $b_{1}+b_{2}+b_{3}=0$ (from [[Linear Algebra/Matrix Basics#A Second Example|this example]]). So the plane of all combinations of $\vec{u}$ and $\vec{v}$ consists of all vectors whose combinations sum to $0$.

On the other hand, if we take $A$, such that we have columns 
$$
\vec{u}=\begin{bmatrix}
1 \\
-1 \\
0
\end{bmatrix},
\vec{v}=\begin{bmatrix}
0 \\
1 \\
-1
\end{bmatrix},
\vec{w}=\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}
$$
we get the entire space $\mathbb{R}^3$; the equation $A\vec{x}=\vec{b}$ has a solution for every $\vec{b}$ in $\mathbb{R}^{3}$. We say that $\vec{u}, \vec{v},\vec{w}$ form a *basis* for $\mathbb{R}^{3}$.

>[!info] Basis, Vector Space, Subspace
>A *basis* for $\mathbb{R}^n$ is a collection of $n$ independent vectors in $\mathbb{R}^n$. Equivalently, a basis is a collection of $n$ vectors whose combinations cover the whole space. Or, a collection of vectors forms a basis whenever a matrix has those vectors as its columns is invertible.
>
>- A *vector space* is a collection of vectors that is closed under linear combinations.
>- A *subspace* is a vector space inside another vector space; a plane through the origin in $\mathbb{R}^3$ is an example of a subspace.
>	- A subspace could be equal to the space it’s contained in
>	- The small space contains only the zero vector $\vec{0}$

The subspaces of $\mathbb{R}^3$ are:
- The origin
- A line through the origin
- A plane through the origin
- All of $\mathbb{R}^{3}$