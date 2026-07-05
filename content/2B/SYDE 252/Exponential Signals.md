---
title: Exponential Signals
tags:
  - syde252
date: 2023-10-13
---
#### Continuous Time
The exponential signal is given as:
$$
e^{st}
$$
where $s=\sigma+j\omega$.
This expands to:
$$
\begin{align}
e^{st}&=e^{(\sigma+j\omega)t}=e^{\sigma t}e^{j\omega t} \\
&=e^{\sigma t}(\cos \omega t + j\sin \omega t)
\end{align}
$$
This function is very general and can be used for a large variety of functions:
- A constant $k = ke^{0t}$, where $s=0$
- A monotonic exponential $e^{\sigma t}$, where $\omega=0, s=\sigma$
- A sinusoid $\cos \omega t$, where $\sigma=0, s=\pm j\omega$
- An exponentially varying sinusoid $e^{\sigma t}\cos \omega t$, where $s = \sigma \pm j\omega$

![[Exponential Signals.png|444]]

#### Discrete Time
In discrete time, we write:
$$
e^{st} = \gamma ^t
$$
such that $e^{s} = \gamma$. Conversely, we get:
$$
s = \ln \gamma
$$
Expanding $\gamma$, we have:
$$
\begin{align}
\gamma & =e^{s}=e^{\sigma+j\omega } = e^{\sigma}e^{j\omega} \\
|\gamma|  & = |e^{\sigma}| |e^{j\omega}| \\
|\gamma|  & = |e^{\sigma}| \\
\end{align}
$$
>[!info]- Where did the |e^jw| term go?
>$$
>\begin{align}
>e^{j\omega} = \cos \omega + j \sin \omega \\
>| e^{j\omega} |=\sqrt{ \cos ^{2}\omega + \sin ^{2}\omega } \\
>| e^{j\omega} | = 1
>\end{align}
>$$

Cases:
- If $\sigma=0$, $| \gamma | = 1$ (Sinusoid)
- If $\sigma < 0$, $| \gamma | = | e^{\sigma} | < 1$ (Exponential delay)
- If $\sigma > 0$, $| \gamma | = | e^{\sigma} |>1$ (Exponential growth)

![[signal.png|576]]

![[s plane.png|588]]

In the diagram, $\lambda$ is used instead of $s$.

