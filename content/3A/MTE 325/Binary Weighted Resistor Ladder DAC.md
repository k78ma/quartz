---
title: Binary Weighted Resistor Ladder DAC
tags:
  - mte325
date: 2024-06-25
aliases:
  - binary weighted resistor ladder dac
---
The binary weighted resistor ladder [[Digital to Analog Converter|DAC]] implementation based on [[Op-amps|op-amps]] in a summer configuration.

![[Binary Weighted Resistor Ladder DAC.png]]

The voltage across each of the resistors in the summer is set to be the same, but the resistances themselves are set to powers of 2, because this reflects the weighting of each bit in a binary number. 
- If the bit in the LSB position contributes 1 to the total, a bit one position to the left should contribute double that and so on. In the case of this summer configuration, currents are scaled accordingly. 
- The largest resistor will contribute the smallest amount to the total current at the inverting node, while the smallest resistor contributes the largest amount.
- Note that each possible current is multiplied by a corresponding bit $B_{0}, B_{1}, B_{2}, B_{3}$. If that bit is a 0, the corresponding switch is open and no current is contributed by that resistor.

We can find an expression for $I_{f}$ with nodal analysis, then rearrange it to find a relationship between the binary input value $B$ and the output voltage $V_{\text{out}}$. 
- To calculate the maximum output, all bits would be on, so the summation of $B$ is equal to $2^{n-1}$. Re-arranging this gives an expression for the full scale analog range.
$$
\begin{align}
I_{f} = \frac{V_{\text{out}}}{0.5R}=\frac{2V_{\text{out}}}{R} & =-\left( \frac{V_{\text{ref}}}{8R}B_{0} + \frac{V_{\text{ref}}}{4R}B_{1} + \frac{V_{\text{ref}}}{2R}B_{2}+\frac{V_{\text{ref}}}{R}B_{3} \right) \\[2ex] 
2V_{\text{out}}  & = -V_{\text{ref}}\left( \frac{B_{0}}{8}+\frac{B_{1}}{4}+\frac{B_{2}}{2}+\frac{B_{3}}{1} \right) \\[2ex] 
V_{\text{out}}& =-\frac{V_{\text{ref}}}{8}(8B_{3}+4B_{2}+2B_{1}+B_{0})\\[2ex] 
V_{\text{out}}& = -\frac{V_{\text{ref}}}{16}\sum_{i=0}^{3}B_{i}2^{i}
\\[2ex] 
V_{\text{out}} & =-\frac{V_{\text{ref}}}{2^{n}}\sum_{i=0}^{n-1}B_{i}2^{i} \\[2ex] 
 & = k\,V_{\text{ref}}\sum_{i=0}^{n-1}B_{i}2^{i}, \text{ where } k=-\frac{1}{2^{n}}\\[2ex] 
V_{\text{out}}^{\text{Max}} & = -V_{\text{ref}} \frac{2^{n}-1}{2^{n}} = \text{FSAR}
\end{align}
$$
Consider the previous definition of an LSB in terms of an analog output:
$$
\begin{align}
1 \text{ LSB} & =\frac{\text{FSAR}}{2^{n}-1}
\\[2ex] 
	 & = \frac{-V_{\text{ref}} \; \frac{2^{n}-1}{2^{n}}}{2^{n}-1}\\[2ex] 
	 & =-\frac{V_{\text{ref}}}{2^{n}}
\end{align}
$$
- It's important to remember that the only reason the scaling factor $k$ is $| \frac{1}{2^{n}} |$ is because the feedback resistor has a ratio of $0.5R$. If this resistance was modified, the relationships developed here would no longer hold. 
- Also, $k$ is technically negative; in most cases, it's desirable that the output of the DAC have a positive range, so we need a negative $V_{\text{ref}}$ to cancel the negatives.

## Constant Impedance Implementation
DACs are not built with switches as shown above. For the device to work properly, $V_{\text{ref}}$ has to remain constant. It's very difficult to keep a constant voltage reference when the current draw is changing drastically, as is the case here when the current depends on which bits are enabled. This can be fixed by modifying the switches to single pole-double throw (SPDT) switches, as shown below in Figure 6. 

![[Binary Weighted Resistor Ladder DAC-1.png]]

- One throw is still connected to the inverting node of the amplifier, but the other is connected to ground. Recall that the inverting node is also at $0\text{V}$.
- As a result, regardless of which position the switch is in, the same current is passing through the resistor. However, the current might just flow to ground instead of the op-amp terminal if the switch is at position 0.
- Since the current through the resistor is always the same, the current draw from $V_{\text{ref}}$ perspective never changes.
- In other words, the input impedance is constant.
- The downside of this is that its very power inefficient as the max possible current is always being drawn, whether that current is being dumped to ground or is actually going to the op-amp node

Consider the connection between the binary data stored in the register and the DAC as shown in Figure 7. It’s important to notice that the binary values are controlling the position of the switch, they are not connected directly to the current path.

![[Binary Weighted Resistor Ladder DAC-2.png]]

## Resistor and Current Issues
One problem with the original design was solved by stabilizing the current draw on $V_{\text{ref}}$. Now consider some additional issues by looking at a more realistic 8-bit DAC, and the resistor range required for this.

If a $10\text{ k} \Omega$ is chosen for bit 7, which is the smallest resistance because we want to reduce the overall current draw, then a $1.28 \text{ M} \Omega$ resistor is needed for the lowest bit. This is a huge range; a typical $\pm 5\%$ resistor tolerance will have on the current accuracy in the summer. Another challenge is the fabrication of this broad range of values; they are often done with different materials, so they may age differently or have different thermal coefficients, further impacting the accuracy of the DAC.

There is also an op-amp issue. If large resistor values are used, an op-amp that can handle a current range of $1\text{ mA}$ to $4 \text{ }\mu \text{A}$ is needed, which is extremely low and below the noise floor for cheap op-amps. If smaller resistors are used, we can get a minimum current flow of $400 \text{ }\mu \text{A}$, which is more realistic; however, the max current is now $100 \text{ mA}$, and that's just for turning on the MSB. If we want to turn all bits on, the current will be almost $200 \text{ mA}$. Getting an op-amp to handle this range means an expensive device; for larger values of $n$, even larger resistors will be needed, further increasing the required current ranges.

![[Binary Weighted Resistor Ladder DAC-3.png]]