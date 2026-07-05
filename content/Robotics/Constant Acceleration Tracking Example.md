---
title: Constant Acceleration Tracking Example
tags:
  - state-estimation
date: 2024-10-10
aliases:
  - constant acceleration tracking example
  - alpha-beta-gamma filter
---
In this example, we track an aircraft moving with constant acceleration with the $\alpha$-$\beta$ filter. 

Previously we saw the [[Constant Velocity Tracking Example]], where we tracked an aircraft moving at a constant velocity of 40 m/s. The following chart shows the target range and velocity vs. time:

![[Constant Acceleration Tracking Example.png]]

Here, the range function was linear.

Now, let's consider another aircraft. This one moves at a constant velocity of 50 m/s for 20 seconds. Then, it accelerates with a constant acceleration of $8\text{ m/s}^2$ for another 35 seconds. In plots, this looks like:

![[Constant Acceleration Tracking Example-1.png]]

Here, the aircraft velocity is constant for the first 20 seconds and then grows linearly. The range grows linearly for the first 20 seconds and then grows quadratically. 
## $\alpha$-$\beta$ Filter
First, we going to track this aircraft with the [[Constant Velocity Tracking Example|alpha-beta filter]] we saw previously.

Consider an aircraft moving radially toward a radar in a one dimensional world. The $\alpha$-$\beta$ parameters are:
- $\alpha=0.2$
- $\beta=0.1$
- $\Delta t=5 \text{ s}$

### Numerical Example
#### Iteration 0
**Initialization:** The initial conditions for the time are:
$$
\begin{align}
\hat{x}_{0,0} & =30000\text{ m} \\
\hat{\dot{x}}_{0,0}&=50 \text{ m/s}
\end{align}
$$
**Prediction** for position and velocity: 
$$
\begin{align}
\hat{x}_{n+1,n} =\hat{x}_{n,n} +\Delta \hat{t}\dot{x}_{n,n} \quad  & \longrightarrow \quad \hat{x}_{1,0}=\hat{x}_{0,0}+\Delta t \hat{\dot{x}}_{0,0}=30000+5\times 50=30250 \text{ m} \\
\hat{\dot{x}}_{n+1,n}  =\hat{\dot{x}}_{_{n,n}} \quad  & \longrightarrow \quad \hat{\dot{x}}_{1,0}=\hat{\dot{x}}_{0,0}=50 \text{ m/s}
\end{align}
$$

#### Iteration 1
Current state estimate:
$$
\begin{align}
\hat{x}_{1,1} & =30250 + 0.2(30221-30250)=30244.2 \text{ m} \\
\hat{\dot{x}}_{1,1}&=50 + 0.1\left( \frac{30221-30250}{5} \right)=49.42 \text{ m/s}
\end{align}
$$
Prediction:
$$
\begin{align}
\hat{x}_{2,1} & =30244.2 + 5\times 49.42=30491.3 \text{ m} \\
\hat{\dot{x}}_{2,1} & =49.42 \text{ m/s}^2
\end{align}
$$

### Results
Doing this over 10 iterations and then comparing the true, measured, and estimated values for the range and velocity for the first 75 seconds results in the following plot:

![[Constant Acceleration Tracking Example-2.png]]

![[Constant Acceleration Tracking Example-3.png]]

We can see a constant gap between true or measured values and estimates. The gap is called a **lag error**. Other common names for the lag error are:
- Dynamic error
- Systematic error
- Bias error
- Truncation error

The lag error appears during the acceleration period. After the acceleration period, the filter closes the gap and converges toward the true value.

## $\alpha$-$\beta$-$\gamma$ Filter
In this example, we track an aircraft using a $\alpha$-$\beta$-$\gamma$ filter. The aircraft is moving with constant acceleration. 

The prediction equations become:

> [!theorem] Prediction equations for position, velocity, and acceleration
> $$
> \begin{align}
> \hat{x}_{n+1,n} & =\hat{x}_{n,n} + \hat{\dot{x}}_{n,n}\Delta t + \hat{\ddot{x}}_{n,n} \frac{\Delta t^{2}}{2} \\[2ex] 
> \hat{\dot{x}}_{n+1,n} & =\hat{\dot{x}}_{n,n}+\hat{\ddot{x}}_{n,n}\Delta t \\[2ex]
> \hat{\ddot{x}}_{n+1,n} & = \hat{\ddot{x}}_{n,n}
>\end{align}
> $$
> where $\hat{\ddot{x}}_{n}$ is acceleration (second derivative of $x$).

The state update equations become:

> [!theorem] State update equations for position, velocity, and acceleration
> $$
> \begin{align}
> \hat{x}_{,n} & =\hat{x}_{n,n-1} + \alpha(z_{n}-\hat{x}_{n,n-1}) \\[2ex] 
> \hat{\dot{x}}_{n,n} & =\hat{\dot{x}}_{n,n-1}+\beta\left( \frac{z_{n}-\hat{x}_{n,n-1}}{\Delta t} \right) \\[2ex]
> \hat{\ddot{x}}_{n,n} & = \hat{\ddot{x}}_{n,n-1}+\gamma\left( \frac{z_{n}-\hat{x}_{n,n-1}}{0.5\Delta t^{2}} \right)
>\end{align}
> $$
> where $\hat{\ddot{x}}_{n}$ is acceleration (second derivative of $x$).

Essentially, we've added an acceleration component to the $\alpha$-$\beta$ filter.

### Numerical Example
We continue with the scenario from the previous example: an aircraft that moves with a constant velocity of $50\text{ m/s}$ for 20 seconds and then accelerates with a constant acceleration of $8\text{ m/s}^2$ for another 35 seconds.

The parameters we use are:
- $\alpha=0.5$
- $\beta=0.4$
- $\gamma=0.1$
- $\Delta t=5 \text{ s}$

#### Iteration 0
**Initialization:** The initial conditions for the time $n=0$ are given as
$$
\begin{align}
\hat{x}_{0,0} & =30000\text{ m} \\
\hat{\dot{x}}_{0,0} & =50 \text{ m/s} \\
\hat{\ddot{x}}_{0,0} & =0\text{ m/s}^{2}
\end{align}
$$
**Prediction:** The initial guess is extrapolated to the first cycle using the state extrapolation equation:
$$
\begin{align}
\hat{x}_{n+1,n}=\hat{x}_{n,n}+\hat{\dot{x}}_{n,n}\Delta t+0.5\hat{\ddot{x}}_{n,n}\Delta t^{2} \quad  & \longrightarrow \quad  \hat{x}_{1,0}=30000+50\times 5+0.5(0)(5^{2})=50\text{ m/s} \\
\hat{\dot{x}}_{n+1,n}  =\hat{\dot{x}}_{n,n}+\hat{\ddot{x}}_{n,n}\Delta t \quad  & \longrightarrow \quad \hat{\dot{x}}_{1,0}=50+0(5)=50 \text{ m/s} \\
\hat{\ddot{x}}_{n+1,n}=\hat{\ddot{x}}_{n,n} \quad  & \longrightarrow \quad \hat{\ddot{x}}_{1,0}=0\text{ m/s}^{2}
\end{align}
$$
#### Iteration 1
In the first cycle ($n=1$), the initial guess is used as the prior estimate:
$$
\begin{align}
\hat{x}_{n,n-1} & =\hat{x}_{1,0}=30250 \text{ m} \\
\hat{\dot{x}}_{n,n-1} & =\hat{\dot{x}}_{1,0}=50 \text{ m/s} \\
\hat{\ddot{x}}_{n,n-1} & =\hat{\ddot{x}}_{1,0}=0 \text{ m/s}^2
\end{align}
$$
We get a measurement:
$$
z_{1}=30221\text{ m}
$$
Using the measurement to update the state:
$$
\begin{align}
\hat{x}_{1,1} &  =\hat{x}_{1,0} + \alpha(z_{1}-\hat{x}_{1,0})=30250+0.5(30221-30250)=30235.5 \text{ m} \\[2ex] 
\hat{\dot{x}}_{1,1} &  =\hat{\dot{x}}_{n,n-1}+\beta\left( \frac{z_{n}-\hat{x}_{n,n-1}}{\Delta t} \right) =50+0.4\left( \frac{30221-30250}{5} \right)=47.68 \text{ m/s}^{2} \\[2ex]
\hat{\ddot{x}}_{1,1} & = \hat{\ddot{x}}_{n,n-1}+\gamma\left( \frac{z_{n}-\hat{x}_{n,n-1}}{0.5\Delta t^{2}} \right)=0+0.1\left( \frac{30221-30250}{0.5\times 5^{2}} \right)=-0.23\text{ m/s}^{2}
\end{align}
$$
Predicting the next state:
$$
\begin{align}
\hat{x}_{n+1,n}=\hat{x}_{n,n}+\hat{\dot{x}}_{n,n}\Delta t+0.5\hat{\ddot{x}}_{n,n}\Delta t^{2} \quad  & \longrightarrow \quad  \hat{x}_{2,1}=30000+50\times 5+0.5(0)(5^{2})=30471\text{ m} \\
\hat{\dot{x}}_{n+1,n}  =\hat{\dot{x}}_{n,n}+\hat{\ddot{x}}_{n,n}\Delta t \quad  & \longrightarrow \quad \hat{\dot{x}}_{2,1}=47.68+(-0.23)(5)=46.52 \text{ m/s} \\
\hat{\ddot{x}}_{n+1,n}=\hat{\ddot{x}}_{n,n} \quad  & \longrightarrow \quad \hat{\ddot{x}}_{2,1}= \hat{\ddot{x}}_{1,1} =  -0.23\text{ m/s}^{2}
\end{align}
$$
#### Iteration 2
After a unit time delay, the predicted estimate from the last iteration becomes the prior estimate in the current estimation:
$$
\begin{align}
\hat{x}_{2,1} & =30471\text{ m} \\
\hat{\dot{x}}_{2,1} & =46.52 \text{ m/s} \\
\hat{\ddot{x}}_{2,1} & =-0.23 \text{ m/s}^2
\end{align}
$$
We receive a measurement:
$$
z_{2}=30453 \text{ m}
$$
Calculating the current estimate using the state update equation:
$$
\begin{align}
\hat{x}_{2,2} &  =\hat{x}_{n,n-1} + \alpha(z_{n}-\hat{x}_{n,n-1})=30471+0.5(30453-30471)=30462 \text{ m} \\[2ex] 
\hat{\dot{x}}_{2,2} &  =\hat{\dot{x}}_{n,n-1}+\beta\left( \frac{z_{n}-\hat{x}_{n,n-1}}{\Delta t} \right) =46.52+0.4\left( \frac{30453-30471}{5} \right)=45.08 \text{ m/s}^{2} \\[2ex]
\hat{\ddot{x}}_{2,2} & = \hat{\ddot{x}}_{n,n-1}+\gamma\left( \frac{z_{n}-\hat{x}_{n,n-1}}{0.5\Delta t^{2}} \right)=-0.23+0.1\left( \frac{30453-30471}{0.5\times 5^{2}} \right)=-0.38\text{ m/s}^{2}
\end{align}
$$
Then we can calculate the next state using the prediction equations:
$$
\begin{align}
\hat{x}_{n+1,n}=\hat{x}_{n,n}+\hat{\dot{x}}_{n,n}\Delta t+0.5\hat{\ddot{x}}_{n,n}\Delta t^{2} \quad  & \longrightarrow \quad  \hat{x}_{3,2}=30462+45.08\times 5+0.5(-0.38)(5^{2})=30682.7\text{ m} \\
\hat{\dot{x}}_{n+1,n}  =\hat{\dot{x}}_{n,n}+\hat{\ddot{x}}_{n,n}\Delta t \quad  & \longrightarrow \quad \hat{\dot{x}}_{3,2}=45.08+(-0.38)(5)=43.2 \text{ m/s} \\
\hat{\ddot{x}}_{n+1,n}=\hat{\ddot{x}}_{n,n} \quad  & \longrightarrow \quad \hat{\ddot{x}}_{3,2}= \hat{\ddot{x}}_{2,2} =  -0.38\text{ m/s}^{2}
\end{align}
$$
### Results
Carrying this out for 10 iterations, we get the following results:

![[Constant Acceleration Tracking Example-4.png]]

![[Constant Acceleration Tracking Example-5.png]]

![[Constant Acceleration Tracking Example-6.png]]
