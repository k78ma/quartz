---
title: UDL Chapter 3 Problems
tags:
  - dl
  - ml
date: 2024-12-24
aliases:
  - udl chapter 3 problems
---
> [!question] Problem 3.1
> What kind of mapping from input to output would be created if the activation function in equation
>$$
>\begin{align}
>y & =f[x, \phi] \\
> & = \phi_{0}+\phi_{1}a[\theta_{10}+\theta_{11}x]+\phi_{2}a[\theta_{20}+\theta_{21}x]+\phi_{3}a[\theta_{30}+\theta_{31}x]
>\end{align}
>$$ 
> was linear so that $a[z]=\psi_{0}+\psi_{1}z$? What kind of mapping would be created if the activation function was removed, so $a[z]=z$?

If each activation function was linear, the input-output mapping would also be a linear function. We would have
$$
\begin{align}
y= & \phi_{0}+\phi_{1}(\psi_{0}+\psi_{1}\theta_{10}+\psi_{1}\theta_{11}x) \\
	 & +\phi_{2}(\psi_{0}+\psi_{1}\theta_{20}+\psi_{1}\theta_{21}x) \\
	 & +\phi_{3}(\psi_{0}+\psi_{1}\theta_{30}+\psi_{1}\theta_{31}x)
\end{align}
$$
Grouping terms gives us a linear function of $x$:
$$
y=(\text{constant}) + (\text{linear terms involving }x)
$$

If the activation function was removed, it would also simply be a linear function.

If $a[z]=z$, we would simply have
$$
\begin{align}
y & =\phi_{0}+\phi_{1}(\theta_{10}+\theta_{11}x)+\phi_{2}(\theta_{20}+\theta_{21}x)+\phi_{3}(\theta_{30}+\theta_{31}x) \\
	 & =\phi_{0}+(\phi_{1}\theta_{10}+\phi_{2}\theta_{20}+\phi_{3}\theta_{30})+(\phi_{1}\theta_{11}+\phi_{2}\theta_{21}+\phi_{3}\theta_{31})x
\end{align}
$$
which is also a linear function of $x$.


> [!question] Problem 3.2
> For each of the four linear regions in figure 3.3j, indicate which hidden units are inactive and which are active (i.e., which do and do not clip their inputs).
> 
> ![[UDL Chapter 3 Problems.png|300]]

- Region 1: $h_{3}$ is active
- Region 2: $h_{1}$ and $h_{3}$ are active
- Region 3: $h_{1}, h_{2}, h_{3}$ are all active
- Region 4: $h_{1}$ and $h_{2}$ are active


> [!question] Problem 3.3
> Derive expressions for the positions of the "joints" in function in figure 3.3j in terms of the ten parameters $\phi$ and input $x$. Derive expressions for slopes of the four linear regions.

Joints are created by ReLU activations when a hidden unit has a joint at that point. Thus, we set each by the function computed before the ReLU is applied to zero.
- Joint 1: $\theta_{10}+\theta_{11}x=0 \quad \longrightarrow \quad x=-\frac{\theta_{10}}{\theta_{11}}$
- Joint 2: $\theta_{20}+\theta_{21}x=0 \quad \longrightarrow \quad x=- \frac{\theta_{20}}{\theta_{21}}$
- Joint 3: $\theta_{30}+\theta_{31}x=0 \quad \longrightarrow \quad  x=- \frac{\theta_{30}}{\theta_{31}}$$

Slopes for each region are determined by which hidden units are active in that region.
- Region 1: $h_{3}$ is active, so we have $m_{1}=\phi_{3}\theta_{31}$
- Region 2: $h_{1}$ and $h_{3}$ are active, so we have $m_{2}=(\phi_{1}\theta_{11}+\phi_{3}\theta_{31})x$
- Region 3: $h_{1}, h_{2}, h_{3}$ are all active, so we have $m_{3}=(\phi_{1}\theta_{11}+\phi_{2}\theta_{21}+\phi_{3}\theta_{31})x$
- Region 4: $h_{1}$ and $h_{2}$ are active, so we have $m_{4}=(\phi_{1}\theta_{11}+\phi_{2}\theta_{21})x$


> [!question] Problem 3.4
> Draw a version of figure 3.3 where the $y$-intercept and slope of the 3rd hidden unit have changed as in 3.14c. Assume that the remaining parameters remain the same.
> 
> ![[UDL Chapter 3 Problems-1.png|500]]




> [!question] Problem 3.5
> Prove that the following property holds for $\alpha \in \mathbb{R}^{+}$:
> $$
> \text{ReLU}[\alpha\cdot z]=\alpha\cdot \text{ReLU}[z]
> $$
> This is known as the *non-negative homogeneity* property of the ReLU function.

We have
$$
\text{ReLU}[z] = \begin{cases}
0 & z < 0 \\
z & z \geq 0
\end{cases} = \text{max}(0,z)
$$
Thus,
$$
\text{ReLU}[\alpha\cdot z]=\alpha\cdot \text{ReLU}[z]
$$

> [!question] Problem 3.6


> [!question] Problem 3.7


> [!question] Problem 3.8


> [!question] Problem 3.9


> [!question] Problem 3.10


> [!question] Problem 3.11


> [!question] Problem 3.12


> [!question] Problem 3.13


> [!question] Problem 3.14


> [!question] Problem 3.15


> [!question] Problem 3.16


> [!question] Problem 3.17



> [!question] Problem 3.18


