---
title: Comparator
tags:
  - mte220
date: 2023-10-22
---
A comparator is kind of like a "greater than or less than" block. It lets us compare two analog signals and give a digital output.

#### Definition
$$
V_{out} =
\begin{cases}
V_{DD}, \quad V_{+} > V_{-} \\
V_{SS}, \quad V_{+} < V_{-}
\end{cases}
$$

#### Example
A digital system with a light sensor for differentiating between night and day.
- Boolean `0` = 0 Volts, Boolean `1`= 5 Volts
- Light sensor output voltage exceeds 2V during the day.

![[Comparator.png|373]]

A comparator "slams" any input voltage below the $V_{ref}$ (which is 2V in this case) to zero, and anything above to $V_{out}$ (5V in this case).

- If $V_{ref}$ is connected to the negative terminal, any input voltage below it is $V_{SS}$
	- "Greater than" operation
- If $V_{ref}$ is connected to the positive terminal, any input voltage above it is $V_{SS}$
	- "Less than" operation

![[Comparator-1.png|472]]