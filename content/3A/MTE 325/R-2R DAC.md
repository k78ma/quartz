---
title: R-2R DAC
tags:
  - mte325
date: 2024-06-25
aliases: []
---
The solution to needing a wide range of resistor values, like in the case of the [[Binary Weighted Resistor Ladder DAC]], is to make use of equivalent resistances.

Consider the R-2R resistor ladder shown below:

![[R-2R DAC.png]]

![[R-2R DAC-1.png]]

The equivalent impedance seen between the $R$ and $2R$ resistors at every point in the chain, as marked by the blue arrows in Figure 9, is $R$. Simple parallel and series resistor combinations can be used to prove this.

Knowing that the ladder is just a series of $2R$ resistors in parallel, and equal resistors in parallel will divide current evenly, the following observations can be made:
- Input impedance is fixed at $Z_{\text{in}}=R$ (starting from the right)
- $I = \frac{V_{\text{ref}}}{R}$
- $I_{1}=\frac{I}{2}$
- $I_{2}=\frac{I_{1}}{2}=\frac{I}{4}$

## R-2R DAC 
This R-2R ladder can be combined with an op-amp to build a DAC:
- The ground node of the R-2R ladder is connected to the inverting node of the op-amp, with a feedback resistance of $R$. 
- The most significant bit will be connected to the $2R$ resistance closest to $V_{\text{ref}}$. 
- SPDT switches are still used to maintain a constant current draw on $V_{\text{ref}}$.

![[R-2R DAC-2.png]]

For a 4-bit R-2R DAC, we can derive the following expression:
$$
\begin{align}
V_{\text{out}} =-I_{T}R  & = -RI_{T} \\[2ex]
	 & = -R\left( B_{0} \frac{I}{16}+B_{1} \frac{I}{8}+ B_{2} \frac{I}{4}+B_{3} \frac{I}{2} \right) \\[2ex] 
	 & = -R\left( B_{0} \frac{V_{\text{ref}}}{16R} + B_{1} \frac{V_{\text{ref}}}{8R} +B_{2} \frac{V_{\text{ref}}}{4R}+B_{3} \frac{V_{\text{ref}}}{2R} \right) \\[2ex] 
V_{\text{out}} & = -\frac{V_{\text{ref}}}{16}\sum_{i=0}^{3}B_{i}2^{i} \quad \\[2ex]
	 x & =kV_{\text{ref}}B, \quad k=-\frac{1}{16}
\end{align}
$$
More generally, for an $n$-bit R-2R DAC:
$$
V_{\text{out}}=-\frac{V_{\text{ref}}}{2^{n}}\sum_{i=0}^{n-1}B_{i}2^{i}
$$
For the full scale output where $B_{i} = 1$ for value of $i$:
$$
V_{\text{out}}^{\text{max}}=-\frac{V_{\text{ref}}}{2^{n}}\sum_{i=0}^{n-1}2^{i}=-V_{\text{ref}}\left( \frac{2^{n}-1}{2^{n}} \right)
$$
Thus, if $| k |< \frac{1}{2^{n}}$, we have $| V_{\text{out}} | < | V_{\text{ref}} |$ as desired.

## Performance
We've shown that this design performs similarly to the binary weighted resistor ladder in terms of the relationship between the input and output voltage. Why is it better?

We only need to use two resistor values, $R$ and $2R$, which are close in magnitude, so the issues of tolerance and materials that arose for the binary weighted resistor ladder are eliminated. However, we still require a high-quality op-amp that stays linear across a broad range of input currents.

In reality, DACs are not typically constructed using discrete resistors, regardless of the architecture. It’s far more common to fabricate all the electronics, including the resistors, on a single silicon die. In this case, there are still significant advantages to only needing two resistor values in terms of the space required. Since all resistors are being fabricated on the same die, they will have the same tolerance errors. The R-2R design is not sensitive to the exact value of R, but rather the ratio of R and 2R, which is far easier to guarantee.

A quick Digikey search for DACs returns almost 10,000 results:
- Only 29 use the binary-weighted resistor design and not a single one is in stock as of Feb. 5, 2024. 
- In contrast, over 4000 are R-2R based. 