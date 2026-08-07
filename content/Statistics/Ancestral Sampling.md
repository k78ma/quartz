---
title: Ancestral Sampling
tags:
  - stats
date: 2026-08-05
aliases: ancestral sampling
---
When a joint distribution can be factored into a series of conditional probabilities, we can generate samples using ancestral sampling. the basic idea is to generate a sample from the root variable(s) and then sample from the subsequent conditional distributions based on this instantiation.

Consider a joint distribution $Pr(x,y,z)$ over three variables, which (in this particular case) factors as:
$$
Pr(x,y,z) = Pr(x) Pr(y|x)Pr(z|y)
$$
To sample from this joint distribution, we first draw a sample $x^{\ast}$ from $Pr(x)$. Then we draw a sample $y^{\ast}$ from $Pr(y|x^{\ast})$. Finally, we draw a sample $z^{\ast}$ from $Pr(z|y^{\ast})$.