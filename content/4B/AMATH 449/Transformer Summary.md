---
title: Transformer Summary
tags:
  - amath449
date: 2026-04-08
aliases: transformer summary
---
A transformer is a feedforward network, with an additional mechanism (attention) by which it is able to focus on parts of the input that harbour latent relationships.

![[Transformer Summary-1775687485163.webp|304]]


It is often used for sequence-to-sequence transformation, like language translation or generation. In general, it can be used to encoded sequences, like proteins.

## Sequence Embedding
We start with a sequence of inputs, and a corresponding sequence of outputs, both of which we break up into individual elements, like words.

![[Transformer Summary-1775687519200.webp|548]]

Each language has a vocabulary, in which each word is given a different number. This is called tokenization. 

Each word sequence is converted to a token sequence:

![[Transformer Summary-1775687557296.webp]]

Finally, each token is converted to a vector using an embedding. Suppose the embedding vectors have dim $d$.

![[Transformer Summary-1775687585002.webp]]

## Positional Encoding
The order of the words/tokens/vectors in the sequence matters, so we need a way to indicate their relative order.

Given embedding dimension $d$ and vector index $i = 0, \dots, \frac{d}{2}$:
- Even index elements:
$$
\text{PE}(\text{pos}, 2i) = \sin\left( \frac{\text{pos}}{10,000^{ \frac{2i}{d} }} \right)
$$
- Odd index elements:
$$
\text{PE}(\text{pos}, 2i+1) = \cos\left( \frac{\text{pos}}{10,000^{\frac{2i}{d}}} \right)
$$

![[Transformer Summary-1775687745972.webp]]

Then:
$$
x_{p} = \tilde{x}_{p} + \text{PE}(p, :)
$$
Note that:
$$
\text{PE}(\text{pos},:) \cdot \text{PE}(\text{pos}+k, :)
$$
is a constant function of $\text{pos}$.

![[Transformer Summary-1775687810629.webp|345]]

## Encoder
The encoder module is a collection of layers.

![[Transformer Summary-1775687907727.webp|161]]

### Attention
Attention calculates the similarity between different elements of the sequence and uses them to compute weights for elements of the sequence. The attention mechanism shortens the paths between related inputs in the sequence. For an attention layer, every output vector contains input from every vector in the 
sequence.

For each input vectors, we create 3 vectors: query, key, value.
$$
\begin{align}
x_{p}  & \quad \longrightarrow \quad q_{p} = x_{p}W_{q}, \quad  k_{p} = x_{p}W_{k}, \quad  v_{p} = x_{p}W_{v} \\[2ex] 
X  & \quad \longrightarrow \quad  Q = XW_{q}, \quad  K = XW_{k}, \quad  V=XW_{v}
\end{align}
$$
Compare each query vector to each key vector (dot product):
$$
s_{pi}=q_{k}\cdot k_{i} \quad \text{or} \quad  S = QK^{T}
$$
$s_{ij}=q_{i}\cdot k_{j}$ is vector $i$'s score for vector $j$.

These scores then get softmaxed and normalized to get the attention scores:
$$
A = \text{Softmax}\left( \frac{1}{\sqrt{ d }}S \right)
$$

![[Transformer Summary-1775688254800.webp|349]]

The output of this layer is a sequence of vectors. Each vector is composed of a weighted average of the value vectors, weighted by their corresponding scores.
$$
Z=AV
$$

![[Transformer Summary-1775688296072.webp|247]]

### Multi-Head Attention
It is common to have multiple attention "heads" in a layer, by simply duplicating the whole attention structure, and running it in parallel.

![[Transformer Summary-1775688357119.webp]]

All of these weight matrices can be lumped into one giant weight matrix, and then we just do
$$
Z= \text{MHA}(X)
$$

### Add & Norm
First, we perform layer normalization:
$$
y=\text{LN}(x)
$$
This is similar to batch normalization (BN), except in BN you normalize 
the input to (or output of) a single neuron over a batch. In layer normalization (LN), you normalize the inputs to a layer for each sample. This is essentially the transpose of BN on a batch.

![[Transformer Summary-1775688446097.webp]]

Then, like in batchnorm, we apply a learned bias and gain:
$$
\text{LN}(x) = \alpha \frac{x-\mu}{\sigma}
$$
where $\mu$ and $\sigma$ are the mean and standard deviation of the layer ($x$).

Finally, there is a residual connection:
$$
y = \text{LN}(x+\text{MHA}(x))
$$

### Feed-Forward Layer
The FF layer simply applies weights and biases, and is combined with a residual connection, and followed by another layer normalization.

This encoder module is repeated a number of times in series. The output of the encoder is a sequence of vectors, the same length as the input sequence.

## Decoder
The decoder is made up of many of the same parts as the encoder. However, the second block of MHA receives its query and key from the encoder. In addition, the "outputs" are revealed to the decoder one word (vector) per step. This is done by masking out the future words.

![[Transformer Summary-1775688658567.webp]]

