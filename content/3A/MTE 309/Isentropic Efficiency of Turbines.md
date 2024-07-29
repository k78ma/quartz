---
title: Isentropic Efficiency of Turbines
tags:
  - mte309
date: 2024-07-24
aliases:
  - isentropic efficiency of turbines
---
The isentropic efficiency of a [[Turbines|turbine]] is the ratio of actual work output of the turbine to the work output that would be achieved if the process between the inlet state and the exit pressure were isentropic.
$$
\eta_{T}=\frac{\text{Actual turbine work}}{\text{Isentropic turbine work}}=\frac{w_{a}}{w_{s}}
$$
which can be calculated as:
$$
\begin{align}
\eta_{T} & \approx \frac{\dot{m}(h_{1}-h_{2a})}{\dot{m}(h_{1}-h_{2s})} \\[2ex]
 & \approx \frac{h_{1}-h_{2a}}{h_{1}-h_{2s}}
\end{align}
$$
where:
- $h_{1}$ is the starting enthalpy
- $h_{2s}$ is the final enthalpy for the ideal, isentropic process
- $h_{2a}$ is the final enthalpy for the actual, non-isentropic process

![[Isentropic Efficiency of Turbines.png|504]]
## Example

![[MTE 309 LE 29-2.pdf]]