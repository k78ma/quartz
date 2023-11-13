---
title: Battery Capacity
tags:
  - mte220
date: 2023-11-12
aliases:
---
### Capacity
The capacity of [[Batteries]] is the total amount of energized charge available, $C_{\text{cell}}$.
- This is different from the capacitance of [[Capacitors]]!

Capacity is expressed as:
$$
\text{Capacity} = \text{charge} \times \text{time}
$$
For example, if we have a battery that has a capacity of 1000 $\text{mA} \cdot \text{h}$, it can do $100$ milliamps of current for 10 hours, or 200 milliamps of current for 5 hours.

#### Example
Energizer Max AA battery has $C_{\text{cell}} = 2500 \text{ mAh}$. How long can it power a 20 mA LED circuit? 2 A circuit?

$$
\begin{align}
\text{Capacity}  & = \text{Current} \times \text{Time} \\
	 & = I \cdot t \\
t_{1}  &  = C / I_{1} = \frac{2500}{20}  =125\text{ h} \\[3ex] 
t_{2}  &  = C / I_{2} = \frac{2500}{2}  =1\text{h } 15 \text{min}
\end{align}
$$
### Q (Total Charge)
Capacity is a proxy for $Q_{\text{cell}}$, the total charge that can be delivered at $V_{\text{cell}}$.

For example, we can have:
$$
1 \text{ mA}\times \text{h} = 10^{-3}\times 60 \frac{\text{s}}{\text{min}} \times 60 \frac{\text{min}}{\text{h}} =3.6 \text{ C}
$$
Basically the charge we can get (number of coulombs), is the 3.6 times the milli-amp hours.

#### Example
What is the $Q_{\text{cell}}$ for the Energizer AA?

Since we have $C_{\text{cell}} = 2500 \text{ mAh}$, we have:
$$
Q = 3.6 \times 2500 = 9\text{ kC}
$$

### E (Energy)
The total usable energy stored in a battery is $E_{\text{cell}}=Q_{\text{cell}}V_{\text{cell}}$. It quantifies how much "work" the battery can do. We can relate energy to power – energy is how much power you can deliver, such that:
$$
P = IV, \quad \int IV \, dt \implies E = QV 
$$
#### Example
How much How much energy is stored in the Energizer Max AA battery given $V_{cell} = 1.5\text{ V}$?

We have:
$$
E = QV = 9000\text{ [C]}\times 1.5 \text{ }[\text{J} / \text{C}] = 13.5 \text{ kJ}
$$
