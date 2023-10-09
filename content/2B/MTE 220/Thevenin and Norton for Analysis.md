---
title: Thevenin and Norton for Analysis
tags:
  - mte220
date: 2023-10-09
---
Let’s say that we want to simplify the circuit below to an equivalent voltage source and resistor that captures the circuit behavior at the terminals (Thevenin-equivalent circuit).

![[thevenin analysis 1.png|392]]

Since we only care about the terminal behaviour, any of the other circuit details may be simplified. We can apply source transforms in two places:
- Norton to Thevenin source transform circled in red. This results in voltage sources and resistors all in series, which can be added.
- Thevenin to Norton transform in green. This results in a parallel-series-parallel configuration, which cannot be early simplified.
- Therefore, only the red Norton-to-Thevenin transform is applied.

Now, the resulting circuit has 3 resistors and 2 voltage sources in series, which can be added together since we don’t care about the internal details of the circuit.

![[thevenin for analysis 2.png|348]]

Finally, a Thevenin to Norton transform places the resulting $7 \Omega$ resistor in parallel with the circuit’s remaining $3\Omega$ resistor:

![[Thevenin and Norton for Analysis 3.png|338]]

The resistors can be combined and a final source transform rearranges the circuit into the final Thevenin equivalent form:

![[Thevenin and Norton for Analysis 4.png]]