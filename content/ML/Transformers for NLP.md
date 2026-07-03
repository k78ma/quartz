---
title: Transformers for NLP
tags:
  - dl
date: 2026-06-28
aliases:
  - transformers for nlp
---
A typical NLP pipeline starts with a [[Text Tokenization|tokenizer]] that splits the text into words or word fragments. Then each of these tokens is mapped to a learned embedding, which are passed through a series of [[Transformer Layer|transformer layers]].

## Tokenization.
See [[Text Tokenization]].

## Embeddings
Each token in the vocabulary $\mathcal{V}$ is mapped to a unique [[Vector Embeddings|word embedding]], and the embeddings for the whole vocabulary are stored in the matrix $\Omega_{c}\in \mathbb{R}^{\left| \mathcal{V} \right| \times D}$. 

To do this, the $N$ input tokens are first encoded in the matrix $T \in \mathbb{R}^{N\times\left| \mathcal{V} \right|}$, where the $n$-th row corresponds to the $n$-th token and is a $1\times \left| \mathcal{V} \right|$ one-hot vector. The input embeddings are computed as $X=T \Omega_{c}$, and $\Omega_{c}$ is learned like any other network parameter. 

![[Transformers for NLP-1782675604995.webp]]
- Note that this diagram is using column vectors instead of row vectors so all the dimensions are flipped.

A typical embedding size is 1024, and a typical total vocabulary size $\left| \mathcal{V} \right|$ is 30,000. Thus, even before the main network, there are many parameters in $\Omega_{c}$ to learn.

## Transformer model
Finally, the embedding matrix $X$ representing the text is passed through a series of $K$ [[Transformer Layer|transformer layers]], called a *transformer model*.

There are three types of transformer models:
- An [[Encoder Model|encoder]] transforms the text embeddings into a representation that can support a variety of tasks. An example of this is [[Encoder Model|BERT]].
- A [[Decoder Model|decoder]] predicts the next token to continue the input text. An example of this is [[Decoder Model|GPT-3]].
- *Encoder-decoder* are used in sequence-to-sequence tasks, where one text string is converted into another (e.g., [[Encoder-Decoder Model|machine translation]]).