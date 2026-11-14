---
title: Multi-task Learning
tags:
  - dl
date: 2025-12-28
aliases: multi-task learning
---
Multi-task learning is a technique in which the network is trained to solve several problems concurrently. It is somewhat conceptually similar to [[Transfer learning|transfer learning]].

For example, the network might take an image and simultaneously learn to segment the scene, estimate the pixel-wise depth, and predict a caption describing the image. All of these tasks require some understanding of the image and, when learned simultaneously, the model performance for each may improve. 

![[Transfer learning-1766983270957.webp]]