---
title: Recurrence Relations
tags:
  - cs
  - dsa
date: 2024-08-26
aliases:
  - recurrence relations
---
A recurrence relation is an equation in which a function is defined in terms of itself. 

The Fibonacci numbers are described by the recurrence relation
$$
F_{n}=F_{n-1}+F_{n-2}
$$
with the initial values $F_{0}=0$ and $F_{1}=1$. 

Any polynomial can be represented by a recurrence, such as the linear function:
$$
a_{n}=a_{n-1}+1, a_{1}=1 \quad \longrightarrow \quad a_{n}=n
$$
Any exponential can be represented by a recurrence:
$$
a_{n}=2a_{n-1}, a_{1}=1 \quad \longrightarrow \quad a_{n}=2^{n-1}
$$
Functions that cannot be easily described using conventional notation can be represented naturally using recurrences, such as:
$$
a_{n}=na_{n-1}, a_{1}=1 \quad \longrightarrow \quad a_{n}=n!
$$

The self-reference property of recurrence relations is shared with recursive programs or algorithms, as the shared roots of both terms reflect. Essentially, recurrence relations provide a way to analyze recursive structures, such as algorithms. Many [[Divide and Conquer Algorithms|divide-and-conquer algorithms]] have time complexities that are naturally modeled by recurrence relations. The ability to solve such recurrences is important to understanding when divide-and-conquer algorithms perform well, and provides an important tool for analysis in general.