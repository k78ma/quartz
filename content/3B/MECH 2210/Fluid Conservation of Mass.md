---
title: Fluid Conservation of Mass
tags:
  - mech2210
date: 2025-03-20
aliases:
  - continuity equation
---
 system is defined as a collection of unchanging contents, so the conservation of mass principle for a system tells us that the time rate of change of the system mass is 0. In terms of the [[Reynolds Transport Theorem]], we have
$$
\begin{align}
\frac{Dm_{\text{sys}}}{Dt} & =0 \\[2ex] 
\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}\rho \, d\forall  + \int_{\text{C.S.}} \rho \mathbf{V} \cdot  \text{n} \, dA & =0
\end{align}
$$
where
- $\frac{Dm_{\text{sys}}}{Dt}$ is the time rate of change of mass in the system (equal to zero)
- $\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}\rho \, d\forall$ is the time rate of change of mass in the C.V.
- $\int_{\text{C.S.}} \rho \mathbf{V} \cdot  \text{n} \, dA$ is the net mass flow rate through the C.S.

![[Fluid Conservation of Mass.png|344]]

We can find an expression for the mean fluid velocity for an area $A$ by considering that the mass flow rate $\dot{m}$ can be written as
$$
\begin{align}
\dot{m}=\rho\bar{V}A & =\int _{\text{A}} \rho \mathbf{V}\cdot \mathbf{n} \, dA \\[2ex] 
\bar{V} & = \frac{\int _{\text{A}} \rho \mathbf{V}\cdot \mathbf{n} \, dA}{\rho A}
\end{align}
$$

## Examples
### Fixed, Non-deforming C.V.
Water flows steadily through a nozzle at the end of a fire hose. Determine the pumping capacity of the pump in $m^{3}/s$.

![[Fluid Conservation of Mass-1.png|420]]

Apply the continuity equation:
$$
\cancelto{ 0 }{ \frac{ \partial  }{ \partial t } \int _{\text{C.V.}}\rho \, d\forall }  + \int_{\text{C.S.}} \rho \mathbf{V} \cdot  \text{n} \, dA  =0
$$
We have steady flow, so the first term cancels to zero.

Then we have:
$$
\begin{align}
\int _{\text{C.S.}} \rho \mathbf{V}\cdot \mathbf{n} \, dA & =  \int _{\text{C.S.}_{\text{in}}} \rho \mathbf{V}\cdot \mathbf{n} \, dA +  \int _{\text{C.S.}_{\text{out}}} \rho \mathbf{V}\cdot \mathbf{n} \, dA \\[2ex]
     & = \dot{m}_{2}-\dot{m}_{1} \\[2ex]
     & =0
\end{align}
$$
Recall that the mass flowrate is $\dot{m}=\rho Q$, so we have
$$
\rho_{2}Q_{2}=\rho_{1}Q_{1}
$$
Assuming incompressibility, we have $\rho_{2}=\rho_{1}$, which then gives
$$
Q_{1}=Q_{2}=V_{2}A_{2}=0.0251 \text{ m}^{3} \text{/s}
$$

### Moving C.V.

![[Fluid Conservation of Mass-2.png|510]]

With a moving C.V., we have
$$
\frac{DB_{\text{sys}}}{Dt}=\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}\rho b \, d\forall + \int _{\text{C.S.}}b\rho \mathbf{W} \cdot \mathbf{n}\, dA  
$$
$$
\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}\rho  \, d\forall + \underbrace{ \int _{\text{C.S.}}\rho \mathbf{W} \cdot \mathbf{n}\, dA }_{ \dot{m}_{\text{out}}-\dot{m}_{\text{in}} }  
$$
### Deforming C.V.

![[Fluid Conservation of Mass-3.png]]