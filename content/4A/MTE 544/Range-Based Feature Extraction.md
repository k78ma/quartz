---
title: Range-Based Feature Extraction
tags:
  - mte544
date: 2025-11-01
aliases: range-based feature extraction
---
Feature extraction for range sensor can be very useful. This usually deals with geometric primitives such as lines, circles, etc. We will look at line extraction techniques as these are the simplest features to extract and provide a basis for more complex feature extraction techniques.

For line extraction, we need to answer:
1. How many lines are present in the scan?
2. Which points belong to which line?
3. Given these points, what is the line equation?

## Least Squares Line Fit
First, we convert range data (such as from [[LiDAR]]) from polar coordinates to Cartesian:
$$
(\rho_i, \theta_{i)} \quad \Longrightarrow \quad   (x_i, y_i) = (\rho_i \cos\theta_i,\ \rho_i\sin\theta_i)
$$
We want to fit a line:
$$
x_{i} \cos \alpha + y_{i} \sin \alpha - r=0
$$
which is equivalent to slope-intercept $y=mx+b$.

We can expand this to write:
$$
\begin{align}
\rho_{i}\cos \theta_{i} \cos \alpha + \rho_{i} \sin \theta_{i} \sin \alpha-r  & = 0 \\[2ex] 
\rho_{i}\cos(\theta_{i}-\alpha) - r & =0
\end{align}
$$
Taking the orthogonal distance $d_{i}$ between the measured point and the line, we have:
$$
\rho_{i}\cos(\theta_{i}-\alpha) - r  =d_{i}
$$
To find the best line, we minimize the total squared error:
$$
S = \sum_i d_i^2 = \sum_i (\rho_{i}\cos(\theta_{i}-\alpha) - r)^2
$$
which can be solved by the roots of $\frac{ \partial \sqrt{ y } }{ \partial \alpha }=0, \frac{ \partial S }{ \partial r }=0$. 

Unfortunately, this least squares method is not robust to uncertain data (i.e. outliers). 

![[Range-Based Feature Extraction-20251101141728639.png]]

A more typical approach is to use [[RANSAC]], which is more robust to noise.