---
title: Condition for Direct Sum of Two Subspaces
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - condition for direct sum of two subspaces
---
The next result gives a simple condition for testing whether a sum of two subspaces is a direct sum.

> [!theorem] Direct sum of two subspaces
> Suppose $U$ and $W$ are subspaces of $V$. Then
> $$
> U+W \text{ is a direct sum} \quad \Longleftrightarrow  \quad U \cap V = \{ 0 \}
> $$
> The symbol $\Longleftrightarrow$ means “if and only if ”; this symbol could also be read to mean “is equivalent to”. 

*Proof.*

First, we show that if we assume $U+W$ is a direct sum, we must have $U \cap W = \{ 0 \}$. 

Suppose $U+W$ is a direct sum. Suppose some element $v$ is in both $U$ and $V$, or $v\in U\cap W$. Then, we can write the zero vector as $0=v+(-v)$, where $v\in U$ and $-v\in W$. Since $U+W$ is a direct sum, the only way for us express $0$ as a sum of vectors from $U$ and $W$ is if both vectors are $0$. Thus, we have $v=0$. Thus, $U \cap W = \{ 0 \}$, completing the proof in one direction.

Now we want to prove the other direction; assuming that $U\cap W=\{ 0 \}$, we want to show that $U+W$ is a direct sum. 

Suppose $u\in U, w\in W$, and
$$
0=u+w.
$$
To complete the proof, we only need to show that $u=w=0$, which we showed above for the condition for direct sums. The equation above implies that $u=-w$. Since we are dealing with subspaces that are closed under scalar multiplication, $u=-w \in W$ means that $u\in W$ as well, which in turn means $u\in U\cap W$. Since our beginning assumption was $U\in W=\{ 0 \}$, we must have $u=0$, which by the equation above implies that $w=0$, completing the proof.

The result above deals only with the case of two subspaces. When asking about a possible direct sum with more than two subspaces, it is not enough to test that each pair of the subspaces intersect only at $\{ 0 \}$. To see this, consider the [[Direct Sums of Subspaces#Example A non-direct sum|the non-direct sum example]] above. In that non-example of a direct sum, we have $V_{1}\cap V_{2}=V_{1}\cap V_{3}=V_{2}\cap V_{3}=\{ 0 \}$.
