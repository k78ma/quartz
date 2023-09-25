---
title: Op-amp Assumptions
tags:
  - mte220
date: 2023-09-19
---
Assumptions that are always good:
- The input terminals require no input current: $I_{in+} = I_{in-} =0$ 
	- Equivalently, $R_{in} \to \infty$ o.c
- The output terminal can supply any amount of current: $I_{out}$ can go to $\infty$ 
	- Equivalently, $R_{out} =0$, $V_{out}$ won’t drop under loading
- Open-loop gain is infinite: $A_{0}\to \infty$
	- $V_{in+}$ and $V_{in-}$ are so close they’re effectively equal

If a negative closed-loop feedback is present:
- We set $V_{+}$
- Op-amp makes $V_{-} = V_{+}$
	- This equivalency is more accurate as $A_{0}$ increases
- In reality, op-amp stops at $V_{out} = A_{0}(V_{+}-V_{-})$
	- Since there’s a very small difference between the two, $A_{0}$ is very big
- General solution procedure for closed-loop negative feedback:
	1. Find $V_{+}$ (might be a function of $V_{in}$)
	2. Find equation for $V_{-}$
	3. Rearrange to get $V_{out}$ as a function of input
