---
title: Grokking
tags:
  - dl
date: 2026-09-03
aliases: grokking
---
Grokking is the phenomenon in which a sudden improvement in generalization can occur many epochs after the training error is already zero.

![[Grokking-1788489460536.webp]]

It is proposed that grokking occurs when the norm of the weights is initially too large; the training data fits well, but the variation of the model between the data points is too large. Over time, implicit or explicit regularization decreases the norm of the weights until the reach the [[Properties of Loss Functions|Goldilocks zone]], and generalization suddenly improves.