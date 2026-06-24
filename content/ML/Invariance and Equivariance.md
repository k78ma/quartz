---
title: Invariance and Equivariance
tags:
  - dl
date: 2025-12-30
aliases:
  - invariance and equivariance
  - invariant
  - equivariant
  - invariance
  - equivariance
---
Some properties of images are stable under transformations.
## Invariance
A function $f[\mathbf{x}]$ of an image $\mathbf{x}$ is *invariant* to a transformation $t[\mathbf{x}]$ if:
$$
f[t[\mathbf{x}]] = f[\mathbf{x}]
$$
such that its output is the same regardless of the transformation. Networks for image classification should be invariant to geometric transformations of the same image. The network $f[\mathbf{x}]$ should identify an image as containing the same object, even if it has been translated, rotated, flipped, or warped.

## Equivariance
A function $f[\mathbf{x}]$ is *equivariant* or *covariant* to a transformation $t[\mathbf{x}]$ if
$$
f[t[\mathbf{x}]] = t[f[\mathbf{x}]]
$$
such that its output changes in the same way under the transformation as the input. Networks for per-pixel segmentation should be equivariant to geometric transformations. If the images is translated, rotated, or flipped, the network $f[\mathbf{x}]$ should identify an image as containing the same object, even if it has been translated, rotated, flipped, or warped.


![[Invariance and Equivariance-1767078483126.webp]]

## Cards
#cards/dl

Invariance
?
A function $f[x]$ of an image $x$ is invariant to a transformation $t[x]$ if $f[t[x]] = f[x],$ such that its output is the same regardless of the transformation.
- Input image shifts but classification result is the same
<!--SR:!fsrs,2026-06-25T16:18:45.953Z,2,2.3065,4.743334,2,3,0,0,2026-06-23T16:18:45.953Z-->
+++

Equivariance
?
A function $f[x]$ is _equivariant_ to a transformation $t[x]$ if $f[t[x]] = t[f[x]]$, such that its output changes in the same way under the transformation as the input.
- Segmentation shifts the same way that input shifts
<!--SR:!fsrs,2026-06-25T16:19:01.509Z,2,2.3065,4.743334,2,3,0,0,2026-06-23T16:19:01.509Z-->
+++
