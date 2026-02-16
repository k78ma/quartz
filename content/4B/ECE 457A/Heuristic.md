---
title: Heuristic
tags:
  - ece457a
date: 2026-02-15
aliases:
  - heuristic
  - heuristic function
  - perfect heuristic
---
In general usage, a heuristic is an aid to learning, discovery, or problem-solving. In computing, it's a rule of thumb/simplification/educated guess that reduces or limits the search for solutions in difficult or poorly understood domains.

Unlike algorithms, heuristics do not guarantee optimality and may not even guarantee feasibility. In fact, they often have no theoretical guarantee at all. They are [[Weak vs. Strong Methods|weak methods]] that guide search but do not solve the problem.

## Algorithm vs. Heuristic
- Algorithm: A clearly defined, finite set of instructions or steps that guarantees a solution, assuming sufficient time or resources.
- Heuristic-based problem solving: Relies on guessing, learning, intuition, and discovery to seek a solution – with no guarantees of optimality or feasibility.

Thus, if you know how to solve a problem exactly, design an algorithm (assuming computational feasibility). If the process involved involves trial-and-error, intuition, or time pressure – and a good-enough solution is acceptable – use a heuristic.

## Heuristic Function
Typically, a heuristic is expressed as a **heuristic function**:
$$
h(n) = \text{estimated cost (or distance) from node }n \text{ to goal}
$$
- $h(n)\geq 0$ for all nodes $n$
- $h(n)=0$ implies that $n$ is a goal state
- larger $h(n)$ values indicate states that appear farther from the goal

We attempt to encode all domain knowledge used by the search algorithm in the heuristic function.

An important thing to note is that heuristic search is a weak method, as it uses limited/approximate problem knowledge, with no guarantee of optimality or even success. However, a well-chosen heuristic function can work well in practice.

## Admissible Heuristic Function
A heuristic is **admissible** if it never overestimates the true minimal remaining cost to goal:
$$
\,\, \forall \, n: \quad  h(n) \leq h^{\ast  }*n
$$
where $h^{\ast }(n)$ is the optimal cost from $n$ to a goal.

With an admissible heuristic, [[A* tree search]]  is optimal. Graph-search is also optimal (with a mild extra condition of *consistency*).

We can think of this intuitively as optimism: $h(n)$ is a lower bound on the remaining cost; it can be too small (underestimate) but not too large.

For example, if the true remaining cost is $h^{\ast }(n)=10$, then $h(n)=7$ and $h(n)=10$ are acceptable, but $h(n)=12$ is not.

## Heuristic Types
Perfect heuristic:
$$
h(n)=h^{\ast  }(n) \quad  \,\, \forall \, n
$$
- Returns the true remaining cost
- Distinguishes perfectly between good and bad states
- Theoretical ideal – not available in practice

Null heuristic:
$$
h(n)=0  \quad \,\, \forall \, n
$$
- Provides no guidance
- Equivalent to having no heuristic
- Useful as a baseline for comparison

More vs. less informed heuristic:
$$
h_{1}(n) \leq h_{2}(n)\leq h^{\ast  }(n) \quad \,\, \forall \, n
$$
- $h_{2}$ provides more information than $h_{1}$
- $h_{2}$ better discriminates between states
