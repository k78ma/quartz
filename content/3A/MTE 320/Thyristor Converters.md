---
title: Thyristor Converters
tags:
  - mte320
date: 2024-07-29
aliases:
  - thyristor converters
---
Unlike [[Diode Rectifier|diode rectifiers]], thyristor converters can produce a controllable DC-side voltage, thanks to the added control degree of freedom at turn on provided by [[Thyristor|thyristors]].

Thyristor converters are bidirectional. The direction of power flow can be controlled by adjust the time of turning on of thyristors with respect to a reference in time, to be from the AC-side to the DC-side (rectifier mode of operation) or vice-versa (inverter mode of operation). 

Unlike diode rectifiers, which require a DC-side filter capacitor to eliminate ripple content, thyristor converters use a large DC-side inductor to make low-ripple DC current. A thyristor converter is a nonlinear load, with high harmonic filtering requirements, especially on the AC side.

![[Thyristor Converters.png]]

Under the assumption that $L_{s}=0$, and $i_{d} = I-d = \text{constant}$, the average value of the output voltage, $V_{d}$, can be found as:
$$
V_{d}=1.35V_{LL}\cos \alpha
$$
where $V_{LL}$ is the RMS value of the line-to-line voltage of the AC source, and $\alpha$ is the delay angle with respect to a reference corresponding to the time at which each thyristor gets forward-biased. Note that in a three-phase diode bridge rectifier, $\alpha=0$, since each diode turns on as soon as it gets forward biased.

As $\alpha$ varies in the range of $0$ to $180\degree$, $V_{d}$ varies between $-1.35 V_{LL}$ and $1.35V_{LL}$.

Assuming thyristors to be lossless, the average power on the AC side is equal to the average power on the DC side, such that:
$$
P_{AC}=P_{DC}=1.35V_{LL}I_{d}\cos \alpha
$$
From the average power equation, for $0<\alpha<90\degree$, $P > 0$ (rectifier mode of operation). For $90\degree<\alpha<180\degree$, $P<0$ (inverter mode of operation).

Note that a three-phase thyristor converter can be used to drive a DC motor and control its speed, as the active load on the DC side in Fig. 7-16 can represent the armature of a separately excited DC motor.

Thyristors are very reliable and mature from technology point of view; however, availability of highly capable fully controllable switches has restricted the use of thyristor converters to three-phase applications at very high-power levels, such as high-voltage DC transmission (HVDC) systems and high-power DC and AC motor drives. In the next 10-20 years, thyristor converters are expected to be phased out, as controllable switches of high power ratings, and converter structures capable of handling very high power levels at high efficiencies, with superior waveform qualities, and low stresses on semiconductor devices, become available on the market.

