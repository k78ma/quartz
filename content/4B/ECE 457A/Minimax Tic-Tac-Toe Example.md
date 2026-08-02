---
title: Minimax Tic-Tac-Toe Example
tags:
  - ece457a
date: 2026-02-17
aliases: minimax tic-tac-toe example
---
## Open Lines Heuristic
Define an open line for player $P$ as a row/column/diagonal with no opponent mark. We use the heuristic:
$$
e(p) = \#\text{open}(X) - \#\text{open}(O)
$$

![[Minimax Tic-Tac-Toe Example-1771352734798.webp|331x182]]


![[Minimax Tic-Tac-Toe Example-1771352758892.webp|335x168]]

Thus, for this board, we would have $e(p)=6-5=1$.

## Evaluation Function
We can adapt the above heuristic to become $E(n)=M(n)-O(n)$, where
- $M(n)$ is the total number of my (MAX) possible winning lines
- $O(n)$ is the total number of opponent's (MIN) possible winning lines
- $E(n)$ is the total evaluation for state $n$

![[Minimax Tic-Tac-Toe Example-1771352974973.webp|505x474]]

Now, we use [[Minimax]] to solve the problem:
- Generate the game tree
- Apply the utility function to each terminal state to get its value
- Use these values to determine the utility of nodes one level higher up in the search tree.
    - From bottom to top:
    - For a MAX level, select the maximum level of its successors
    - For a MIN level, select the minimum value of its successors

Decision rule: From the root node, select the move which leads to the highest value.

![[Minimax Tic-Tac-Toe Example-1771353053721.webp]]

![[Minimax Tic-Tac-Toe Example-1771353216792.webp]]

![[Minimax Tic-Tac-Toe Example-1771353222814.webp]]

![[Minimax Tic-Tac-Toe Example-1771353230257.webp]]
