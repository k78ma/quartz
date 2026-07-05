---
title: Battery State of Charge
tags:
  - mte220
date: 2023-11-12
aliases:
---
Battery voltage drops as it delivers charge (non-linear).

Capacity and voltage are complicated functions of how the battery is used, taking into account factors such as discharge current, temperature, battery age, number of prior recharge cycles, depth of discharge, etc.

**State of Charge** (SoC) is like a gas tank indicator: 0% is empty, 100% is full.
- SoC = 1 when battery has performed no work
- SoC = 0 when it has delivered $E_{total}$ work

The Discharge Curve plots voltage vs. SoC:

![[Battery State of Charge.png|432]]

