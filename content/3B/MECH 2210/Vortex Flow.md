---
title: Vortex Flow
tags:
  - mech2210
date: 2025-05-18
aliases:
  - vortex flow
---
A vortex represents a circular flow around a circular axis. There are two primary types of vortex flows: irrotational (free vortex) and rotational (forced vortex).

![[Vortex Flow-20250518134723375.png|299]]


## Irrotational (Free)
In an irrotational vortex, the fluid particles move in circular paths around a center with no internal rotation (like water swirling in a drain).

![[Vortex Flow-20250518134737940.png|251]]

The tangential velocity decreases with radius:
$$
V_{\theta} = \frac{1}{r} \frac{ \partial \phi }{ \partial \theta }  = \frac{K}{r}
$$
where $K$ is a constant representing the strength of the vortex.

The radial velocity is simply zero:
$$
V_{r} = \frac{ \partial \phi }{ \partial r } =0
$$
The velocity potential can be solved to be:
$$
\phi = K\theta
$$
- Equipotential lines are radial lines because $\phi$ varies with the angle $\theta$.

The stream function can be found to be
$$
\psi = -K \ln(r)
$$
- Streamlines are concentric circles around the origin.

## Rotational (Forced)
In a forced vortex, the fluid particles rotate like a solid body; the velocity increases linearly with radius.
$$
V_{\theta} = \omega r,\quad  V_{r} = 0
$$
This type of motion is different from the free vortex because it requires a continuous input of energy to maintain the rotation.

## Circulation
Circulation represents the line integral of the tangential component of velocity around a closed path:
$$
\Gamma = \oint_C \mathbf{V} \cdot d\mathbf{s}
$$
For irrotational flows, if there are no singularities:
$$
\Gamma = \oint_C \nabla \phi \cdot d\mathbf{s} = 0
$$
However, if a singularity like a point vortex exists, the circulation is non-zero and is:
$$
\Gamma = \int_0^{2\pi} \frac{K}{r} \, r \, d\theta = 2\pi K
$$
The velocity potential and stream function expressions become:
$$
\phi = \frac{\Gamma}{2 \pi} \theta, \quad \psi = -\frac{\Gamma}{2 \pi} \ln(r)
$$
- The streamlines are circular around the center, and the flow remains irrotational everywhere except at the singularity.