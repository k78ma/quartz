---
title: Self-supervised Learning
tags:
  - dl
date: 2025-12-28
aliases: self-supervised learning
---
Methods like [[Transfer learning|transfer learning]] and [[Multi-task Learning|multi-task learning]] assume that we have plentiful data for a pre-training task or data for multiple tasks to be learned concurrently. If not, we can create large amounts of "free" labeled data using self-supervised learning and use this for transfer learning. There are two families of methods for self-supervised learning: generative and contrastive.

**Generative:** Parts of each data example are masked, and the pre-training task is to predict the missing part. For example, we might use unlabeled images and the task is to inpaint the missing parts of the image. Similarly, we might use text and mask some words, then train the network to predict the missing words before finetuning it for the actual language task we are interested in.

**Contrastive:** Pairs of examples with commonalities are compared to unrelated pairs. For images, the task might be to identify whether a pair of images are transformed versions of one another or are unconnected. For text, the secondary task might be to determine whether two sentences follow one another in the original document. Sometimes, the precise relationship between a connected pair must be identified (e.g., finding the relative position of two patches from the same image).


![[Transfer learning-1766983270957.webp]]