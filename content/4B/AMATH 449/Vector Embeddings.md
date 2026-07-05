---
title: Vector Embeddings
tags:
  - dl
  - amath449
date: 2026-03-25
aliases:
  - vector embeddings
  - word embeddings
---
We've seen that vectors can be used to represent inputs and outputs:
$$
\begin{align}
2  & = \begin{bmatrix}
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix} \in  \{ 0,1 \}^{10} \\
e  & = \begin{bmatrix}
0 & 0 & 0 & 0 & 1 & 0 &  \dots & 0
\end{bmatrix} \in  \{ 0,1 \}^{26}
\end{align}
$$
When it comes to word representations, we can create a vocabulary: the set of all words encountered in a dataset. We can order and index the vocabulary and represent words using one-hot vectors. Let $\text{word}_{i}$ be the $i$th word in the vocabulary:
$$
\text{``cat"} = v \in  \mathcal{W} \quad  \text{where} \quad  \mathcal{W}=\{ 0,1 \}^{N_{v}} \subset  \mathbb{R}^{N_{v}}
$$
where $N_{v}$ is the number of words in our vocabulary. The vector $v$ is the one-hot encoding of the word
$$
v_{i}= \begin{cases}
0 & \text{if word}_{i} \neq \text{``cat"} \\
1 & \text{if word}_{i} = \text{``cat"}
\end{cases}
$$
How do we handle the semantically similar words?
- "AMATH 449 is interesting" vs. "AMATH 449 is fascinating"

We would like to find a different representation for each word that incorporates their semantics.

![[Vector Embeddings-1774460295983.webp]]

Word embeddings can be learned end-to-end as part of a larger task, like in the case of [[Transformers for NLP#Embeddings|transformer models for NLP tasks]]. However, they can also be learned by training a standalone [[Embedding Model|embedding model]] whose sole objective is to produce useful vector representations of words.

## Embedding Space
The embedding space is a relatively low-dimensional space where similar inputs are mapped to similar locations. 

Why does this work? Words with similar meanings will likely co-occur with the same set of words, so the network should produce similar outputs, and therefore have similar hidden-layer activations.

### Cosine Similarity
The cosine angle is often used to measure the distance between two vectors in the embedding (latent) space.

![[Vector Embeddings-1774462438011.webp]]

### Vector Arithmetic with Embeddings
To some extent, we can do vector addition on embedding representations.

![[Vector Embeddings-1774462448866.webp|316]]