---
title: Alpha-Beta-Gamma Filter
tags:
  - robotics
date: 2024-09-23
aliases:
  - alpha-beta-gamma filter
---
## Weighing Gold Example
In this example, we estimate the state of a static system. A static system is a system that doesn’t change its state over a reasonable period. Here, we we estimate the weight of the gold bar. We have unbiased scales (the measurements don’t have a systematic error), but the measurements do include random noise.
- **System:** Gold bar
- **System state:** Weight of gold bar
- **Model:** The dynamic model of the system is constant since we assume that the weight doesn’t change over short periods

To estimate the system state (i.e., the weight value), we can make multiple measurements and average them.

![[Alpha-Beta-Gamma Filter.png]]

At the time $n$, an estimate $\hat{x}_{n,n}$ would be the average of all previous measurements:
$$
\hat{x}_{n,n}=\frac{1}{n}(z_{1}+z_{2}+\dots+z_{n-1}, z_{n})=\frac{1}{n}\sum_{i=1}^{n}(z_{i})
$$
- $x$ is the true value of the weight
- $z_{n}$ is the measured value of the weight at time $n$
- $\hat{x}_{n,n}$ is the estimate of $x$ at time $n$ (the estimate is made after taking the measurement $z_{n}$)
- $\hat{x}_{n+1,n}$ is the estimate of the future state ($n+1$) of $x$. The estimate is made at the time $n$. In other words, $\hat{x}_{n+1,n}$ is a predicted state or extrapolated state.
- $\hat{x}_{n-1, n-1}$ is the estimate of $x$ at time $n − 1$ (the estimate is made after taking the measurement $z_{n-1}$). 
- $\hat{x}_{n,n-1}$ is a prior prediction – the estimate of the state at time $n$. The prediction is made at the time $n − 1$.
	- Basically, the first subscript is the time we are making the estimate for. The second subscript is the time at which the estimate is made.

The dynamic model in this example is static/constant since the weight of gold doesn't change over time, therefore $\hat{x}_{n+1, n}=\hat{x}_{n,n}$. 

Although our previous equation for $\hat{x}_{n,n}$ is mathematically correct, it is not practical for implementation. In order to estimate $\hat{x}_{n,n}$, we need to remember all historical measurements; therefore, we need a large memory. We also need to recalculate the average repeatedly if we want to update the estimated value after every new measurement.

It would be more practical to only keep the last estimate, ($\hat{x}_{n-1, n-1}$) and update it after every new measurement. The following figure exemplifies the required algorithm:
- Estimate the current state based on the measurement and prior prediction.
- Predict the next state based on the current state estimate using the Dynamic Model.

![[Alpha-Beta-Gamma Filter-1.png]]

We can modify the averaging equation for our needs using a small mathematical trick.

First, we have the average formula (sum of $n$ measurements divided by $n$):
$$
\hat{x}_{n,n}=\frac{1}{n}\sum_{i=1}^{n}z_{i}
$$
We can re-arrange this as the sum of $n-1$ measurements plus the last measurement divided by $n$:
$$
\hat{x}_{n,n}=\frac{1}{n}\left( \sum_{i=1}^{n-1}(z_{i})+z_{n} \right)
$$
Expanding:
$$
\hat{x}_{n,n}=\frac{1}{n} \sum_{i=1}^{n-1}(z_{i})+\frac{1}{n}z_{n}
$$
Multiplying the first term by $\frac{n-1}{n-1}$:
$$
\hat{x}_{n,n}=\frac{1}{n} \frac{n-1}{n-1} \sum_{i=1}^{n-1}(z_{i})+\frac{1}{n}z_{n}
$$
Re-order:
$$
\hat{x}_{n,n}=\frac{n-1}{n} \underbrace{ \frac{1}{n-1} \sum_{i=1}^{n-1}(z_{i}) }_{ \text{Prior estimate }}+\frac{1}{n}z_{n}
$$
Re-writing the sum:
$$
\hat{x}_{n,n}=\frac{n-1}{n} \, \hat{x}_{n-1, n-1}+\frac{1}{n}z_{n}
$$
Distributing the term $\frac{n-1}{n}$:
$$
\hat{x}_{n,n}= \cancel{ \frac{n}{n} } \,\hat{x}_{n-1, n-1}-\frac{1}{n}\,\hat{x}_{n-1, n-1} + \frac{1}{n}\,z_{n}
$$
Re-ordering:
$$
\boxed{\hat{x}_{n,n}=\hat{x}_{n-1,n-1}+\frac{1}{n}(z_{n}-\hat{x}_{n-1, n-1})}
$$
Recall that $\hat{x}_{n-1, n-1}$ is the estimated state of $x$ at time $n-1$ based on the measurement at the time $n-1$. 

Let’s find $\hat{x}_{n-1, n-1}$ (the predicted state of $x$ at the time $n$), based on $\hat{x}_{n-1,n-1}$ (the estimation at the time $n − 1$). In other words, we would like to extrapolate $\hat{x}_{n-1, n-1}$ to the time $n$.

Since the dynamic model in this example is static, the predicted state of $x$ equals the estimated state of $x$ with:
$$
\hat{x}_{n, n-1}=\hat{x}_{n-1, n-1}
$$
Based on the above, we can write the **State Update Equation**:
$$
\hat{x}_{n,n}=\hat{x}_{n,n-1}+\frac{1}{n}(z_{n}-\hat{x}_{n,n-1})
$$
The State Update Equation is one of the five Kalman filter equations. It means the following:

![[Alpha-Beta-Gamma Filter-2.png]]

The factor $1 / n$ is specific to our example. This is called the Kalman Gain. It is denoted by $K_{n}$. The subscript $n$ indicates that the Kalman Gain can change with every iteration.

Before we get into the [[Kalman Filter]] in depth, we will use the Greek letter $\alpha_{n}$ instead of $K_{n}$:
$$
\hat{x}_{n,n}=\hat{x}_{n,n-1}+\alpha_{n}(z_{n}-\hat{x}_{n,n-1})
$$
The term $(z_{n}-\hat{x}_{n,n-1})$ is called the measurement residual or  [[Signal Innovation|innovation]] – this is the difference between the actual measured state and the state previously predicted based on past information. The innovation contains past information.

In this example, $1/n$ decreases as $n$ increases. In the beginning, we don’t have enough information about the current state; thus, the first estimation is based on the first measurement $\frac{1}{n}|_{n=1}=1$ . As we continue, each successive measurement has less weight in the estimation process, since $1/n$ decreases. At some point, the contribution of the new measurements will become negligible.

Let’s continue with the example. Before we make the first measurement, we can guess (or rough estimate) the gold bar weight simply by reading the stamp on the gold bar. It is called the *initial guess*, and it is our first estimate. The Kalman Filter requires the initial guess as a preset, which can be very rough.