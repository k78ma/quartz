---
title: Linear Independence
tags:
  - lin-alg
date: 2024-10-29
draft: 
aliases:
  - linear independence
  - linearly independent
---
Suppose $v_{1},\dots,v_{m}\in V$ and $v\in \text{span}(v_{1},\dots,v_{m})$. By the definition of span, there exist $a_{1},\dots,a_{m}\in \mathbb{F}$ such that
$$
v=a_{1}v_{1}+\dots+a_{m}v_{m}
$$
Is the choice of scalars in the equation above unique? Suppose $c_{1},\dots,c_{m}$ is another set of scalars such that
$$
v=c_{1}v_{1}+\dots+c_{m}v_{m}
$$
Subtracting the last two equations, we have
$$
0=(a_{1}-c_{1})v_{1}+\dots+(a_{m}-c_{m})v_{m}
$$
Thus we have written $0$ as a linear combination of $(v_{1}, \dots,v_{m})$. If the only way to do this is by using $0$ for all the scalars in the linear combination, then each $a_{k}-c_{k}=0$, which means that $a_{k}=c_{k}$, and thus the choice of scalars was indeed unique. This brings us to the definition of linear independence.

> [!definition] Definition: Linearly Independent
> A list $v_{1}, \dots,v_{m}$ of vectors in $V$ is called *linearly independent* if the only choice of $a_{1},\dots,a_{m}\in \mathbb{F}$ that makes
> $$
> a_{1}v_{1}+\dots+a_{m}v_{m}=0
> $$
> is $a_{1}=\dots=a_{m}=0$.
> 
> The empty list $(\,)$ is also declared to be linearly independent.

The reasoning above shows that $v_{1}, \dots,v_{m}$ is linearly independent if and only if each vector in $\text{span}(v_{1},\dots,v_{m})$ has only one representation as a linear combination of $v_{1}, \dots,v_{m}$.

> [!example] Linear Independence Examples
> **Example (a):** To see that the list $(1,0,0,0), (0,1,0,0), (0,0,1,0)$ is linearly independent in $\mathbb{F}^{4}$, suppose $a_{1}, a_{2}, a_{3}\in \mathbb{F}$ and
>$$
>a_{1}(1,0,0,0)+a_{2}(0,1,0,0)+a_{3}(0,0,1,0)=(0,0,0,0)
>$$
>Thus
>$$
>(a_{1}, a_{2}, a_{3}, 0)=(0,0,0,0)
>$$
>Hence $a_{1}=a_{2}=a_{3}=0$. Thus, the list $(1,0,0,0), (0,1,0,0), (0,0,1,0)$ is linearly independent in $\mathbb{F}^{4}$.
>
>**Example (b):** Suppose $m$ is a nonnegative integer. To see that the list $1,z, \dots, z^{m}$ is linearly independent in $\mathcal{P}(\mathbb{F})$, suppose $a_{0}, a_{1},\dots,a_{m}\in \mathbb{F}$ and
>$$
>a_{0}+a_{1}z+\dots+a_{m}z^{m}=0
>$$
>where we think of both sides as elements of $\mathcal{P}(\mathbb{F})$. Then
>$$
>a_{0}+a_{1}z+\dots+a_{m}z^{m}=0
>$$
>for all $z\in \mathbb{F}$. This implies that $a_{0}=a_{1}=\dots=a_{m}=0$. Thus, $1,z , \dots, z^{m}$ is a linearly independent list in $\mathcal{P}(\mathbb{F})$.
>
>**Example (c):** A list of length one in a vector space is linearly independent if and only if the vector in the list is not $0$. If the only vector in the list is $u =0$, then any $a_{k}\in \mathbb{F}$ would make $a_{k}u=0$.
>
>**Example (d):** A list of length two in a vector space is linearly independent if and only if neither of the two vectors in the list is a scalar multiple of the other.

If some vectors are removed from a linearly independent list, the remaining list is also linearly dependent.

> [!definition] Definition: Linearly Dependent
> A list of vectors in $V$ is called *linearly dependent* if it is not linearly independent.
> In other words, a list $v_{1}, \dots,v_{m}$ of vectors in $V$ is linearly dependent if there exist $a_{1},\dots,a_{m}\in \mathbb{F}$, not all $0$, such that $a_{1}v_{1}+\dots+a_{m}v_{m}=0$.

> [!example] Linear Independence Examples
> **Example (a):** $(2,3,1), (1,-1, 2), (7,3,8)$ is linearly dependent in $\mathbb{F}^{3}$ because
>$$
>2(2,3,1)+3(1,-1,2)+(-1)(7,3,8)=(0,0,0)
>$$
>
>**Example (b):** The list $(2,3,1), (1,-1,2),(7,3,c)$ is linearly dependent in $\mathbb{F}^{3}$ if and only if $c=8$. This is the solution we get when solving the system of equations
>$$
>\begin{align}
>2\lambda_{1}+\lambda_{2}+7\lambda_{3}=0 \\
>3\lambda_{1}-\lambda_{2}+3\lambda_{3}=0 \\
>\lambda_{1}+2\lambda_{2}+c\lambda_{3}=0
>\end{align}
>$$
>
>**Example (c):** If some vector in a list of vectors in $V$ is a linear combination of the other vectors. Then the list is linearly dependent. Proof: After writing one vector in the list as equal to a linear combination of the other vectors, move that vector to the other side of the equation, where it would be multiplied by $-1$, i.e:
>$$
>\lambda_{1} a+\lambda_{2}b=\lambda_{3}c \implies \lambda_{1}a+\lambda_{2}b-\lambda_{3}c=0
>$$
>
>**Example (d):** Every list of vectors in $V$ containing the $0$ vector is linearly dependent. This is the special case of the above.

See also: [[Linear Dependence Lemma]]