---
title: BERT
tags:
  - dl
date: 2026-06-28
aliases:
---
BERT is an encoder [[Transformers for NLP|transformer model]].
- Vocabulary of 30,000 tokens. 
- Input tokens are are converted to 1024-dimensional word embeddings and passed through 24 [[Transformer Layer|transformer layers]]. 
- Each transformer layer contains a [[Multi-Head Self-Attention|multi-head self-attention]] mechanism with 16-heads.
- The queries, keys, and values for each head are of dimension 64, such that the matrices $\Omega_{vh}, \Omega_{qh}, \Omega_{kh}$ are of $1024\times 64$.
- The dimension of the single hidden layer in the fully connected network is 4096.
- This totals to about 340 million parameters.

BERT uses [[Transfer learning|transfer learning]]. During pre-training, the parameters of the transformer are learned using self-supervision from a large corpus of text. The goal is for the model to learn general information about the statistics of language. During fine-tuning, the network is adapted to solve a particular task using a smaller body of labelled training data.

## Pre-training
To pre-train with self-supervision, BERT predicts missing words from sentences from a large internet corpus. It also uses a secondary task of predicting whether two sentences were originally adjacent in the text, but this only marginally improves performance.

![[BERT-1782689761913.webp]]


During training, the maximum input length is 512 tokens, the batch size is 256. The system is trained for a million steps.

Predicting missing words forces the transformer network to gain some understanding of syntax. For example, it might learns that:
- An adjective like "red" is often found before nouns like house or car but not before a verb like "shout"
- Some superficial common sense, like assigning higher probability to the missing word "train" in the sentence "The `<mask>` pulled into the station" than it would to the word "peanut".