---
title: Bandpass Filter
tags:
  - mte220
date: 2023-12-03
aliases:
---
Bandpass filters only let frequencies in a certain range pass. 

The range of frequencies is called the bandwidth (BW). It goes from low to high -3dB frequencies ($f_{L}$ to $f_{H}$), such that
$$
\text{BW} = f_{H}-f_{L}
$$
The center frequency $f_{o}$ is a geometric mean such that
$$
f_{o} = \sqrt{ f_{L}f_{H} }
$$
The quality factor $Q$ is a measure of frequency selectivity
$$
Q = \frac{f_{o}}{\text{BW}}
$$
![[Bandpass Filter.png|480]]

A bandpass filter can easily be made by chaining a [[Low-pass Filter]] and [[Highpass Filter]] together:

![[Bandpass Filter-1.png|312]]