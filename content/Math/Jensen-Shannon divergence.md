---
title: Jensen-Shannon divergence
tags:
  - dl
  - stats
date: 2026-07-31
aliases: jensen-shannon divergence
---
[[Kullback-Leibler Divergence]] is not symmetric:
$$
D_{KL}[p(x) || q(x)] \neq D_{KL}[q(x) | | p(x)]
$$
The Jensen-Shannon divergence is a measure of distance that is symmetric by construction:
$$
D_{JS}\Big[ p(x) | | q(x) \Big] = \frac{1}{2}D_{KL}\left[ p(x) \Big| \Big| \frac{p(x)+q(x)}{2} \right] + \frac{1}{2}D_{KL}\left[ q(x) \Big| \Big| \frac{p(x)+q(x)}{2} \right]
$$
It is the mean divergence of $p(x)$ and $q(x)$ to the average of the two distributions.