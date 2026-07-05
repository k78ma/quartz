---
title: Frequency-Domain Response of First-Order Systems
tags:
  - syde351
date: 2024-07-27
aliases:
  - frequency-domain response of first-order systems
---
For first-order systems, we typically have:
$$
m\dot{v}(t)+cv(t)=f(t)
$$
where $f(t)=A\sin \omega t$. This is $f(t)$ because we are interested in the [[Frequency-Domain System Analysis|system frequency response]], which deals with $s=j\omega$ along the imaginary axis of the complex plane; cosine term deals with real part so it is excluded.

Then we have:
$$
H(s)=\frac{V(s)}{F(s)}=\frac{1}{ms+c}
$$
Then, since $s=j\omega$, we have:
$$
H(j\omega)=\frac{1}{mj\omega+c}
$$
and
$$
\begin{align}
| H(j\omega) | & =\frac{| 1 |}{| mj\omega+c |}=\frac{1}{\sqrt{ m^{2}\omega^{2}+c^{2} }}=\frac{1}{c\sqrt{ \tau^{2}\omega^{2}+1 }} \\[2ex] 
\angle H(j\omega) & =\angle 1-\angle(mj\omega+s)=0-\arctan\left( \frac{m\omega}{c} \right) = -\arctan(\omega \tau)
\end{align}
$$
where $\tau=\frac{m}{c}$ is a time constant.

Then, the steady-state response, $V(s)=H(s)F(s)$ in the Laplace domain, can be found in the time domain by multiplying the input by the magnitude of the frequency response and adding the phase shift, such that:
$$
\begin{align}
v(t)_{\text{steady-state}} & = A| H(j\omega)  |\sin(\omega t+\angle H(j\omega ))\\[2ex] 
 & =A \frac{1}{c\sqrt{ \tau^{2}\omega^{2}+1 }}\sin[\omega t+(-\arctan(\omega \tau))]
\end{align}
$$