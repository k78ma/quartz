---
title: Sums of Subspaces
tags:
  - lin-alg
  - math
date: 2024-09-04
aliases:
  - sums of subspaces
---
Suppose $V_{1},\dots,V_{m}$ are [[Subspaces|subspaces]] of $V$. The *sum* of $V_{1},\dots,V_{m}$, denoted by $V_{1}+\dots+V_{m}$, is the set of all possible sums of elements from $V_{1},\dots, V_{m}$. More precisely:
$$
V_{1}+\dots+V_{m}=\{ v_{1}+\dots+v_{m} : v_{1}\in V_{1},\dots,v_{m}\in V_{m} \}
$$
Sums of subspaces in the theory of vector spaces are analogous to unions of subsets in set theory. Given two subspaces of a vector space, the smallest subspace containing them is their sum. Analogously, given two subsets of a set, the smallest subset containing them is their union.
## Basic Examples
Let's look at some examples of sums of subspaces.

### Example: Sum of axis subspaces in $\mathbb{R}^{2}$.
Suppose $U,V$ are subspaces of $\mathbb{R}^{2}$, $U$ is the subspace of all vectors on the $x$-axis, $U=\{ (x,0) : x \in \mathbb{R} \}$ and $V$ is the subspace of all vectors on the $y$-axis, $W=\{ (0,y): y \in \mathbb{R} \}$. This would mean $U$ contains vectors like $(1,0), (-2,0), (3,0)$, and $W$ contains vectors like $(0,1),(0,-2), (0,3)$.

Then, the sum $U+W$ is the set of **all possible sum combinations** of a vector from $U$ and a vector from $W$. In other words, for any $(x,0)\in U$ and $(0,y)\in W$, where $x,y$ can be any real numbers, their sum is
$$
(x,0)+(0,y)=(x,y)
$$
This means that every vector in $U+W$ has the form $(x,y)$, where $x,y\in \mathbb{R}$. Thus, we actually have
$$
U+W=\mathbb{R}^{2}
$$
### Example: Sum of subspaces for $\mathbb{F}^{3}$
Suppose $U$ is the set of all elements of $\mathbb{F}^{3}$ whose second and third coordinates equal $0$, and $W$ is the set of all elements of $\mathbb{F}^{3}$ whose first and third coordinates equal $0$:
$$
\begin{align}
U = \{ (x,0,0)\in \mathbb{F}^{3} \,:\, x \in \mathbb{F} \} \\[2ex] 
W = \{ (0,y,0)\in \mathbb{F}^{3} \,:\, y \in \mathbb{F} \} \\[2ex] 
\end{align}
$$
Then
$$
U + W=\{ (x,y,0) \in \mathbb{F}^{3} \,:\, x,y \in \mathbb{F} \}
$$
### Example: Sum of subspaces of $\mathbb{F}^{4}$
Suppose
$$
\begin{align}
U = \{ (x,x,y,y)\in \mathbb{F}^{4} \,:\, x,y \in \mathbb{F} \} \\[2ex] 
W = \{ (x,x,x,y)\in \mathbb{F}^{4} \,:\, x,y \in \mathbb{F} \} \\[2ex] 
\end{align}
$$
We could say that:
- $U$ is the set of elements of $\mathbb{F}^{4}$ whose first two coordinates equal each other and whose third and fourth coordinates equal each other.
- $W$ is the set of elements of $\mathbb{F}^{4}$ whose first three coordinates equal each other.

To find a description of $U+W$, consider a typical element $(a,a,b,b)$ of $U$ and a typical element $(c,c,c,d)$ of $W$, where $a,b,c,d\in \mathbb{F}$. We have
$$
(a,a,b,b)+(c,c,c,d)=(a+c,a+c,b+c,b+d)
$$
which shows that every element of $U+W$ has its first two coordinates equal to each other. Thus
$$
U + W \subseteq \{(x,x,y,z) \in \mathbb{F}^4 : x,y,z \in \mathbb{F}\}
$$
where the $\subseteq$ is the symbol for "is a subset of".

To prove the inclusion in the other direction, suppose $x,y,z\in \mathbb{F}$. Then
$$
(x,x,y,z)=(x,x,y,y)+(0,0,0,z-y)
$$
where the first vector on the right is in $U$ and the second vector on the right is in $W$. Thus, $(x,x,y,z)\in U+W$, showing that the inclusion holds in the other direction:
$$
\{(x,x,y,z) \in \mathbb{F}^4 : x,y,z \in \mathbb{F}\} \subseteq U + W
$$
Hence, we have:
$$
U + W = \{(x,x,y,z) \in \mathbb{F}^4 : x,y,z \in \mathbb{F}\}
$$
which shows that $U+W$ is the set of elements of $\mathbb{F}^{4}$ whose first two coordinates equal each other.

## Sum of subspaces is the smallest containing subspace
The next result states that the sum of subspaces is a subspace, and is in fact the smallest subspace containing all the summands (which means that every subspace containing all the summands also contains the sum).

> [!theorem] Sum of subspaces if the smallest containing subspace
> Suppose $V_{1},\dots,V_{m}$ are subspaces of $V$. Then $V_{1}+\dots+V_{m}$ is the smallest subspace of $V$ containing $V_{1},\dots,V_{m}$.

*Proof.* 

First, we want to show that  $V_{1}+\dots+V_{m}$ contains the additive identity $0$ and is closed under addition and scalar multiplication. This implies that $V_{1}+\dots+V_{m}$ is a subspace of $V$.

**Additive Identity/Zero Element:** A subspace must contain the additive identity $0$, and since each $V_{i}$ for $i=1,\dots,m$ is a subspace, they each contain the zero vector. Therefore, the sum $V_{1}+\dots+V_{m}$ also contains the zero vector because you can write $0=0+\dots+0$ as a sum of elements from the subspaces.

**Closed under addition:** If we take two elements from $V_{1}+\dots+V_{m}$, say $v_{1}+\dots+v_{m}$ and $w_{1}+\dots+w_{m}$, where $v_{i} \in V_{i}$ and $w_{i} \in V_{i}$ for each $i$, then their sum is:
$$
(v_{1}+\dots+v_{m})+(w_{1}+\dots+w_{m})=(v_{1}+w_{1})+\dots+(v_{m}+w_{m})
$$
Since each $V_{i}$ is closed under addition, $v_{i}+w_{i}\in V_{i}$ for each $i$. Thus, the sum is still in $V_{1}+\dots+V_{m}$, which proves that $V_{1}+\dots+V_{m}$ is closed under addition.

**Closed under scalar multiplication:** If you take an element $(v_{1}+\dots+v_{m})\in (V_{1}+\dots+V_{m})$ and a scalar $\alpha \in \mathbb{F}$, then:
$$
\alpha(v_{1}+\dots+v_{m})=\alpha v_{1}+\dots+\alpha v_{m}
$$
Since each $V_{i}$ is closed under scalar multiplication, $av_{i}\in V_{i}$ for each $i$. Therefore, $\alpha(v_{1}+\dots+v_{m})\in (V_{1}+\dots+V_{m})$, showing closure under scalar multiplication.

Thus, we have shown that $V_{1}+\dots+V_{m}$ is a subspace of $V$.

Second, we want to argue that the subspaces $V_{1},\dots,V_{m}$ are all contained in $V_{1}+\dots+V_{m}$. To see this, we can note that an element of $V_{i}$ can be written as $v_{i}+0+\dots +0$ where all other components are zero. Hence, all $V_{1},\dots,V_{m}$ are contained within $V_{1}+\dots+V_{m}$. 

Every subspace of $V$ containing $V_{1},\dots,V_{m}$ contains $V_{1}+\dots+V_{m}$ (because subspaces must contain all finite sums of their elements). Thus $V_{1}+\dots V_{m}$ is the smallest subspace of $V$ containing $V_{1},\dots,V_m$.

Lastly, we want to show that $V_{1}+\dots+V_{m}$ is the smallest subspace that contains all $V_{1},\dots,V_{m}$. Suppose there is a subspace $W \subseteq V$ that contains all $V_{1},\dots,V_{m}$. Since $W$ contains all the individual subspaces, it must also contain all infinite sums of elements from those subspaces:
$$
v_{1}+v_{2}+\dots+v_{m}\in W
$$
But this is precisely what $V_{1}+\dots+V_{m}$ represents: the set of all infinite sums of elements from the subspaces $V_{1},\dots,V_{m}$. Thus, any subspace that contains $V_{1},\dots,V_{m}$ must also contain $V_{1}+\dots+V_{m}$. This makes $V_{1}+\dots+V_{m}$ the smallest subspace that contains all of $V_{1},\dots,V_{m}$.