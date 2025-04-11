---
title: UDL Chapter 3 Problems
tags:
  - lin-alg
date: 2024-12-24
aliases:
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

- Region 1: $h_{3}$ is active
- Region 2: $h_{1}$ and $h_{3}$ are active
- Region 3: $h_{1}, h_{2}, h_{3}$ are all active
- Region 4: $h_{1}$ and $h_{2}$ are active



> [!question] Problem 3.3
> Derive expressions for the positions of the "joints" in function in figure 3.3j in terms of the ten parameters $\phi$ and input $x$. Derive expressions for slopes of the four linear regions.

Joints are created by ReLU activations when a hidden unit has a joint at that point. Thus, we set each by the function computed before the ReLU is applied to zero.
- Joint 1: $\theta_{10}+\theta_{11}x=0 \quad \longrightarrow \quad x=-\frac{\theta_{10}}{\theta_{11}}$
- Joint 2: $\theta_{20}+\theta_{21}x=0 \quad \longrightarrow \quad x=- \frac{\theta_{20}}{\theta_{21}}$
- Joint 3: $\theta_{30}+\theta_{31}x=0 \quad \longrightarrow \quad  x=- \frac{\theta_{30}}{\theta_{31}}$

Slopes for each region are determined by which hidden units are active in that region.
- Region 1: $h_{3}$ is active, so we have $m_{1}=\phi_{3}\theta_{31}$
- Region 2: $h_{1}$ and $h_{3}$ are active, so we have $m_{2}=(\phi_{1}\theta_{11}+\phi_{3}\theta_{31})x$
- Region 3: $h_{1}, h_{2}, h_{3}$ are all active, so we have $m_{3}=(\phi_{1}\theta_{11}+\phi_{2}\theta_{21}+\phi_{3}\theta_{31})x$
- Region 4: $h_{1}$ and $h_{2}$ are active, so we have $m_{4}=(\phi_{1}\theta_{11}+\phi_{2}\theta_{21})x$


> [!question] Problem 3.4
> Draw a version of figure 3.3 where the $y$-intercept and slope of the 3rd hidden unit have changed as in 3.14c. Assume that the remaining parameters remain the same.
> 



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
\begin{align}
\text{ReLU}[\alpha\cdot z] & = \text{max}(0,\alpha\cdot z) \\
	 & =\alpha \cdot \text{max}(0,z) \\
	 & =\alpha\cdot \text{ReLU}(z)
\end{align}
$$


> [!question] Problem 3.6
> Following on from problem 3.5, what happens to the shallow network defined in equations 3.3 and 3.4 when we multiply the parameters $\theta_{10}$ and $\theta_{11}$ by a positive constant $\alpha$ and divide the slope $\phi_{1}$ by the same parameter $\alpha$? What happens if $\alpha$ is negative?

Equation 3.3 defines hidden units:
$$
h_{1}=a[\theta_{10}+\theta_{11}x]
$$
Equation 3.4 defines the network:
$$
y=\phi_{0}+\phi_{1}h_{1},\dots
$$
Multiplying $h_{1}$ by $\alpha$ and then dividing by it again (by way of $\phi_{1}$) would have no effect:
$$
\begin{align}
y & =\phi_{0}+\frac{\phi_{1}}{\alpha}(\alpha a[\theta_{10}+\theta_{11}x]) \\
 & =\phi_{0}+\phi_{1}(a[\theta_{10}+\theta_{11x}])
\end{align}
$$


> [!question] Problem 3.7
> Consider fitting the model in equation 3.1 using a least squares loss function. Does this loss function have a unique minimum? i.e., is there a single “best” set of parameters.

The least squares loss function for this model does not necessarily have a unique minimum, because the non-linearities introduced by the activation function can create a non-convex optimization landscape. Furthermore, different parameter combinations to produce the same predictions, leading to equivalent solutions.



> [!question] Problem 3.8
> Consider replacing the ReLU activation function with (i) the Heaviside step function $\text{heaviside}(z)$, (ii) the hyperbolic tangent function $\tanh[z]$, and (iii) the rectangular function $\text{rect}[z]$, where
> $$
> \text{heaviside}[z]=\begin{cases}
> 0  & z <0 \\
> 1 & z \geq 0
>\end{cases}
> $$
> 
> and
> 
> $$
> \text{rect}[z]=
> \begin{cases}
> 0 & z < 0 \\
>1  & 0 \leq z\leq 1 \\
>0 & z >1
>\end{cases}
> $$
> Redraw a version of figure 3.3 for each of these functions. The original parameters were: $\phi = \{\phi_{0}, \phi_{1}, \phi_{2}, \phi_{3}, \theta_{10}, \theta_{11}, \theta_{20}, \theta_{21}, \theta_{30}, \theta_{31} \} = \{−0.23, −1.3, 1.3, 0.66, −0.2, 0.4, −0.9, 0.9, 1.1, −0.7\}.$ Provide an informal description of the family of functions that can be created by neural networks with one input, three hidden units, and one output for each activation function.
> 

Heaviside: We would produce piecewise constant functions with up to four linear regions. Each hidden unit creates a single step in the output at its $x$-intercept. The output weights and biases of the network can adjust the heights of these constant segments, but the general shape remains a sequence of horizontal steps.

Hyperbolic tangent: This network would produce smooth piecewise non-linear functions. These functions can approximate continuous, differentiable curves, with complexity determined by the arrangement and blending of the sigmoids created by the hidden units.

Rectangular: This network would produce piecewise constant functions with rectangular pulses. The functions can have up to three non-overlapping or overlapping "bumps," depending on how the hidden units' activations interact.


> [!question] Problem 3.9
> Show that the third linear region in figure 3.3 has a slope that is the sum of the slopes of the first and fourth linear regions

From problem 3.3, we had:
- Region 1: $h_{3}$ is active, so we have $m_{1}=\phi_{3}\theta_{31}$
- Region 3: $h_{1}, h_{2}, h_{3}$ are all active, so we have $m_{3}=\phi_{1}\theta_{11}+\phi_{2}\theta_{21}+\phi_{3}\theta_{31}$
- Region 4: $h_{1}$ and $h_{2}$ are active, so we have $m_{4}=\phi_{1}\theta_{11}+\phi_{2}\theta_{21}$

Thus, it is to show that:
$$
\begin{align}
m_{3}  & = m_{1}+m_{4} \\
\phi_{1}\theta_{11}+\phi_{2}\theta_{21}+\phi_{3}\theta_{31} & =(\phi_{3}\theta_{31})+(\phi_{1}\theta_{11}+\phi_{2}\theta_{21})
\end{align}
$$

> [!question] Problem 3.10
> Consider a neural network with one input, one output, and three hidden units. The construction in figure 3.3 shows how this creates four linear regions. Under what circumstances could this network produce a function with fewer than four linear regions?

The four linear regions result from the 3 hidden units creating 3 joints from the non-linearities caused by the ReLU functions. We can have less joints if they occur at the same place, i.e. two or more of the hidden units have the same $x$-intercept. This could result from one or more hidden units remaining inactive for all relevant inputs, or if the weights and biases of the hidden units are proportional to each other. 


> [!question] Problem 3.11
> How many parameters does the model in figure 3.6 have?

Each of the four hidden unit has 1 weight and 1 bias. Each of the two output unit has four weights and 1 bias. In total:
$$
(4\times(1+1))+(2\times(4+1))=8+10=18
$$


> [!question] Problem 3.12
> How many parameters does the model in figure 3.7 have?

Each of the 3 hidden units has 2 weights and 1 bias (see Equation 3.9). The output unit has 3 weights and 1 bias:
$$
(3\times(2+1))+(3+1)=9+4=13
$$

> [!question] Problem 3.13
> What is the activation pattern for each of the seven regions in figure 3.8? In other words, which hidden units are active (pass the input) and which are inactive (clip the input) for each region?

- Region 1: $h_{1}$
- Region 2: $h_{1}, h_{2}$
- Region 3: None
- Region 4: $h_{1}, h_{3}$
- Region 5: $h_{1}, h_{2}, h_{3}$
- Region 6: $h_{3}$
- Region 7: $h_{2}, h_{3}$


> [!question] Problem 3.14
> Write out the equations that define the network in figure 3.11. There should be three equations to compute the three hidden units from the inputs and two equations to compute the outputs from the hidden units.

Hidden units:
$$
\begin{align}
h_{1} & =a[\theta_{10}+ \theta_{11}x_{1}+\theta_{12}x_{2}+\theta_{13}x_{3}] \\
h_{2}  & =a[\theta_{20}+\theta_{21}x_{1}+\theta_{22}x_{2}+\theta_{23}x_{3}] \\
h_{3} & =a[\theta_{30}+\theta_{31}x_{1}+\theta_{32}x_{2}+\theta_{33}x_{3}]
\end{align}
$$
Outputs:
$$
\begin{align}
y_{1} & =\phi_{10}+\phi_{11}h_{1}+\phi_{12}h_{2}+\phi_{13}h_{3} \\
y_{2} & =\phi_{20}+\phi_{21}h_{1}+\phi_{22}h_{2}+\phi_{23}h_{3}
\end{align}
$$

> [!question] Problem 3.15
> What is the maximum possible number of 3D linear regions that can be created by the network in figure 3.11?

Each hidden unit divides the input space into two regions: one where the linear function inside $a$ is positive, and one where it is zero. The maximum number of regions created by 3 planes intersecting in 3D space, following figure 3.10c, would be 8 regions.

Can also use Zaslavsky's result (see problem 3.18) to get:
$$
\begin{align}
R  & = \sum_{k=0}^{3} {3 \choose k}={3 \choose 0}+{3 \choose 1}+{3 \choose 2}+{3 \choose 3} \\[2ex]
	 & =1+3+3+1 = 8
\end{align}
$$

> [!question] Problem 3.16
> Write out the equations for a network with two inputs, four hidden units, and three outputs. 

- Two inputs: $x_{1}, x_{2}$
- Four hidden units:
$$
\begin{align}
h_{1}=\theta_{10}+\theta_{11}x_{1}+\theta_{12}x_{2} \\
h_{2}=\theta_{20}+\theta_{21}x_{1}+\theta_{22}x_{2} \\
h_{3}=\theta_{30}+\theta_{31}x_{1}+\theta_{32}x_{2} \\
h_{4}=\theta_{40}+\theta_{41}x_{1}+\theta_{42}x_{2} \\ 
\end{align}
$$
- Three outputs:
$$
\begin{align}
y_{1}=\phi_{10}+\phi_{11}h_{1}+\phi_{12}h_{2}+\phi_{13}h_{3}+\phi_{14}h_{4} \\
y_{2}=\phi_{20}+\phi_{21}h_{1}+\phi_{22}h_{2}+\phi_{23}h_{3}+\phi_{24}h_{4} \\
y_{3}=\phi_{30}+\phi_{31}h_{1}+\phi_{32}h_{2}+\phi_{33}h_{3}+\phi_{34}h_{4} \\
\end{align}
$$


> [!question] Problem 3.17
> Equations 3.11 and 3.12 define a general neural network with $D_{i}$ inputs, one hidden layer containing $D$ hidden units, and $D_{o}$ outputs. Find an expression for the number of parameters in the model in terms of $D_{i}$, $D$, and $D_{o}$.

$$
((D_{i}+1) \times D) + ((D+1) \times D_{o})
$$

See 3.11 and 3.12 for examples.

> [!question] Problem 3.18
> Show that the maximum number of regions created by a shallow network with $D_{i}=2$-dimensional input, $D_{o}=1$-dimensional output, and $D=3$ hidden units is seven, as in figure 3.8j. Use the result of Zaslavsky (1975) that the maximum number of regions created by partitioning a $D_{i}$-dimensional space with $D$ hyperplanes is $\sum_{j=0}^{D_{i}} {D \choose j}$. What is the maximum number of regions if we add two more hidden units to this model, so $D=5$?

Original:
$$
N=\sum_{j=0}^{D_{i}} {D \choose j}= {3 \choose 0}+ {3 \choose 1}+ {3 \choose 2} = 1 + 3 + 3=7
$$
With $D=5$:
$$
N=\sum_{j=0}^{D_{i}} {D \choose j}= {5 \choose 0}+ {5 \choose 1}+ {5 \choose 2} = 1 + 5 + 10 =16
$$
