---
title: Residual Block
tags:
  - dl
date: 2026-05-01
aliases: residual block
---
Residual blocks have each network layer compute an additive change to the current representation instead of transforming it directly. This causes an exponential increase in the activation magnitudes at initialization, which is compensated using [[Batch Normalization|batch normalization]]. Residual blocks with batch normalization allow much deeper networks to be trained, leading to increased performance across a variety of tasks. Specifically, they solve the problem of [[Shattered Gradients|shattered gradients]].

