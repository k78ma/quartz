---
title: Sample-Data System Stability
tags:
  - mte484
date: 2025-09-12
aliases: sample-data system stability
---
Example:
$$
\dot{x}=\lambda x
$$
Recall from [[Continuous-Time Stability]] that
$$
x(t) = e^{\lambda t}x(0) = (e^{\lambda})^{t} x(0)
$$
We sample at $t=kT$ for $k \in \mathbb{Z}_{\geq 0}$, such that
$$
x[k]=x(kT) = (e^{\lambda})^{kT}x[0]
$$
- Note that we just have $x[0]= x(0)$

Then:
$$
| x[k] | = | e^{\lambda} |^{kT} \,| x[0] | = (| e^{\lambda} |^{T})^{K} \, | x[0] |
$$

To understand this, we want to understand the $(| e^{\lambda} |^{T})^{K}$ term. First, note that:
$$
| e^{\lambda} | = | e^{\text{Re } \lambda + j \text{ Im }\lambda}  | = | e^{\text{Re }\lambda} |  \, | e^{j \text{ Im } \lambda} |
$$
The final term, $| e^{j \text{ Im } \lambda} |$, is equal to $1$. This is because $e^{j\theta} = \cos \theta+j \sin \theta$, and since the argument $\text{Im } \lambda$ is entirely imaginary, we are at the top of the unit circle. Thus:
$$
\begin{align}
| e^{\lambda} |  & = | e^{\text{Re }\lambda} |  \\
     & = e^{\text{Re } \lambda}
\end{align}
$$
From our [[Stability Criterion|definition of stability]]:
$$
T \text{ stable} \quad  \Longleftrightarrow \quad  \text{Re}(\lambda) < 0 \quad  \Longleftrightarrow \quad e^{\text{Re}(\lambda)} < 1 \quad  \Longleftrightarrow \quad | e^{\lambda} | < 1
$$
- "T stable" here means that the resulting-discrete time system is stable.

We also have:
$$
| e^{\lambda} | < 1 \quad  \Longleftrightarrow \quad | e^{\lambda} |^{T} < 1 \quad  \Longleftrightarrow \quad (| e^{\lambda} |^{T})^{k} < 1
$$
Thus, the system is stable in discrete time too. This means that if we have a stable continuous time system that we sample, the result is also stable.