---
title: Fluid Head Losses
tags:
  - mech2210
date: 2025-05-19
aliases:
  - fluid head losses
---
Major losses are the energy losses that occur due to friction within long, straight sections of pipe. This loss is influenced by:
- The length of the pipe ($l$)
- The diameter of the pipe ($D$)
- The velocity of the fluid ($\overline{V}$)
- The friction factor ($f$), which depends on the pipe surface roughness and flow regime (laminar or turbulent).

The expression for **major head loss** is given by the Darcy-Weisbach equation:
$$
\Delta p = f \frac{l}{D} \frac{\rho \overline{V}^2}{2}
$$

The roughness of the pipe surface affects the friction factor. 

![[Fluid Losses-20250519184547200.png]]

Minor losses are the energy losses associated with pipe fittings (elbows, tees, valves, etc.), sudden expansions or contractions, bends and junctions.

These losses are typically smaller than major losses but can accumulate significantly in complex piping networks.

The total head loss is given by:
$$
h_{L}= h_{L}^{\text{Major}} + h_{L}^{\text{Minor}}
$$

## Major Losses
### Pressure Drop
The pressure loss $\Delta p$ is influenced by several parameters:
$$
\Delta p = \overline{f}(D, l, \epsilon , V , \rho, \mu)
$$
where $\epsilon$ is the surface roughness.

Alternatively:
$$
\frac{\Delta p}{\frac{1}{2}\rho V^{2}} = \overline{\phi}\left( \frac{\rho VD}{\mu}, \frac{l}{D}, \frac{\epsilon}{D} \right)
$$
- $\frac{\epsilon}{D}$ is the relative roughness, quantifying the effect of the pipe's surface texture on friction losses.
- $\frac{\rho VD}{\mu}$ is the Reynolds number (Re), indicating flow regime

The pressure drop is proportional to the pipe length $l$:
$$
\Delta p \propto l \quad \Longrightarrow \quad  \frac{l}{D} \phi\left( \frac{\rho VD}{\mu}, \frac{\epsilon}{D} \right) = \frac{l}{D} \phi\left( \text{Re}, \frac{\epsilon}{D} \right)
$$
### Friction Factor
As for the friction factor, we can consider the Darcy-Weisbach equation written in the form
$$
\Delta p = f \frac{l}{D} \frac{\rho V^{2}}{2}
$$
$f$ is the Darcy friction factor, which depends on flow type and pipe roughness.
- For laminar flow ($\text{Re} < 2100$), the friction factor is simply $\frac{64}{\text{Re}}$. In this regime, surface roughness is insignificant because the viscous forces dominate
- For turbulent flow, the friction factor becomes complex and requires the **Moody Chart** or empirical equations for calculation

![[Fluid Head Losses-20250519203603396.png]]

- Laminar region: Straight line showing $f = 64 / \text{Re}$
- Transitional region: Flow begins to fluctuate and turbulence starts
- Turbulent region: Characterized by curves representing different roughness values ($\epsilon / D$).

The Colebrook-White Equation for turbulent flow allows us to find the friction factor in the turbulent region:
$$
\frac{1}{\sqrt{ f }} = -1.8 \log_{10} \left[ \frac{\epsilon  / D}{3.7} + \frac{6.9}{\text{Re}} \right]
$$
- This is an implicit equation – $f$ cannot be isolated directly, so it must be solved iteratively or read from the Moody Chart.
### Head Loss Equation
The Darcy-Weisbach Equation can also be written in terms of head loss:
$$
h_L = f \frac{l}{D} \frac{V^2}{2g}
$$
- Valid for fully developed, steady, incompressible pipe flows

## Minor Losses
Minor losses in pipe flow are associated with components and fittings rather than the straight sections of pipe. These include bends, valves, tees, expansions and contractions, entrance and exit points. Despite being called “minor,” these losses can add up significantly in complex piping systems, especially where many fittings are present.

Minor losses are quantified using the head loss equation for local disturbances:
$$
h_L^{\text{Minor}} \propto \frac{V^2}{2g}
$$
These losses are modeled using a loss coefficient to encapsulate the effect of the disturbance:
$$
h_L^{\text{Minor}} = K_L \frac{V^2}{2g}
$$
$K_{L}$ is dependent on the shape and type of the components, as well as the Reynolds number and flow characteristics:
$$
K_{L} = \phi (\text{Re}, \text{Geometry})
$$
The pressure drop associated with minor losses can be written in terms of the loss coefficient:
$$
\Delta p = \gamma h_{L} = \frac{1}{2}K_{L} \rho V^{2}
$$

![[Fluid Head Losses-20250519204322642.png]]
