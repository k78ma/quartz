---
title: Continuous-Time Stability
tags:
  - mte484
date: 2025-09-10
aliases: continuous-time stability
---
To consider stability for continuous-time systems, consider the following example system:
$$
\dot{x} = \lambda x, \lambda \in \mathbb{C}
$$

Then:
$$
\begin{align}
sX(s)-x(0)= \lambda X(s) \\[2ex] 
X(s) = \frac{1}{s-\lambda }x(0) \\[2ex] 
x(t) = e^{\lambda t}x(0)
\end{align}
$$
Recall that the inverse Laplace transform is given by
$$
x(t) = L^{-1}(X(s)) = \frac{1}{2\pi j} \int_{-\infty}^{\infty}  X(j\omega) e^{j\omega t} \, d\omega 
$$
This system has 3 possible behaviors based on the value of $\lambda$:

![[Continuous-Time Stability-20250910135918719.png]]

- Thus, stability occurs if $\text{Re}(\lambda)<0$ (alternatively, we can say that $\lambda \in \mathbb{C}^{-}$).
- The $\text{Re}(\lambda)=0$ case could be considered "marginally stable" but in MTE 484 it's considered as unstable.
$$
\begin{align}
e^{\lambda t}= e^{(\text{Re}\,\lambda + j \text{Im} \,\lambda)t}  & = e^{(\text{Re} \,\lambda)t+j(\text{Im}\, \lambda)t}  \\
 & =e^{(\text{Re}\, \lambda)t}+e^{j(\text{Im} \,\lambda)t}
\end{align}
$$
Another case where have an input:
$$
\dot{x}=\lambda x + u, \quad \lambda \in  \mathbb{C}
$$
Then:
$$
\begin{align}
sX(s) = \lambda X(s)+U(s) \\
X(s) = \frac{1}{s-\lambda} U(s)
\end{align}
$$
Thus, $\lambda$ is a pole of the transfer function $\frac{1}{s-\lambda}$. (Does this mean a stable system will always be stable )


> [!definition] Stability in continuous-time systems
> A real, rational transfer function $P(s)$ is stable if all the poles of $P(s)$ lie in the open left-half plane (OHLP), denoted $\mathbb{C}^{-}$. which does not include the imaginary axis (no pole at zero allowed).

## Quick Examples
- $\frac{s-7}{(s+2)(s+3)}$ is stable
- $\frac{s+3}{s-1}$ is unstable (pole in the right hand plane)
- $\frac{s+5}{s(s+4)}$ is unstable (pole at zero)



