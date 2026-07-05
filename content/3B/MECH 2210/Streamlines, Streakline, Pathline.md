---
title: Streamlines, Streakline, Pathline
tags:
  - mech2210
date: 2025-03-19
aliases:
  - streamline
  - pathline
  - streakline
---
## Streamline
A **streamline** is a line that is tangent to the velocity vectors throughout the flow field. 

![[Streamlines.png|337]]

For [[Steady and Unsteady Flows|steady flows]] (nothing changes with time at a given location in the flow field), streamlines are trajectories of fluid particles.

Note that we assume inviscid fluids/flows, which have zero viscosity:
$$
\tau=0 \quad \mu=0 \quad \text{or} \quad \frac{du}{dy}=0
$$
The angle can be found with:
$$
\frac{dy}{dx}=\tan \theta = \frac{v}{u}
$$
or
$$
y=\int \frac{v}{u} \, dx 
$$
### Example
Let's say we have a [[Velocity Field|velocity field]] $\mathbf{V}=\frac{V_{0}}{l}(x\mathbf{i}-y\mathbf{j})$.
- Get the location where $V=V_{0}$.
- Note that the two components of $V$ are $u=\frac{V_{0}x}{l}, v=-\frac{V_{0}y}{l}$
- Then:
$$
\begin{align}
\frac{ dy }{ dx }  & =-\frac{y}{x} \\[2ex]
\frac{dy}{y} & =-\frac{dx}{x} \\[2ex] 
\int \frac{dy}{y}  & =-\int \frac{dx}{x} \\[2ex] 
\ln y & =-\ln x+c \\[2ex]
xy & =c
\end{align}
$$

![[Streamlines, Streakline, Pathline.png|262]]


## Streakline
A streakline consists of all particles in a flow that have previously passed through a common point.

![[Streamlines, Streakline, Pathline-1.png]]

- Time dependent?

## Pathline
A pathline is the trajectory of a given fluid particle

![[Streamlines, Streakline, Pathline-2.png|482]]


## Differences between lines
- For steady flows, the three lines are the same
- For unsteady flows, they can be very different
