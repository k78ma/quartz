---
title: Alpha-Beta Pruning
tags:
  - ece457a
date: 2026-02-17
aliases: alpha-beta pruning
---
[Algorithms Explained – minimax and alpha-beta pruning](https://www.youtube.com/watch?v=l-hh51ncgDI)

In adversarial search, many branches are irrelevant. If the position is already not better than what we can get elsewhere, it is not worth exploring further. If the opponent can force a bad outcome, exploring good replies that the opponent will never allow is wasted work. So, we can prune subtrees that cannot affect the minimax decision.

Minimax explores about $O(b^{d})$ nodes, alpha-beta return the same minimax decision, but prunes branches that cannot affect the backed-up value. With good move ordering, the effective branching factor drops such that $b_{\text{eff}}\ll b$. In the best case:
$$
N_{\alpha \beta}(d) \approx O(b^{d/2})\quad \implies \quad b_{\text{eff}}\approx \sqrt{ b }
$$
## Alpha and Beta Bounds
$\alpha$:
- Best (highest) value found so far for MAX
- Lower bound on what MAX can guarantee
- Increasing (non-decreasing) along a path

$\beta$:
- Best (lowest) value found so far MIN
- Upper bound on what MIN can force
- Decreasing (non-increasing) along a path

## Algorithm
1. Perform depth-first minimax search.
2. Maintain bounds $(\alpha, \beta)$ along each path. Start at $\alpha=-\infty, \beta=+\infty$.
3. At MAX nodes:
    - Update $\alpha=\max(\alpha, v)$
    - Prune if $\alpha \geq \beta$
4. At MIN nodes:
    - Update $\beta=\min(\beta,v)$
    - Prune if $\beta \leq \alpha$

Alpha cutoff: While exploring a MIN node, if the current best values $v$ satisfies $v \leq \alpha$, then MAX already has an alternative guaranteeing at least $\alpha$. So MIN will never choose this branch, and we will prune the remaining children.

Beta cutoff: While exploring a MAX node, if the current best value $v$ satisfies $v \geq \beta$, then MIN already has an alternative limiting MAX to at most $\beta$. So, this branch cannot improve the outcome and the remaining children will be pruned.

## Properties
- Complete: Yes (for finite game trees). 
- Optimal: Yes (against an optimal opponent). 
- Worst-case time: $O(b^{d})$ (same as minimax).
- Best-case time: $O(b^{d / 2})$ with perfect move ordering. 
- Space complexity: $O(bd)$ using depth-first search.

## Comparison to Minimax
Alpha-beta returns the same optimal move/value, but fewer nodes are evaluated with pruning. However, the savings strongly depend on move ordering.

If good moves are explored first, $\alpha$ rises quickly at MAX nodes and $\beta$ drops quickly at MIN nodes. Many siblings satisfy $\alpha \geq \beta$ early. In the worst case, where bad moves are explored first, the bounds tighten slowly, with few/no cutoffs.

Thus, move-ordering heuristics are often used to sort children using a score that can be calculated quickly. Then we sort using the score, descending at MAX and ascending at MIN.

![[Alpha-Beta Pruning-1771361240541.webp]]

## Examples
### Video Example

![[Alpha-Beta Pruning-1771623707083.webp]]

### Example 1

![[Alpha-Beta Pruning-1771360824414.webp]]

![[Alpha-Beta Pruning-1771355176388.webp]]

![[Alpha-Beta Pruning-1771355203822.webp]]

![[Alpha-Beta Pruning-1771355220414.webp]]

![[Alpha-Beta Pruning-1771355231936.webp]]

![[Alpha-Beta Pruning-1771355242060.webp]]

![[Alpha-Beta Pruning-1771355250063.webp]]

![[Alpha-Beta Pruning-1771355260921.webp]]

![[Alpha-Beta Pruning-1771355281623.webp]]

![[Alpha-Beta Pruning-1771355295416.webp]]

![[Alpha-Beta Pruning-1771355311236.webp]]

![[Alpha-Beta Pruning-1771360583545.webp]]

![[Alpha-Beta Pruning-1771360857320.webp]]

![[Alpha-Beta Pruning-1771360881030.webp]]

![[Alpha-Beta Pruning-1771360889010.webp]]

![[Alpha-Beta Pruning-1771360908210.webp]]

### Example 2

![[Alpha-Beta Pruning-1771360949944.webp]]

![[Alpha-Beta Pruning-1771360963015.webp]]

![[Alpha-Beta Pruning-1771360969192.webp]]

![[Alpha-Beta Pruning-1771360975581.webp]]

![[Alpha-Beta Pruning-1771360981114.webp]]

![[Alpha-Beta Pruning-1771360985935.webp]]

![[Alpha-Beta Pruning-1771360991828.webp]]
