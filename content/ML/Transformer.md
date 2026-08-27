---
title: Transformer
tags:
  - dl
date: 2026-06-27
aliases:
  - transformer layer
  - transformer layers
  - transformer
---
Transformer layers consist of:
- A [[Multi-Head Self-Attention|multi-head self-attention]] unit, which allows word representations to interact with each other
- A fully connected network $\text{mlp}[x_{\bullet}]$, which operates separately on each word

Both units are [[Residual Networks|residual networks]] – their output is added back to the original input. In addition, it is typical to add a [[LayerNorm]] operation after both the self-attention and fully connected networks.

The complete transformer layer can be described by the following series of operations:
$$
\begin{align}
X  & \leftarrow X + \text{MhSA}[X] \\[1.2ex]
X  & \leftarrow \text{LayerNorm}[X] \\[1.2ex]
x_{n}  & \leftarrow x_{n} + \text{mlp}[x_{n}]  & \,\, \forall \, n \in  \{ 1,\dots,N \}\\[1.2ex]
X  & \leftarrow \text{LayerNorm}[X]
\end{align}
$$
where the row vectors $x_{n}$ are separately taken from the full data matrix $X$. In a real network, the data passes through a series of these transformer layers.

![[Transformer Layer-1782618120912.webp]]
- Note that this image uses $D\times N$ input data (column vectors for each input) while it's more standard to do $N\times D$ (row vectors).

#cards/dl 
Transformer layer operations::Input embeddings → MhSA + residual → LayerNorm → MLP + residual → LayerNorm → Output embeddings
<!--SR:!fsrs,2026-09-07T00:10:06.520Z,11,10.96433194,2.11121424,2,2,0,0,2026-08-27T00:10:06.520Z-->