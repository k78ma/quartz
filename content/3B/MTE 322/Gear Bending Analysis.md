---
title: Gear Bending Analysis
tags:
  - mte322
date: 2024-10-13
aliases:
  - gear bending analysis
---
## Lewis Equation
Bending stress for gears is given by the Lewis equation.

Approximating the tooth as a rectangular cantilever beam, recall that
$$
\sigma=\frac{Mc}{I}
$$
where $c=\frac{t}{2}$ and $I=\frac{bh^{3}}{12}=\frac{Ft^{3}}{12}$.

Thus, the Lewis equation is given as:
$$
\sigma=\frac{W_{t}l \frac{t}{2}}{Ft^{3} / 12}=\frac{6W_{t}l}{Ft^{2}}
$$

![[Gear Stress Due to Bending.png|368]]

By similar triangles, we have
$$
\frac{t / 2}{x}=\frac{l}{t / 2} \quad \longrightarrow \quad 2x=\frac{t^{2}}{2l} \quad \longrightarrow \quad \frac{6l}{t^{2}}=\frac{3}{2x}
$$
With this, we can get the Lewis equation as
$$
\begin{align}
\sigma & =\frac{W_{t}}{F}\cdot \frac{6}{t^{2}} \\[2ex] 
	 & = \frac{W_{t}}{F}\cdot \frac{3}{2x} \\[2ex]
	 & = \frac{W_{t}}{F\cdot \frac{2x}{3}} \\[2ex] 
	 & =\frac{W_{t}P}{F \frac{2x}{3} P} \\[2ex] 
	 & = \frac{W_{t}P}{FY}
\end{align}
$$
where $Y=\frac{2xP}{3}$ is a form factor. $Y$ can be found from a table:

![[Gear Stress Due to Bending-2.png|188]]

To account for dynamic effects, a dynamic factor is used:
$$
\begin{align}
\sigma & =K_{v} \frac{W_{t}P}{FY} \quad [\text{psi}] \\[2ex] 
	 &= K_{v} \frac{W_{t} \frac{1}{m}}{FY} \quad [\text{MPa}]
\end{align}
$$
where $K_{v}=\left( \frac{a+V^{b}}{a} \right)^{c}$, with $V$ being the pitch line (linear) velocity. 

$a$, $b$ and $c$ can be found from a table:

![[Gear Stress Due to Bending-1.png|488]]

### Allowable Stress
Allowable stress $\sigma_{\text{all}}$ can be obtained from:
- Yield strength $S_{y}$ for moderate operating conditions
- Fatigue strength (or endurance limit $S_{e}$) for infinite life bending
- Safety factor is applied to compute $\sigma_{\text{all}}$:
$$
\sigma_{\text{all}}=\frac{S_{e}}{n_{s}}
$$
## Example

![[MTE 322 ex 10.pdf]]