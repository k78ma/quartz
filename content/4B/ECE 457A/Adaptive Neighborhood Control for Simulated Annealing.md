---
title: Adaptive Neighborhood Control for Simulated Annealing
tags:
  - ece457a
date: 2026-02-20
aliases: adaptive neighborhood control for simulated annealing
---
[[Simulated Annealing]] explores proposed neighbors $s' \in N(s)$. The size of $N(s)$ controls how far the algorithm can move.

In the early stages of the search, we want a larger neighborhood, which allows for disruptive moves that can cross energy barriers and structural traps. In the later stages, we want smaller neighborhoods that provide fine-grained local refinement. We can find the right neighborhood by using an acceptance-based rule:
$$
\begin{align}
\text{high acceptance}  & \implies \text{shrink moves} \\
\text{low acceptance} &  \implies \text{expand moves}
\end{align}
$$
where
$$
\text{acceptance rate} = \frac{\text{number of accepted moves}}{\text{number of proposed moves}}
$$
This essentially provides a feedback signal about the local shape of the cost landscape, whether the current neighborhood is too small or large, and whether the search is progressing or stagnating.

What does high/low acceptance mean exactly?

A high acceptance means that many proposed neighbors are accepted. Thus, many moves have small or negative $\Delta E$, such that the landscape is locally smooth. If we allow large moves in this case, we might overshoot good regions or destroy promising structure. Thus, we reduce the neighborhood radius.
- Search is moving easily → slow down and refine

Low acceptance rate means that many proposed neighbors are rejected. Small moves do not improve the solution, so the search might be trapped in a local minimum. To escape, we increase the neighborhood radius, allowing large structural changes.
- Small steps are insufficient → jump further.

This reduces the manual benefit tuning necessary for SA, improving robustness across problem instances, and prevents premature freezing or endless wandering.

Rule of thumb:

![[Adaptive Neighborhood Control for Simulated Annealing-1771631945867.webp]]

