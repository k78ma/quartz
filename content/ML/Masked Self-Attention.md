---
title: Masked Self-Attention
tags:
  - dl
date: 2026-06-30
aliases: masked self-attention
---
To train a decoder for next-token prediction, we seek parameters that maximize the log probability of the input text under the autoregressive model (maximize the sum of the log conditional probability terms). Ideally, we would pass in the whole sentence and compute all the log probabilities and gradients in the same forward pass, rather than doing a forward pass for each token in the sentence.

However, if we pass in the full sentence $\text{``It takes great courage to appear weak"}$, the term computing $\log[Pr(\text{``great"})|\text{``It takes"}]$ would have access to the answer $\text{great}$ and the right context $\text{``courage to let yourself appear weak"}$. Hence, the model can cheat rather than learn to predict the following words and won't train properly; we want it to only have access to the left context $\text{``It takes"}$.

Fortunately, the tokens only interact in the self-attention layers in a transformer. Hence, we can solve this by ensuring that the attention to the answer and the right context is zero. We can do this by setting the corresponding dot products in the [[Dot-Product Self-Attention|self-attention computation]] to negative infinity before they are passed through the softmax, so that the weights are zero after the softmax. This is known as *masked self-attention*. In [[Dot-Product Self-Attention|Figure 12.1]] where we think of attention as routing, this would set all of the upward angled arrows to zero. 

With masked self-attention, attention matrix is lower triangular, while the masked-out region is the upper triangular part.

> [!NOTE]- Step-by-step
> With the $(N\times D)$ convention where each row is a token and $N$ is the sequence length, we can think of the unmasked scores:
> $$
> \begin{bmatrix} s_{11} & s_{12} & s_{13} & s_{14}\\ s_{21} & s_{22} & s_{23} & s_{24}\\ s_{31} & s_{32} & s_{33} & s_{34}\\ s_{41} & s_{42} & s_{43} & s_{44}  \\
> \end{bmatrix}
> $$
> After applying the causal mask:
> $$
> \begin{bmatrix} s_{11} & -\infty & -\infty & -\infty\\ s_{21} & s_{22} & -\infty & -\infty\\ s_{31} & s_{32} & s_{33} & -\infty\\ s_{41} & s_{42} & s_{43} & s_{44} \end{bmatrix}
> $$
> After row-wise softmax, the masked entries become zero:
> $$
> \begin{bmatrix}
>  * & 0 & 0 & 0\\ * & * & 0 & 0\\ * & * & * & 0\\ * & * & * & *  \\
> \end{bmatrix}
> $$
> Thus, the attention matrix becomes lower triangular, while the masked-out region is the upper triangular part.

Masked self-attention lets us train on the entire autoregressive rollout in one forward pass by making sure that the prediction at each position depends only on the current and preceding tokens. Although the entire sequence is fed into the transformer at once, the causal mask ensures that the hidden state at each position depends only on the current and preceding tokens. Thus, each output embedding behaves as if the model had been run on the corresponding prefix alone.

For example, the single forward pass over `It takes great courage` simultaneously computes the embeddings corresponding to the prefixes:
```
"It"                → embedding used to predict "takes"
"It takes"          → embedding used to predict "great"
"It takes great"    → embedding used to predict "courage"
```

Thus, while the input is a single sequence, the output is one embedding per position, where each embedding summarizes the prefix up to that position and is used to predict the following token. See the [[Decoder Model#Decoder training|decoder training]] for how this looks.

Masked attention also makes inference/generation more efficient with [[KV Cache]].

![[GPT-3-1782791891541.webp]]

#cards/dl 
Masked self-attention::Restrict each token to interacting only with current and previous tokens by setting attention scores (dot products) to $-\infty$ before the softmax.
<!--SR:!fsrs,2026-08-12T06:22:48.404Z,34,34.10547749,2.1043314,2,3,0,0,2026-07-09T06:22:48.404Z-->

Why do we use masked self-attention for autoregressive tasks?
?
- Prevents the model from cheating by attending to future tokens.
- Enables all next-token predictions in a sequence to be trained simultaneously in a single forward pass.
<!--SR:!fsrs,2026-08-01T06:25:15.497Z,23,23.42691302,4.74828477,2,3,0,0,2026-07-09T06:25:15.497Z-->
