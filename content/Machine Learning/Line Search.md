---
title: Line Search
tags:
  - dl
date: 2025-07-13
aliases:
  - line search
---
Gradient descent with a fixed step size is inefficient because the distance moved depends entirely on the magnitude of the gradient. 
- It moves a long distance when the function is changing fast (where perhaps it should be more cautious) but a short distance when the function is changing slowly (where perhaps it should explore further). 

For this reason, gradient descent methods are usually combined with a line search procedure in which we sample the function along the desired direction to try to find the optimal step size. One such approach is bracketing:

![[Line Search-20250713164723671.png]]

Another problem with gradient descent is that it tends to lead to inefficient oscillatory behavior when descending valleys. 