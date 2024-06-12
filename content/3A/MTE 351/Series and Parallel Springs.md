---
title: Series and Parallel Springs
tags:
  - syde351
date: 2024-06-11
aliases:
  - series and parallel springs
---
Multiple spring elements are often used; in such cases, we must obtain the equivalent spring constant for the combined elements. 

## Parallel Springs
Parallel springs are connected side by side, as shown in the left side below:

![[Series and Parallel Springs.png|296]]

More in general, **parallel springs have the same deflection, but are subject to different forces**.

Assuming that the force $f$ is applied so that both springs have the same deflection $x$ but different forces $f_{1}$ and $f_{2}$, we have:
$$
x=\frac{f_{1}}{k_{1}}=\frac{f_{2}}{k_{2}}
$$
If the system is in static equilibrium, then we have:
$$
f=f_{1}+f_{2}=k_{1}x+k_{2}x=(k_{1}+k_{2})x
$$
Thus, for the equivalent system, where $f=k_{e}x$, we have:
$$
k_{e}=k_{1}+k_{2}
$$
In general:
$$
k_{e}=\sum_{i=1}^{n}k_{i}
$$
## Series Springs
Series springs are connected to end to end. 

![[Series and Parallel Springs-1.png|288]]

More in general, **series springs have the same torque or force, but different deflections.** 

Assuming both strings are in static equilibrium and are subject to the same force $f$, their deflections $f/k_{1}$ and $f / k_{2}$ will not be the same unless $k_{1}=k_{2}$. The total deflection $x$ of the system is obtained from:
$$
x=\frac{f}{k_{1}}+\frac{f}{k_{2}}=\left( \frac{1}{k_{1}}+\frac{1}{k_{2}} \right)f
$$
For the equivalent system $f=k_{e}x$, we then have:
$$
\frac{1}{k_{e}}=\frac{1}{k_{1}}+\frac{1}{k_{2}}
$$
In general:
$$
\frac{1}{k_{e}}=\sum_{i=1}^{n} \frac{1}{k_{i}}
$$