---
title: Electrical Elements in Laplace Domain
tags:
  - syde351
date: 2024-07-09
aliases:
  - electrical elements in laplace domain
---

| Time                        | Laplace                     |
| --------------------------- | --------------------------- |
| $v=Ri$                      | $V=RI$                      |
| $v=L \frac{di}{dt}$         | $V=LIs$                     |
| $v=\frac{1}{c}\int i \, dt$ | $V=\frac{1}{C} \frac{I}{s}$ |

Impedance is a generalization of resistance:
$$
R=\frac{V(s)}{I(s)}=Z(s)
$$
An inductor is:
$$
Z(s)=\frac{V(s)}{I(s)}=\frac{LIs}{I}=Ls
$$
A capacitor is:
$$
Z(s)=\frac{V(s)}{I(s)}=\frac{\frac{1}{c} \frac{I}{s}}{I}=\frac{1}{Cs}
$$
Parallel and series impedances work the same way that resistances do:
$$
\begin{align}
\text{Parallel: }  & \quad \frac{1}{Z_{eq}}=\frac{1}{Z_{1}}+\frac{1}{Z_{2}} \\[2ex]
\text{Series: }  & \quad Z_{eq}=Z_{1}+Z_{2}
\end{align}
$$

![[SYDE 351 - Electrical Systems Example.pdf]]