---
title: Condition for Direct Sums
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - condition for direct sums
---
The definition of direct sum requires every vector in the sum to have a unique representation as an appropriate sum. The next result shows that when deciding whether a sum of subspaces is a direct sum, we only need to consider whether $0$ can be uniquely written as an appropriate sum.

> [!theorem] Condition for Direct Sums
> Suppose $V_{1}, \dots, V_{m}$ are subspaces of $V$. Then, $V_{1}+\dots+V_{m}$ is a direct sum if and only if the only way to write $0$ as a sum $v_{1}+\dots+v_{m}$, where each $v_{k}\in V_{k}$, is by taking each $v_{k}$ equal to $0$.

*Proof*. 

First, we show necessity: assuming that $V_{1}+\dots+V_{m}$ is a direct sum, the only unique way to write the zero vector is if each $v_{k}=0$.

Suppose $V_{1}+\dots+V_{m}$ is a direct sum. All of the subspaces $V_{1},\dots,V_{m}$ are subspaces of $V$, which means all of these subspaces share the same additive identity $0$. Clearly, adding all of these additive identities $0_{1}+\dots+0_{m}$, where each $0_{k}\in V_{k}$, is equal to $0$. Then, the definition of direct sum implies that this is the **only** way to write $0$, since this $0$ must unique.

Thus, the definition of direct sum implies that the only way to write $0$ as a sum $v_{1}+\dots+v_{m}$, where each $v_{k}\in V_{k}$, is by taking each $v_{k}$ equal to $0$.

Second, we show sufficiency: assuming that the only way to express the zero vectors is by having all $v_{k}=0$, this implies that $V_{1}+\dots+V_{m}$ is a direct sum.

Suppose that the only way to write $0$ as a sum $v_{1}+\dots+v_{k}$, where $v_{k}\in V_{k}$, is by taking each $v_{k}$ equal to $0$. 

To show that $V_{1}+\dots+V_{m}$ is a direct sum, let some $v\in V_{1}+\dots+V_{k}$. We can write
$$
v=v_{1}+\dots+v_{m}
$$
for some $v_{1}\in V_{1},\dots,v_{m}\in V_{m}$. To show that this representation is unique, suppose we also have
$$
v=u_{1}+\dots+u_{m},
$$
where $u_{1}\in V_{1},\dots,u_{m}\in V_{m}$. Subtracting these two equations, we have:
$$
0=(v_{1}-u_{1})+\dots+(v_{m}-u_{m}).
$$
Because $v_{1}-u_{1}\in V_{1},\dots,v_{m}-u_{m}\in V_{m}$, the equation above implies that each $v_{k}-u_{k}$ equals $0$. This shows that any two representations of the same vector must be equal, so every vector actually only has one unique representation.