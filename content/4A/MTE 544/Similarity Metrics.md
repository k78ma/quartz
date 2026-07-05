---
title: Similarity Metrics
tags:
  - mte544
date: 2025-11-01
aliases:
  - similarity metrics
  - SAD
  - SSD
---
When we detect a feature (like a corner or keypoint) in image 1, we want to find the same feature in image 2.

To do this, we compare patches (small windows of pixels) around the feature in the two images. To do this, we use similarity metrics.

Sum of Absolute Differences (SAD):
$$
SAD = \sum_{k=-a}^{a}\sum_{\ell=-b}^{b} \left| I_1(u+k, v+\ell) - I_2(u’ + k, v’ + \ell) \right|
$$
- Take a small window centered at (u,v) in Image 1.
- Take another window centered at (u’,v’) in Image 2.
- For each corresponding pixel in the two windows, compute the **absolute difference**
- Sum all those differences

Sum of Squared Differences (SSD):
$$
SSD = \sum_{k=-a}^{a}\sum_{\ell=-b}^{b} \left( I_1(u+k, v+\ell) - I_2(u’ + k, v’ + \ell) \right)^2
$$
- Same ideas as SAD, but we square the differences. This means that large differences are penalized more heavily, and smooths out