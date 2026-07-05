---
title: Cooperative Simulated Annealing
tags:
  - ece457a
date: 2026-02-21
aliases: cooperative simulated annealing
---
Cooperative [[Simulated Annealing|simulated annealing]] implements concurrent synchronous runs of multiple SA processes. The concurrent processes are coupled through cooperative transitions, which replace the uniform distribution used to select the neighbors. Essentially, the algorithm manipulates multiple solutions (a population of solutions) at once.

To get a better idea of this, assume we have five solutions. We start with a randomly chosen population:
$$
\text{Pop}_{0} = [S_{1}, S_{2}, S_{3}, S_{4}, S_{5}]
$$
The new population is iteratively produced. Any new solution is cooperatively produced by the previous value of that solution, and the previous value of another randomly selected solution.

![[Cooperative Simulated Annealing-1771719357963.webp]]

How do we find $S_{1\text{new}}$ from $S_{1}$ and $S_{4}$? We find the neighbors of $S_{1}$ that are closer to $S_{4}$ than $S_{1}$ itself (using some distance measure). These neighbors constitute what is known as the CLOSER set.

The CLOSER set is defined as:
$$
\text{CLOSER} = \{ s_{k} \in  \mathcal{N}(S_{1}) \, | \,d(s_{k}, S_{4})<d(s_{k}, S_{1}) \}
$$
If the CLOSER set is not empty, the new solution is randomly selected from it. Otherwise, the new solution is randomly selected from the neighborhood of $S_{1}$.

The temperature is updated based on the difference of the mean fitness of the new and old populations:
$$
\begin{align}
\Delta E & =E(\text{Pop}_{k}) - E(\text{Pop}_{k-1}) \\[2ex] 
T  & = \begin{cases}
T,  & \text{if } \Delta E<0 \\
\alpha T,  & \text{otherwise}
\end{cases}
\end{align}
$$
