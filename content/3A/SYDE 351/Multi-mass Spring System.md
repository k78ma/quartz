---
title: Multi-mass Spring System
tags:
  - syde351
date: 2024-06-12
aliases:
  - multi-mass spring system
---
If two or more masses are connected by spring elements, the basic principles remain the same. 

![[Multi-mass Spring System.png]]

We have:
$$
\begin{align}
m_{1} \ddot{x}_{1} & =f-k_{1}(x_{1}-x_{2}) \\
m_{2} \ddot{x}_{2} & =k_{1}(x_{1}-x_{2})-k_{2}x_{2}
\end{align}
$$
If we move all terms to the left side of the equal sign except for the external force $f$, we have:
$$
\begin{align}
m_{1} \ddot{x_{1}}+k_{1}(x_{1}-x_{2}) & =f \\
m_{2} \ddot{x_{2}}-k_{1}(x_{1}-x_{2})+k_{2}x_{2} & =0
\end{align}
$$
We have to make some assumptions about the relative motions of each mass. 
- For example, we assumed that the $x_{1}>x_{2}$, which results in part **(b)** of the diagram. 
- If we instead assumed that $x_{2}>x_{1}$, we would have part **(c)**, where the directions of the forces associated with $k_{1}$ are the opposite. However, this assumption still generates the same equations of motion.

An easy way to visualize the relative motions of the masses would be to imagine that $x_{1}=0$ and only $x_{2}$ has been displaced, or vice versa.