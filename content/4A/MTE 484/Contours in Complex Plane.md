---
title: Contours in Complex Plane
tags:
  - mte484
date: 2025-12-10
aliases: contours in complex plane
---
Consider a simple closed-loop curve $\Gamma$, which segments the complex plane into a region that is inside the curve and a region that is outside the curve.

![[Contours in Complex Plane-1765654618211.webp|401x317]]

Some terminology
- *Simple:* No self-intersections
- *Closed:* Curve starts and ends at the same point (i.e., no end points)


![[Contours in Complex Plane-1765654633325.webp|397x314]]

![[Contours in Complex Plane-1765654657674.webp|395x323]]

Note that the curves have directionality; an arrow tells us which way to travel around the curve.


> [!definition] Definition: Contour
> $\Gamma$ is a **contour** if it is a simple closed curve with a direction.

## Contour Integration
Let's do a contour integration example with a unit circle. First, we define a contour $\Gamma$ that is a circle centered at $\rho \in \mathbb{C}$ with radius $r>0$:
$$
\Gamma = \{ \rho +re^{j\theta} \, : \,\theta \in  [0,2\pi] \}
$$

![[Contours in Complex Plane-1765654687485.webp|363x288]]

Now, let's compute the integral, assuming the pole $p$ is at the center of the circle (i.e. $p=\rho$):
$$
\frac{1}{2\pi j} \oint _{\Gamma} \frac{1}{z-p} dz
$$
We do a change of coordinates:
$$
\begin{align}
z &= p+re^{j\theta} \\
dz & =jre^{j\theta}d\theta
\end{align}
$$
Substitute into the integral:
$$
\begin{align}
\frac{1}{2\pi j} \oint _{\Gamma} \frac{1}{z-p} dz  & = \frac{1}{2\pi j} \int_{0}^{2\pi} \frac{1}{(p+re^{j\theta}-p)} \cdot  (jre^{j\theta}d\theta) \\[2ex] 
     & = \frac{1}{2\pi j} \int_{0}^{2\pi} \frac{1}{re^{j\theta}} \cdot  (jre^{j\theta} d\theta)  \\[2ex]
     & = \frac{1}{2\pi j} \int_{0}^{2\pi}  \, jd\theta \\[2ex] 
  & = \frac{1}{2\pi j} [j\theta]^{2\pi}_{0} = \frac{j 2 \pi}{2\pi j}=1
\end{align}
$$
When we integrated along a circular contour centered on a pole $p$, we got an answer of $1$. This is not a coincidence; more generally, we have the following rule:


> [!theorem] Lemma 1 (Cauchy's Integral Formula - special case)
> Let $p \in \mathbb{C}$. Let $\Gamma$ be a contour. Then,
> $$
> \frac{1}{2\pi j} \oint_{\Gamma} \frac{1}{z-p} dz =
> \begin{cases}
> 1, & \text{if } \Gamma \text{ encloses } p \\
> 0,  & \text{otherwise}
> \end{cases}
> $$

So as long as $p$ is inside of $\Gamma$, the integral will always evaluate to $1$. It doesn't depend on $\Gamma$ being a circle – $\Gamma$ can take any shape and this will still hold true.

This will basically let us count up how many poles are inside and how many poles are outside the unit disk.

![[Contours in Complex Plane-1765654715236.webp|379x293]]

![[Contours in Complex Plane-1765654736860.webp|382x295]]

## Connecting to Transfer Functions
Let $G[z]$ be real, rational, and proper. Let $\Gamma$ be a contour. Then, $G[z]$ can be written as:
$$
G[z] = k \cdot \frac{\prod_{j=1}^{m}(z-z_{j})}{\prod_{i=1}^{n}(z-p_{i})}
$$
where $z_{j},p_{i}$ are the zeros and poles of $G[z]$ respectively. Our goal is to simplify this expression to take it toward the form of $\frac{1}{z-p}$.

First, we take the log:
$$
\log(G[z]) = \log(k) + \sum_{j=1}^{m}\log(z-z_{j}) - \sum_{i=1}^{n}\log(z-p_{i})
$$
Differentiating with respect to $z$:
$$
\frac{d}{dz}(\log(G[z])) = \sum_{i=1}^{m} \frac{1}{z-z_{j}} - \sum_{i=1}^{n} \frac{1}{z-p_{i}}
$$
Now integrating this over the contour $\Gamma$ and multiplying by $\frac{1}{2\pi j}$:
$$
\begin{align}
\frac{1}{2\pi j} \oint_{\Gamma}\left( \frac{d}{dz} \log(G[z]) \right)dz  & = \frac{1}{2 \pi j} \oint _{\Gamma} \left( \sum_{j=1}^{m} \frac{1}{z-z_{j}} - \sum_{i=1}^{n} \frac{1}{z-p_{i}} \right)dz \\[2ex]
 & = \sum_{j=1}^{m}\left[ \frac{1}{2\pi j} \oint _{\Gamma} \frac{1}{z-z_{j}}dz \right] - \sum_{i=1}^{n} \left[ \frac{1}{2\pi j} \oint _{\Gamma} \frac{1}{z-p_{i}}dz \right]
\end{align}
$$
Applying our lemma:
$$
\begin{align}
\text{Integral}  & = \sum_{j=1}^{m} \begin{cases}
1, &  \text{if }  \Gamma  \text{ encloses } z_{j} \\
0, &  \text{otherwise}
\end{cases} - \sum_{i=1}^{n} \begin{cases}
1, & \text{if } \Gamma \text{ encloses } p_{i} \\
0,  & \text{otherwise}
\end{cases} \\[2ex] 
     & = Z-P
\end{align}
$$
Therefore, we can evaluate this integral by just looking at $\Gamma$ and the poles/zeros of $G[z]$, but this doesn't help us that much yet. This way tells us about the the relationships between the number of poles and the number of zeros. But we can calculate it in a different way.

![[Contours in Complex Plane-1765654762701.webp|586x424]]


We can evaluate the integral in a different way using a change of variables:
$$
\frac{1}{2\pi j} \oint_{\Gamma} \left( \frac{d}{dz} \log(G[z]) \right)dz = \frac{1}{2\pi j} \oint_{\Gamma} \frac{G'[z]}{G[z]}dz
$$
- via the chain rule, where $G'[z] = \frac{dG}{dz}$

Consider a new variable:
$$
\begin{align}
w  & = G[z] \\[2ex]
dw  & = G'[z] dz
\end{align}
$$
Substituting this into the integral, we change the integration path from $\Gamma$ to $G[\Gamma]$:
$$
\frac{1}{2\pi j} \oint _{\Gamma} \frac{G'[z]}{G[z]} dz = \frac{1}{2\pi j} \oint_{G[\Gamma]} \frac{dw}{w}
$$
This new integral represents the number of times the mapped contour $G[\Gamma]$ encircles the origin. 

To explain what $G[\Gamma]$ is, we did a change of variables, so we have to do a change over what we are integrating over. $G[\Gamma]$ takes every point on $\Gamma$, and maps it with the function $G$. In general, $G[\Gamma]$ is closed but not simple.

Let $w=G[z]$ so the integral becomes $\frac{1}{2\pi j}\oint_{G[\Gamma]} \frac{dw}{w}$.

We represent $w$ in polar coordinates $w=re^{j\theta}$. The differential $dw$ is:
$$
dw = \frac{ \partial w }{ \partial r } dr+\frac{ \partial w }{ \partial \theta } d\theta = e^{j\theta} dr+jre^{j\theta} d\theta
$$
Therefore, $\frac{dw}{w}$ simplifies nicely:
$$
\frac{dw}{w} = \frac{e^{j\theta}dr+jre^{j\theta}d\theta}{re^{j\theta}} = \frac{dr}{r} + jd\theta
$$
Now, we can evaluate our integral:
$$
\begin{align}
\frac{1}{2\pi j} \oint _{G[\Gamma]} \frac{dw}{w}  & = \frac{1}{2\pi j} \oint _{G[\Gamma]} \left( \frac{dr}{r} + jd\theta \right) \\[2ex] 
 & = \frac{1}{2\pi j}[\log(r)+j\theta]_{\text{start}}^{{\text{end}}} \\[2ex]
& = \frac{1}{2\pi j}[(\log(r_{1})-\log(r_{0}))+j(\theta_{1}-\theta_{0})]
\end{align}
$$
Since $G[\Gamma]$ is a closed curve, the start and end points $(r_{0}, \theta_{0})$ and $(r_{1}, \theta_{1})$ must have the same magnitude, so $r_{1}=r_{0}$. This means the $\log(r)$ term goes to zero:
$$
\begin{align}
 & = \frac{1}{2\pi j}[0+j(\theta_{1}-\theta_{0})] \\[2ex]
 & = \frac{j(\Delta \theta)}{2\pi j} = \frac{\Delta \theta}{2\pi}
\end{align}
$$
The total change in angle, $\Delta \theta$, must be an integer multiple of $2\pi$ for a closed loop. We can write $\Delta \theta=2\pi N$, where $N$ is this integer:
$$
\frac{2\pi N}{2\pi}=N
$$
Therefore, this integral simply counts $N$, the number of times the **mapped contour** $G[\Gamma]$ encircles the origin.

