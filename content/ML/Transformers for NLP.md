---
title: Transformers for NLP
tags:
  - dl
date: 2026-06-28
aliases:
  - transformers for nlp
  - tokenization
  - word embeddings
---
A typical NLP pipeline starts with a tokenizer that splits the text into words or word fragments. Then each of these tokens is mapped to a learned embedding, which are passed through a series of [[Transformer Layer|transformer layers]].

- [[Text Tokenization]]



## Embeddings
Each token in the vocabulary $\mathcal{V}$ is mapped to a unique *word embedding*, and the embeddings for the whole vocabulary are stored in the matrix $\Omega_{c}\in \mathbb{R}^{D\times \left| \mathcal{V} \right|}$.

