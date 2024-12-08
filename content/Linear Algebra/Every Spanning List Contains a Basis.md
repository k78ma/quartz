---
title: Every Spanning List Contains a Basis
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - every spanning list contains a basis
  - "2.30"
---
A spanning list in a vector space may not be a basis because it is not linearly independent. Our next result says that given any spanning list, some (possibly none) vectors in it can be discarded so that the remaining list is linearly independent and still spans the vector space. 

> [!theorem] Every spanning list contains a basis.
> Every spanning list in a vector space can be reduced to a basis of the vector space.

*Proof.* Suppose $v_{1},\dots,v_{n}$ spans $V$. We want to remove some of the vectors from $v_{1},\dots,v_{n}$ so that the remaining vectors form a basis of $V$. We do this through the process described below.

Start with $B$ equal to the list $v_{1},\dots,v_{m}$.

**Step 1:** If $v_{1}=0$, then delete $v_{1}$ from $B$. If $v_{1}\neq 0$, then leave $B$ unchanged.

**Step k:** If $v_{k}$ is in $\text{span}(v_{1},\dots,v_{k-1})$, then delete $v_{k}$ from the list $B$. If $v_{k}$ is not in $\text{span}(v_{1},\dots,v_{k-1})$, then leave $B$ unchanged.

Stop the process after step $n$, getting a list $B$. This list $B$ spans $V$ because our original list spanned $V$ and we have discarded only vectors that were in the span of the previous vectors. The process ensures that no vector in $B$ is in the span of the previous ones. Thus $B$ is linearly independent, by the [[Linear Dependence Lemma|linear dependence lemma]]. Hence $B$ is a basis of $V$. $\blacksquare$