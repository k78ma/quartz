---
title: Multi-Head Self-Attention
tags:
  - dl
date: 2026-06-27
aliases: multi-head self-attention
---
Multi-head self-attention
?
1. Run multiple self-attention heads in parallel
2. Concatenate their outputs along the feature dimension
3. Apply a learned linear transformation to combine them.
$$
\text{MhSA}[X] = [\text{Sa}_1[X],\ \text{Sa}_2[X],\ \dots,\ \text{Sa}_H[X]] \,\Omega_c
$$
<!--SR:!fsrs,2027-05-13T05:12:37.856Z,167,166.68007893,6.49586186,2,5,0,0,2026-11-27T05:12:37.856Z-->
+++

In multi-head self-attention, what dimension do concatenate the outputs of each attention head?
?
Along the **feature** dimension. If each head has dimensions $\frac{D}{ H}\times N$, we would concatenate to get $D \times N$.

![[Multi-Head Self-Attention-1795756038557.webp|301]]
<!--SR:!fsrs,2026-11-27T05:24:29.520Z,0,2.3065,2.11810397,1,1,0,1,2026-11-27T05:14:29.520Z-->
+++

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

In multi-head self-attention, if the embedding dimension is $D$ and there are $H$ heads, what is the dimension of the values, queries, and keys for each head?::$D / H$
<!--SR:!fsrs,2027-05-28T06:58:02.333Z,237,236.53690539,2.09058635,2,5,0,0,2026-10-03T06:58:02.333Z-->

The outputs for these self-attention mechanisms are concatenated along the feature dimension, and another linear transform $\Omega_{c}$ is applied to combine them:
$$
\text{MhSA}[X] = [\text{Sa}_1[X],\ \text{Sa}_2[X],\ \dots,\ \text{Sa}_H[X]] \,\Omega_c
$$
Multiple heads seem to be necessary to make self-attention to work well. It has been speculated that they make the self-attention network more robust to bad initializations.

![[Multi-Head Self-Attention-1782600717620.webp]]
- Note that diagram is using data of shape $(D,N)$ whereas my equations use $(N,D)$. In the $(D,N)$ case, concatenating along the feature dimension means we concatenate vertically.


