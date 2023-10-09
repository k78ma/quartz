---
title: Thevenin and Norton Representations
tags:
  - mte220
date: 2023-10-09
---
The goal of these representations is to simplify a circuit to only understand the behavior of the circuit (inputs and outputs) and abstracting its inner workings. 

![[Thevenin and Norton Representations.png|252]]

## Thevenin Equivalent Circuit
A series voltage source and resistor is called the Thevenin equivalent circuit, with:
- Thevenin equivalent voltage, $V_{\text{Th}}$
- Thevenin equivalent resistance, $R_{Th}$

![[thevenin.png|199]]

## Norton Equivalent Circuit
A parallel current source and resistor is called the Norton Equivalent Circuit, with:
- Norton equivalent current, $I_{N}$
- Norton equivalent resistance, $R_{N}$

![[norton.png|199]]

The two forms can be quickly interchanged by remembering that the terminal voltages and currents are equivalent, which leads to the following relationships:
- $V_{Th} = I_{N}R_{N}$
- $I_{N} = V_{Th} / R_{Th}$
- $R_{Th} = R_{N}$

This is explained below:

### Source Transform
Linear circuits can be reduced to two forms:

![[linear circuit representations.png|415]]

We can flip between these two forms during analysis because the voltage and current behavior at the terminals is identical, called a **source transform**. Consider the two extremes of applying open-circuit and short-circuit conditions at the terminal:

![[source transform.png]]

The left case is for creating a voltage source at the terminal and the right case is for a current source at the terminal.

- In the open-circuit case, $V_{OC}$ is measured at the terminals of both circuits, with $V_{OC} = V_{1}$ on the left and $V_{OC} = I_{1}R_{1}$ on the right.
- In the short-circuit case, both output a current of $I_{SC}$, with $I_{SC} = V_{1} / R_{1}$ on the left and $I_{SC} = I_{1}$ on the right.
- Since these circuits are equivalent, therefore $V_{OC} = I_{SC} / R_{1}$. We can use this relationship to convert between the two forms without changing terminal behavior