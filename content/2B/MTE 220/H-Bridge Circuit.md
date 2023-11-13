---
title: H-Bridge Circuit
tags:
  - mte220
date: 2023-11-11
aliases:
---
An H-bridge circuit uses switches to control current direction. Complete with `1` = $V_{\text{motor}}$, `0` = GND. 

![[H-Bridge Circuit-1.png|320]]

One direction of current flow ("forward") would be:
![[H-Bridge Circuit-2.png|372]]

The reverse would be:
![[H-Bridge Circuit-3.png|368]]

Expressed as a logic table, we would have:
![[H-Bridge Circuit-4.png|396]]

Other cases:
- To have the motor "coast", such that no power is applied, we would shut off all 4
- To brake the motor, we ground both sides by turning N1 and N2 on but keeping the PMOSes off
- To short circuit, we run the circuit through one side without going through the motor.

![[H-Bridge Circui.png|408]]


On many circuits, an LED is added to see which way current is flowing:
![[H-Bridge Circuit.png|448]]