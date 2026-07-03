---
title: Transformers for Long Sequences
tags:
  - dl
date: 2026-07-01
aliases: transformers for long sequences
---
Each token in a transformer [[Encoder Model|encoder model]] interacts with every other token, so the computational complexity scales quadratically with the sequence length. For a [[Decoder Model|decoder model]], masked attention makes it so that each token only interacts with previous tokens, so there are roughly half the number of interactions; however, this still scales quadratically.

![[Transformers for Long Sequences-1782959409220.webp|504]]

This quadratic increase in computation ultimately limits the length of sequences that can be used. Many methods have been developed to extend the transformer to cope with longer sequences.

One way to do this is to prune the self-attention interactions, or, equivalently, to sparsify the interaction matrix. For example, restricting to a **convolutional structure** so that each token only interacts with a few neighboring tokens. Across multiple layers, tokens still interact at larger distances as the receptive field expands. Like image convolution, the kernel can vary in size and dilation rate. 

A pure convolutional approach requires many layers to integrate information over large distances. One way to speed up this process is to allow select tokens (perhaps at the start of every sentence) to attend to all other tokens (encoder model) or all previous tokens (decoder model). A similar idea is to have a small number of global tokens connect to all the other tokens and themselves. Like the `<cls>` token, these do not represent any word but serve to provide long-distance connections.