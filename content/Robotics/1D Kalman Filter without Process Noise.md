---
title: 1D Kalman Filter without Process Noise
tags:
  - state-estimation
date: 2024-10-11
aliases: []
---
This shows the derivation of the Kalman Filter in one dimension; the goal is intuition and clarity. 

Unlike the [[Constant Acceleration Tracking Example|alpha-beta-gamma filter]], the Kalman filter treats measurements, the current state estimate, and the predicted state estimate as normally distributed random variables. Each random variable is described by its mean and variance.

![[1D Kalman Filter without Process Noise.png]]

Recall the [[Simple Static State Estimation Example|simple static state estimation example]] with weighing gold. We made multiple measurements and computed the estimate by averaging. We got the following results:

![[1D Kalman Filter without Process Noise-1.png]]

## Estimate as a random variable
The difference between the estimates (red line) and the true values (green line) is the **estimate error**. The estimate error becomes lower as we make additional measurements, converging to zero, while the estimated value converges toward the true value. We don't know the estimate error but we can estimate the state **uncertainty**. 

The state estimate variance is denoted by $p$. This is also called the estimate uncertainty.

## Measurement as a random variable
The measurement errors are the differences between the measurements (blue samples) and true values (green line). Since measurement errors are random, we can describe them by variance, $\sigma^{2}$. The standard deviation $\sigma$ of the measurement is the **measurement uncertainty**. 

The measurement variance is denoted by $r$. This is also sometimes called the measurement error.

The variance of the measurement errors could be provided by the measurement equipment vendor, calculated, or derived empirically by a calibration procedure.

Let's look at the weight measurements probability density function (PDF). The following plot shows 10 measurements of the gold bar weight.

![[1D Kalman Filter without Process Noise-2.png]]

- The blue circles describe the measurements.
- The true values are at the red dashed line.
- The green line describes the probability density function of the measurement.
- The bold green area is the standard deviation $\sigma$ of the measurement – there is a probability of 68.26% that the measurement value lies within this area. 7 out of 10 the measurements are within the $1\sigma$ area.

## State Prediction
In our simple static example of gold bar measurement, the weight of the gold bar is constant:
$$
\hat{x}_{n+1,n}=\hat{x}_{n,n}
$$
In the second example of [[Constant Velocity Tracking Example|constant velocity aircraft tracking]], we extrapolated the current state (target position and velocity) to the next state using motion equations:
$$
\begin{align}
\hat{x}_{n+1,n} & =\hat{x}_{n,n}+\Delta t \hat{\dot{x}}_{n,n} \\
\hat{x}_{n+1,n} & =\hat{\dot{x}}_{n,n}
\end{align}
$$
Thus, we can see that the dynamic model equation depends on the system. Since the Kalman Filter treats the estimate as a random variable, we must extrapolate the estimate variance, $p_{n,n}$, to the next state as well.

![[1D Kalman Filter without Process Noise-3.png]]

In the first static example, the dynamic model of the system is constant; thus, the estimate uncertainty extrapolation would be:
$$
\hat{p}_{n+1,n}=p_{n,n}
$$
where $p$ is the estimate variance of the gold weight.

In the second constant velocity example, the estimate uncertainty extrapolation would be:
$$
\begin{align}
p_{n+1,n}^{x}&=p^{x}+\Delta t^{2}\cdot p_{n,n}^{v} \\
p_{n+1,n}^{v}&=p_{n,n}^{v}
\end{align}
$$
where $p^{x}$ is the position estimate variance and $p^{v}$ is the velocity estimate variance.

*Why is it $\Delta t^{2}$?* Note that for a normally distributed random variable $x$ with variance $\sigma^{2}$, $kx$ is normally distributed with variance $k^{2}\sigma^{2}$. Therefore, the time term in the uncertainty extrapolation equation is squared. 

## State Update
To estimate the current state of the system, we combine two random variables:
- The prior state estimate (current state estimate predicted at the previous state)
- The measurement

![[1D Kalman Filter without Process Noise-5.png]]

The Kalman filter is an *optimal filter*. It combines the prior state estimate with the measurement in a way that minimizes the uncertainty of the current state estimate.

The current state estimate is a weighted mean of the measurement and the prior state estimate:
$$
\begin{align}
 & \hat{x}_{n,n}=w_{1}z_{n}+w_{2}\hat{x}_{n,n-1} \\
 & w_{1}+w_{2}=1
\end{align}
$$
where $w_{1}, w_{2}$ are weights of the measurement $z_{n}$ and the prior state estimate $\hat{x}_{n,n-1}$. Alternatively, we can write it as:
$$
\hat{x}_{n,n}=w_{1}z_{n}+(1-w_{1})\hat{x}_{n,n-1}
$$
The relationship between the variances is given as:
$$
p_{n,n}=w_{1}^{2}r_{n}+(1-w_{1})^{2}p_{n,n-1}
$$
where:
- $p_{n,n}$ is the variance of the optimal combined estimate
- $p_{n,n-1}$ is the variance of the prior estimate $\hat{x}_{n,n-1}$
- $r_{n}$ is the variance of the measurement $z_{n}$

To find the $w_{1}$ that minimizes $p_{n,n}$, we differentiate $p_{n,n}$ with respect to $w_{1}$ and set the result to zero:
$$
\frac{dp_{n,n}}{dw_{1}}=2w_{1}r_{n}-2(1-w_{1})p_{n,n-1}=0
$$
Solving:
$$
\begin{align}
w_{1}r_{n} & =p_{n,n-1}-w_{1}p_{n,n-1} \\[2ex]
w_{1}r_{n}+w_{1}p_{n,n-1} & =p_{n,n-1} \\[2ex]
w_{1} & = \frac{p_{n,n-1}}{r_{n}+p_{n,n-1}}
\end{align}
$$
Substituting into our current state estimation equation $\hat{x}_{n,n}$:
$$
\begin{align}
\hat{x}_{n,n} & =w_{1}z_{n}+(1-w_{1})\hat{x}_{n,n-1} \\[2ex]
	 & =w_{1}z_{n}+\hat{x}_{n,n-1}-w_{1}\hat{x}_{n,n-1} \\[2ex]
	 & =\hat{x}_{n,n-1}+w_{1}(z_{n}-\hat{x}_{n,n-1}) \\[2ex]
	 & = \frac{p_{n,n-1}}{r_{n}+p_{n,n-1}}(z_{n}-\hat{x}_{n,n-1})
\end{align}
$$

> [!theorem] State Update Equation
> $$
> \hat{x}_{n,n}=\frac{p_{n,n-1}}{r_{n}+p_{n,n-1}}(z_{n}-\hat{x}_{n,n-1})
> $$

Recall that the innovation is $z_{n}-\hat{x}_{n,n-1}$. The weight of the innovation is the **Kalman Gain**:
$$
\begin{align}
K_{n} & =\frac{p_{n,n-1}}{r_{n}+p_{n,n-1}} \\[2ex]
	 & = \frac{\text{Variance in estimate}}{\text{Variance in measurement}+\text{Variance in estimate}}
\end{align}
$$
The Kalman Gain is a number between $0$ and $1$:
$$
0\leq K_{n}\leq 1
$$
Finally, we need to find the variance of the current state estimate. We’ve seen that the relation between variances is given by:
$$
p_{n,n}=K_{n}^{2}r_{n}+(1-K_{n})^{2}p_{n,n-1}
$$
where
$$
1-K_{n}=1-\frac{p_{n,n-1}}{p_{n,n-1}+r_{n}}=\frac{p_{n,n-1}+r_{n}-p_{n,n-1}}{p_{n,n-1} + r_{n}} = \frac{r_{n}}{p_{n,n-1}+r_{n}}
$$
Then, we can re-write the relation between variances as:
$$
\begin{align}
p_{n,n} & =K_{n}^{2}r_{n}+(1-K_{n})^{2}p_{n,n-1}\\[2ex] 
	 & = \left( \frac{p_{n,n-1}}{p_{n,n-1}+r_{n}} \right)^{2}r_{n}+ \left( \frac{r_{n}}{p_{n,n-1}+r_{n}} \right)^{2}p_{n,n-1} \\[2ex] 
	 & = \frac{p_{n,n-1}^{2}r_{n}}{(p_{n,n-1}+r_{n})^{2}}+\frac{r_{n}^{2}p_{n,n-1}}{(p_{n,n-1}+r_{n})^{2}} \\[2ex] 
	 & = \frac{p_{n,n-1}r_{n}}{p_{n,n-1}+r_{n}}\left( \frac{p_{n,n-1}}{p_{n,n-1}+r_{n}}+\frac{r_{n}}{p_{n,n-1}+r_{n}} \right) \\[2ex]
	 & =(1-K_{n})p_{n,n-1}(K_{n}+(1-K_{n})) \\[2ex]
	 & =(1-K_{n})p_{n,n-1}
\end{align}
$$

This is the **Covariance Update Equation**:

> [!theorem] Covariance Update Equation
> $$
> p_{n,n}=(1-K_{n})p_{n,n-1}
> $$

It is clear from the equation that the estimate uncertainty is constantly decreasing with each filter iteration, since $(1 − Kn) \leq 1$. 
- When the measurement uncertainty is high, the denominator of $K_{n}$ is large, resulting in a low Kalman Gain. Therefore, the convergence of the estimate uncertainty would be slow. 
- On the other hand, the Kalman gain is high when the measurement uncertainty is low. Therefore, the estimate uncertainty would quickly converge toward zero.

## Putting it all together
We combine the above pieces into a single algorithm.

The filter inputs are:
- **Initialization**: The initialization is only performed once. It provides two parameters:
	- Initial system state, $\hat{x}_{0,0}$
	- Initial state variance, $p_{0,0}$
- **Measurement**: The measurement is performed for every filter cycle, and it provides two parameters:
	- Measured system state, $z_{n}$
	- Measurement variance, $r_{n}$

The filter inputs are:
- System state estimate, $\hat{x}_{n,n}$
- Estimate variance, $p_{n,n}$

The following summarizes the five Kalman Filter equations.
### State Update
$$
\begin{align}
\hat{x}_{n,n} & =\hat{x}_{n,n-1}+K_{n}(z_{n}-\hat{x}_{n,n}) \\[2ex] 
p_{n,n} & =(1-K_{n})p_{n,n-1}\\[2ex] 
K_{n} & =\frac{p_{n,n-1}}{p_{n,n-1}+r_{n}}
\end{align}
$$
### State Predict

#### State
Constant system dynamics:
$$
\begin{align}
\hat{x}_{n+1, n}=\hat{x}_{n,n} \\
\end{align}
$$
Constant velocity:
$$
\begin{align}
\hat{x}_{n+1,n} & =\hat{x}_{n,n}+\Delta t \hat{\dot{x}}_{n,n} \\
\hat{\dot{x}}_{n+1,n} & =\hat{\dot{x}}_{n,n}
\end{align}
$$
#### Covariance
Constant system dynamics:
$$
p_{n+1,n}^{x}=p^{x}_{n,n}
$$
Constant velocity:
$$
\begin{align}
p_{n+1,n}^{x} & =p^{x}_{n,n}+\Delta t^{2}p_{n,n}^{v} \\
p_{n+1,n}^{v} & =p^{v}_{n,n}
\end{align}
$$
Note that the equations above don’t include the process noise. Process noise is added [[1D Kalman Filter with Process Noise|here]].

### Block Diagram

![[1D Kalman Filter without Process Noise-6.png]]

The general steps are described below.

**Initialize.** The initialization is performed only once, and it provides two parameters:
- Initial system state, $\hat{x}_{0,0}$
- Initial state variance, $p_{0, 0}$

**Measure.** The measurement provides the following parameters:
- Measured system state, $z_{n}$
- Measured variance, $r_{n}$

**State update.** The state update process is responsible for the state estimation of the current state of the system:
- Measured value, $z_{n}$
- Measurement variance, $r_{n}$
- A prior predicted system state estimate, $\hat{x}_{n,n-1}$
- A prior predicted system state estimate variance, $p_{n,n-1}$

Based on the inputs, the state update process calculates the Kalman Gain and provides two outputs:
- Current system state estimate, $\hat{x}_{n,n}$
- Current state estimate variance, $p_{n,n}$

**Predict.** The prediction process extrapolates the current system state estimate and its variance to the next system state based on the dynamic model of the system. At the first filter iteration, the initialization is treated as the prior state estimate and variance. The prediction outputs are used as the prior (predicted) state estimate and variance on the following filter iterations.

## Numerical Example