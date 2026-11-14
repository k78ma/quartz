---
title: Autocorrelation Function
tags:
  - math
date: 2026-06-22
aliases:
  - autocorrelation function
  - autocorrelation
---
> [!def] Autocorrelation function
> The autocorrelation $r[\tau]$ of a continuous function $f[z]$ is defined as:
> $$
> r[\tau] = \int_{-\infty}^{\infty} f[t+\tau]f[t] \, dt 
> $$
> where $\tau$ is the time lag. Sometimes, this is normalized by $r[0]$ so that the autocorrelation at time lag zero is one. 
> 
> The autocorrelation function is a measure of the correlation of the function with itself as a function of an offset (i.e., the time lag). If a function changes slowly and predictably, then the autocorrelation function will decrease slowly as the time lag increases from zero. If the function changes fast and unpredictably, then it will decrease quickly to zero.

