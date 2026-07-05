---
title: Transformer Efficiency
tags:
  - mte320
date: 2024-06-23
aliases:
  - transformer efficiency
---
The efficiency of a transformer is generally given by:
$$
\begin{align}
\eta & =\frac{P_{\text{out}}}{P_{\text{in}}}\times 100\% \\[2ex] 
	 & = \frac{P_{\text{out}}}{P_{\text{out}}+P_{\text{loss}}}\times 100\% \\[2ex]
	 & = \frac{P_{\text{in}}-P_{\text{loss}}}{P_{\text{in}}}\times 100\% 
\end{align}
$$
The transformer losses are composed of [[Copper Loss|copper losses]] (in the resistances of primary and secondary windings) and the [[Core Losses|core losses]]. If the results of open circuit and short circuit tests are known, calculation of efficiency is very straight forward based on the above equations.
$$
\begin{align}
P_{\text{o.c.}} & =\text{no-load losses}=\text{core loss} \\
P_{\text{s.c.}} & =\text{copper loss}
\end{align}
$$
Since a transformer has different efficiencies at different times based on the loading level, utilities normally present efficiency in the form of *all-day energy efficiency*, which is defined as:
$$
\eta_{e}=\frac{\text{Output energy over 24 hours}}{\text{Input energy over 24 hours}}\times 100\%
$$
