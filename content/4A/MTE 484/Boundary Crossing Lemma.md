---
title: Boundary Crossing Lemma
tags:
  - mte484
date: 2025-12-06
aliases: boundary crossing lemma
---
> [!theorem] Boundary Crossing Lemma
> Let $\lambda \in  [0,1]$ and $\Delta_{\lambda}[z] = \Lambda^{(1)}[z] - \lambda\Lambda^{(2)}[z]$. 
> 
> If $\Lambda_{1}[z]$ is Schur and $\Lambda_{1}[z]-\Lambda_{2}[z]$ is not Schur (or vice versa), then there exists $\lambda^{\ast } \in [0,1]$  such that $\Delta_{\lambda^{\ast }}[z]$ has a root on the unit circle.

Visual intuition:

![[Boundary Crossing Lemma-1765146425513.webp|540x443]]

Recall:

> [!lemma] Lemma
> Suppose $\left| c_{n} \right| > \left| c_{0} \right|$.
> Then $\Delta[z]$ is Schur if and only if $R[z]$ is Schur.

Proof:
- Given: $\left| c_{n} \right| > \left| c_{0} \right|$
- WTS: $\Delta[z]$ is Schur $\iff$ $R[z]$ is Schur $\iff$ $zR[z]$ is Schur

For $\lambda \in [0,1]$, let $\Delta_{\lambda}[z]=\Delta[z] - \lambda  \frac{c_{0}}{c_{n}}Q[z]$. We then have
$$
\implies \Delta_{0}[z] = \Delta[z] \text{ and } \Delta_{1}[z]=\Delta[z]- \frac{c_{0}}{c_{n}}Q[z] = zR[z]
$$

WTS: $\Delta_{0}[z]$ is Schur $\implies$ $\Delta_{1}[z]$ is Schur.

Assume toward a contradiction that one of $\Delta_{0}[z], \Delta_{1}[z]$ is Schur and the other is not. By the boundary crossing lemma, there exists $\lambda^{\ast } \in [0,1]$ such that $\Delta_{\lambda^{*}}[z]$ has (at least) one root on the unit circle, which we call $p$. Then, we must have:
$$
\Delta_{\lambda^{\ast  }}[p] = 0 \quad \text{and} \quad \left| p \right| =1
$$

**Case 1:** $p=1$ or $p=-1$.
$$
\begin{align}
\implies\frac{1}{p}=p
\end{align}
$$

> [!note] Aside
> Aside:
> $$
> \begin{align}
> \Delta[z] & = z^{2}+\frac{1}{2}z+\frac{1}{4} \\[2ex] 
> \Delta\left[ \frac{1}{z} \right]  & = \frac{1}{z^{2}}+ \frac{1}{2} \frac{1}{z} + \frac{1}{4} \\[2ex] 
> z^{2}\Delta\left[ \frac{1}{z} \right]  & = 1 + \frac{1}{2}z+\frac{1}{4}z^{2} = Q[z] \\[2ex] 
> \implies Q[z] & =z^{n}\Delta\left[ \frac{1}{z} \right]
> \end{align}
> $$

Thus, we have:
$$
\begin{align}
0  & = \Delta_{\lambda^{\ast  }}[p]= \Delta[p] - \frac{\lambda^{\ast  }c_{0}}{c_{n}}Q[p] \\[2ex] 
     & =\Delta[p] - \lambda^{\ast  } \frac{c_{0}}{c_{n}}p^{n}\Delta\left[ \frac{1}{p} \right]  & \left[ Q[z]=z^{n}\Delta\left[ \frac{1}{z} \right] \right]\\[2ex]
     & = \Delta[p] - \lambda^{\ast  } \frac{c_{0}}{c_{n}}p^{n}\Delta[p]  & \left[ \frac{1}{p}=p \right] \\[2ex]
     & = \Delta[p]\left( 1-\lambda^{\ast  } \frac{c_{0}}{c_{n}}p^{n} \right)
\end{align}
$$

> [!note] Aside
> Aside:
> $$
> \left| \lambda^{\ast  } \frac{c_{0}}{c_{n}} p^{n} \right| = \underbrace{ \left| \lambda^{\ast  } \right| }_{ \leq 1 }  \underbrace{ \frac{\left| c_{0} \right| }{\left| c_{n} \right| } }_{ <1 \text{ [given]} } \underbrace{ \left| p \right| ^{n} }_{ \left| p \right| =1 }<1
> $$

Thus:
$$
\begin{align}
 & \Delta[p]=0=\Delta\left[ \frac{1}{p} \right] \text{ since } p = \frac{1}{p} \\[2ex] 
 & \Delta_{0}[p] = \Delta[p]=0 \\[2ex] 
 & \Delta_{1}[p] = \Delta[p]- \frac{c_{0}}{c_{n}}p^{n}\Delta\left[ \frac{1}{p} \right]=0 \\[2ex]
&\implies p \text{ is an unstable root of both } \Delta_{0}[z] \text{ and } \Delta_{1}[z] \\[2ex] 
&\implies \text{contradicts the assumption that one of } \Delta_{0}[z] \text{ and } \Delta_{1}[z] \text{ is Schur}
\end{align}
$$

**Case 2:** $p=e^{j\theta}, \theta \neq 0, \theta \neq \pi$. Then, we have a conjugate $\overline{p}=e^{-j\theta}=\frac{1}{ej\theta}=\frac{1}{p}$. $\Delta_{\lambda^{\ast }}[z]$ has real coefficients, so its roots come in complex conjugate pairs. Thus, $\overline{p}=\frac{1}{p}$ is also a root of $\Delta_{\lambda^{\ast }}[z]$:
$$
\Delta_{\lambda^{\ast  }}\left[ \frac{1}{p} \right]=0=\Delta_{\lambda^{\ast  }}[p]
$$
Then:
$$
\begin{align}
0  & = \Delta_{\lambda^{\ast  }}[p] = \Delta[p] - \lambda^{\ast  } \frac{c_{0}}{c_{n}} Q[p] = \Delta [p] - \lambda^{\ast  } \frac{c_{0}}{c_{n}}p^{n}\Delta\left[ \frac{1}{p} \right] \\[2ex] 
0  & = \Delta_{\lambda^{\ast  }}\left[  \frac{1}{p} \right] = \Delta\left[ \frac{1}{p} \right]-\lambda^{\ast  } \frac{c_{0}}{c_{n}}Q\left[ \frac{q}{p} \right] = \Delta\left[ \frac{1}{p} \right] - \lambda^{\ast  } \frac{c_{0}}{c_{n}} \frac{1}{p^{n}} \Delta[p]
\end{align}
$$
We can re-arrange the first of the two lines above to become:
$$
\Delta[p] = \lambda^{\ast  } \frac{c_{0}}{c_{n}} p^{n}\Delta\left[ \frac{1}{p} \right]
$$
Substituting this into the the second line:
$$
\begin{align}
0  & = \Delta\left[ \frac{1}{p} \right] - \lambda^{\ast  } \frac{c_{0}}{c_{n}} \cancel{ \frac{1}{p^{n}} } \left(  \lambda^{\ast  } \frac{c_{0}}{c_{n}} \cancel{ p^{n} } \Delta\left[ \frac{1}{p} \right] \right) \\[2ex] 
     & = \Delta\left[ \frac{1}{p} \right] - \left( \lambda^{\ast  } \frac{c_{0}}{c_{n}} \right)^{2} \Delta\left[ \frac{1}{p} \right] \\[2ex]
     & = \Delta\left[ \frac{1}{p} \right]\left( 1-\left( \lambda^{\ast  } \frac{c_{0}}{c_{n}} \right)^{2} \right)
\end{align}
$$

Note that we have:
$$
\begin{align}
\left| \lambda^{\ast  } \frac{c_{0}}{c_{n}} \right| ^{2} = \underbrace{ \left| \lambda^{\ast  } \right| ^{2}  }_{ \leq 1 }\underbrace{ \left( \frac{\left| c_{0} \right| }{\left| c_{n} \right| } \right)^{2} }_{ <1 \text{ [given]} } < 1 \\[2ex] 
0 = \Delta\left[ \frac{1}{p} \right]\underbrace{ \left( 1-\left( \lambda^{\ast  } \frac{c_{0}}{c_{n}} \right)^{2} \right) }_{ \neq 0 }
\end{align}
$$
which then gives:
$$
\Delta\left[ \frac{1}{p} \right]=0
$$
so:
$$
\begin{align}
\Delta[p]  & = \lambda^{\ast  } \frac{c_{0}}{c_{n}} p^{n}\cancel{ \Delta\left[ \frac{1}{p} \right] }=0 \\[2ex]
\Delta_{0}[p]  & = \Delta[p]=0 \\[2ex] 
\Delta_{1}[p] & = \cancel{ \Delta[p] } - \frac{c_{0}}{c_{n}}p^{n}\cancel{ \Delta\left[ \frac{1}{p} \right] }=0
\end{align}
$$
Thus, $p$ is an unstable root of both $\Delta_{0}[z]$ and $\Delta_{1}[z]$. They are both not Schur, which contradicts the assumption that one of $\Delta_{0}[z]$ and $\Delta_{1}[z]$ is Schur. 

Since Case 1 and Case 2 cover all possibilities, it is not possible that $\Delta_{0}[z]$ and $\Delta_{1}[z]$ is Schur (or vice versa). Therefore, we must have that $\Delta_{0}[z]$ is Schur if and only if $\Delta_{1}[z]$ is Schur.

