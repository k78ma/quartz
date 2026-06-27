---
title: Positional Encoding
tags:
  - dl
date: 2026-06-27
aliases: positional encoding
---
The [[Dot-Product Self-Attention|self-attention]] mechanism by itself overlooks important information: the computation does not take into account the order of the inputs $x_{n}$. 

More precisely, self-attention is [[Invariance and Equivariance|equivariant]] with respect to input permutations. However, the order of the input matters when it comes to words in a sentece; "the woman ate the raccoon" has a different meaning than "the raccoon ate the woman".

## Absolute positional encodings
A matrix $\Pi$ is added to the input $X$ that encodes positional information. Assuming the input has shape $(N,D)$, where each row corresponds to one input token, each row of $\Pi$ is unique and hence contains information about the absolute position in the input sequence. This matrix can be chosen by hand or learned. It may be added to the network inputs or at every network layer. Sometimes it is added to $X$ in the computation of the queries and keys but not the values.

![[Positional Encoding-1782599885259.webp]]

## Relative positional encodings
The input to a self-attention mechanism might be a fragment of a sentence, an entire sentence, or even many sentences. Thus, the absolute position of a word is less important than the relative position between two words. Of course, this can be recovered if the system knows the absolute position of both, but relative positional encodings encode this information directly. 

Each element of the attention matrix corresponds to a particular offset between key position $a$ and query position $b$. Relative positional encodings learn a parameter $\pi_{a,b}$ for each offset and use this to modify the attention matrix by adding these values, multiplying by them, or using them to alter the attention matrix in some way.


#cards/dl
Self-attention is ==equivariant== with respect to input permutations, which is why we need positional encodings.
<!--SR:!fsrs,2026-06-27T22:42:12.101Z,0,2.3065,2.11810397,1,1,0,1,2026-06-27T22:32:12.101Z-->
