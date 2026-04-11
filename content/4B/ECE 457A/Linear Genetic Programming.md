---
title: Linear Genetic Programming
tags:
  - ece457a
date: 2026-04-10
aliases:
  - linear genetic programming
  - LGP
---
In linear genetic programming (LGP), an individual is not a tree but a sequence of instructions executed step by step. Program state is stored in registers $R_{1}, R_{2}, \dots, R_{m}$, where each instruction reads some registers and writes to another. The final output is taken from a designated register. This makes GP resemble assembly code, 3-address code, or the intermediate representations used in compilers.

A generic instruction has the form:
$$
R_{i} \leftarrow f(R_{j}, R_{k})
$$
where $f\in \{ +, -, \times, \div, \sin,\cos, \dots \}$.

For example, let's say we want to compute $x^{2}+x$. A simple LGP program is:
$$
\begin{align}
R_{1}  & \leftarrow x \\
R_{2} & \leftarrow R_{1}\cdot R_{1} \\
R_{3} & \leftarrow R_{2}+R_{1}
\end{align}
$$
Then, the output $R_{3}=x^{2}+x$.

This program is evaluated sequentially, so intermediate values are explicit and reusable, although registers might be overwritten later. Unlike standard tree GP, the **execution order is part of the genotype itself**.

LGP has the advantage of being natural for imperative or machine-level computation, requiring no recursive tree traversal during execution. That makes it efficient on CPUs and embedded hardware. It's also easy to include memory, loops, or conditions, and we can re-use intermediate results. However, the code can become hard to interpret, many instructions may become ineffective, and destructive mutations can corrupt later computations. Also, register usage design matters alot.
- There's also **inactive code**: Some instructions may write registers whose output values are never used in the final output. This is similar to introns in tree GP, which do not affect the phenotype immediately but may alter future evolvability. However, note that inactive code can actually be useful, just like introns; it can protect the active part from a disruptive crossover, or might become useful after later mutations.

## Data Dependency Graphs
Although LGP is stored as a sequence, it induces a data-dependency graph.

![[Linear Genetic Programming-1775864955287.webp|346]]

![[Linear Genetic Programming-1775864968213.webp|371]]

- Nodes = operations/registers
- Edges = data flow

## Mutation
Typical mutation operators for LGP include:
- Change the operator: $+ \to x$
- Change a source register
- Change the destination register
- Insert a new instruction
- Delete an instruction

Note that insertion is usually pretty easy:

![[Linear Genetic Programming-1775865141534.webp|474]]

But deletion might introduce issues. If $I_{2}$ above is deleted, any later instruction depending on $R_{4}$ may become invalid unless repair. Hence, we often enforce legal register references, repair after mutation, or fixed/bounded program length.

Note that other insertion and deletion mutations actually change the number of instructions, while replacement means the program length is still the same.

## Crossover
Crossover in LGP usually exchanges instruction segments.

![[Linear Genetic Programming-1775865771465.webp]]

Basically, crossover recombines partial computations; unlike tree GP, recombination happens over instruction blocks. Register consistency is important for meaningful offspring.

## Example

![[Linear Genetic Programming-1775866020438.webp]]

- Note that we are using a grammar here like [[Grammar-Guided Genetic Programming]]

![[Linear Genetic Programming-1775866005495.webp]]

![[Linear Genetic Programming-1775866035815.webp]]

![[Linear Genetic Programming-1775866052709.webp]]

![[Linear Genetic Programming-1775866062745.webp]]

![[Linear Genetic Programming-1775866099841.webp]]

![[Linear Genetic Programming-1775866106113.webp]]



