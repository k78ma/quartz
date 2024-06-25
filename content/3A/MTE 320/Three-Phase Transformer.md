---
title: Three-Phase Transformer
tags:
  - mte320
date: 2024-06-25
aliases:
  - three-phase transformer
---
A three-phase transformer can be realized in one of the two following ways:
- Using three single-phase transformers and connecting the primary and secondary sides of these transformers together in $Y$ or $\Delta$ style
- Using a multi-legged core to house the three primary and secondary windings.

Three single-phase transformers connected in $Y$ on the primary side and $\Delta$ on the secondary side.

![[Three-Phase Transformer-2.png]]

Three-phase transformer implemented with a 5-legged core:

![[Three-Phase Transformer-1.png]]

The connections that are possible in 3-phase transformers are:
- $Y$-$Y$
- $Y$-$\Delta$
- $\Delta$-$Y$
- $\Delta$-$\Delta$

For the sake of analysis, three-phase transformers are treated as three single-phase transformers. Usually, $\Delta$ connections are converted to an equivalent Y connection and a single-phase equivalent circuit diagram is obtained. This reduces the 3-phase problem to a single-phase problem, which can be easily solved. When voltage and current in one phase of transformer are found, the voltages and currents in the other two phases can be calculated by introducing the proper phase shifts.