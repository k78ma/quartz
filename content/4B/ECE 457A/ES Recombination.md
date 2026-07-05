---
title: ES Recombination
tags:
  - ece457a
date: 2026-04-09
aliases: es recombination
---
In ES, we can also do recombination to combine information from multiple parents to produce a new child solution.
- I don't really understand the point of this tbh. Isn't this just a fucking genetic algorithm now. I guess mutation is the main operator in ES and recombination is the main operator in GA or some bullshit

## Intermediate (arithmetic) recombination
The child is a weighted average of parents, common for real-valued vectors. Example (multiple parents):
$$
y=\sum_{k=1}^{\mu} w_{k}x^{(k)}, \quad  \sum_{k=1}^{\mu}w_{k}=1
$$
Example (two parents):
$$
y = \alpha x^{(1)} + (1-\alpha)x^{(2)}, \alpha \in  [0,1]
$$
- This is literally just [[Arithmetic Crossover|arithmetic crossover]] wtf

## Discrete recombination
The child copies values directly from parents.
$$
y_{i} = \begin{cases}
x_{i}^{(1)},  &  \text{w.p. } 1/2 \\
x_{i}^{(2)},  &  \text{w.p. } 1/2
\end{cases}
$$
Global discrete:
$$
y = \begin{cases}
x^{(1)}  & \text{w.p. } 1 / 2 \\
x^{(2)} & \text{w.p. } 1 /2
\end{cases}
$$

![[ES Recombination-1775762420235.webp]]

## Global Discrete Recombination
Choose the parent once and then copy the entire vector.

![[ES Recombination-1775762462652.webp]]