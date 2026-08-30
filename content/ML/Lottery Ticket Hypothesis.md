---
title: Lottery Ticket Hypothesis
tags:
  - dl
date: 2026-08-29
aliases: lottery ticket hypothesis
---
It was shown that for small networks like [[VGG]], you can get the same or better performance if you (1) train the network, (2) prune the weights with the smallest magnitudes and (3) re-train from the same initial weights. This doesn't work if the weights are randomly re-initialized. This leads to the conclusion that the original over-parameterized network contains small trainable sub-networks, which are sufficient to provide the performance. They term this the *lottery ticket hypothesis* and denote the sub-networks as *winning tickets*. 

This (perhaps) varies with network depth for a fixed parameter count, which might explain why deeper networks seem easier to fit than shallow ones, but a precise characterization of this idea is lacking.a