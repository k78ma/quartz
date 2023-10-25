---
title: Diode Operating Points
tags:
  - mte220
date: 2023-10-24
---
Looking at a diode datasheet, we see that there is a huge spread in forward voltage.
Recall that:
- Small $\Delta V_{D}$ causes a big $\Delta I_D$
- Regular $\Delta I_{D}$ causes very small $\Delta V_{D}$

Circuit diagram:

![[Diode Operating Points-1.png|106]]

Datasheet:

![[Diode Operating Points.png|664]]


#### Problem - change in current
**What if $I_{D}$ goes from $20\text{ mA}$ to $100\text{ mA}$?**

Normally, we would just check the datasheet for $I_{D}$ vs $V_{D}$ curves.

In this case, we will it mathematically solve it:
$$
\begin{align}
I_{D_{1}} = I_{S} e^{\frac{V_{D_{1}}}{V_{T}}}\\[2ex] 
I_{D_{2}} = I_{S} e^{\frac{V_{D_{2}}}{V_{T}}}\\[3ex] 
\frac{I_{D_{1}}}{I_{D_{2}}} = e^{(V_{D_{1}}-V_{D_{2}})} / V_{T}
\end{align}
$$
or:
$$
V_{D_{1}} - V_{D_{2}} = V_{T} \cdot \ln \left( \frac{I_{D_{1}}}{I_{D_{2}}} \right)
$$
Solving, we get $V_{D_{1}} = 3.3 \text{ V}$ and $V_{D_{2}} = 3.168\text{ V}$. Basically, a 200x change in $I_{D}$ only resulted in a $4\%$ change in $V_{D}$. This is why mostly assume that $V_{D}$ is constant when we're doing problems with a diode in a circuit.

#### Problem - picking R
**Choose E24 R when $V_{DD} = 5\text{ V}$ for nominal operating conditions. What is the max current given 5% tolerance on this resistor? We determine the worst-case power considering the min and max $V_{F}$ using the $R$ chosen above.**

![[Diode Operating Points-3.png|383]]


We have:
$$
R = \frac{V}{I} = \frac{1.7}{20\text{m}} = 85\text{ }\Omega
$$
We choose 91 ohms for R (based on E24) as this limits current better.

Solving for maximum current based on 5% tolerance for a 91 ohm resistor:
$$
\begin{align}
R_{min} = (0.95 \times 91) = 86.45 \\[3ex] 
I_{max} = \frac{V}{R_{min}} = \frac{1.7}{86.45} = 19.67 \text{ mA}
\end{align}
$$
Keeping $R=91\text{ }\Omega$, consider $V_{D}$:
$$
\begin{align}
P_{min} = V_{DD} \times I_{F} = 5\left( \frac{V_{R}}{R} \right) = 5\left( \frac{5-3.80}{91} \right) = 66 \text{ mW} \\[3ex] 
P_{max} = V_{DD} \times I_{F} = 5\left( \frac{5-2.80}{91} \right) = 121 \text{ mW}
\end{align}
$$
The 3.80 and 2.80 values are from the operating forward voltage of the diode from the datasheet above.