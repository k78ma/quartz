---
title: Constant Velocity Tracking Example
tags:
  - robotics
  - state-estimation
date: 2024-09-28
aliases:
  - constant velocity tracking example
---
Here we look at an example of a more complicated state estimation filter than the [[Simple Static State Estimation Example]], where we have a dynamic system that changes its state over time. Specifically, we use an $\alpha$-$\beta$ filter in one dimension.

We assume an aircraft is moving radially away from the radar or towards the radar. The angle to the radar and airplane altitude are constant.

![[Constant Velocity Tracking Example.png|604]]

$x_{n}$ represents the range to the aircraft at time $n$. The aircraft velocity can be approximated by using the range differentiation method – the change in the measured range with time.

Thus, the velocity is the derivative of the range:
$$
\hat{x}=v=\frac{dx}{dt}
$$
The radar sends a track beam in the direction of the target at a constant rate. The track-to-track interval is $\Delta t$. 

### Prediction Equations
Two motion equations describe the system dynamic model for constant velocity motion:
$$
\begin{align}
x_{n+1} & =x_{n}+\Delta t\,\dot{x}_{n} \\
\dot{x}_{n+1} & =\dot{x}_{n}
\end{align}
$$
- The aircraft range at the next track cycle equals the range at the current track cycle plus the target velocity multiplied by the track-to-track interval. 
- Since we assume constant velocity in this example, the velocity at the next cycle equals the velocity at the current cycle.

The above system of equations is called a **State Extrapolation Equation** (also called the **Transition Equation** or **Prediction Equation**) and is also one of the five Kalman filter equations. This system of equations extrapolates the current state to the next state (prediction).

The predictton equations depend on the system dynamics and differ from example to example. 

## $\alpha$-$\beta$ Filter

Let the radar track-to-track period $\Delta t$ be 5 seconds. Assume that at time $n-1$, the estimated range of the unmanned air vehicle is 30,000 the estimated UAV velocity is 40 m/s. 

Using the prediction/state extrapolation equations, we can predict the target position at time $n$:
$$
\begin{align}
\hat{x}_{n, n-1} & =\hat{x}_{n-1,n-1}+\Delta t \hat{\dot{x}}_{n-1,n-1}  \\
	 & = 3000 + 5(40) \\
	 & =30200\text{ m}
\end{align}
$$
The target velocity prediction for time $n$:
$$
\hat{\dot{x}}_{n,n}=\hat{\dot{x}}_{n-1, n-1}
$$
However, at time $n$, the actual range measurement we get from the radar, $z_{n}$, is $30110$ and not $30200$; there is a 90 meter gap between the predicted range and the measured range. There are two possible explanations for this:
1. The radar measurements are not precise.
2. The aircraft velocity has changed. The new aircraft velocity would be $\frac{30110-30000}{5}=22 \text{ m/s}$.

Which of these two is true?

### State Update Equations
#### Velocity
We can write a State Update Equation for **velocity**:
$$
\hat{\dot{x}}_{n,n}=\hat{\dot{x}}_{n,n-1}+\beta\left( \frac{z_{n}-\hat{x}_{n,n-1}}{\Delta t} \right)
$$
The factor $\beta$ depends on the precision level of the radar.

Suppose that the $1\sigma$ precision of the radar is 20m. The 90 meter gap between the predicted and measured ranges would most likely result from change in aircraft velocity. In this case, $\beta$ should be set to a high value. For example, with $\beta=0.9$, we would have
$$
\hat{\dot{x}}_{n,n}= 40+0.9\left( \frac{30110-30200}{5} \right)=23.8 \text{ m/s}
$$
Suppose that the $1\sigma$ precision of the radar is 150m. Then, the 90 meter gap probably results from measurement error. In this case, $\beta$ should be set low. If we have $\beta=0.1$, we would have:
$$
\hat{\dot{x}}_{n,n}= 40+0.1\left( \frac{30110-30200}{5} \right)=38.2 \text{ m/s}
$$
If the aircraft velocity has changed from 40m/s to 22m/s, we see this after 10 track cycles (running the above equation 10 times with $\beta = 0.1$). If the gap is caused by random measurement error, then the measurements will fluctuate around the predicted position, and might be in front or behind the predicted positions. Thus, on average, if the gap between the predicted and measured positions is caused by random measurement errors, the errors will cancel out over multiple measurement cycles and will not result in a significant change in the estimated velocity.

#### Position
The State Update Equation for the aircraft **position** is similar to the equation that was derived in the previous [[Simple Static State Estimation Example]]:
$$
\hat{x}_{n,n}=\hat{x}_{n,n-1}+\alpha(z_{n}-\hat{x}_{n,n-1})
$$
Unlike the previous example, where the $\alpha$ gain factor is re-calculated in each iteration with $\alpha=\frac{1}{n}$, the $\alpha$ factor is constant in this example. Its magnitude depends on the radar measurement precision. For high precision-radar, we should choose high $\alpha$, giving high weight to the measurements. 

If $\alpha = 1$, then the estimated range equals the measured range:
$$
\hat{x}_{n, n}=\hat{x}_{n, n-1}+1(z_{n}-\hat{x}_{n,n-1})=z_{n}
$$
If $\alpha=0$, then the measurement has no meaning:
$$
\hat{x}_{n,n}=\hat{x}_{n,n-1}+0(z_{n}-\hat{x}_{n,n-1})=\hat{x}_{n,n-1}
$$
Thus, our State Update equations or $\alpha$-$\beta$ track update equations or $\alpha$-$\beta$ track filtering equations are:


> [!theorem] State Update equations for position and velocity
> $$
> \begin{align}
> \hat{x}_{n,n} & =\hat{x}_{n,n-1}+\alpha(z_{n}-\hat{x}_{n,n-1}) \\[2ex]
> \hat{\dot{x}}_{n,n} & =\hat{\dot{x}}_{n,n-1} + \beta\left( \frac{z_{n}-\hat{x}_{n,n-1}}{\Delta t} \right)
>\end{align}
> $$

## Estimation Algorithm

![[Constant Velocity Tracking Example-1.png]]

## Numerical Example

Consider an aircraft moving radially toward a radar in a 1D setting. The parameters used are:
- $\alpha=0.2$
- $\beta=0.1$

The track to track interval is 5 seconds.

### Iteration 0
The initialization for time $n=0$ is given as:
$$
\begin{align}
\hat{x}_{0,0}=30000 \text{ m} \\
\hat{\dot{x}}_{0,0}=40 \text{ m/s}
\end{align}
$$
Prediction:
- Position:
$$
\begin{align}
\hat{x}_{n+1, n} & =\hat{x}_{n,n}+\Delta t \hat{\dot{x}}_{n,n} \\
\hat{x}_{1, 0} & =30000+5\times 40 \text{ m/s} = 30200 \text{ m}  \\
\end{align}
$$
- Velocity:
$$
\begin{align}
\hat{\dot{x}}_{n,n} & =\hat{\dot{x}}_{n-1, n-1}  \\
\hat{\dot{x}}_{1,0} & = 40 \text{ m/s}
\end{align}
$$
### Iteration 1
In the first cycle, the initial guess is the prior estimate:
$$
\begin{align}
\hat{x}_{n,n-1}&=\hat{x}_{1,0}=30200 \text{ m/s} \\
\hat{\dot{x}}_{n,n-1} & =\hat{\dot{x}}_{1,0}=40 \text{ m/s}
\end{align}
$$
We get a measurement of:
$$
z_{1}=30171 \text{ m}
$$
Calculating the current estimate with the State Update Equation:
- Position:
$$
\hat{x}_{1,1}=\hat{x}_{1,0}+\alpha(z_{1}-\hat{x}_{1,0})=30200+0.2(30171-30200)=30194.2 \text{ m/s}
$$
- Velocity:
$$
\begin{align}
\hat{\dot{x}}_{1,1} & =\hat{\dot{x}}_{1,0}+\beta\left( \frac{z_{1}-\hat{{x}}_{1,0}}{\Delta t} \right)\\[2ex] 
	 & =40 \text{ m/s}+0.1\left( \frac{30171-30200}{5} \right) \\[2ex] 
	 & =39.42 \text{ m/s}
\end{align}
$$
Calculating the next state estimate using the State Extrapolation equations:
- Position:
$$
\begin{align}
\hat{x}_{n+1, n} & =\hat{x}_{n,n}+\Delta t \hat{\dot{x}}_{n,n} \\
\hat{x}_{2, 1} & =30194.2+5\times 39.42 \text{ m/s} \text{ m/s} = 30391.3\text{ m}  \\
\end{align}
$$
- Velocity:
$$
\begin{align}
\hat{\dot{x}}_{n+1,n} & =\hat{\dot{x}}_{n,n} \\
\hat{\dot{x}}_{2,1} & =\hat{x}_{1,1}=39.42 \text{ m/s}
\end{align}
$$
### Iteration 2

### Iteration 3