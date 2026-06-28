---
title: LayerNorm
tags:
  - dl
date: 2026-06-27
aliases: layernorm
---
LayerNorm is similar to [[Batch Normalization|BatchNorm]] normalizes each individual sample using the mean and variance computed across its feature dimensions, rather than across the batch.

![[LayerNorm-1782618473529.webp]]

Suppose we have data where `X.shape == (N,D)`

In BatchNorm, we would do
```python
mean = np.mean(X, axis=0, keepdims=True)   # (1, D)
std  = np.std(X, axis=0, keepdims=True)    # (1, D)
X_norm = (X - mean) / (std + eps)

# X =
# [[x11 x12 x13]
# [x21 x22 x23]
# [x31 x32 x33]]
#       ↑
#     normalize down each column
```

In LayerNorm, we would do:
```python
mean = np.mean(X, axis=1, keepdims=True)   # (N, 1)
std  = np.std(X, axis=1, keepdims=True)    # (N, 1)
X_norm = (X - mean) / (std + eps)

# X =
# [[x11 x12 x13]  ← normalize across this row
# [x21 x22 x23]  ← normalize across this row
# [x31 x32 x33]] ← normalize across this row
```

In both cases, we would then do:
```python
X = gamma * X + delta   # broadcast over N
```
where both `gamma` and `delta` have shape `(1,D)` that gets broadcast over `N`.

#cards/dl 
LayerNorm::Normalize samples across feature dimension instead of batch dimension.
<!--SR:!fsrs,2026-06-30T19:32:22.286Z,2,2.3065,2.11121424,2,2,0,0,2026-06-28T19:32:22.286Z-->
