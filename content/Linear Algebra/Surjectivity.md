---
title: Surjectivity
tags:
  - lin-alg
date: 2025-01-21
aliases:
  - surjectivity
  - onto
  - surjective
---

> [!defintion] Surjective
> A function $T\, : \,V\to W$ is called *surjective* if its [[Range|range]] equals $W$.

Also called **onto**.

To illustrate the definition above, note that of the range [[Range#Examples|examples]] we saw, only the differentiation map is surjective. The zero map is surjective in the special case $W=\{ 0 \}$.

Whether a linear map is surjective depends on what we are thinking of as the vector space into which it maps.

For example, the differentiation map $D \in \mathcal{L}(\mathcal{P}_{5}(\mathbb{R}))$ defined by $Dp=p'$ is not surjective, because the polynomial $x^{5}$ is not in the range of $D$; there are no fifth-degree polynomials whose derivative are also fifth-degree polynomials, so $\mathcal{P}_{5}(\mathbb{R})$ is too big of an output space to be surjective.

However, the differentiation map $S \in \mathcal{L}(\mathcal{P}_{5}(\mathbb{R}), \mathcal{P}_{4}(\mathbb{R}))$ defined by $Sp=p'$ is surjective, because its range equals $\mathcal{P}_{4}(\mathbb{R})$, which is the vector space into which $S$ maps.