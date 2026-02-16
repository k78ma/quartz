---
title: Velocity Motion Model
tags:
  - mte544
date: 2025-11-01
aliases: velocity motion model
---
## Closed-Form
Here we derive a motion model with noisy $v$ and $\omega$ for a 2-wheel differential drive robot. Specifically, we want to find the pdf $p(\xi_{k}\mid \xi_{k-1}, u_{k-1})$.

Let
$$
\begin{align*}
\xi_k  & = [x’\; y’\; \theta’]^{T}  \\
\xi_{k-1}  & = [x \; y \; \theta]^{T} \\
u_{k-1} & = [v \; \omega]^{T}
\end{align*}
$$
Denoting the instantaneous center of rotation by $(x^{\ast}, y^{\ast })$, we have:
$$
\begin{aligned} 
x^{\ast  } &= x - \lambda \cos\ \left(\theta - \frac{\pi}{2}\right) = x - \lambda \sin\theta  \\[2ex] 
y^{*} &= y - \lambda \sin \left(\theta - \frac{\pi}{2}\right) = y + \lambda \cos\theta
\end{aligned}\tag{1}
$$
Note that the halfway point $(x,y)$ and $(x', y')$ lies on a ray perpendicular to their line segment, so
$$
\begin{align}
x^{\ast  } = \frac{x+x'}{2} + \mu(y-y')  \\
y^{\ast  } = \frac{y+y'}{2} + \mu(x'-x)
\end{align} \tag{2}
$$for some $\lambda, \mu \in \mathbb{R}$.

![[Velocity Motion Model-20251101215610309.png|451]]


Solving the above equations for $\mu$, we get:
$$
\mu = \frac{1}{2} \frac{(x-x')\cos \theta+(y-y')\sin \theta}{(y-y')\cos \theta-(x-x')\sin \theta}
$$
Similarly, we get $\lambda$ as:
$$
\lambda = \sqrt{(x-x^{\ast})^2 + (y-y^{\ast})^{2}}= \sqrt{(x'-x^{\ast})^2 + (y'-y^{\ast})^2}
$$
And the change of heading can be computed as
$$
\Delta\theta \;=\; \operatorname{atan2}(y'-y^{\ast  },\,x'-x^{\ast  }) - \operatorname{atan2}(y-y^{\ast  },\,x-x^{\ast  }).
$$

The observed displacement $(x,y,\theta) \to (x',y',\theta')$ was produced by some true (but unknown) velocities $\overline{u} = [\bar{v}, \bar{\omega}]$ that differ from the commands $v,\omega$ because of actuator and modeling noise.

From the geometry of circular motion, the distance traveled arc is:
$$
\Delta \text{dist} = \lambda\Delta \theta
$$
and therefore, we can write the true linear velocity as
$$
\overline{v} = \frac{\Delta \text{dist}}{\Delta t} = \frac{\Delta \theta}{\delta t}\lambda, \overline{\omega} = \frac{\Delta \theta}{\delta t}
$$
and the true angular velocity as
$$
\overline{\omega} = \frac{\Delta \theta}{\Delta t}
$$
$\overline{v}$ and $\overline{\omega}$ give us the motion errors (random variables) as:
$$
v_{\text{err}} = v-\overline{v}, \quad  \omega_{\text{err}} = \omega-\overline{\omega}
$$
This gives us only 2 variables while the motion has 3DOF. Introducing one more random variable for $\theta$, we have
$$
\theta_{\text{err}} = (\theta’ - \theta) - \bar{\omega}\Delta t.
$$
This is the part of the observed rotation that cannot be explained by the motion implied by $\bar{\omega}$. We re-write this as:
$$
\theta_{\text{err}} = \gamma_{\text{err}}\Delta t \quad \Rightarrow \quad \gamma_{\text{err}} = \overline{\gamma} = \frac{\theta’ - \theta}{\Delta t} - \bar{\omega}.
$$
Hence, this velocity motion model involves 3 pdfs:
$$
\begin{cases} \epsilon_{\alpha_1 v^2 + \alpha_2 \omega^2}(v_{\text{err}}),\\[4pt] \epsilon_{\alpha_3 v^2 + \alpha_4 \omega^2}(\omega_{\text{err}}),\\[4pt] \epsilon_{\alpha_5 v^2 + \alpha_6 \omega^2}(\gamma_{\text{err}}). \end{cases}
$$
- $\epsilon_{b^{2}}(x)$ is any (e.g. Gaussian) pdf with zero mean and variance $b^{2}$

Finally, we have:
$$
 p(\xi_k \mid \xi_{k-1},u_{k-1}) =\epsilon_{\alpha_1 v^2+\alpha_2\omega^2}(v_{\text{err}}) \cdot \epsilon_{\alpha_3 v^2+\alpha_4\omega^2}(\omega_{\text{err}}) \cdot \epsilon_{\alpha_5 v^2+\alpha_6\omega^2}(\gamma_{\text{err}})
$$
In summary, we have:
- Noise sources: $v$ (translational velocity), $\omega$ (rotational velocity), $\theta$ (rotation angle)
- Probabilistic features are specified by 6 parameters $\alpha_{1}, \dots, \alpha_{6}$.

![[Velocity Motion Model-20251101221121753.png]]

## Sampling
The previous velocity motion model gave us $p(\xi_k \mid \xi_{k-1}, u_{k-1})$, which is a probability density function describing how likely each new pose. This form is suitable for analytical estimation. However, in nonparameteric state estimation (such as [[Particle Filter|particle filters]]), we do not compute the density directly; instead, we draw samples from the motion model to produce new particle states. Therefore, we need a sampling procedure – a sample model.

How do we get $\xi_{k}$ given $\xi_{k-1}$ and noisy $u_{k-1}$?

Let:
$$
\begin{align*}
\xi_k  & = [x’\; y’\; \theta’]^{T}  \\
\xi_{k-1}  & = [x \; y \; \theta]^{T} \\
u_{k-1} & = [v \; \omega]^{T}
\end{align*}
$$
Denoting the ICR by $(x^{\ast }, y^{\ast })$, the radius of curvature is given by $\lambda= | \frac{v}{\omega} |$. The ICR can then be represented as:
$$
\begin{align}
x^{\ast  } &= x-\lambda \cos\left( \theta-\frac{\pi}{2} \right) = x-\frac{v}{\omega}\sin \theta \\[2ex]
y^{\ast  } &= y- \lambda \sin\left( \theta-\frac{\pi}{2} \right) = y+\frac{v}{\omega}\cos\theta
\end{align}
$$
Then, the discrete model with respect to the ICR is given by:
$$
\begin{bmatrix}x’\\ y’\\ \theta’\end{bmatrix} =\begin{bmatrix} x^* + \frac{v}{\omega}\sin(\theta+\omega\Delta t)\\[2pt] y^* - \frac{v}{\omega}\cos(\theta+\omega\Delta t)\\[2pt] \theta + \omega\Delta t \end{bmatrix}=\begin{bmatrix}x\\ y\\ \theta\end{bmatrix} + \begin{bmatrix} -\frac{v}{\omega}\sin\theta+\frac{v}{\omega}\sin(\theta+\omega\Delta t)\\[4pt] \;\;\frac{v}{\omega}\cos\theta-\frac{v}{\omega}\cos(\theta+\omega\Delta t)\\[4pt] \omega\Delta t \end{bmatrix}.
$$
Incorporating random noise to $v$ and $\omega$, we have
$$
\begin{align}
\overline{v}  & = v + \epsilon_{\,\alpha_1 v^2+\alpha_2\omega^2} \\
 \overline{\omega}  & = \omega + \epsilon_{\,\alpha_3 v^2+\alpha_4\omega^2},
\end{align}
$$
- Yes — in this model $\bar{v}, \bar{\omega}$, and $\bar{\gamma}$ are noisy samples (i.e., realizations) of the robot’s actual motion, not the ideal commanded values like before!

Consequently, we get the sample velocity motion model as:
$$
\begin{bmatrix}
x' \\
y' \\
\theta'
\end{bmatrix} = \begin{bmatrix}
x \\
y \\
z
\end{bmatrix} + \begin{bmatrix}
- \frac{\overline{v}}{\omega}\sin(\theta) + \frac{\overline{v}}{\overline{\omega}}\sin(\theta+\overline{\omega}\Delta t) \\
\frac{\overline{v}}{\omega}\cos(\theta) - \frac{\overline{v}}{\omega}\cos(\theta+\overline{\omega}\Delta t) \\
\overline{\omega}\Delta t + \overline{\gamma}\Delta t
\end{bmatrix}
$$
### Sampling Algorithm

![[Velocity Motion Model-20251101223054118.png]]

- $\alpha_3,\alpha_4 \ll \alpha_1,\alpha_2$: rotational noise is small, translational noise dominates. Samples spread mainly along the arc length (range error) with relatively tight headings.
- $\alpha_3,\alpha_4 \gg \alpha_1,\alpha_2$: rotational noise dominates. End-point angles vary widely; the cloud “fans out.”
- Moderate values for all $\alpha_{i}$: Balanced spread approximating typical wheel-slip and encoder noise


![[Velocity Motion Model-20251101223142134.png]]