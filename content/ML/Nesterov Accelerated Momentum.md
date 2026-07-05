---
title: Nesterov Accelerated Momentum
tags:
  - dl
date: 2025-07-10
aliases:
  - Nesterov accelerated momentum
---
The momentum term can be considered a coarse prediction where the SGD algorithm will move next. Nesterov accelerated momentum computes the gradients at this predicted point rather than at the current point:
$$
\begin{align}
\mathbf{m}_{t+1} \quad  & \longleftarrow \quad \beta\cdot \mathbf{m}_{t} + (1-\beta) \sum_{i\in  \mathcal{B}_{t}} \frac{ \partial \ell_{i} [\phi_{t} - \alpha\beta \cdot \mathbf{m}_{t}] }{ \partial \phi } \\[2ex] 
\phi_{t+1} \quad  & \longleftarrow \quad \phi_{t} - \alpha \cdot  \mathbf{m}_{t+1}
\end{align}
$$
where now the gradients are evaluated at $\phi_{t}-\alpha \beta\cdot \mathbf{m}_{t}$.
- One way to think about this that the gradient term now corrects the path provided by momentum alone.

![[Nesterov Accelerated Momentum-20250710160416676.png]]
