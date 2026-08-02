---
title: Wasserstein GAN
tags:
  - dl
date: 2026-07-31
aliases:
  - Earth mover's distance
---
## Wasserstein distance
We've seen that the [[GAN Stability Analysis|GAN loss]] can be interpreted in terms of distances between probability distributions. In the original formulation, the gradient of this distance becomes zero when the generated samples are too easy to distinguish from the real examples. Thus, we aim to choose a distance metric with better properties.

The Wasserstein or earth mover's distance (for discrete distributions) is the quantity of work required to transport the probability mass from one distribution to create the other. Here, "work" is defined as the mass multiplied by the distance moved. This makes the Wasserstein distance well-defined even when the distributions are disjoint and decreases smoothly as they become closer to one another.

### Discrete (Earth mover's distance)
Consider distributions $Pr(x=i)$ and $q(x=j)$ defined over $K$ bins. Assume there is a cost $C_{ij}$ associated with moving one unit of mass from bin $i$ in the first distribution to bin $j$ in the second. This cost might be the absolute difference $\left| i-j \right|$ between the indices. The amounts that are moved form the *transport plan* and are stored in the matrix $\mathbf{P}$.

![[Wasserstein GAN Loss-1785548228684.webp]]

The Wasserstein distance is defined as:
$$
D_{w}[Pr(x) \mid \mid q(x)] - \underset{\mathbf{P}}{\operatorname{min}}\left[ \sum_{i,j} P_{ij}\cdot \left| i-j \right|  \right]
$$
subject to the constraints that:
- $\sum_{j}P_{ij} = Pr(x=i)$ *– initial distribution of Pr(x)*
- $\sum_{i}P_{ij}= q(x=j)$ *– initial distribution of q(x)*
- $P_{ij} \geq 0$ *– non-negative masses*

In other words, the Wasserstein distance is the solution to a constrained minimization problem that maps the masses of one distribution to the other. This is inconvenient, as we must solve this minimization problem over the elements $P_{ij}$ every time we want to compute the distance. Fortunately, this is a standard problem that is easily solved for small systems of equations. It's a linear programming problem in its primal form:

![[Wasserstein GAN Loss-1785548264095.webp|464]]

where $\mathbf{p}$ contains the vectorized elements $P_{ij}$ that determine the amount of mass moved, $\mathbf{c}$ contains the distance, $\mathbf{Ap}=\mathbf{b}$ contains the initial distribution constraints, and $\mathbf{p} \geq 0$ ensures the masses moved are non-negative.

As for all linear programming problems, there is an equivalent dual problem with the same solution. Here, we maximize with respect to a variable $\mathbf{f}$ that is applied to the initial distributions, subject to constraints that depend on the distances $\mathbf{c}$. The solution to this dual problem is:
$$
D_{w}\Big[Pr(x) \mid \mid q(x)\Big] = \underset{\mathbf{f}}{\operatorname{max}}\left[ \sum_{i} Pr(x=i)f_{i} - \sum_{j}q(x=j)f_{j} \right]
$$
subject to the constraint that:
$$
\left| f_{i+1} - f_{i} \right|  <1
$$
In other words, we optimize over a new set of variables $\{ f_{i} \}$ where adjacent values cannot change by more than one.

### Continuous
Translating the above results back to the continuous multi-dimensional domain, the equivalent of the primal form is:
$$
D_{w}\Big [Pr(\mathbf{x}), q(\mathbf{x}) \Big] = \underset{\pi[\bullet ,\bullet ]}{\operatorname{min}}\left[ \int \int \pi(\mathbf{x}_{1}, \mathbf{x}_{2}) \cdot  || \mathbf{x}_{1}-\mathbf{x}_{2} || \, d\mathbf{x}_{1}  \, d\mathbf{x}_{2}  \right]
$$
subject to similar constraints on the transport plan $\pi(\mathbf{x}_{1}, \mathbf{x}_{2})$ representing the mass moved from position $\mathbf{x}_{1}$ to $\mathbf{x}_{2}$.

The equivalent of the dual form is:
$$
D_{w}\Big[Pr(\mathbf{x}), q(\mathbf{x}) \Big] = \underset{f[\mathbf{x}]}{\operatorname{max}}\left[ \int Pr(\mathbf{x})f[\mathbf{x}] \, d\mathbf{x} - \int q(\mathbf{x})f[\mathbf{x}] \, d\mathbf{x}   \right]
$$
subject to the constraint the the [[Lipschitz constant]] of the function $f[\mathbf{x}]$ is less than one (the absolute gradient of the function is less than one)..

## Wasserstein GAN loss
In the context of neural networks, we maximize over the space of functions $f[x]$ by optimizing the parameters $\phi$ in a neural network $f[x,\phi]$, and we approximate these integrals using generated samples $\mathbf{x}_{i}^{\ast }$ and real examples $\mathbf{x}_{i}$:
$$
\begin{align*}
L[\phi] &= \sum_{j}f[x_{j}^{\ast  }, \phi] - \sum_{i}f[x_{i}, \phi] \\[2ex] 
&=\sum_{j}f[g[z_{j}, \theta], \phi] - \sum_{i}f[x_{i}, \phi]
\end{align*}
$$
where we must constrain the neural network discriminator $f[x_{i}, \phi]$ to have an absolute gradient norm of less than one at every position:
$$
\left| \frac{ \partial f[x,\phi] }{ \partial x }  \right|  <1
$$
One way to achieve this is to clip the discriminator weights to a small range (e.g., $\pm 0.01$). An alternative is the gradient penalty Wasserstein GAN (WGAN-GP), which adds a regularization term that increases as the gradient norm deviates from unity.

#cards/dl
Why does using a Wasserstein distance loss function make GAN training more stable?
?
Compared to the Jensen-Shannon divergence used in the original GAN loss function, Wasserstein distance is well-defined even when the real/synthetic distributions are disjoint and decreases smoothly as they become closer to one another.
<!--SR:!fsrs,2026-08-03T18:29:32.796Z,2,2.3065,4.743334,2,3,0,0,2026-08-01T18:29:32.796Z-->
+++