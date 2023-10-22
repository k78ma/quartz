---
title: Preferred Value Numbering System
tags:
  - mte220
date: 2023-10-22
---
The basic idea of this is that for a given range, values are spaced logarithmically to cover an entire number lines. Standard sets are called **"E-series**; all values have the same tolerance within the series. Below is an E12 series with 10% tolerance:

![[e12.png|392]]

For example, if I needed a 26 ohm resistor, I can look at this and see that there is no 26 ohm resistor available with 10% tolerance, but we do have a 27 ohm. Either I can just use the 27 ohm or I pay more money for more steps on the scale to get something closer to 26.

### Example
Given $V_{in} = 5\text{V}$, $R_{1} = 100\text{k}\Omega$, choose the closest E24 value for $R_{2}$ so that $V_{out} = 3.3\text{V}$. What size SMD (surface mount device) resistors will you need? Assume we are working with a voltage divider circuit.

`E24 values (5% tolerance): 1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1`

We have:
$$
\begin{align}
V_{out}  & = V_{in} \left( \frac{R_{2}}{R_{1}+R_{2}} \right)\\[3ex] 
3.3  & = 5\left( \frac{R_{2}}{10+R_{2}} \right)\\[3ex] 
R_{2}  & = 19.4 k\Omega
\end{align}
$$
From the values above, we see that there is no 19.4 resistor, only 18 and 20 (the provided E24 values need to be multiplied by 10).

- We could choose the 20 kOhm resistor because it is the closest, and thus would minimize error.
- We could choose the 18 kOhm resistor as the 20 kOhm would exceed the 3.3V output.

Let's say we choose $R_{2} = 20 \text{k}\Omega$, we would have:
$$
V_{out} = 3.333 \text{ V}
$$
We also need to consider the size of the resistor; they need to dissipate heat, and a small resistor might not be able to handle it and melt off the board.
$$
P_{R_{2}} = \frac{V^{2}}{R} = \frac{3.333^{2}}{20K} = 544 \mu W
$$
