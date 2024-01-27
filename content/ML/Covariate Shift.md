---
title: Covariate Shift
tags:
  - ml
date: 2024-01-27
aliases:
---
If we consider the second layer of a 2-layer network, the distribution of its input value is changing changes over time as the first layer's weights changed.

Learning when the input distribution is changing is extra difficult: you have to change your weights to improve your predictions, but also just to compensate for a change in your inputs (imagine, for instance, that the magnitude of the inputs to your layer is increasing over time—then your weights will have to decrease, just to keep your predictions the same).

[[Batch Normalization]] was originally developed to address this problem.