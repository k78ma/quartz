---
title: Robust Stability
tags:
  - elec3200
date: 2025-04-06
aliases:
  - robust stability
  - Kharitonov Theorem
  - interval polynomial
---
Sometimes we don't know the exact parameters of a system but only that they are in a certain range. It is often required to determine whether a system is stable for all possible values of its parameters.

Consider a set of polynomials:
$$
\mathcal{P}=\{ a(s)=a_{0}s ^{n}+a_{1}s ^{n-1}+\dots+a_{n-1}s+a_{n}\, : \,a_{i} \in  [\underline{a}_{i}, \bar{a}_{i}] \}
$$
This set of polynomials is often called an **interval polynomial**.

> [!theorem] Kharitonov Theoreom
> All members of $\mathcal{P}$ are stable if and only if the following four polynomials are stable:
> $$
> \begin{align}
> a_{1}(s) & =\underline{a}_{0}s ^{n}+\underline{a}_{1}s ^{ n-1}+\bar{a}_{2}s ^{n-3}+\bar{a}_{3}s ^{n-3}+\underline{a_{4}}s ^{n-4} \\
> a_{2}(s) & =\underline{a}_{0}s ^{n}+\bar{a}_{1}s ^{ n-1}+\bar{a}_{2}s ^{n-3}+\underline{a}_{3}s ^{n-3}+\underline{a}_{4}s ^{n-4} \\
> a_{3}(s) & =\bar{a}_{0}s ^{n}+\underline{a}_{1}s ^{ n-1}+\underline{a}_{2}s ^{n-3}+\bar{a}_{3}s ^{n-3}+\bar{a}_{4}s ^{n-4} \\
> a_{4}(s) & =\bar{a}_{0}s ^{n}+\bar{a}_{1}s ^{ n-1}+\underline{a}_{2}s ^{n-3}+\underline{a}_{3}s ^{n-3}+\bar{a}_{4}s ^{n-4}
>\end{align}
> $$

## Example

![[Robust Stability-20250406190556077.png]]
