---
title: Triple Integration
tags:
  - mte203
date: 2023-11-11
aliases:
---
The triple integral of $f(x,y,z)$ over the region $R$ is defined as:
$$
\int \int \int f(x,y,z) \, dV = \lim_{ || \Delta V_{i} || \to 0 } \sum_{i=1}^{n}f(x_{i}^{*},y_{i}^{*},z_{i}^{*}) \Delta V_{i}
$$
where $\{ R_{i}|i \in I \}$ is a partition of $R$, $\Delta V_{i}$ is the volume of the sub-region $R_{i}$ and $(x_{i}^{*},y_{i}^{*},z_{i}^{*} ) \in R_{i}$.

Like [[Double Integrals]], we say the triple integral exists exactly when the limit exists.

#### Theorem
Let $S$ be a closed, piecewise-smooth surface that encloses a region $R$ with finite volume. If $f(x,y,z)$ is a continuous function inside and on $V$, then the triple integral of $f(x,y,z)$ over $R$ exists.

### Triple Iterated Integrals
A triple iterated integral is an integral of the form:
$$
\int_{a}^{b} \left( \int_{g_{1}(x)}^{g_{2}(x)}\left( \int_{h_{1}(x,y)}^{h_{2}(x,y)} f(x,y) \, dz  \right)  \, dy  \right) \, dx 
$$
The ordering of the variables of integration can also change as long as the limit functions change appropriately.

