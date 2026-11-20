---
title: Transformers for NLP
tags:
  - dl
date: 2026-06-28
aliases:
  - transformers for nlp
---
A typical NLP pipeline starts with a [[Text Tokenization|tokenizer]] that splits the text into words or word fragments. Then each of these tokens is mapped to a learned embedding, which are passed through a series of [[Transformer|transformer layers]].

## Tokenization.
See [[Text Tokenization]].

## Embeddings
Each token in the vocabulary $\mathcal{V}$ is mapped to a unique [[Vector Embeddings|word embedding]], and the embeddings for the whole vocabulary are stored in the matrix $\Omega_{c}\in \mathbb{R}^{\left| \mathcal{V} \right| \times D}$. 

To do this, the $N$ input tokens are first encoded in the matrix $T \in \mathbb{R}^{N\times\left| \mathcal{V} \right|}$, where the $n$-th row corresponds to the $n$-th token and is a $1\times \left| \mathcal{V} \right|$ one-hot vector. The input embeddings are computed as $X=T \Omega_{c}$, and $\Omega_{c}$ is learned like any other network parameter. 

![[Transformers for NLP-1782675604995.webp]]
- Note that this diagram is using column vectors instead of row vectors so all the dimensions are flipped.

A typical embedding size is 1024, and a typical total vocabulary size $\left| \mathcal{V} \right|$ is 30,000. Thus, even before the main network, there are many parameters in $\Omega_{c}$ to learn.

## Transformer model
Finally, the embedding matrix $X$ representing the text is passed through a series of $K$ [[Transformer|transformer layers]], called a *transformer model*.

There are three types of transformer models:

What are encoder models used for?::Transforms input into a contextual representation that can support downstream tasks. Example: [[Encoder Model|BERT]].
<!--SR:!fsrs,2027-03-30T06:41:14.306Z,173,172.94892613,2.09745544,2,4,0,0,2026-10-08T06:41:14.306Z-->

What are decoder models used for?::Autoregressive token prediction from previously available tokens. Repeating this produces text (for NLP use case). Example: [[Decoder Model|GPT-3]]
<!--SR:!fsrs,2027-02-08T06:41:25.603Z,123,123.3518639,4.74371562,2,4,0,0,2026-10-08T06:41:25.603Z-->

What are encoder-decoder models used for?:: Used in sequence-to-sequence tasks, where one text string is converted into another (e.g., [[Encoder-Decoder Model|machine translation]]).
<!--SR:!fsrs,2026-12-25T08:50:02.302Z,36,35.93233085,1,2,3,0,0,2026-11-19T08:50:02.302Z-->




