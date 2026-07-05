---
title: 8-Queens Heuristic Example
tags:
  - ece457a
date: 2026-02-15
aliases: 8-queens heuristic example
---
**8-Queens Problem:** Place eight queens on an 8x8 chessboard so that no two queens attack each other – that is, no two share the same row, column, or diagonal.

We can define a heuristic for the number of attacking queen pairs:
$$
h_{1}(n)= \text{number of attacking queen pairs}
$$
- We can interpret $h_{1}=0$ as a valid solution. 
- Note that we are counting the number of *pairs*, not the diagonals

For the board below, there are 3 queens on the main diagonal, which creates ${3 \choose 2}=3$  conflicts. There are two additional conflicts. Thus, the total $h_{1}(n)=5$.

![[8-Queens Heuristic Example-1771198497323.webp|409x312]]

We could define a second heuristic as:
$$
h_{2}(n) = \text{\# of queens participating in } \geq 1\text{ conflict}
$$
- Once the queen at column 2 is conflict free

For the board above:
- Conflicts exist among queens in columns: $\{ 0,1,3,4,5,6,7 \}$
- Only the queen at column 2 is conflict-free.
- Therefore, $h_{2}(n)=7$

