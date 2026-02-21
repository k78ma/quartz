---
title: Simulated Annealing
tags:
  - ece457a
date: 2026-02-20
aliases: simulated annealing
---
Simulated annealing is a [[Trajectory Search|trajectory search]] method inspired by the thermodynamic cooling of materials. A temperature parameter controls the randomness of motion, allowing us to converge from exploration to exploitation.

SA uses a probabilistic rule:
$$
P(\text{accept }s') = \begin{cases}
1,  & \Delta E \leq 0 \\
\exp(-\Delta E / T),  & \Delta E > 0
\end{cases}
$$
where $E$ is our cost function. That is, we always accept improving moves, and sometimes accept non-improving moves.

The temperature parameter $T$ governs this:
- $T$ high → More exploration (accept more uphill moves)
- $T$ low → More exploitation (mostly greedy)

![[Simulated Annealing-1771630272219.webp|456x274]]

## Cooling Schedules
$T$ is not held constant, but follows a schedule, such that we explore early and then exploit later. We don't want a schedule that is too fast (basically becomes hill climbing early), or one that is too slow (wastes time wandering).

Common schedule:
- Geometric: $T_{k+1}=\alpha T_{k}$, where $\alpha \in (0,1)$. 
    - This is a practical default.
- Linear: $T_{k+1}=T_{k}-\gamma$.
    - This is easy to reason about
- Very slow: $T_{k} \propto 1 / \log(k)$.
    - This provides some theoretical guarantees but is often too slow.

![[Simulated Annealing-1771630773534.webp|469x326]]

## Pseudocode

![[Simulated Annealing-1771630860830.webp]]


## Example
We aim to minimize energy $E(s)$. Let our current $E(s)=10$, with temperature $T=5$.

We take a random move in the neighborhood and sample a neighbor with $E(s')=11$.

Then:
$$
\Delta E=E(s')-E(s)=11-10=1
$$
and
$$
P(\text{accept}) = e^{- 1/5 } \approx 0.818
$$
Thus, even the move is worse, it is likely accepted due to the high $T$. This enables barrier crossing early in the run.

For $\Delta E = 1$, what is $P(\text{accept})$ for different temperatures?

![[Simulated Annealing-1771631256266.webp|488x94]]

Thus, we see that cooling converts from exploration (many uphill moves allowed) to exploitation (almost greedy).

## Practical Considerations
To make simulated annealing work better in practice, we do:
- [[Adaptive Neighborhood Control for Simulated Annealing|Adaptive neighborhood control]]
- Reheating and strategic restarts:
    - Detect stagnation: no improvement over $K$ iterations
    - Increase temperature temporarily: $T \leftarrow \gamma T$, with $\gamma>1$
    - Allows escape from a deep local minima without discarding accumulatd structure
- Multiple trials per temperature level
    - Perform $L$ neighbor evaluations at each temperature $T$
    - Reduces sensitivity to unlucky single moves

## Convergence Theory
The behavior of SA with constant temperature can be modeled using a [[Markov Chain]]. This is pretty intuitive – at a fixed $T$, SA defines a stochastic transition where the next state only depends on the current state, satisfying the Markov property.

It has been shown that under constant temperatures and as long as it's possible to find a sequence of exchanges that will transform any solution to another with non-zero probability, the process converges, independent of the starting solution.

With non-constant temperature, we have a non-homogeneous Markov chain. This converges if the temperature is reduced to zero slowly with a specific logarithmic form (that very slow cooling schedule) and the number of iterations at each temperature is large (exponential in terms of size).