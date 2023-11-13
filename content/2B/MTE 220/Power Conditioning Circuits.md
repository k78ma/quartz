---
title: Power Conditioning Circuits
tags:
  - mte220
date: 2023-11-12
aliases:
---
Power conditioning aims to convert power at one V, I, or f to another as efficiently possible.

### Efficiency
Efficiency is defined as:
$$
\eta = \frac{P_{\text{system}}}{P_{\text{source}}} = \frac{P_{\text{out}}}{P_{\text{in}}} = \frac{V_{\text{system}}I_{\text{system}}}{V_{\text{source}}I_{\text{source}}}
$$
### I/O Classification
Power conditioning circuits are broadly classified by stating input/output as AC/DC. So, we have:
- AC/AC: [[Transformers (AC)]]
- AC/DC: [[Rectifier Circuits]]
- DC/DC: [[Linear Regulators]], [[Switching Regulators]]
- DC/AC: [[Power Inverter]]

#### Example
How efficient is this DC/DC board-mount module:
- $V_{\text{source}}= 72 \text{ V}_{\text{DC}}$, $I_{\text{source}}=0.93 \text{ A}$
- $V_{\text{source}}= 3.3 \text{ V}_{\text{DC}}$, $I_{\text{source}}=20 \text{ A}$

We have:
$$
\begin{align}
\eta = \frac{P_{\text{out}}}{P_{\text{in}}} = \frac{3.3\times 20}{72\times 0.93} = 98.6 \% \\[3ex] 
P_{\text{out}} = 3.3 \times  20 = 66 \text{ W}
\end{align}
$$
