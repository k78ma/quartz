---
title: SimCLR
tags: 
date: 2024-02-18
aliases:
---
Contrastive method from Google

Do data augmentation, use a encoder to extract representation vectors from images, and then train use a contrastive loss function on the vectors – basically just want to determine if two augmentation are from the same original image, or from different origins.