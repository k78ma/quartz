---
title: Power Screw Efficiency
tags:
  - mte322
date: 2024-12-04
aliases:
  - power screw efficiency
---
The amount of work on the power screw can be determined by comparing the power for the input or output.

For a square thread, we have:

**Input:**
$$
W_{\text{in}}=2\pi T=2 \pi  \frac{d_{p}}{2}F
$$
where $F=P \cdot \frac{\mu \cos \lambda+\sin \lambda}{\cos \lambda-\mu \sin \lambda}$ for lifting-up situation (while neglecting collar friction). With collar friction, this changes to $T+T_{B}$ where $T_{B}=\mu_{B} \frac{Pd_{c}}{2}$.

**Output:**
$$
W_{\text{out}}=PL
$$

Then, the **efficiency** is given by
$$
\begin{align}
\eta & =\frac{W_{\text{out}}}{W_{\text{in}}}=\frac{PL}{2\pi \cdot \frac{d_{p}}{2}\cdot F}= \frac{PL}{2\pi \cdot \frac{d_{p}}{2}\cdot P \cdot \frac{\mu \cos \lambda+\sin \lambda}{\cos \lambda-\mu \sin \lambda}} \\[2ex]
	  & = \frac{L}{\pi d_{p}}\cdot \frac{\cos \lambda-\mu \sin \lambda}{\mu \cos \lambda+\sin \lambda}=\frac{\sin \lambda}{\cos \lambda}\cdot \frac{\cos \lambda-\mu \sin \lambda}{\mu \cos \lambda+\sin \lambda}=\frac{1-\mu \tan \lambda}{1+\mu \cot \lambda}
\end{align}
$$

For ACME thread,
$$
\eta=\frac{\cos \alpha-\mu \tan \lambda}{\cos \alpha+\mu \cot \lambda}
$$
For worm gear:
$$
\eta=\frac{\cos \phi_{n}-\mu \tan \lambda}{\cos \phi_{n}+\mu \cot \lambda}
$$

![[Power Screw Efficiency.png|616]]
