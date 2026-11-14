---
title: Transfer learning
tags:
  - dl
date: 2025-12-28
aliases: transfer learning
---

When training data is limited, other datasets can be exploited to improve performance. In transfer learning, the network is *pre-trained* to perform a related secondary task for which data is more plentiful. The resulting model is then adapted to the original task. This is typically done by removing the last layer and adding one or more layers that produce a suitable output. The main model may be fixed, and the new layers trained for the original task, or we may *finetune* the entire model.

The principle is that the network will build a good internal representation of the data from the secondary (pre-training task), which can subsequently be exploited for the original task. Equivalently, transfer transfer learning can be viewed as initializing most of the parameters of the final network in a sensible part of the space that is likely to produce a good solution.

![[Transfer learning-1766983270957.webp]]