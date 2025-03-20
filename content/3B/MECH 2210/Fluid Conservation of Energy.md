---
title: Fluid Conservation of Energy
tags:
  - mech2210
date: 2025-03-20
aliases:
  - fluid conservation of energy
  - Energy Equation
---
This is an application of the [[Reynolds Transport Theorem]] where we have
$$
b=e \quad \longrightarrow \quad B=me=E
$$
where
$$
e=\frac{\text{Total Energy},e}{\text{mass}, m}=u+\frac{V^{2}}{2}+gz
$$
We then have
$$
\begin{align}
B_{\text{sys}} & =\int _{\text{sys}} e\rho \, d\forall =E_{\text{sys}}\\[2ex] 
B_{\text{C.V.}} & =\int _{\text{C.V.}}e\rho \, d\forall =E_{\text{C.V.}} 
\end{align}
$$
The **Energy Equation** (E.E) is then:
$$
\begin{align}
\frac{DE_{\text{sys}}}{Dt} & =\frac{ \partial  }{ \partial t } \int _{\text{C.V.}} e\rho \, d\forall +\int _{\text{C.S.}} e\rho \mathbf{V} \cdot  \mathbf{n} \, dA   \\[2ex]
     & = (\dot{Q}_{\text{net, in}}+\dot{W}_{\text{net, in}})_{\text{CV}}
\end{align}
$$
- The $\frac{DE_{\text{sys}}}{Dt}$ term is the energy change in the system
- The $\frac{ \partial  }{ \partial t } \int _{\text{C.V.}} e\rho \, d\forall$ term is the energy change in the C.V.
- The $\int _{\text{C.S.}} e\rho \mathbf{V} \cdot  \mathbf{n} \, dA$ term is the net energy flow rate through the C.S.

Some things to recall:

![[Fluid Conservation of Energy.png|525]]

The work transfer rate (power) can be written as the product of the normal stress, $\sigma=-p$, and the fluid particle surface area , $\mathbf{n}\delta A$:
$$
\delta \dot{W}=\sigma \mathbf{V}\cdot \mathbf{n}\delta A=-p\mathbf{V}\cdot \mathbf{n}\delta A
$$
For all fluid particles on the control surface of at the instant considered, power transfer due to fluid normal stress can then be found as
$$
\dot{W}_{\text{stress}}=\int _{\text{CS}}-p\mathbf{V}\cdot \mathbf{n} \, dA
$$
This then overall gives us
$$
\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}e\rho \, d\forall +\int _{\text{C.S.}}\left( u+\frac{V^{2}}{2}+gz \right)\rho \mathbf{V}\cdot \mathbf{n} \, dA = \dot{Q}_{\text{net in}}+\dot{W}_{\text{shaft}}-\int _{\text{CS}}p\mathbf{V}\cdot \mathbf{n} \, dA
$$
If only $p$ or normal stress $\sigma$ on the control surface is known:
$$
\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}e\rho \, d\forall +\int _{\text{C.S.}}\left( u+\frac{V^{2}}{2}+gz + \frac{p}{\rho} \right)\rho \mathbf{V}\cdot \mathbf{n} \, dA = \dot{Q}_{\text{net in}}+\dot{W}_{\text{shaft}}
$$