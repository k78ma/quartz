---
title: 1D Kalman Filter with Process Noise
tags:
  - state-estimation
date: 2024-10-13
aliases:
  - 1d kalman filter with process noise
---
In the real world, there are uncertainties in the system dynamic model. Just because we assume something should be constant, like the resistance of a resistor, doesn't mean it's actually constant – the resistant may change slightly due to environmental changes.

This uncertainty of the system model is called **Process Noise**. The process noise produces estimation errors.

The **Process Noise Variance** is denoted by the letter $q$.

For a constant system, the Covariance Extrapolation/Prediction Equation for constant dynamics would be:
$$
\hat{p}_{n+1,n}=p_{n,n} + q_{n}
$$
## Kalman Filter Equations
Thus, we have the following updated Kalman Filter equations in 1D:

### State and Covariance Update
$$
\begin{align}
\hat{x}_{n,n} & =\hat{x}_{n,n-1}+K_{n}(z_{n}-\hat{x}_{n,n}) \\[2ex] 
p_{n,n} & =(1-K_{n})p_{n,n-1}\\[2ex] 
K_{n} & =\frac{p_{n,n-1}}{p_{n,n-1}+r_{n}}
\end{align}
$$
### State and Covariance Predict

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
p_{n+1,n}^{x}=p^{x}_{n,n}+q_{n}
$$
Constant velocity:
$$
\begin{align}
p_{n+1,n}^{x} & =p^{x}_{n,n}+\Delta t^{2}p_{n,n}^{v} \\
p_{n+1,n}^{v} & =p^{v}_{n,n}+q_{n}
\end{align}
$$
## Example: Temperature Estimation
We want to estimate the temperature of the liquid in a tank. 

We assume that at a steady state, the liquid temperature is constant. However, some fluctuations in the true liquid temperature are possible. The system can be described with:
$$
x_{n}=T+w_{n}
$$
where:
- $T$ is the constant temperature
- $w_{n}$ is a random process noise with variance $q$

Given info:
- Let's assume a true temperature of 50 degrees. 
- We assume the model is accurate, so we set the process noise variance $q$ to $0.0001$. 
- The measurement error (standard deviation) is 0.1 degrees Celsius. 
- The measurements are taken every 5 seconds. 
- The true liquid temperature values at the measurement points are: 50.005, 49.994, 49.993, 50.001, 50.006, 49.998, 50.021, 50.005, 50, and 49.997
- The measurements are: 49.986, 49.963, 50.09, 50.001, 50.018, 50.05, 49.938, 49.858, 49.965, and 50.114

The following chart compares the true liquid temperature and the measurements:

![[1D Kalman Filter with Process Noise.png|636]]

### Iteration 0
Before the first iteration, we initialize the Kalman Filter and predict the following state.

We start with a guess of $60\degree C$. Our guess is imprecise, so we set our initialization estimate error $\sigma$ to a large value of $100$. Then, the estimate variance of the initialization is the error variance $\sigma^{2}$:
$$
p_{0,0}=100^{2}=10,000
$$
**Prediction:** Since our model has constant dynamics, the predicted estimate is equal to the current estimate:
$$
\hat{x}_{1,0}=60\degree C
$$
The extrapolated estimate variance:
$$
p_{1,0}=p_{0,0}+q=10000+0.0001 = 10000.0001
$$
### Iteration 1
**Measure**: We get a measurement value of
$$
z_{1}=49.986\degree C
$$
Since the measurement error is $\sigma=0.1$, the variance is $\sigma^{2}=0.01$. Thus, the measurement variance is:
$$
r_{1}=0.01
$$
**Update:** The Kalman Gain is
$$
K_{n}=\frac{p_{1,0}}{p_{1,0}+r_{1}}=\frac{10000.0001}{10000.0001+0.01}=0.999999
$$
A Kalman Gain of 1 means that rur estimate error is much bigger than our measurement error, so our update will almost completely disregard the previous prediction and just use the measurement.

Estimating the current state:
$$
\begin{align}
\hat{x}_{1,1} & =\hat{x}_{1,0} +K(z_{1}-\hat{x}_{1,0}) \\
 & =60+0.999999(49.986-60) \\
 & =49.986\degree C
\end{align}
$$
Updating the current estimate variance:
$$
\begin{align}
p_{1,1} & =(1-K_{1})p_{1,0} \\
 & =(1-0.999999)10000.0001  \\
 & =0.01
\end{align}
$$
**Predict:** Since our system's dynamic model is constant (the liquid temperature doesn't change), we have
$$
\hat{x}_{2,1}=\hat{x}_{1,1}=49.986 \degree C
$$
The extrapolated estimate variance is
$$
p_{2,1}=p_{1,1}+q=0.01+0.0001 = 0.0101
$$
### Iteration 2
The second measurement is
$$
z_{2}=49.963 \degree C
$$
Since the measurement error is $\sigma=0.1$, the variance is $\sigma^{2}=0.01$. Thus, the measurement variance is
$$
r_{2}=0.01
$$
**Update:** Kalman Gain calculation gives us
$$
K_{2}=\frac{p_{2,1}}{p_{2,1}+r_{2}}=\frac{0.0101}{0.0101+0.01}=0.50
$$
The Kalman Gain is around $0.5$, so the weight of the estimate and the measurement weight are basically equal.

Estimating the current state:
$$
\begin{align}
\hat{x}_{2,2} & =\hat{x}_{2,1}+K_{2}(z_{2}-x_{2,1}) \\
	 & =50.13+0.5(48.44-50.13)=49.33
\end{align}
$$
Updating the current estimate variance:
$$
p_{2,2}=(1-K_{2})p_{2,1}=(1-0.5)0.0101=0.005
$$
**Predict:** Since our system's dynamic model is constant (the liquid temperature doesn't change), we have
$$
\hat{x}_{3,2}=\hat{x}_{2,2}=49.33 \degree C
$$
The extrapolated estimate variance is
$$
p_{3,2}=p_{2,2}+q=0.005+0.0001=0.0051
$$
### Results & Analysis
After 10 iterations, we plot the Kalman Gain:

![[1D Kalman Filter with Process Noise-1.png|600]]

As we can see, the Kalman Gain gradually decreases; therefore, the KF converges.

The following chart compares the true value, measured values, and estimates. The confidence interval is $95\%$. 

![[1D Kalman Filter with Process Noise-3.png|592]]

As you can see, the estimated value converges toward the true value. The KF estimates uncertainties are too high for the 95% confidence level. The yellow area is too broad; the KF is too conservative, thinking that its uncertainty is higher than it actually is, despite the fact that the estimates appear to track the true values fairly well.