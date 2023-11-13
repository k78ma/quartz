---
title: Controlled Current Sources
tags:
  - mte220
date: 2023-11-11
aliases:
---
Controlled current sources do not actually exist. They are made using a current-sensing feedback amplifier.

The current is sensed using voltage across a low-value resistor (to save on $I^{2}R$ losses). A control MOSFET gate voltage acts as a variable resistor. Negative feedback is used to maintain desired current.

![[Controlled Current Sources-1.png|476]]

We provide a fixed amount of current $I_{load}$ applied to some load (modeled as $R_{load}$). Op-amps can't sense current, but we can find a known voltage, $V_{sense}$ using $I_{load} \cdot R_{load}$. Fundamentally, the op-amp finds the difference between its two terminals, which is essentially the difference between what we have and what we want:
$$
\begin{align}
V_{in}  & = V_{+} - V_{-}  \\
 & = V_{set} - V_{sense}  \\
 & = V_{error}
\end{align}
$$
Then, the output signal given by the op-amp, $V_{out}$, is just the $A_{0} \times V_{error}$. 

So, we set $V_{set}$ to be the $I_{load}$ that we want to cause $V_{sense}$. For example, if we want $I_{load} = 2\text{ A}$, and have $R_{sense} = 1\text{ }\Omega$, then what would $V_{set}$ need to be?
$$
\begin{align}
V_{set}  & = I_{load} \cdot R_{sense} \\
	 & = 2\text{ A} \cdot 1 \text{ }\Omega \\
	 & = 2\text{ V}
\end{align}
$$
Therefore, if we set $V_{set} = 2\text{ V}$ to get an $I_{load}$ of $2\text{ A}$.

Following the concepts of negative feedback: As $V_{out}$ increases, $V_{GS}$ goes up, and $I_{load}$ goes up, so $V_{sense}$ goes up and $V_{error}$ decreases.

![[Controlled Current Sources.png|596]]

### Example
Design the circuit above to charge a 14.4 V rechargeable battery, given:
- $I_{CCS}$ from $0$ to $2\text{ A}$
- An MCU DAC can generate $V_{set}$ from 0 to $3.3\text{ V}$
- $V_{DD} = 18\text{ V}$

A way we can find $R_{sense}$ is to consider the max values of the problem:
$$
R_{sense} = \frac{3.3}{2} = 1.65 \text{ }\Omega
$$
What about power? This dissipates $P = V\cdot I  = 3.3 \cdot 2 = 6\text{ V}$. We can let $V_{sense}$ be much lower (depending on how noisy things are). Derek Wright decrees that for this problem we will choose an E24 $0.16 \text{ }\Omega$ resistor (divide by 10), which still gives $320 \text{ mV}$ of signal, so that $P = I^{2}R=0.64 W$. For an actual problem, more information should be included so that we can make educated decisions on trade-offs between noise, power, etc based on the specific application at hand.

![[Controlled Current Sources-3.png|592]]

![[Controlled Current Sources-2.png|596]]

We find $V_{set}$ by making a voltage divider given $320 \text{ mV}$ of signal.
### Alternate Configuration
If we want to use a PMOS instead of an NMOS (for example safety issue of terminal connected to $V_{DD}$, whereas using a PMOS would expose ground), we can use the pMOS inverted action to flip the feedback path so that we still get negative feedback. This is less efficient, but generally still okay.

![[Controlled Current Sources-4.png|660]]