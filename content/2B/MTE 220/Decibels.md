---
title: Decibels
tags:
  - mte220
date: 2023-12-02
aliases:
---
Decibels allow us to express large numbers, especially ratios and multiplications. It uses a logarithmic scale.

For example:
$$
A_{dB} = 20 \cdot \log_{10}A
$$
where $A$ is the magnitude of a signal or function.

For various values of A, we would have:
![[Decibels.png|249]]

This is very handy for multiplying gains:
$$
\begin{align}
A  & = A_{1}A_{2}A_{3}  \\
A_{dB}  & = 20\log_{10}(A_{1}A_{2}A_{3}) \\
	 & = 20\log_{10}A_{1}+20\log_{10}A_{2} + 20\log_{10} A_{3} \\
	 & = A_{1_{dB}} + A_{2_{dB}} + A_{3_{dB}}
\end{align}
$$
