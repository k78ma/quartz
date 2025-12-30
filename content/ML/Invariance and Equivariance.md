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
such that its output changes in the same way under the transformation as the input. Networks for image classification should be invariant to geometric transformations of the same image. The network $f[\mathbf{x}]$ should identify an image as containing the same object, even if it has been translated, rotated, flipped, or warped.
## Equivariance
A function $f[\mathbf{x}]$ is *equivariant* or *covariant* to a transformation $t[\mathbf{x}]$ if
$$
f[t[\mathbf{x}]] = t[f[\mathbf{x}]]
$$
such that its output changes in the same way under the transformation as the input. Networks for per-pixel segmentation should be equivariant to geometric transformations. If the images is translated, rotated, or flipped, the network $f[\mathbf{x}]$ should identify an image as containing the same object, even if it has been translated, rotated, flipped, or warped.


![[Invariance and Equivariance-1767078483126.webp]]