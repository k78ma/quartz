---
title: KV Cache
tags:
  - dl
date: 2026-06-30
aliases: kv cache
---
For autoregressive generation, the model predicts one token at a time, requiring a new forward pass after each generated token. Without caching, this would require recomputing the representations of every previous token. However, because [[Masked Self-Attention|masked self-attention]] ensures that the representations of earlier tokens do not depend on future tokens, they do not need to be recomputed. Instead, we cache the keys and values for every token at every transformer layer and reuse them when generating subsequent tokens.

Suppose we have processed a sequence of $N$ tokens and cached the keys and values for every transformer layer. A new token has just been generated, and we want to append it to the sequence so that we can predict the following token.

1. Compute the embedding of the newly generated token.
2. Compute the new token's query, key, and value vectors.
3. Compute attention only for the new token by taking the dot product of its query with the cached keys of the previous $N$ tokens (and its own key) and applying softmax.
4. Calculate a new hidden representation by taking a weighted sum of the cached values and the new token's value using the attention weights.
5. Pass the resulting hidden representation through the remainder of the transformer layer (MLP, residual connections, LayerNorm) to obtain a new hidden state.
6. Cache the new key and value so that they can be re-used when the next token is generated.

Steps 2–6 are performed independently at every transformer layer. The hidden representation produced by one layer becomes the input to the next, where new queries, keys, and values are computed and the new key and value are added to that layer’s cache.

#cards/dl 
KV cache::Caches previously computed keys and values for cheaper autoregressive generation, avoiding re-computation by exploiting the causal structure of masked self-attention.
<!--SR:!fsrs,2026-10-01T19:38:12.777Z,69,68.9024762,2.09745544,2,4,0,0,2026-07-24T19:38:12.777Z-->