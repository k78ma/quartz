---
title: Growing Annuity
tags:
  - fina2203
date: 2025-03-01
aliases:
  - growing annuity
---
A growing annuity is a stream of $N$ growing cash flows, paid at regular intervals. It is a growing perpetuity that eventually comes to an end. The following timeline shows a growing annuity with initial cash flow $C$, growing at rate g every period until period $N$:

![[Growing Annuity.png|614]]

Conventions:
1. The first cash flow arrives at the end of the first period and
2. The first cash flow is before growth

The last cash flow therefore only reflects $N-1$ periods of growth.

The present value of an $N$-period growing annuity with initial cash flow $C$, growth rate $g$, and interest rate $r$ is given by
$$
PV=C\times \frac{1}{r-g}\left( 1-\left( \frac{1+g}{1+r} \right)^{N} \right)
$$
Because the annuity has a finite number of terms.