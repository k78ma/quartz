---
title: Memetic Algorithms
tags:
  - ece457a
date: 2026-04-10
aliases: memetic algorithms
---
Memetic algorithms combine global evolutionary search with local improvement.

![[Memetic Algorithms-1775868619326.webp]]

![[Memetic Algorithms-1775868955693.webp]]

Essentially, the idea is that evolutionary algorithms are more random than necessary near an optimum, as the mutation/recombination may be too coarse. On the other hand, local search methods and gradient descent are good at this type of thing but might get stuck in local optima.

For a differential problem, the simple abstract form of memetic algorithms is:
$$
x' = x+\epsilon -\eta \nabla f(x)
$$
where $\epsilon$ provides stochastic exploration and $-\eta \nabla f(x)$ provides local descent.

In algorithmic form:

![[Memetic Algorithms-1775868827839.webp]]

Formally, if $\mathcal{E}$ denotes the evolutionary variation operator and $\mathcal{L}$ the local search operator, a pure evolutionary algorithm would be:
$$
P^{(t+1)} = \mathcal{R}(\mathcal{E}(P^{(t)}))
$$
A memetic algorithm inserts the local search:
$$
P^{(t+1)} = \mathcal{R}(\mathcal{L}(\mathcal{E}(P^{(t)})))
$$
We can also think of EA as providing guidance to find basins to enter, and local search as determining where inside that basin is the lowest point.

![[Memetic Algorithms-1775869239718.webp]]

## Analysis
Consider the simplified memetic update:
$$
x_{t+1} = x_{t}+\epsilon_{t} -\eta \nabla f(x_{t})
$$
The candidate evolves candidate solutions $x_{t}$, but convergence should be analyzed relative to an optimum $x^{\ast }$. Define the error state:
$$
e_{t} = x_{t}-x^{\ast  }
$$
Then:
$$
e_{t+1} = x_{t+1} - x^{\ast  } = e_{t} + \epsilon_{t} - \eta \nabla f(x_{t})
$$
So, for convergence we want:
$$
e_{t} \to 0 \quad  \iff \quad  x_{t} \to x^{\ast  }
$$
Near a smooth local optimum $x^{\ast }$, the gradient can be linearized:
$$
\nabla f(x_{t}) \approx H(x_{t}-x^{\ast  }) = He_{t}
$$
where $H$ is the Hessian at $x^{\ast }$.

So the local dynamics become:
$$
e_{t+1} = (1-\eta H)e_{t} + \epsilon_{t}
$$
We can either do a deterministic contraction to go toward the optimum:
$$
(I-\eta H) e_{t}
$$
or do exploratory forcing $\epsilon_{t}$ to re-inject diversity and allow basin transitions. This is the local dynamical interpretation of memetic search.


> [!example]- Quadratic Example and Analysis
> ![[Memetic Algorithms-1775869663666.webp]]
> 
> ![[Memetic Algorithms-1775869679744.webp]]
> 
> ![[Memetic Algorithms-1775869691005.webp]]
> 
> ![[Memetic Algorithms-1775869711541.webp]]
> 
> ![[Memetic Algorithms-1775869719003.webp]]
> 
> ![[Memetic Algorithms-1775869866696.webp]]

Thus, we can see that the parameters $\sigma$ and $\eta$ define the search regime: $\sigma$ sets the noise level (exploration), and $\eta$ controls contraction (refinement).
- Large $\sigma$, small $\eta$ gives highly exploratory behavior, with weak refinement. This results in large steady-state variance.
- Small $\sigma$, moderate $\eta$ gives stronger local exploitation. This gives tighter concentration, with variance limited below by $\sigma^{2}$.
- If we set $\eta$ to be too large, we can get unstable behavior.

## Scheduling
Naively, we can apply local search every $k$ generations:
$$
\mathcal{L}_{k}(x) = \begin{cases}
\mathcal{L }(x),  & t \mod k =0 \\
x,  & \text{otherwise}
\end{cases}
$$
Frequent local search gives strong exploitation but is expensive. Sparser scheduling means that more exploration is retained, with lower cost, but with the trade-off of slower local improvement.

### Adaptive schedules
A fixed local-search policy might be suboptimal throughout the run. We can adapt the memetic intensity over time, such that early generations emphasize exploration, and later generations increase local refinement. Examples:
- Increase local-search depth as diversity decreases
- Decrease memetic intensity when the population starts collapsing too quickly

## Selection
What individuals should receive local search?

Let $S\subseteq P$ denote the selected subset of individuals that receive local search.
- If we want this to be all offspring, we set $S=K$. This gives the strongest exploitation but also has the strongest collapse risk.
- If we want elites only, we do $S=\text{top-k}$. This concentrates effort on promising regions.
- We can also do a random subset $S\sim \text{sample}(P)$. This spreads improvement more broadly.

## Depth
If local search is applied repeatedly, we can write:
$$
x^{(d)} = \mathcal{L}^{d}(x)
$$
where $d$ is the local-search depth.

If we have $d=1$, that's just one corrective local step. Moderate $d$ gives more meaningful refinement, while very large $d$ means near-full local convergence.

But deeper local search means high cost:
$$
\text{cost} = O(d\cdot \text{local-eval cost})
$$
Thus, depth controls a trade-off between better local precision and greater computational burden.

## Lamarckian vs. Baldwinian
There are two conceptually different ways that local search can be integrated into evolution.

In **Lamarckian learning**, the improved solution directly replaces the genotype.
$$
x \leftarrow\mathcal{L}(x)
$$
This transfers acquired improvement directly.

In **Baldwinina learning,** the genotype is unchanged but its evaluated quality refletcs local improvement:
$$
f'(x) = f(\mathcal{L}(x))
$$
This rewards genotypes that *can* improve well.

## Applications/Examples

> [!example]- One-Dimensional Minimization
> ![[Memetic Algorithms-1775870695455.webp]]
> 
> ![[Memetic Algorithms-1775870706458.webp]]
> 
> ![[Memetic Algorithms-1775870727606.webp]]

> [!example]- Combinatorial Example: TSP
> ![[Memetic Algorithms-1775870759114.webp]]
> 
> ![[Memetic Algorithms-1775870772783.webp]]
> 
> ![[Memetic Algorithms-1775870781307.webp]]

> [!example]- Neural Networks with Memetic Search
> ![[Memetic Algorithms-1775871399866.webp]]
> 
> ![[Memetic Algorithms-1775871409635.webp]]


## Cost
Let $N$ be the population size, $d$ be the local search depth, and $c_{f}$ be the cost of one fitness evaluation. A rough per-generation model is:
$$
O(N_{C_{f}} + \left| S \right| d \,c_{f})
$$
where $S$ is the subset receiving local search.

This highlights a practical fact: Memetic algorithms often use fewer generations, but each generation is more expensive. So, they are attractive when better solutions justify  more effort per candidate