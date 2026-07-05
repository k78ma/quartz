---
title: Multi-Head Self-Attention
tags:
  - dl
date: 2026-06-27
aliases: multi-head self-attention
---
Multiple [[Dot-Product Self-Attention|self-attention]] mechanisms are usually applied in parallel. Now, $H$ different sets of values, keys, and queries are computed:
$$
\begin{align}
V_{h}  & = \mathbf{1}\beta_{vh} + X\Omega_{vh} \\
Q_{h}  & = \mathbf{1}\beta_{qh} + X\Omega_{qh} \\
K_{h} & = \mathbf{1}\beta_{kh}+X\Omega_{kh}
\end{align}
$$
The $h$-th self-attention mechanism or *head* can be written as:
$$
\text{Sa}_{h}[X] = \text{Softmax}\left[ \frac{Q_{h}K_{h}^{T}}{\sqrt{ D_{k} }} \right]\cdot V_{h}
$$
where we have different parameters $\{ \beta_{vh}, \Omega_{vh} \}, \{ \beta_{qh}, \Omega_{q,h} \}, \{ \beta_{kh}, \Omega_{kh} \}$ for each head. 

Typically, if the dimensions of the input $x_{m}$ is $D$ and there are $H$ heads, the values, queries, and keys will all be of size $D/H$, as this allows for an efficient implementation.

The outputs for these self-attention mechanisms are concatenated along the feature dimension, and another linear transform $\Omega_{c}$ is applied to combine them:
$$
\text{MhSA}[X] = [\text{Sa}_1[X],\ \text{Sa}_2[X],\ \dots,\ \text{Sa}_H[X]] \,\Omega_c
$$
Multiple heads seem to be necessary to make self-attention to work well. It has been speculated that they make the self-attention network more robust to bad initializations.

![[Multi-Head Self-Attention-1782600717620.webp]]
- Note that diagram is using data of shape $(D,N)$ whereas my equations use $(N,D)$. In the $(D,N)$ case, concatenating along the feature dimension means we concatenate vertically.


#cards/dl
Multi-head self-attention
?
Run multiple self-attention heads in parallel, concatenate their outputs along the feature dimension, then apply a learned linear transformation to combine them.
$$
\text{MhSA}[X] = [\text{Sa}_1[X],\ \text{Sa}_2[X],\ \dots,\ \text{Sa}_H[X]] \,\Omega_c
$$
<!--SR:!fsrs,2026-07-05T05:44:03.581Z,0,2.3065,2.11810397,1,1,0,1,2026-07-05T05:34:03.581Z-->
+++

In multi-head self-attention, if the embedding dimension is $D$ and there are $H$ heads, what is the dimension of the values, queries, and keys for each head?::$D / H$
<!--SR:!fsrs,2026-07-11T03:21:58.351Z,11,10.97104786,2.1043314,2,3,0,0,2026-06-30T03:21:58.351Z-->