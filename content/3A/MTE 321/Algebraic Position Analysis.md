---
title: Algebraic Position Analysis
tags:
  - mte321
date: 2024-07-25
aliases:
  - algebraic position analysis
---
Algebraic position analysis solves the system based on geometry. 

![[Graphical Position Analysis-1.png]]

Using the fourbar linkage example above, we would have:
$$
\begin{align}
A_{x} & =a\cos \theta_{2} \\
A_{y} & =a\sin \theta_{2}
\end{align}
$$
where $\theta_{2}$ is the input angle.

The coordinates of point $B$ are found using the equations of circles about $A$ and $O_{4}$:
$$
\begin{align}
b^{2} & =(B_{x}-A_{x})^{2}+(B_{y}-A_{y})^{2}\\[2ex] 
c^{2} & =(B_{x}-d)^{2}+B_{y}^{2}
\end{align}
$$
which provide a pair of simultaneous equations we can solve to get $B_{x}$ and $B_{y}$.

Subtracting $b^{2}-c^{2}$, we have:
$$
\begin{align}
b^{2}-c^{2} & =(B_{x}-A_{x})^{2}-(B_{x}-d)^{2}+(B_{y}-A_{y})^{2}-B_{y}^{2} \\
	 & =\cancel{ B_{x}^{2} }+A_{x}^{2}-2B_{x}A_{x}-(\cancel{ B_{x}^{2 }}+d^{2}-2dB_{x})+(\cancel{ B_{y}^{2} }+A_{y}^{2}-2B_{y}A_{y})-\cancel{ B_{y^{2}} } \\
	 & =\underbrace{ A_{x}^{2}+A_{y}^{2} }_{ a^{2} }-2A_{x}B_{x}-2A_{y}B_{y}-d^{2} \\
a^{2}-b^{2}+c^{2}-d^{2} & =2A_{x}B_{x}+2A_{y}B_{y}-2dB_{x}\\[2ex] 
B_{x} & =\frac{a^{2}-b^{2}+c^{2}-d^{2}}{2(A_{x}-d)}-\frac{2A_{y}B_{y}}{2(A_{x}-d)}\\[2ex] 
\end{align}
$$
We can do similar calculations for $B_{y}$. This gives us
$$
\begin{align}
B_{x} & =S-\frac{2A_{y}B_{y}}{2(A_{x}-d)}\\[2ex] 
B_{y} & =\frac{-Q\pm \sqrt{ Q^{2}-4PR }}{2P}
\end{align}
$$
where
$$
\begin{align}
S & =\frac{a^{2}-b^{2}+c^{2}-d^{2}}{2(A_{x}-d)}\\[2ex] 
R & =(d-S)^{2}-c^{2} \\[2ex] 
P & =\frac{A_{y}^{2}}{(A_{x}-d)^{2}}+1\\[2ex] 
Q & =\frac{2A_{y}(d-S)}{A_{x}-d}
\end{align}
$$
The solutions to this equation set can be real or imaginary. If imaginary, the links cannot connect at the given input angle or at all. Once the two values of By are found (if real), they can be substituted into equation 4.2d to find their corresponding x components.

We can use these values to find the link angles:
$$
\begin{align}
\theta_{3} & =\tan ^{-1}\left( \frac{B_{y}-A_{y}}{B_{x}-A_{x}} \right)\\[2ex] 
\theta_{4} & =\tan ^{-1}\left( \frac{B_{y}}{B_{x}-d} \right)
\end{align}
$$
Like the fourbar example above, we can do this type of analysis for all types of mechanisms.