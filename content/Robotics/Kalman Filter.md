---
title: Kalman Filter
tags:
  - cs
  - robotics
date: 2024-02-26
aliases:
---
The Kalman filter is an algorithm that measures the state of a system from measured data. It uses a two-step process: the first step predicts the state of the system, and the second step uses noisy measurements to refine the estimate of system state. 

## Robot Motion Example
Let's say we have a robot that has state $\vec{x}_{k}$, which is just a position and velocity:
$$
\vec{x}_{k}=(\vec{p}, \vec{v})
$$
>[!note] State
>*State* is just a list of numbers about the underlying configuration of your system; it could be anything. In our example it’s position and velocity, but it could be data about the amount of fluid in a tank, the temperature of a car engine, the position of a user’s finger on a touchpad, or any number of things you need to keep track of.

Information we have:
- Our robot also has a GPS sensor, which is accurate to about 10 meters, which is good, but not precise enough. 
- We also know how the robot moves in general; if it moves in one direction it will, at the next time step it will likely be further along that same direction. However, this is not perfect, as there might be terrain or external factors that result in noise.

Thus, both our sensor and model tell us some information about the state, but only indirectly, and both have some uncertainty. We don’t know what the _actual_ position and velocity are; there are a whole range of possible combinations of position and velocity that might be true, but some of them are more likely than others. 

## Formulation
The Kalman filter assumes that both position and velocity are random variables that are Gaussian distributed. Each variable has:
- Mean of $\mu$, which is the center of the distribution.
- Variance of $\sigma$, which is the uncertainty.

![[Kalman Filter.png|292]]

### Covariance
However, it's important to note that position and velocity could be *correlated*; the likelihood of observing a particular position depends on what velocity you have:

![[Kalman Filter-1.png|288]]

In this case, the correlation between position and velocity is obvious. If our velocity was high, we probably moved farther, so our position will be more distant. This relationship gives us more information about the system; one measurement tells us something about what the others could be.

This correlation is captured by a *covariance matrix*. Each element $\sum_{ij}$ of the matrix is the degree of correlation between the *i*-th state variable and the *j*-th state variable.

### Prediction Matrix
We’re modeling our knowledge about the state as a Gaussian blob, so we need two pieces of information at time $k$: our best estimate $\hat{\mathbf{x}}_{k}$, and its covariance matrix $\mathbf{P}_{k}$, such that
$$
\begin{align}
\mathbf{\hat{x}}_{k} & =\begin{bmatrix}
\text{position} \\
\text{velocity}
\end{bmatrix} \\[2ex] 
\mathbf{P}_{k} & =\begin{bmatrix}
\sum_{pp} & \sum_{pv} \\
\sum_{vp} & \sum_{vv}
\end{bmatrix}
\end{align}
$$

Next, we need to **predict** the next state at time $k$ based on the current state at $k-1$. This prediction step is done with a **prediction matrix** $\mathbf{F}_{k}$, which takes every point in our original Gaussian estimate and moves it to a new predicted location.

![[Kalman Filter-3.png|290]]

In our position/velocity example, we can formulate a model based on kinematic laws (assuming constant velocity):
$$
\begin{align}
p_{k} & =p_{k-1} + \Delta t \, v_{k-1} \\
v_{k} & = v_{k-1}
\end{align}
$$
In matrix form, this is:
$$
\begin{align}
\mathbf{\hat{x}}_{k} & = \begin{bmatrix}
1 & \Delta t \\
0 & 1
\end{bmatrix}\,\mathbf{\hat{x}}_{k-1}\\[2ex] 
 & = \mathbf{F}_{k} \, \mathbf{\hat{x}}_{k-1}
\end{align}
$$
which gives us our prediction matrix which gives us our next state. 

![[Kalman Filter-2.png|290]]

### Covariance Matrix
We can update the covariance matrix by observing what happens when we multiply every point in a distribution by a matrix $\mathbf{A}$:
$$
\begin{align}
Cov(x)  & = \sum \\[2ex] 
Cov(\mathbf{A}x)  & = \mathbf{A}\sum \mathbf{A}^{T}
\end{align}
$$
Thus, our covariance matrix would be updated by:
$$
\mathbf{P}_{k}=\mathbf{F}_{k} \, \mathbf{P}_{k-1} \, \mathbf{F}_{k}^{T}
$$
This is also called the process noise covariance matrix.
### Control Matrix & Control Vector
If we know any additional information about the world, we can stuff it into a vector called $\mathbf{\vec{u}}_{k}$ and add it to our prediction as a correction. 

Let’s say we know the expected acceleration 𝑎 due to the throttle setting or control commands. From basic kinematics we get:
$$
\begin{align}
p_{k} & =p_{k-1} + \Delta t \, v_{k-1} + \frac{1}{2}a\,\Delta t^{2} \\
v_{k} & = v_{k-1} + a\Delta t
\end{align}
$$
In matrix form:
$$
\begin{align}
\mathbf{\hat{x}}_{k} & = \mathbf{F}_{k} \, \mathbf{\hat{x}}_{k-1} + \begin{bmatrix}
\frac{\Delta t^{2}}{2} \\
\Delta t
\end{bmatrix} a \\[2ex] 
 & =  \mathbf{F}_{k} \mathbf{\hat{x}}_{k-1} + \mathbf{B}_{k}\mathbf{\vec{u}}_{k}
\end{align}
$$
Here, $\mathbf{B}_{k}$ is the control matrix and $\mathbf{\vec{u}}_{k}$ is the control vector. For very simple systems with no external influence, we can omit these.

### Uncertainty
We can model the uncertainty associated with the “world” (i.e. things we aren’t keeping track of or can't control) by adding some new uncertainty after every prediction step. Every state in our original estimate could have moved to a range of states; each point in $\hat{\mathbf{x}}_{k-1}$ is moved to somewhere inside a Gaussian blob with covariance $\mathbf{Q}_{k}$. Another way to say this is that we are treating the untracked influences as noise with covariance $\mathbf{Q}_{k}$ – this is called the **process noise covariance matrix.**

We get the expanded covariance by simply adding $\mathbf{Q}_{k}$, giving our complete expression for the **prediction step**.

### Prediction Step
$$
\begin{align} \\
 \mathbf{\hat{x}}_{k}  & =\mathbf{F}_{k} \mathbf{\hat{x}}_{k-1} + \mathbf{B}_{k}\mathbf{\vec{u}}_{k} \\
 \mathbf{P}_{k} & =\mathbf{F}_{k} \, \mathbf{P}_{k-1} \, \mathbf{F}_{k}^{T} + \mathbf{Q}_{k}
\end{align}
$$

As such, the new best estimate is is a prediction made from previous best estimate, plus a correction for known external influences. The new uncertainty is predicted from the old uncertainty, with some additional uncertainty from the environment. 

### Measurement
We might have several sensors which give us information about the state of our system. These give indirect readings; based on the state, the sensors have some transfer function/mapping:

![[Kalman Filter-4.png|480]]

This transfer function can for the sensors can be modeled with a matrix, $\mathbf{H}_{k}$. This lets us figure out the distribution of sensor readings:
$$
\begin{align}
\vec{\mu}_{\text{expected}} = \mathbf{H}_{k}\mathbf{\hat{x}}_{k} \\[2ex]
\Sigma_{\text{expected}} = \mathbf{H}_{k} \, \mathbf{P}_{k} \, \mathbf{H}_{k}^{T}
\end{align}
$$
We also need to deal with *sensor noise*; every very state in our original estimate might result in a range of sensor readings. For a given reading, because there is uncertainty, some states are more likely than others to have have produced the reading we saw.  The covariance of this uncertainty (sensor noise) is called $\mathbf{R}$ – this is called the **measurement noise covariance matrix**. 

The distribution has a mean equal to the reading we observed, which we’ll call $\mathbf{\vec{z}}_{k}$.

### Combining Gaussians
Now we have two Gaussian blobs: one for our prediction, and one surrounding the actual sensor reading we got, which we must reconcile. 

![[Kalman Filter-5.png|320]]

For any possible reading $(z_{1},z_{2})$, we have two associated probabilities:
1. The probability that our sensor reading $\mathbf{\vec{z}}_{k}$ is a mis-measurement of $(z_{1},z_{2})$
2. The probability that our previous estimate thinks $(z_{1},z_{2})$ is the reading we should see.

If we two probabilities and we want to know the chance that both are true, we just multiply them together. We're left with the overlap, the region where both blobs are likely. The mean of this distribution is the state for which both estimates are most likely, and is therefore the best guess of the true state given all the information we have.

A distribution found by multiplying two distributions together is given by:
$$
\begin{align}
\mathbf{k}  & = \frac{\sigma_{0}^{2}}{\sigma_{0}^{2}+\sigma_{1}^{2}} \\[2ex]
\mu'  & = \mu_{0}+\mathbf{k(\mu_{1}-\mu_{0})} \\
\sigma'^{2} & =\sigma_{0}^{2} -\mathbf{k}\sigma_{0}^{2}
\end{align}
$$
The matrix version of this is:
$$
\begin{align}
\mathbf{K}  & = \Sigma_{0} (\Sigma_{0}+\Sigma_{1})^{-1} \\
\vec{\mu}'  & = \vec{\mu}_{0} + \mathbf{K}(\vec{\mu}_{1}-\vec{\mu}_{0}) \\
\Sigma'  & = \Sigma_{0} - \mathbf{K}\Sigma_{0}
\end{align}
$$
$\mathbf{K}$ is a matrix called the **Kalman gain**.

### Update Step
We have two distributions:
- Prediction: $(\mu_{0}, \Sigma_{0})=(\mathbf{H}_{k}\mathbf{\hat{x}_{k}}, \mathbf{H_{k}\mathbf{P}_{k}\mathbf{H_{k}}^{T}})$
- Measurement: $(\mu_{1}, \Sigma_{1})=(\mathbf{\vec{z}}_{k}, \mathbf{R}_{k})$

Finding the overlap between these:
$$
\begin{align}
\mathbf{H}_{k}\hat{\mathbf{x}}_{k}'  & = \mathbf{H_{k}}\hat{\mathbf{x}}_{k} + \mathbf{K}(\mathbf{\vec{z}}_{k} - \mathbf{H}_{k}\hat{\mathbf{x}}_{k}) \\
\mathbf{H}_{k}\mathbf{P}'_{k}\mathbf{H}_{k}^{T} & = \mathbf{H}_{k}\mathbf{P}_{k}\mathbf{H}_{k}^{T} - \mathbf{K}\mathbf{H}_{k}\mathbf{P}_{k}\mathbf{H}_{k}^{T}
\end{align}
$$
The Kalman gain is:
$$
\mathbf{K} = \mathbf{H}_{k}\mathbf{P}_{k}\mathbf{H}_{k}^{T}(\mathbf{H}_{k}\mathbf{P}_{k}\mathbf{H}_{k}^{T} + \mathbf{R}_{k})^{-1}
$$
We can remove $\mathbf{H}_{k}$ from every term:
$$
\begin{align}
\hat{\mathbf{x}}_{k}'  & = \hat{\mathbf{x}}_{k} + \mathbf{K}'(\mathbf{\vec{z}}_{k} - \mathbf{H}_{k}\hat{\mathbf{x}}_{k}) \\
\mathbf{P}'_{k} & =\mathbf{P}_{k}-\mathbf{K}'\mathbf{H}_{k}\mathbf{P}_{k}\\
\mathbf{K}'_{k} & = \mathbf{P}_{k}\mathbf{H}_{k}^{T}(\mathbf{H}_{k}\mathbf{P}_{k}\mathbf{H}_{k}^{T} + \mathbf{R}_{k})^{-1}
\end{align}
$$
That's it! Our new best estimate is $\mathbf{\hat{x}}_{k}'$, and we can go on and feed it (along with $\mathbf{P}'_{k}$) back in, to predict or update as many times as we like.