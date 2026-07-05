---
title: Refrigerators and Heat Pumps
tags:
  - mte309
date: 2024-08-03
aliases:
  - refrigerators and heat pumps
---
Refrigerators and heat pumps move thermal energy from a cold reservoir to a hot reservoir using work. However, they have different goals:
- The goal for a refrigerator is to move energy from $T_{c}$
- The goal of a heat pump is to move energy to $T_{H}$

![[Refrigerators and Heat Pumps.png]]

In a refrigerator, the working fluid, called the **refrigerant**, enters the compressor as a vapor. The compressor is powered by electricity, and does work to compress the refrigerant to the condenser pressure. It leaves the compressor at a relatively high temperature, and cools down and condenses as it flows through the coils of the condenser by rejecting heat to the surrounding medium. It then enters a capillary tube (throttle) where its pressure and temperature drop drastically. The low-temperature refrigerant then enters the evaporator, where it evaporates by absorbing heat from the refrigerated space. The cycle is completed as the refrigerant leaves the evaporator and re-enters the compressor.

The objective of a heat pump, however, is to maintain a heated space at a high temperature. This is accomplished by absorbing heat from a low-temperature source, such as well water or cold outside air in winter, and supplying this heat to the high-temperature medium such as a house. An ordinary refrigerator that is placed in the window of a house with its door open to the cold outside air in winter will function as a heat pump since it will try to cool the outside by absorbing heat from it and rejecting this heat into the house through the coils behind it.
## Coefficient of Performance
The **COP** is used to quantify the effectiveness of refrigerators and heat pumps.

For refrigerators:
$$
\begin{align}
\text{COP}_{\text{R}} & =\frac{\dot{Q}_{L}}{\dot{W}}=\frac{\dot{Q}_{L}}{\dot{Q}_{H}-\dot{Q}_{L}} \\[2ex] 
\text{COP}_{\text{R, Carnot}}  & =\frac{1}{\frac{T_{H}}{T_{L}}-1}
\end{align}
$$
For heat pumps:
$$
\begin{align}
\text{COP}_{\text{HP}} & =\frac{\dot{Q}_{H}}{\dot{W}}=\frac{\dot{Q}_{H}}{\dot{Q}_{H}-\dot{Q}_{L}} \\[2ex] 
\text{COP}_{\text{HP, Carnot}}  & =\frac{1}{1-\frac{T_{L}}{T_{H}}}
\end{align}
$$
For heat pumps, $\text{COP}_{\text{HP}}$ can be greater than 1, which implies that they can be thermodynamically efficient. In general, the COP increases as $T_{H}-T_{L}$ is reduced (HP is efficient in temperature climates )

## COP Example

![[MTE 309 LE32-1.pdf]]