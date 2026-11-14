---
title: Frechet Distance
tags:
  - stats
date: 2026-07-29
aliases: frechet distance
---
The Frechet distance $D_{FR}$ between two distributions $p(x)$ and $q(y)$ is given by:
$$
D_{FR} \Big[p(x) | | q(y) \Big]  = \sqrt{ \underset{\pi(x,y)}{\operatorname{min}} \left[ \iint \pi(x,y) \left| x-y \right| ^{2}  \,dxdy \right] }
$$
where $\pi(x,y)$ represents the set of joint distributions that are compatible with the marginal distributions $p(x)$ and $q(y)$.

The Frechet distance can also be formulated as a measure of the maximum distance between the cumulative probability curves.