---
title: Directional Derivatives
tags:
  - calc3
date: 2023-08-27
---

How do we find the rate of change of $f$ if we allow both $x$ and $y$ to change simultaneously? 

## Defining Direction of Change
The problem here is that there are many ways to allow both $x$ and $y$ to change; for example, one could be changing faster than the other, or one could be increasing while the decreasing. Thus, we need to find a good way to define the changing of $x$ and $y$.

Let's say we want to the rate of change of $f$ at a point $(x_{0}, y_{0})$, where $x$ and $y$ are both increasing but $x$ is changing twice as fast as $y$; as $y$ increases by one unit of measure, $x$ increases by two.

If we have a particle sitting at point $(x_{0}, y_{0})$ and the particle will move in the direction given by the changing $x$ and $y$; thus, the particle will direction of movement can be defined as a vector:
$$
\vec{v} = \langle 2,1 \rangle 
$$
However, this is not specific enough as there are many dependent vectors that point in the same direction. Thus, we should insist that the unit vector should be used:
$$
\vec{v}=\left\langle  \frac{2}{\sqrt{ 5 }}, \frac{1}{\sqrt{ 5 }}  \right\rangle 
$$
Alternatively, we can give the direction of changing $x$ and $y$ as an angle. In this case, the unit vector can be defined in as:
$$
\vec{v}=\langle \cos \theta , \sin \theta\rangle 
$$

## Finding Rate of Change
>[!info] Definition: Directional Derivative
>The rate of change of $f(x,y)$ can in the direction of unit vector $\vec{u} = \langle a,b \rangle$ is called the **directional derivative** and is:
>$$
>D_{\vec{u}}(x,y) = \lim_{ h \to 0 } \frac{f(x+ah, y+bh)-f(x,y)}{h}
>$$
>$\quad$

This is very similar to partial derivatives, but can be difficult to compute in practice, so it's useful to derive an equivalent formula for taking directional derivatives, where $\vec{u}=\langle a,b \rangle$ is the direction:
$$
D_{\vec{u}}f(x,y)=f_{x}(x,y)a + f_{y}(x,y)b
$$
This also expands to more than 2 variables. For example, the directional derivative of $f(x,y,z)$ in the direction of unit vector $\vec{u}=\langle a,b,c \rangle$ is given by:
$$
D_{\vec{u}}f(x,y,z)=f_{x}(x,y,z)a + f_{y}(x,y,z)b + f_{z}(x,y,z)c
$$

>[!note]- Derivation of above formula
>Let's define a new function of a single variable:
>$$
>g(z) = f(x_{0}+az, y_{0}+bz),
>$$
>where $x_{0}, y_{0}, a,b$ are fixed numbers; $z$ is the only variable. Using the traditional definition for a single-variable derivative, we have:
>$$
>g'(z)= \lim_{ h \to 0 } \frac{g(z+h)-g(z)}{h},
>$$
>and the derivative at $z=0$ given by, 
>$$
>g'(0)=\lim_{ h \to 0 } \frac{g(z+0)-g(z)}{h}
>$$
>Substituting in $g(z)$, we have:
>$$
>\begin{align}
>g'(0)&=\lim_{ h \to 0 } \frac{g(h)-g(0)}{h}  \\
> &= \lim_{ h \to 0 } \frac{f(x_{0}+ah, y_{0}+bh)-f(x_{0},y_{0})}{h} \\
>&=D_{\vec{u}}f(x_{0}, y_{0})
>\end{align}
>$$
>Now with $g(z)$ instead:
>$$
>g(z)=f(x,y) \quad \text{where} \quad x=x_{0}+az \quad \text{and} \quad y=y_{0}+bz
>$$
>Using the chain rule, we can expand this to:
>$$
>\begin{align}
>g'(z)&=\frac{ dg }{ dz } = \frac{ \partial f }{ \partial x } \frac{ dx }{ dz } + \frac{ \partial f }{ \partial y } \frac{ dy }{ dz }  \\
>&=f_{x}(x,y)a + f_{y}(x,y)b
>\end{align}
>$$
>If we take $z=0, x=x_{0}, y=y_{0}$:
>$$
>g'(0)=f_{x}(x_{0},y_{0})a+f_{y}(x_{0},y_{0})b
>$$
>Which gives us:
>$$
>D_{\vec{u}}f(x_{0}, y_{0})=g'(0)=f_{x}(x_{0},y_{0})a+f_{y}(x_{0},y_{0})b
>$$
>If we go back to allowing $x$ and $y$ to be any number we get the above formulas for computing directional derivatives

There is also another form that is a little nicer and more compact; it's also much more general and encompasses the above forms. We can rewrite the above formula as:
$$
D_{\vec{u}}f(x,y,z)=\langle f_{x}, f_{y}, f_{z} \rangle \cdot \langle a,b,c \rangle 
$$
As such, we can write the directional derivative as a dot product and notice that the second vector is nothing more than the unit vector $\vec{u}$ that gives the direction of change.

We can also write this in terms of gradient vectors:
![[Gradient Vector#^gradvec|Gradient Vector]]

As such, we can say that the directional derivative can be given by
$$
D_{\vec{u}}f=\nabla f\cdot \vec{u}
$$
This is more general, as we don't need to show the variable and use this formula for any number of variables. Alternatively, we can use the notation:
$$
D_{\vec{u}}f(\vec{x})=\nabla f \cdot \vec{u}
$$
where $\vec{x}=\langle x,y,z \rangle$. 
