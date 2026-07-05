---
title: Diode Models
tags:
  - mte220
date: 2023-10-25
---
Here are some models (ways to think about diodes).

#### Simple switch
The simplest way to think about a diode is like a switch. If I push in the correct direction, it's just a switch that's on. More specifically, there is any voltage occurring in the forward direction, it's like a switch that turns on. In the diagram below, we have:
- Negative voltage means that the switch is open (no current flowing)
- Positive voltage means that the switch is closed (flowing!)

![[Diode Models.png|388]]

#### Switch with an offset voltage
In this slightly more complex model, when we hit the required forward voltage, the switch closes but we have to pay a voltage "penalty". Basically, once the diode is on, we have a constant voltage drop as a price we pay for turning it on.

The forward voltage is the penalty – if $V_{f} = 0.7\text{ V}$, then we know that the diode is only on once we've exceeded $7\text{ V}$ and then we're like a closed switch where we've paid the price of $0.7 \text{ V}$.

This is the primary model for [[MTE 220 - Sensors and Instrumentation|MTE 220]].

![[Diode Models-1.png|380]]

#### Switch with offset voltage and resistance
A further more complicated model accounts for the fact that there is a slope at the operating point due to resistance. Once we have reached the required voltage, we pay the penalty of $V_{f}$ and any additional current goes through a resistor.

![[Diode Models-2.png|380]]

#### Exponential Models
Finally, we can think of diodes in terms of an exponential model as introduced in [[Diode Intro#Exponential Current Relationship]].

