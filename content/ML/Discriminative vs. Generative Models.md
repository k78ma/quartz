---
title: Discriminative vs. Generative Models
tags:
  - dl
  - ml
date: 2024-12-16
aliases:
  - discriminative vs. generative models
---
The models $y=f[x,\phi]$ described in [[Supervised Learning]] are *discriminative* models. These make an output prediction $y$ from real-world measurements $x$. 

Another approach is to build a *generative model* $x=g[y,\phi]$, in which the real-world measurements $x$ are computed as a function of the output $y$. The disadvantage of this is that we don't directly predict $y$. To perform inference, we must invert the generative equation as $y=g^{-1}[x,\phi]$, and this may be difficult. However, generative models have the advantage that we can build in prior knowledge about how the data were created. For example, if we wanted to predict the 3D position and orientation of a car in an image $\mathbf{x}$, then we could build knowledge about car shape, 3D geometry, and light transport into the function $x=g[y,\phi]$.

Most modern machine learning models are still discriminative; the advantage gained from exploiting prior knowledge in generative models is usually trumped by learning very flexible discriminative models with large amounts of training data.