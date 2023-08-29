---
title: "Gradient Vector"
tag: calc3
date: 2023-08-29
---

>[!info] Gradient Vector
>The gradient vector of $f$ is defined to be:
>$$
>\nabla f = \langle f_{x}, f_{y}, f_{z} \rangle 
>$$
>Or if we want to use the standard basis vectors the gradient is:
>$$
>\nabla f = f_{x}\vec{i}+f_{y}\vec{j}+f_{z}\vec{k}
>$$
>The above definitions are for functions of 3 variables, but of course this extends to any number of variables
^gradvec

Some nice facts about the gradient vector:
>[!theorem] Theorem: Maximum Rate of Change
>The maximum value of $D_{\vec{u}}f(\vec{x})$ (and hence the maximum rate of change of the function $f(\vec{x})$) is given by $\mid \mid \nabla f(\vec{x}) \mid \mid$ and will occur in the direction given by $\nabla f(\vec{x})$.

>[!proof]- Proof: Maximum Rate of Change
> Simple proof based on the definition of the cross product.
> $$
>\begin{align}
>D_{\vec{u}}f &= \nabla f\cdot \vec{u} \\
>&=\mid \mid \nabla f \mid \mid \||\vec{u}|| \cos \theta \\
>&=\mid \mid \nabla f \mid \mid \cos \theta
>\end{align}
>$$
>where $\theta$ is the angle between the gradient and $\vec{u}$.
>
>The largest possible value of $\cos \theta$ is $1$ which occurs at $\theta=0$. Therefore, the maximum value of $D_{\vec{u}}f(x)$ is $\mid \mid \nabla f(\vec{x}) \mid \mid$.
>
>The maximum value occurs when the angle between gradient and $\vec{u}$ is $0$; in other words, when $\vec{u}$ is pointing in the same direction as the gradient, $\nabla f(\vec{x})$.

Another one:
>[!fact]
>The gradient vector $\nabla f(x_{0}, y_{0})$ is orthogonal to the [[Calculus/Functions of Several Variables#Level/Contour Curves|level curve]] $f(x,y)=k$ at the point $(x_{0}, y_{0})$. Likewise, the gradient vector $\nabla f(x_{0}, y_{0}, z_{0})$ is orthogonal to the level surface $f(x,y,z)=k$ at the point $(x_{0}, y_{0}, z_{0})$.

>[!proof]- Proof: Gradient Vector Orthogonality
>Let's prove the $\mathbb{R}^3$ case. Let $S$ be the level surface given by $f(x,y,z) = k$ and let $P=(x_{0},y_{0},z_{0})$. Note that $P$ will be on $S$.
> 
> Now, let $C$ be any curve on $S$ that contains $P$. Let $\vec{r}(t) = \langle x(t),y(t),z(t) \rangle$ be the vector equation for $C$ and suppose that $t_{0}$ be the value of $t$ such that $\vec{r}(t_{0})=\langle x_{0},y_{0},z_{0} \rangle$. In other words, $t_{0}$ is the value of $t$ that gives $P$.
> 
> Because $C$ lies on $S$ we know that points on $C$ must satisfy the equation for $S$:
> $$
>f(x(t), y(t), z(t)) = k 
>$$
>With the chain rule, we get:
>$$
>\frac{ \partial f }{ \partial x } \frac{ dx }{ dt } +\frac{ \partial f }{ \partial y } \frac{ dy }{ dt } + \frac{ \partial f }{ \partial z } \frac{ dz }{ dt } =0
>$$
>
>Note that $\nabla f = \langle f_{x}, f_{y}, f_{z} \rangle$ and $\vec{r}'(t)=\langle \vec{x}'(t), \vec{y}'(t), \vec{z}'(t)\rangle$, so this becomes:
>$$
>\nabla f \cdot \vec{r}'(t)=0
>$$
>
>At $t=t_{0}$, this is
>$$
>\nabla f(x_{0},y_{0},z_{0}) \cdot \vec{r}'(t_{0})=0
>$$
>
>This tells us that the gradient vector at $P$, $\nabla f(x_{0},y_{0},z_{0})$, is orthogonal to the tangent vector, $\vec{r}'(t_{0})$, to any curve $C$ that passes through $P$ and on the surface $S$ and so must also be orthogonal to the surface $S$.


