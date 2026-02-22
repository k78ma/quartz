---
title: Representation in Genetic Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases: representation in genetic algorithms
---
We first define:
- **Genotype:** Internal encoded form manipulated by GA operators
- **Phenotype:** Actual candidate solution in the problem domain

![[Representation in Genetic Algorithms-1771784378706.webp]]

An example is genotype = 011101001, phenotype = 17.8.

Good genotypes induce smooth, meaningful neighborhoods in phenotype space.

## Binary Representation
A standard way of doing encoding is with binary representation, where decision variables are represented as bit strings:
$$
\mathbf{b} \in  \{ 0,1 \}^{L}
$$
- Advantages: Simple and universal, well-defined crossover and mutation, theoretical tractability
- Disadvantages: precision requires long chromosomes, artificial discontinuities may appear

Binary encoding maps a bit string to a real decision variable. For a variable $x \in[a,b]$ encoded using $n$ bits:
$$
x=a+\frac{\text{integer}(\mathbf{b})}{2^{n}-1}(b-a)
$$
Resolution (precision):
$$
\Delta x=\frac{b-a}{2^{n}-1}
$$
Each bit string corresponds to a discrete point in $[a,b]$. Increasing $n$ makes the grid finer. Thus, the genotype search space grows at $2^{n}$. Higher precision improves resolution, but increases chromosome length and search complexity.

### Hamming distance
The Hamming distance between two bit strings is the number of bit positions at which they differ. In binary encoding, a small Hamming distance does not guarantee a small phenotype change, as adjacent integers may differ by many bits.
$$
7=0111, \quad \quad  8=1000
$$
- Phenotype distance: $\left| 8-7 \right|=1$
- Hamming distance: 4

### Gray coding
Gray coding is a representation designed to preserve neighborhood structure. Consecutive integers differ by exactly one bit, so Hamming distance better correlates with numeric distance.

![[Representation in Genetic Algorithms-1771785255333.webp|331x249]]

This results in a smoother genotype-phenotype mapping, in turn resulting in improved local search behavior.