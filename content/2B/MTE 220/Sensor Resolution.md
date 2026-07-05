---
title: Sensor Resolution
tags:
  - mte220
date: 2023-11-14
aliases:
---
Sensor resolution is the minimum detectable change in input $x$. It's the smallest amount we can change the input before we can expect the output to change.

Analog:
- Minimum measurable change in input value
- Often expressed as a percent value of full scale
- **Example:** 0 to 1 mm linear position sensor with $0.1\%$ resolution. What's the smallest change in displacement that we can measure? $0.001 \times 1 \text{ mm} = 1 \mu m$

Digital:
- Change in input required to cause a 1-bit change in output.
- **Example:** Digital angle sensor module with $0\degree - 90\degree$ input and a 12-bit output. The smallest change in angle would be:
$$
\frac{90\degree}{2^{12}} = 21.97 \text{ milli-degrees}
$$
- **Example:** Temperature sensor with an instrument span of 100 K and a 10-bit output has a resolution of 
$$
\frac{100 \text{K}}{2^{10}} = 97.7 \frac{\text{ mK}}{\text{bit}}
$$

