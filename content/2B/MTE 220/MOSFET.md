---
title: MOSFET
tags:
  - mte220
date: 2023-11-04
aliases:
---
A MOSFET (Metal Oxide Semiconductor Field Effect Transistor) allows us to control current flow using a voltage.

![[MOSFET-1.png|320]]

When $V_{GS} > V_{t}$, the current $I_{D}$ begins to flow (see diagram with graph below). $I_{D}$ is then proportional to $V_{OV}^{2}$ 

Clarifying:
- $V_{GS}$ is gate voltage with respect to the source voltage. We just assume the source is grounded.
- $I_{D}$ is the drain current that is being output.
- $V_{t}$ is a threshold voltage.
- $V_{OV}$ refers to over voltage, such that $V_{OV}= V_{GS} - V_{t}$
- $V_{DS}$ is the voltage difference between the drain and source terminals of the transistor.

![[MOSFET-2.png|420]]

Basically, $V_{DS}$ is a hose pressure being squeezed. Higher $V_{DS}$ means higher $I_{D}$.

>[!info] Simplified Model
>In [[MTE 220 - Sensors and Instrumentation|MTE 220]], we use this simplified model:
>- If $V_{GS} < V_{F}$: OFF switch
>- If $V_{GS} > V_{F}$: ON switch
> 
> We may have to model the fact that there is some resistance in the exit pathway, so we add a resistance RDS on.
> 
>Nozzle analogy:
>
>![[MOSFET.png|324]]

