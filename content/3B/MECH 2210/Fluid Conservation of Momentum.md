---
title: Fluid Conservation of Momentum
tags:
  - mech2210
date: 2025-03-20
aliases:
  - fluid conservation of momentum
  - Linear Momentum Equation
---
This is an application of the [[Reynolds Transport Theorem]] where the property $b$ we are interested in is velocity $\mathbf{V}$, such that
$$
b=\mathbf{V} \quad \longrightarrow \quad  B=m\mathbf{V}
$$
which then gives
$$
\begin{align}
B_{\text{sys}} & =\int _{\text{sys}}\mathbf{V}\rho d \, d\forall =\mathbf{M}_{\text{sys}}  \\[2ex]
B_{\text{C.V.}} & =\int _{\text{C.V.}}\mathbf{V}\rho  \, d\forall =\mathbf{M}_{\text{C.V.}}
\end{align}
$$
This gives us the **linear momentum equation**, which basically says that the ==time rate of change of linear momentum of the system is equal to the sum of external forces acting on the system==.
$$
    \frac{D\mathbf{M}_{\text{sys}}}{Dt}=\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}\mathbf{V}\rho \, d\forall +\int _{\text{C.S.}}\mathbf{V}\rho \mathbf{V}\cdot \mathbf{n} \, dA=\sum \mathbf{F}_{\text{content of C.V.}}
$$
where:
- $\frac{D\mathbf{M}_{\text{sys}}}{Dt}$ is the momentum change in the system
- $\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}\mathbf{V}\rho \, d\forall$ is the momentum change in the C.V.
- $\int _{\text{C.S.}}\mathbf{V}\rho \mathbf{V}\cdot \mathbf{n} \, dA$ is the net momentum flow rate through the C.S.

Note that we can also write
$$
\frac{D\mathbf{M}_{\text{sys}}}{Dt}=\frac{D(m_{\text{sys}}\mathbf{V})}{Dt}=m_{\text{sys}} \frac{D\mathbf{V}}{Dt}=m_{\text{sys}}\mathbf{a}=\sum \mathbf{F}_{\text{sys}}
$$
For moving C.V.:
$$
\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}\mathbf{V}\rho \, d\forall +\int _{\text{C.S.}}\mathbf{V}\rho \mathbf{W}\cdot \mathbf{n} \, dA=\sum \mathbf{F}_{\text{content of C.V.}}
$$