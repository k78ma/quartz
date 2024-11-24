---
title: Bearing Fits
tags:
  - mte322
date: 2024-11-24
aliases:
  - bearing fits
---
## General Rules for Bearing Fits

![[Bearing Fits.png|612]]

- Any mated parts need tolerance for proper fitting
- For bearings, either outer or inner ring is tight fit while the other is loose fit. This depends on the loading condition. **The one that gets rotating (cyclic) load needs tight fit**.

- IT grade for tolerancing can specify tolerance according to fit types, regardless of size.
	- Consists of a letter and a grade number, e.g. H7g5. Uppercase for hole and lower case for shaft.
	- Letters dictate general fit type (A(a) ~ H(h) indicate loose fit, J(j) ~ Z(z) for tight fit)
	- The smaller the grade number, the tighter the tolerance margin
	- Find values from IT grade tables

For bearing fitting:
- The inner ring always moves with the shaft and the outer ring always moves with the housing regardless of their fits
- In usual (nominal) situations, either inner ring or outer ring has tight-fit while the other has loose-fit
- The one that gets a dynamic (cyclic) load circling around its circumference is to be tight-fitted
- Once the fit is determined, the specific tolerance can be found following the guidelines provided in the bearing catalogue (usually specified in IT grade)
- Bearing fitting is one of critical criteria to consider in designing parts related to how we assemble them

Examples:
- Most of cutting meachines (milling lathe, circular saw, etc), have power transmission shafts (pulley, gear), fans, and pump motors have constant loads on rotating shafts, and thus the inner rings are tightly fitted.
- Examples of tightly fitted housing: tension pulleys, drum shaft of washing machine, rope shaves

### Inner Ring Tight / Outer Ring Loose
- Inner ring rotating with stationary load on inner ring
	- Load circles around inner ring, but is concentrated at a single point for the outer ring

![[Bearing Fits-3.png|556]]

- Outer ring rotating with rotating load on outer ring
	- Load is concentrated at a single point for the outer ring, but circles around inner ring

![[Bearing Fits-4.png|556]]

### Inner Ring Loose / Outer Ring Tight
- Outer ring rotating with stationary load on outer ring
	- Load circles around outer ring, but is concentrated at a single point for the inner ring

![[Bearing Fits-5.png|556]]

- Inner ring rotating with rotating load on inner ring
	- Load is concentrated at a single point for the inner ring, but circles around outer ring

![[Bearing Fits-6.png|564]]
  
## Example – Determine Fit Types

![[Bearing Fits-7.png|500]]

a) Milling machine spindle. Cutting force is a stationary load applied to the shaft which is rotating. Therefore, the inner ring is rotating with a stationary load. Thus, inner ring gets circling load (tight-fitted) and the outer ring is to be loose-fitted.

b) Conveyer belt roller. Belt tension is stationary load applied to the housing which is rotating. Therefore, the outer ring is rotating with a stationary load on the outer ring, which means the outer load gets circling road (tight-fitted) and the inner ring is to be loose-fitted.


## Example – Bearing Fitting

![[Bearing Fits-8.png|552]]

Assume that the shaft is rotating under the stationary load applied to it.

Rotating inner load means tight fit for inner rings and loose fit for outer.

For 6810, $D=65, d=50$:
$$
\begin{cases}
\text{Shaft fitting:} \, \, \text{js6(j6)} \quad  & \longrightarrow \quad  \phi 50\text{js6}=\phi 50\pm 0.008  \\[1.5ex]
\text{Housing fitting:} \, \, \text{H8} \quad  & \longrightarrow \quad  \phi 65\text{H8}=\phi 65^{+0.046}_{\,\,0.000}
\end{cases}
$$
- Light loads ($p=339<0.06\times 6400=384$)

For 6210, $D=90, d=50$:
$$
\begin{cases}
\text{Shaft fitting:} \, \, \text{k5} \quad  & \longrightarrow \quad  \phi 50\text{k5}=\phi 50^{+0.013}_{+0.002}  \\[1.5ex]
\text{Housing fitting:} \, \, \text{H7} \quad  & \longrightarrow \quad  \phi 90\text{H7}=\phi 90^{+0.035}_{\,\,0.000}
\end{cases}
$$
- Normal loads ($P=2250>0.064\times 35000=2100$)
