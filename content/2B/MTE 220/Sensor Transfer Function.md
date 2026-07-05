---
title: Sensor Transfer Function
tags:
  - mte220
date: 2023-11-14
aliases:
---
A transfer function, in the context of sensors, expresses output as a function of input. In [[SYDE 252 - Signals and Systems|SYDE 252]] or filters, "transfer functions" means something specific.

Units for a transfer function are:
$$
\left[ \frac{\text{output state}}{\text{input state}} \right]
$$
which could be \[V/kPa], \[Hz/N], etc.

For example, a resistive pressure sensor could have:
$$
A = 10 \, \, \left[ \frac{\text{k} \Omega}{\text{kPa}} \right]
$$
this means that its resistance is $10\text{ k} \Omega$ for every $\text{kPa}$ of applied pressure. This notation $A$ is mimics the gain of an op-amp.

These can be often be much more complex, such as:
$$
R_{out} = 10P_{\text{kPa}}+0.02P_{\text{kPa}}^{2} +7 \quad [\text{k} \Omega]
$$
Transfer functions can include frequency effects, like lowpass behaviour.

Transfer functions can be a general way to relate one state to another – similar to gain for [[Op-amps]] and [[Sensor Transfer Function]].

For example, for a voltage divider, the transfer function would be:
$$
\frac{V_{out}}{V_{in}} = \frac{R_{2}}{R_{1}+R_{2}} \quad [\text{V}/\text{V}]
$$
Applies to linear systems.

For a formalization, see [[Transfer Function]].