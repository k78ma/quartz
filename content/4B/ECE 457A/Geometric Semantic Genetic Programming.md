---
title: Geometric Semantic Genetic Programming
tags:
  - ece457a
date: 2026-04-10
aliases: geometric semantic genetic programming
---
Traditional GP evolves syntax (program structure). Geometric semantic GP evolves semantics (program behavior). The core idea is that we represent each program by its output vector on a dataset:
$$
p(x) \to y = [p(x_{1}), p(x_{2}), \dots, p(x_{n})]
$$
Then, evolution operates in a vector space where distances reflect behavioral differences. Operators become geometrically meaningful, and the fitness landscape becomes smoother.

Basically, instead of thinking of the program processing, we just view it by what it outputs. Then, each program is a point in $\mathbb{R}^{n}$, and the distance between programs is the difference in their outputs.

![[Geometric Semantic Genetic Programming-1775867676893.webp]]

Suppose two parent programs produce the following outputs on four training points:
$$
s(T_{1}) = (1,2,2,3), \quad  \quad  s(T_{2}) = (2,2,3,4)
$$
A semantic operator may construct an offspring behavior is some combination of the two:
$$
s(T_{\text{child}}) \approx \alpha s(T_{1}) + (1-\alpha)s(T_{2}), \quad  \quad  0 \leq \alpha \leq 1
$$
The child behaves "between" parents on the training set, making the fitness landscape smoother. Local improvements in semantics also become easier to exploit. However, the price we pay is that explicit program representations can grow very quickly unless special simplification mechanisms are used.