---
title: PSO System Analysis
tags:
  - ece457a
date: 2026-04-09
aliases: pso system analysis
---
**Closed-loop feedback system:**
We can interpret PSO as a closed-loop feedback system. Consider a simplified 1D PSO:
$$
\begin{align}
v(t+1)  & = wv(t) + \phi(x^{\ast}-x(t)), \quad  \phi = c_{1}+c_{2} \\[2ex]
x(t+1)  & = x(t) + v(t+1)
\end{align}
$$
We can interpret $x^{\ast }$ as the reference (target), $x(t)$ as the system output, and $v(t)$ as the feedback action.

**Second order system:**
We can eliminate velocity by writing it as:
$$
v(t) = x(t) - x(t-1)
$$
Substituting:
$$
x(t+1) = x(t) + w(x(t)-x(t-1)) + \phi(x^{\ast  }-x(t))
$$
Re-arranging:
$$
x(t+1) - (1+w-\phi)x(t) + w(t-1) = 0
$$
This shows that PSO is a second-order dynamic system. Memory (via velocity) introduces inertia.

We can assume a solution of
$$
x(t) = z^{t}
$$
The characteristic equation is
$$
z^{2} - (1+w-\phi)z + w=0
$$
with poles
$$
z_{1,2} = \frac{(1+w-\phi) \pm \sqrt{ (1+w-\phi)^{2}-4w }}{2}
$$
Thus, we can consider PSO dynamics as a function of pole locations, as we know that poles determine system behavior.

If we have a solution of the form:
$$
x(t) = C_{1}z_{1}^{t} + C_{2}z_{2}^{t}
$$
we have the stability condition
$$
\left| z_{1} \right| <1, \quad  \left| z_{2} \right| <1
$$
meaning that poles inside the unit circle give convergence, on the boundary give oscillation, and outside results in divergence.

Looking at the characteristic equation again:
$$
z^{2} - (1+w-\phi)z + w=0
$$
We can also see that stability requires $w<1$, $\phi<2(1+w)$, $\phi > 0$. Since $\phi=c_{1}+c_{2}$, we have:
$$
c_{1}+c_{2} < 2(1+w)
$$
Thus, the result in [[Constriction PSO]] that we saw:
$$
\begin{align}
\phi & >4 \\[2ex] 
\mathcal{X}   & = \frac{2}{| 2-\phi-\sqrt{ \phi^{2}-4\phi }|}
\end{align}
$$
is actually just control theory.

Interpreting the parameters:
- $w$ control the damping (oscillation)
- $\phi$ controls the attraction strength
- Stable PSO $\Leftrightarrow$  properly placed poles