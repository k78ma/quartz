---
title: Steady-State Performance of Sampled Data Systems
tags:
  - mte484
date: 2025-12-10
aliases: steady-state performance of sampled data systems
---
What is the steady-state step response of a SD system where the SD system is closed-loop stable and $T>0$ is non-[[Sampled-Data System Stability|pathological]]?

> [!theorem] 
> If $T>0$ is non-pathological and the SD system is closed-loop stable. Let $r(t)= \mathbb{1}(t)$. Then $y_{ss}= \lim_{ t \to \infty }=T_{ry}[1]$.

*Proof.*
- Given: SD system is closed-loop stable, $T>0$ and non-pathological
- WTS: $y_{ss}= _{ss}= \lim_{ t \to \infty }=T_{ry}[1]$

Then:
- DT system is closed-loop stable \[theorem from class]
- $T_{ru}[z]$ is BIBO stable \[def. of DT closed-loop stability]
- $T_{rx}[z]$ is BIBO stable \[lemma from class]
- $T_{ru}[z], T_{ry}[z]$ are stable \[theorem from class]
- $u_{ss} = \lim_{ k \to \infty }u[k]=T_{ru}[1]$ \[FVT corollary] 
- $x_{ss}=\lim_{ k \to \infty }x[k]=T_{rx}[1]$

Recall that the system can be given as:
$$
\begin{align}
x[k+1] = A_{d}x[k] + B_{d}u[k] \\
y[k] = C x[k]
\end{align}
$$
Taking the limit of the first equation as $k\to \infty$:
$$
\begin{align}
x_{ss}  & = A_{d}x_{ss}+B_{d}u_{ss}  \\
(I-A_{d})x_{ss}  & = B_{d}u_{ss} \\
x_{ss} & = (I-A_{d})^{-1}B_{d}u_{ss} \\
     & = (I-e^{At})^{-1}A^{-1}(e^{AI-I})B u_{ss} \\
     & = -(I-e^{At})^{-1}\cdot (I-e^{At})\cdot A^{-1}Bu_{ss} \\
x_{ss} & = -A^{-1}B u_{ss}
\end{align}
$$
Recall that for $t \in [0,T]$, we have $x(kT+t)=e^{At}x[k]+A^{-1}(e^{At}-I)Bu[k]$. Taking the limit as $kT+t\to \infty$ which is equivalent to $k\to \infty$:
$$
x(kT+t) \to e^{At}x_{ss} + A^{-1}(e^{At}-I)B u_{ss} = e^{At}(-A^{-1}B u_{ss})+A^{-1}(e^{At}-I)B u_{ss}
$$
such that
$$
x_{ss}= -A^{-1}e^{At}B u_{ss} + A^{-1}e^{At} Bu_{ss} - A^{-1}Bu_{ss}
$$
so that the limit as continuous time approaches infinity is
$$
\lim_{ \hat{t} \to \infty } x(\hat{t})= x_{ss}
$$
Now proving for $y$:
$$
\begin{align}
y_{ss} &  = \lim_{ \hat{t} \to \infty } y(\hat{t})= \lim_{ \hat{t} \to \infty } (x(\hat{t}))=Cx_{ss} \\[2ex] 
y_{ss}  & = CA^{-1}Bu_{ss} \\
     & = -CA^{-1}BT_{ru}[1] \\
\end{align}
$$
We have:
$$
CA^{-1}B = - \begin{bmatrix}
c_{1}  & \dots & c_{n} 
\end{bmatrix}\begin{bmatrix}
\frac{1}{\lambda_{1}}  &  &  \\
 & \ddots &  \\
 &  & \frac{1}{\lambda_{n}}
\end{bmatrix} \begin{bmatrix}
1 \\
\vdots \\
1
\end{bmatrix} = \sum_{i=1}^{n} \frac{c_{i}}{\lambda_{i}}=P(0)=G[1]
$$
Thus:
$$
y_{ss}=G[1]T_{ru}[1] = T_{ry}[1]
$$
Another takeaway:
$$
\begin{align}
P(s)  & = \dot{x}=Ax+Bu \\
\lim_{ \hat{t} \to \infty } Ax_{ss}+Bu_{ss}  & = A(-A^{-1}Bu_{ss})+Bu_{ss} \\
 & = -Bu_{ss}+Bu_{ss} \\
 & =0
\end{align}
$$
Thus, $(x_{ss}, u_{ss})$ is an [[Nonlinear State Space Models|equilibrium point]] for the plant $P(s)$.

## Sinusoidal Reference
The above was for a reference $r[k]=\mathbb{1}[k]$. Consider now a sinusoidal reference:
$$
\begin{align}
r(t)  & = \cos(\omega_{0}t) \\
r[k]  & = \cos(\omega_{0}kT)= \cos(k\omega_{0}T)=\cos(k\theta)
\end{align}
$$
In steady-state
$$
y[k] \quad \longrightarrow \quad  \left| T_{ry}[e^{j\omega_{0}T}] \right| \cos(k\theta+ \angle T_{ry}[e^{j\omega_{0}T}])
$$
This shows what is happening at the sample points, but what happens between the sample points?

Natural conjecture: in steady state, $y(t)\to \left| T_{ry} [e^{j\omega_{0}T}] \right| \cos(\omega_{0}t + \angle T_{ry}[e^{j\omega_{0}T}])$. But this is incorrect! As $T\to 0$, this becomes closer to correct, but in general this is pretty bad.

Goal: develop a better approximation of the output by making a Fourier-esque expression.

Define $\{ \omega_{n} \}_{n=0}^{\infty}$ by
$$
\begin{align}
\omega_{0} & =\omega_{0} \\
\omega_{1} & =\omega_{s}-\omega_{0} \\
\omega_{2} & =\omega_{s}+\omega_{0} \\
\omega_{3} & = 2\omega_{s} - \omega_{0} \\
\omega_{4} & = 2\omega_{s}+\omega_{0} \\
 & \,\,\,\vdots \\
     & = n\omega_{s}-\omega_{0} \\
     & =n\omega_{s}+\omega_{0}
\end{align}
$$
In steady-state:
$$
y(t) \quad \longrightarrow \quad \frac{1}{T} \sum_{n=0}^{\infty} \left| T_{ru}(e^{j\omega_{0}T}) \right| \left| P(j\omega_{n}) \right| \left| H(j\omega_{n}) \right| \cos(\omega_{n}t+\angle T_{ru}[e^{j\omega_{0}T}]+\angle P(j\omega_{n})+\angle H(j\omega_{n}))
$$
This is the true response of a sampled data system to sinusoidal input. The output is an infinite sum, not a true Fourier series, which causes wacky behavior sometimes.

At $N=0$, it gives the output of a true LTI system (exactly at the sample points)
- The frequency content of $y(t)$ is at $\omega_{0}, n\omega_{s} \pm \omega_{0}, \,\, \forall \, n\geq 1$

## Sampling Time
We can use this formula to investigate sampling time as well – under what conditions can we collapse this infinite sum down to just the $N=0$ term?

Define the Nyquist Frequency $\omega_{n} = \frac{\omega_{s}}{2}=\frac{2\pi}{T} \frac{1}{2} = \frac{\pi}{T}$.

Assume:
1. The plant is bandwidth-limited with $\omega_{bw} \leq \omega_{N}$, such that $\left| P(j\omega) \right|\approx 0$ for $\omega>\omega_{bw}$ (attenuation is perfect above $\omega_{bw}$)
2. $\omega_{0}<\omega_{n}$ (sampling frequency is at least twice the external frequency)

We saw above that the frequency content of $y(t)$ is at $\omega_{0}, n\omega_{s} \pm \omega_{0}$.

For any $n\geq 1$:
$$
\begin{align}
n\omega_{s} \pm \omega_{0}  & \geq n\omega_{s}-\omega_{0} \\
     & > n\omega_{s} - \omega_{n}  & \text{[via assumption 2]} \\
     & \geq \omega_{s} - \omega_{n} \\
   n\omega_{s} \pm \omega_{0}  & \geq \omega_{n}
\end{align}
$$
Thus, for any $n\geq 1$, $n\omega_{s} \pm \omega_{0} > \omega_{bw}$.

Thus:
$$
\left| P(j\omega_{n}) \right| \approx 0 \quad  \forall \, n\geq 1 \quad \Longrightarrow \quad y(t)= \text{ its n=0 term}
$$
as if $y(t)$ were perfectly LTI.

If $\omega_{n} \geq \omega_{bw}$, we have $\omega_{n}>0$, such that $y(t)$ is approximately sinusoidal with frequency $\omega_{0}$.

Then:
$$
\begin{align}
 & \omega_{n} \geq \text{max}(\omega_{bw}, \omega_{0}) \\
 & \implies \frac{1}{2}\omega_{s} \geq \text{max}(\omega_{bw}, \omega_{0}) \\
 & \implies \omega_{s} \geq 2\text{max}(\omega_{bw}, \omega_{0})
\end{align}
$$

In practice, $\left| P(j\omega) \right| \neq 0$ for all $\omega>\omega_{bw}$, so we add a safety factor and choose
$$
\omega_{s} \geq(5-10) \times \text{max}\{ \omega_{bw}, \omega_{0} \}
$$
- This is where the rule for [[Choosing Sampling Time|choosing sampling time]] came from!