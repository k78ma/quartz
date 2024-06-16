---
title: Beam Deflections with Superposition Method
tags:
  - mte321
date: 2024-06-15
aliases:
  - beam deflections with superposition method
---
For [[Beam Deflection Due to Bending|beam deflection due to bending]], the results of many simple load cases and boundary conditions have been solved and are available. Superposition resolves the effect of combined loading on a structure by determining the effects of each load separately and adding the results algebraically.
- Deformations of beams subjected to combinations of loadings may be obtained as the linear combination of the deformations from the individual loadings.
- This is facilitated by tables of solutions for common types of loadings and support.

Furthermore, the method of superposition can be applied to determine the reactions at the supports of statically indeterminate beams. This can be done by:
- Designating one of the reactions as redundant and eliminate or modify the support
- Determine the beam deformation without the redundant support.
- Treat the redundant reaction as an unknown load which, together with the other loads, must produce deformations compatible with the original supports.

## Superposition Example
For the beam and loading shown, we determine the slope and deflection at point $B$ using the superposition method.

![[Beam Deflections with Superposition Method.png]]

This can be done by superposing the deformations due to **Loading I** and **Loading II** as shown. The actual loading is equivalent to the superposition of these two loadings.

![[Beam Deflections with Superposition Method-1.png]]

### Loading I
$$
(\theta_{B})_{I}=-\frac{wL^{3}}{6EI}, \quad (y_{B})_{I}=- \frac{wL^{4}}{8EI}
$$
![[Beam Deflections with Superposition Method-2.png]]

### Loading II
$$
(\theta_{C})_{\text{II}}=\frac{wL^{3}}{48EI}, \quad (y_{C})_{\text{II}}=\frac{wL^{4}}{128EI}
$$

In segment $CB$, the bending moment is zero and the elastic curve is a straight line, so we ahve:
$$
\begin{align}
(\theta_{B})_{\text{II}} & =\frac{wL^{3}}{48EI} \\[2ex] 
(y_{B})_{\text{II}} & =\frac{wL^{4}}{128EI} + (\theta_{C})_{\text{II}}\left( \frac{L}{2} \right)\\[2ex] 
 & =\frac{wL^{4}}{128EI} + \frac{wL^{3}}{48EI}\left( \frac{L}{2} \right)\\[2ex] 
 & =\frac{7wL^{4}}{384EI}
\end{align}
$$
This is shown here:

![[Beam Deflections with Superposition Method-3.png]]

### Actual Loading
The actual loading is equivalent to the superposition of the two distributed loads:
$$
\begin{align}
\theta_{B}=(\theta_{B})_{I}+(\theta_{B})_{\text{II}} = - \frac{wL^{3}}{6EI}+\frac{wL^{3}}{48EI} = - \frac{7wL^{3}}{48EI} \\[2ex] 
y_{B}=(y_{B})_{I}+(y_{B})_{\text{II}} = - \frac{wL^{4}}{8EI}+\frac{7wL^{4}}{384EI}=- \frac{41wL^{4}}{384EI}
\end{align}
$$