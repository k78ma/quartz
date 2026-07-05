---
title: Laminar and Turbulent Flow
tags:
  - mech2210
date: 2025-05-19
aliases:
  - laminar and turbulent flow
  - Reynolds number
---
We can distinguish the difference between these two classifications of flow by using a simple apparatus as shown by the figure (Reynold’s dye experiment) – injecting dye into a pipe in which water flowed due to gravity.

![[Laminar and Turbulent Flow-20250519170857837.png|649]]

**Laminar flow:** Low $V$. Characterized by smooth, orderly fluid motion. Dye streaks remain well-defined and straight, showing layers of fluid sliding past each other with minimal mixing.

**Transitional flow:** Medium $V$. Flow starts to become unstable; some oscillations and disturbances in dye streak.

**Turbulent flow:** High $V$. Fluid particles move chaotically with mixing and swirling. They dye streak disperses rapidly,.

The flow scenario depends on velocity $V$, pipe diameter $D$, fluid viscosity $\mu$, and fluid density $\rho$.

The transition between these flow types is governed by the dimensionless number called the **Reynolds Number**, defined as
$$
\text{Re} = \frac{\rho VD}{\mu}
$$
Essentially, the Reynolds number serves as a ratio that compares inertial forces to viscous forces:
$$
\text{Re} = \frac{\rho VD}{\mu} \cdot  \frac{du / dy}{ du / dy} = \frac{\rho Vdu}{\tau} = \frac{\rho V dt \frac{du}{dt}}{\tau} = \frac{\rho La}{\tau} = \frac{\rho La}{\tau} \cdot  \frac{L^{2}}{L^{2}} = \frac{F_{\text{inertial}}}{F_{\text{viscous}}}
$$
We have:
- **Laminar Flow:** $Re < 2100$.
- **Transitional Flow:** $2100 < Re < 4000$.
- **Turbulent Flow:** $Re > 4000$.

