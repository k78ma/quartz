---
title: Embed to Control
tags:
  - dl
date: 2025-12-03
aliases: embed to control
---
[Embed to Control](https://arxiv.org/abs/1506.07365) is a 2015 paper that introduces the core ideas behind world modeling. Though it doesn't have many citations relative to the big papers today, it has nonetheless been [influential](https://x.com/ericjang11/status/1836474041445814527?s=20) on robot learning researchers. It's one of my personal favorites. In this blog, I walk through and implement the core ideas in the paper – note that we're not doing a perfect reproduction here, and I take some liberty with respect to the architectures. 

## Motivation and Background


## Variational Autoencoders
**Autoencoders**. 

A cheap way to do efficient feature extraction on images is to use a convolutional architecture. Thus, we add some convolution blocks in the decoder and some de-convolution blocks in the decoder.