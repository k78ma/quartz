---
title: Switching Regulators
tags:
  - mte220
date: 2023-11-12
aliases:
  - boost converter
---
Switching regulators are DC/DC and use a controlled switch that is either fully on or fully off. Unlike [[Linear Regulators]], switching regulators can be buck (step-down), boost (step-up), or inverting. In general. switching regulators also have higher efficiency, but can be more expensive

![[Switching Regulators.png|524]]

Essentially, these work using a 2-stage process:
1. Transistors rapidly switch the input voltage on and off
2. A "flywheel circuit" (diode, inductor, capacitor) smooths the pulsed voltage.