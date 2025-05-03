---
title: Advanced Root Locus Example
tags:
  - elec3200
date: 2025-05-03
aliases:
  - advanced root locus example
---
Let's consider 
$$
L(s)=\frac{s+1}{s(s+2)((s+1)^{2}+1)}
$$
Rule A:
$$
\begin{cases}
m=1 \\
n=4
\end{cases} \quad \Longrightarrow \quad 4 \text{ branches}
$$
Rule B: Branches start at open-loop poles:
$$
s=0, s=-2, s=-1\pm j
$$
Rule C: Branches end at open-loop zeros:
$$
s=-1, \pm \infty
$$

![[Advanced Root Locus Example-20250503215517083.png|295]]

To determine which portions of the real axis lie of the root locus, we try a test point.

![[Advanced Root Locus Example-20250503220046220.png|298]]

We can calculate the angles from $s_{1}$ to each zero and pole to determine if satisfies the pole condition.
$$
\begin{align}
\angle (s_{1}-z_{1}) & =0\degree  \quad (s_{1}>z_{1}) \\
\angle (s_{1}-p_{1}) & =180\degree  \quad (s_{1}<p_{1}) \\
\angle (s_{1}-p_{2}) & =0\degree  \quad (s_{1}<p_{2}) \\
\angle (s_{1}-p_{3}) & =-\angle (s_{1}-p_{4})
\end{align}
$$
We have
$$
\begin{align}
 & \angle (s_{1}-z_{1}-[\angle (s_{1}-p_{1})+\angle (s_{1}-p_{2})+\angle (s_{1}-p_{3})+\angle (s_{1}-p_{4})]) \\
 & =0\degree  -[180\degree  +0\degree  +0\degree  ]=-180\degree  
\end{align}
$$

We can try another test point:

![[Advanced Root Locus Example-20250503220740169.png|562]]

We can shorten this process by using Rule D:

![[Advanced Root Locus Example-20250503220827570.png|375]]

Rule E:
$$
\angle s=\frac{(2\ell+1)\cdot 180\degree  }{3}, \quad  \ell=0,1,2
$$
Then:
$$
\begin{align}
\ell=0 \,  & : \, \quad \frac{2\cdot 0+1}{3}180\degree  =60\degree  \\[2ex] 
\ell=1 \,  & : \,\quad \frac{2\cdot 1+1}{3}180\degree  =180\degree   \\[2ex]
\ell =2 \,  & : \, \quad  \frac{2\cdot 2+1}{3}180\degree = \frac{5}{3} 180\degree  =\left( 2-\frac{1}{3} \right)180\degree  =-60\degree   
\end{align}
$$
Thus, the asymptotes have angles $60\degree , 180\degree, -60\degree$.

For rule F, we see that the characteristic polynomial for our system is:
$$
s ^{4}+4s ^{3}+6s^{2}+(4+K)s+K
$$
The Routh array:

![[Advanced Root Locus Example-20250503223526209.png|395]]

For stability, we need $20-K>0$, $80-K^{2}>0$, $4K>0$. Combining these, we see that the characteristic polynomial is stable for $K<\sqrt{ 80 }=4\sqrt{ 5 }$.

To find the $j\omega$ crossing, plug in and solve:
$$
\begin{align}
(j\omega)^{4}+4(j\omega)^{3}+6(j\omega)^{2}+(4+4\sqrt{ 5 })j\omega +4\sqrt{ 5 }=0 \\
\omega^{4}-4j\omega^{3}-6\omega^{2}+(4+4\sqrt{  5})j\omega+4\sqrt{ 5 }=0
\end{align}
$$
- Real part: $\omega^{4}-6\omega^{2}+4\sqrt{ 5 }=0$
- Imaginary part: $-4\omega^{3}+4(1+\sqrt{ 5 })\omega=0$, which gives $\omega^{2}=1+\sqrt{ 5 }$.

Thus, we have $j\omega$-crossing at $j\omega_{0}=\sqrt{ 1+\sqrt{ 5 } }\approx 1.8$, when $K=4\sqrt{ 5 }\approx 8.9$.

![[Advanced Root Locus Example-20250503224758506.png|428]]
