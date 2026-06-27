---
title: Dot-Product Self-Attention
tags:
  - dl
date: 2025-10-10
aliases:
  - attention
  - dot-product self-attention
  - scaled dot-product self-attention
  - self-attention
---
[[Text Data Processing|Text data processing]] requires a model that uses parameter sharing to deal with long, variable-length input passages, and contains connections between word representations. The [[Transformer|transformer]] architecture acquires both properties using *dot-product self-attention*.

[Self-Attention & Transformers - CS 224N](https://web.stanford.edu/class/cs224n/readings/cs224n-self-attention-transformers-2023_draft.pdf) is a nice self-contained resource other than UDL.

## Dot-product self-attention
A self-attention block $\text{sa}[\bullet]$ takes $N$ inputs $x_{1}, \dots, x_{N}$, each of dimension $1\times D$, and returns $N$ outputs, each of which is also of size $1\times D$. In the context of NLP, each input might represent a word or word fragment ([[Tokenization|token]]).
- Note that the figures here (from UDL) instead assume data of shape $D\times 1$. I decided to use row vectors because that formulation is a bit more common.

First, a set of **values** are computed for each input with a standard linear transformation:
$$
v_{m} = \beta_{v}+ x_{m}\Omega_{v}
$$
Then, the $n$-th output, $\text{sa}_{n}[x_{1},\dots x_{N}]$, is a weighted sum of all the values $v_{1},\dots,v_{n}$:
$$
\text{sa}_{n}[x_{1},\dots,x_{N}]= \sum_{m=1}^{N} a[x_{m}, x_{n}]v_{m}
$$
The scalar weight $a[x_{m}, x_{n}]$ is the **attention** that the $n$-th output pays to input $x_{m}$. The $N$ weights $a[\bullet, x_{n}]$ are non-negative and sum to one. Thus, self-attention can be thought of as *routing* the values in different proportions to create each output.

![[Attention-1782523042806.webp]]

### Computing values
The same weights $\Omega_{v} \in \mathbb{R}^{D\times D}$ and biases $\beta_{v}\in \mathbb{R}^{1\times D}$ are applied to each input $x_{\bullet}\in \mathbb{R}^{1\times D}$. This computation scales linearly with the sequence $N$ (we just do the calculation $v_{m} = \beta_{v}+x_{m}\Omega_{v}$ once for each element in the sequence). Thus, this needs fewer parameters than a [[Neural Network Layer|fully-connected layer]] relating all $DN$ inputs to all $DN$ values. We can view the value computation as a sparse matrix operation with shared parameters that relates these $DN$ quantities.

![[Attention-1782523535277.webp]]

### Weighting values
The attention weights $a[x_{m}, x_{n}]$ combine the values from different inputs. They are also sparse, since there is only one weight for each ordered pair of inputs $(x_{m}, x_{n})$, regardless of the size of these inputs (see Figure 12.2c). 

The number of attention weights has a quadratic dependence on the sequence length $N$, but is independent of the length $D$ of each input.

### Computing attention weights with queries and keys
The outputs results from two chained linear transformations: the value vectors are computed independently for each input $x_{m}$, and then combined linearly by attention weights $a[x_{m}, x_{n}]$. However, the overall self-attention computation is nonlinear as the attention weights are nonlinear functions of the input.
- This is an example of a [[Hypernetwork|hypernetwork]]

To compute the attention, we apply two more linear transformations to the inputs:
$$
\begin{align}
q_{n}  & = \beta_{q}+ x_{n}\Omega_{q} \\
k_{m}  & = \beta_{k}+x_{m}\Omega_{k}
\end{align}
$$
where $\{ q_{n} \}$ and $\{ k_{m} \}$ are called **queries** and **keys**.

Then, we compute dot products between the queries and keys and pass the results through a softmax function:
$$
\begin{align}
a[x_{m}, x_{n}]  & = \text{softmax}[q_{n}k_{\bullet }^{T}] \\[2ex]
     & = \frac{\exp[q_{n}k_{m}^{T}]}{\sum_{m'=1}^{N}\exp[q_{n}k_{m'}^{T}]}
\end{align}
$$
Thus, for each $x_{n}$, they are positive and sum to one. This is called **dot-product self attention.**

![[Attention-1782524364787.webp]]

The dot product returns a measure of similarity between its inputs, so the weights $a[x_{\bullet}, x_{n}]$ depend on the relative similarities between the $n$-th query and all of the keys. The softmax function means that the key vectors "compete" against each other to contribute to the final result.

### Properties
Thus, we have seen that the dot-product self-attention mechanism has the properties desired to effectively deal with text data. It has a single shared set of parameters $\phi = \{ \beta_{v}, \Omega_{v}, \beta_{q}, \Omega_{q}, \beta_{k}, \Omega_{k} \}$. This is independent of the number of inputs $N$, so the network can be applied to different sequence lengths. Second, there are connections between the inputs, and the strength of these connections depends on the inputs themselves via the attention weights.

### Matrix form
The above computation can be written in a compact form if the $N$ inputs $x_{n}$ are stacked to form the rows of the $N\times D$ matrix $X$. (Each input is a row vector with feature dimension $D$, and our sequence length is $N$).

Then, the values, queries, and keys can be computed as:
$$
\begin{align}
V[X] & =\mathbf{1}\beta_{v}+X\Omega_{v}  \\
Q[X] & =\mathbf{1}\beta_{q}+X\Omega_{q} \\
K[X] & =\mathbf{1}\beta_{k}+X\Omega_{k}
\end{align}
$$
where $\mathbf{1}$ is an $N\times 1$ vector containing ones. The shape for the above is:
$$
(N\times D)=(N\times 1)(1\times D)+(N\times D)(D\times D)
$$

The self-attention computation is then:
$$
\text{Sa[X]}= \text{Softmax}[Q[X]K[X]^{T}] \cdot V[X]
$$
where the $\text{Softmax}[\bullet]$ function takes a matrix and performs the softmax operation independently on each of its rows. We can clean this up by just writing:
$$
\text{Sa}[X]=\text{Softmax}[QK^{T}] \cdot V
$$
The shape is:
$$
\begin{align}
 (N\times D) & = \text{Softmax}[(N\times D)(D\times N)]\cdot (N\times D) \\
     & = (N\times N)(N\times D)
\end{align}
$$

![[Dot-Product Self-Attention-1782526938574.webp]]

#cards/dl 
How does the number of attention weights depend on the sequence length $N$?::Quadratically. Each of the $N$ query vectors attends to all $N$ key vectors, producing an $N \times N$ attention matrix.
<!--SR:!fsrs,2026-06-27T02:45:24.113Z,0,2.3065,2.11810397,1,1,0,1,2026-06-27T02:35:24.113Z-->

How does the number of attention weights depend on the input dimension $D$?::No dependence
<!--SR:!fsrs,2026-06-27T02:45:30.956Z,0,2.3065,2.11810397,1,1,0,1,2026-06-27T02:35:30.956Z-->

What are the numerical properties of attention weights?::They are non-negative and sum to 1 because of softmax.
<!--SR:!fsrs,2026-06-27T02:45:39.269Z,0,2.3065,2.11810397,1,1,0,1,2026-06-27T02:35:39.269Z-->

Why is self-attention non-linear even with no activation function?::Dot-product and softmax
<!--SR:!fsrs,2026-06-27T02:45:10.360Z,0,2.3065,2.11810397,1,1,0,1,2026-06-27T02:35:10.360Z-->