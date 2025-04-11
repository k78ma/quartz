---
title: Matrix
tags:
  - lin-alg
date: 2025-03-07
aliases:
  - matrix
---
Suppose $m$ and $n$ are nonnegative integers. An $m$-by-$n$ matrix $A$ is a rectangular array of elements of $\mathbb{F}$ with $m$ rows and $n$ columns:
$$
A=\begin{pmatrix}
A_{1,1}  & \dots & A_{1,n} \\
\vdots  &  &  \vdots \\
A_{m,1} & \dots & A_{m,n}
\end{pmatrix}
$$
The notation $A_{j,k}$ denotes the entry in row $j$, column $k$ of $A$.
- First index is row number
- Second index is column number

For example, if we have 
$$
A=\begin{pmatrix}
8 & 4 & 5-3i \\
1 & 9 & 7
\end{pmatrix}
$$
Thus $A_{2,3}$ refers to the entry in the second row, third column of $A$, which means that
$$
A_{2,3}=7
$$

## $\mathbb{F}^{m,n}$
With the definition of [[Matrix Addition|matrix addition]] and [[Scalar Multiplication of Matrix|scalar multiplication of matrices]], we can define a vector space.

For $m$ and $n$ positive integers, the set of all $m$-by-$n$ matrices with entries in $\mathbb{F}$ is denoted by $\mathbb{F}^{m,n}$.

### Dimension of $\mathbb{F}^{m,n}$
Suppose $m$ and $n$ are positive integers. With addition and scalar multiplication as defined above, $\mathbb{F}^{m,n}$ is a vector space with $\dim \mathbb{F}^{m,n}=mn$. 
- The additive identity of $\mathbb{F}^{m,n}$ is the $m$-by-$n$ matrix all of whose entries are $0$.

