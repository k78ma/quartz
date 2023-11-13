---
title: Batteries
tags:
  - mte220
date: 2023-11-12
aliases:
---
Batteries are electrochemical cells whose voltage are determined by chemistry, $V_{\text{cell}}$, not size (AAA vs. D). There are rechargeable and non-rechargeable ones.

- Non-Rechargeable ("Primary"): 
	- Typical alkaline battery 
	- $V_{\text{cell}} = ~1.5\text{ V}$
- Rechargeable ("Secondary"): 
	- Lithium-Ion (LiIon), Lithium Polymer (LiPo), Nickle Metal Hydride (NiMH), Nickle Cadmium (NiCd)
	- Widely varying $V_{\text{cell}}$

A very basic model of a battery is to consider it as a voltage source. However, this is a vast oversimplification as there are lots of factors like internal resistance, aging, etc.

![[Batteries.png|232]]

### Battery Summary
- Batteries have very complex behaviour
- $V_{cell}$ is chemistry dependent (SoC curve too)
- $C_{\text{cell}}$ increases with physical size, proxy for $Q_{\text{cell}}$
- $E_{\text{cell}} = Q_{\text{cell}}\cdot V_{\text{cell}}$
- $V_{total} = N \cdot V_{\text{cell}}$ (series)
- $C_{total} = M \cdot C_{\text{cell}}$ (parallel)
- $E_{total} = Q_{total} \cdot V_{total} = M\cdot N \cdot Q_{\text{cell}} \cdot V_{\text{cell}}$
	- E has units of joules ($J$) or watt-hours ($A \cdot h \cdot V = w \cdot h$)
- State of charge: SoC, like an indicator: 0 = Empty, 1 = full
	- "Discharge curve" – plot of V vs SoC, depends on chemistry
	- Recharge: $I_{r} = P \cdot C_{\text{total}}$, values depends on chemistry

![[Batteries-1.png]]$\dot{}$