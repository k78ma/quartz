---
title: Sensor Accuracy
tags:
  - mte220
date: 2023-11-14
aliases:
---
Sensors have varying levels of accuracy, which quantifies how close a measured value is to the actual value. This is **measurement error**:
$$
\text{Measurement error} = \text{Actual Value} - \text{Measured Value}
$$
**Measurement accuracy** describes the measurement error guaranteed by the manufacturer:
$$
\text{Actual Value is Within Measure Value } \pm \text{Measurement Accuracy}
$$
So, the actual measurement error of a particular device should not exceed the manufacturer-specified measurement accuracy. This is usually expressed as:

![[Sensor Accuracy.png]]

Here are the different definitions:
![[Sensor Accuracy-1.png|296]]
- "Full-scale" is the max value at $90\degree$
- "Instrument span" is the max range at $180\degree$

If the manufacturer said the measurement accuracy was $\pm 0.2 \text{ mm}$, anything between 9.8 mm to 10.2 mm is okay.

The **system accuracy** considers all the individual sensor and system errors to determine overall accuracy. 
- Care must be taken in assessing how individual errors contribute to the overall accuracy. In some cases the errors add, whereas in others the contribution is root-sum-squared.

Worse case analysis: Choose extremes to make the system as bad as possible.
Many unknowns: [[Monte Carlo]] analysis. Each random variable is sampled, run simulation, plot all results. Gives family of curves that show possible results.