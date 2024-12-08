---
title: Sum of Subspaces is the Smallest Containing Subspace
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - sum of subspaces is the smallest containing subspace
---
The next result states that the [[Sums of Subspaces|sums of subspaces]] is a subspace, and is in fact the smallest subspace containing all the summands (which means that every subspace containing all the summands also contains the sum).

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