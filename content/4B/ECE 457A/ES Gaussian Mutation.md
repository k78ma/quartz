---
title: ES Gaussian Mutation
tags:
  - ece457a
date: 2026-04-09
aliases: es gaussian mutation
---
Recall that in basic [[Evolution Strategies|ES]], we do Gaussian mutation:
$$
x'=x+\sigma z, \quad  z \sim \mathcal{N}(0,1)
$$
where $\sigma$ controls the mutation strength. The distribution of the steps is Gaussian, with variance $\sigma^{2}$. 

Note that it's important that we **first mutate the step size** $\sigma\to \sigma'$, and then mutate the solution using the new step size. This means that the new individual $\langle x', \sigma' \rangle$ is evaluate in directly; the primary evaluation is that we can tell $x'$ is good if $f(x')$ is good, and the second evaluation is that we can tell $\sigma'$ is good if it produced a good $x'$.

![[ES Gaussian Mutation-1775755542431.webp|333]]

We can see that with $\sigma$ wider, we get a wider exploration. At different stages of optimization, the search needs different behavior; early on, larger steps helps exploration. Later on when we get close to a good solution, smaller steps help fine-tune.

The [[(1+1)-ES and the One-Fifth Rule|1/5 rule]] is a super basic basic version of this:
- If success rate is too high, $\sigma$ is too small
- If success rate is too low, $\sigma$ is too large

## Case 1: Global Step Size
The simplest case uses one single $\sigma$ for all variables. The step size mutation is given as
$$
\sigma' = \sigma \exp(\tau \mathcal{N}(0,1))
$$
and the solution mutation is given as
$$
x'=x + \sigma' z
$$
The exponential form is used so that $\sigma'$ always stays positive.

In this case, the covariance is
$$
\text{Cov}(x'-x) = \sigma'I
$$
Every direction has the same variance.

## Geometry of Gaussian Mutation
Why can't we always just use our global step size above? 

Consider a problem in a higher dimension $n$, where our our isotropic model becomes $x'=x+\sigma z,  z \sim \mathcal{N}(0,I_{n})$:
- $z$ is an $n$-dimensional standard normal vector.
- $I_{n}$ is the identity matrix
- $\sigma>0$ is the global step size

Viewing this as a distribution, we can also say that
$$
x' \sim \mathcal{N}(x,\sigma^{2}I_{n})
$$
This is radially symmetric around $x$, with equal variance in all directions. Thus, there is no preferred search direction, with a spherical sampling cloud.

![[ES Gaussian Mutation-1775757420724.webp|372]]

The expected step length is given as:
$$
\begin{align}
E [|| x'-x ||^{2}]  & = \sigma^{2}n \\
E[|| x'-x ||]  & \approx \boxed{\sigma {\sqrt{ n }}}
\end{align}
$$
However, remember that high-dimensional spaces behave weirdly. Most probability mass lies on a thin shell, $|| z || \approx \sqrt{ n }$. Thus, mutations are rarely small in high $n$.

### Ill-conditioned landscapes
Considered an objective like $f(x)=x_{1}^{2}+1000x_{2}^{2}$. The level sets are ellipses, with anisotropic curvature. Curvature along $x_{2}$ is 1000 times steeper than along $x_{1}$. Thus, there's a condition number of $\kappa=1000$.

Mutation samples are spherical, but the objective is anisotropic.
- Too large steps in steep direction ($x_{2}$) $\implies$ rejected moves
- Too small steps in flat direction ($x_{1}$) $\implies$ slow progress


![[ES Gaussian Mutation-1775757817308.webp|406]]

## Case 2: Uncorrelated Mutation
For the ill-formed landscapes, a single global $\sigma$ is too crude, as some variables need larger mutations than others. Thus, we use one step size per coordinate:
$$
\langle x_{1}, \dots, x_{n}, \sigma_{1}, \dots, \sigma_{n} \rangle 
$$
where each coordinate mutates its own scale:
$$
x_{i}' = x_{i} + \sigma_{i}'z_{i}
$$
with
$$
\sigma_{i}' = \sigma_{i} \exp(\tau'Z + \tau Z_{i})
$$
- $Z \sim \mathcal{N}(0,1)$ (global)
- $Z_{i} \sim \mathcal{N}(0,1)$ (per-coordinate)
- Once again, $\exp$ guarantees positivity.

This creates an axis-aligned ellipsoid instead of a sphere.

$\tau$ and $\tau'$ are learning rate parameters:
$$
\tau' = \frac{1}{\sqrt{ 2n }}, \quad  \tau=\frac{1}{\sqrt{ 2\sqrt{ n } }}
$$
- $\tau'$ is the global adaptation strength (shared across coordinates)
- $\tau$ is the coordinate-wise adaptation strength

This dimension-dependent method controls the variance of $\log \sigma_{i}'$, preventing unstable step-size explosions in high dimensions. Thus, adaptation speed is comparable across problem sizes, and we can ensure that self-adaptation remains stable as the dimension $n$ grows.  Larger $n$ means smaller learning rates, and prevents unstable covariance, ensuring smooth adaptation of search geometry.

Here, our covariance has become
$$
\text{Cov}(x'-x) = D(\sigma)^{2} = \text{diag}(\sigma_{1}^{2}, \dots, \sigma_{n}^{2})
$$
This is still uncorrelated, because the covariance matrix is diagonal; the mutation cloud is an ellipsoid aligned with the coordinate axes. Note that we can write the update as $x'= x+D(\sigma)z$.

## Case 3: Correlated Mutation
Even multiple coordinate-wise step sizes are not enough if the important search directions are rotated relative to the coordinate axes. Thus, we want to generalize the mutation to $x'=x+\mathcal{N}(0, \sigma^{2}C)$ where $C$ is a learned covariance matrix.

Specifically, we use:
$$
x' = x+BDz, \quad  z \sim N(0,I)
$$
where:
- $D = \text{diag}(\sigma_{1}, \dots, \sigma_{n})$ controls axis lengths
- $B$ is an orthogonal rotation matrix constructed from angles $\alpha_{ij}$

Then:
$$
\text{Cov}(x'-x) =C = BD^{2}B^{T}
$$
Let's walk through the full flow.

First, our chromosome is now $\langle x, \sigma, \alpha \rangle$. We first mutate step sizes:
$$
\sigma_{i}' = \sigma_{i} \exp(\tau'Z + \tau Z_{i})
$$
Then mutate rotation angles:
$$
\alpha'_{ij} = \alpha_{ij} + \beta N_{ij}(0, 1)
$$
$\beta$ controls rotation-angle mutation; small angle updates ensure gradual geometry change.

We often also use some constraints like $\sigma_{i}' \geq \epsilon_{0}$ and $\left| \alpha_{ij}' \right| \leq \pi$, which prevent collapse of mutation strength and avoid premature convergence. We also do angle wrapping to ensure numerical stability and uniqueness. We can generalize this into [[Covariance Matrix Adaptation ES|CMA-ES]].



> [!example] Correlated ES Example
> ![[ES Gaussian Mutation-1775761542606.webp]]
> 
> ![[ES Gaussian Mutation-1775761552731.webp]]
> 
> ![[ES Gaussian Mutation-1775761563864.webp]]
> 
> ![[ES Gaussian Mutation-1775761574064.webp]]
> 
> ![[ES Gaussian Mutation-1775761580037.webp]]
> 
> ![[ES Gaussian Mutation-1775761589629.webp]]
> 
> ![[ES Gaussian Mutation-1775761607474.webp]]
> 
> ![[ES Gaussian Mutation-1775761613542.webp]]
> 
> ![[ES Gaussian Mutation-1775761623626.webp]]
> 
> 
