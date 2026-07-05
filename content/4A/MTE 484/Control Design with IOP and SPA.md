---
title: Control Design with IOP and SPA
tags:
  - mte484
date: 2025-10-10
aliases:
  - control design with IOP and SPA
---
We have a vectorized form [[IOP with SPA|IOP with SPA equation]]:
$$
A\begin{bmatrix}
w \\
x \\
\hat{x}
\end{bmatrix}=b
$$
We also have vectorized forms of the [[Specs for Control Design|specs for control design]]:

- Steady-state error $e_{ss} = 0$ (or could be something like $e_{ss} \leq C$):
$$
1+ \text{Steady state} \begin{bmatrix}
x \\
\hat{x}
\end{bmatrix} = 0
$$
- Control effort $u[k] \leq C_{1}$:
$$
\text{max}(\text{step\_ru}\ast  w) \leq C_{1}
$$
- Overshoot $\%OS \leq C_{2}$:
$$
\text{max}\left(\text{step\_{ry}}\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \leq (1+C_{2})\left(-\text{steady\_{state}} \begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) 
$$
- Settling time (within 2%) $T_{s} \leq C_{3}$ with $\hat{j}=\text{min}\{ j\, : \,jT \geq C_{3} \}$:
$$
\begin{align}
\text{max}\left(\text{step\_ry}(\hat{j}:\text{end, :})\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \leq 1.02\left(-\text{steady state}\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \\[2ex] 
\text{min}\left(\text{step\_ry}(\hat{j}:\text{end, :})\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \geq 0.98\left(-\text{steady state}\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right)
\end{align}
$$

We can turn this into a numerical optimization problem.

## Optimization Problem
An optimization problem has the general form:
$$
\underset{\text{variables}}{\operatorname{minimize}} \text{  cost/objective}
$$
subject to some $\text{constraints}$.

In our case, we want to:
$$
\underset{w, x, \hat{x}}{\operatorname{minimize}} \text{ cost/objective}
$$
and our constraints are the IOP + specs equations above.

### Example

![[Control Design with IOP and SPA-20251011113233458.png]]

### 1. Choose poles
First, we choose poles $\{ p_{1},\dots, p_{m} \}$. Following our method for [[Choosing Poles for IOP and SPA|choosing poles for IOP and SPA]] , we choose poles along a spiral initially, but we don't want the spiral to go all the way out to the boundaries of the unit disk.

Consider a pole of the form $p=re^{j\theta}$. Then, $p^{k}=r ^{k}e^{jk\theta}$, where the $r ^{k}$ term controls the rate of decay and the $e^{jk\theta}$ controls the rate of oscillation. If we pick poles where $| r |$ is close to $1$, the rate of decay will be very slow. Furthermore, we may create numerical issues. Thus, we select some $r_{max} < 1$ (typically between 0.8 and 0.95) for our spiral.

We also need to choose the number of poles; we typically start with a larger number of poles ($m=20-30$) and then try to reduce it later if desired. With more poles, it's more likely we will find a feasible design.

### 2. Calculate Variables
Then, we calculate $\alpha, \beta, \gamma, \hat{\gamma}, A, b, \text{steady\_state},\text{step\_ru},\text{step\_ry}$.

### 3. Define objective and constraints
This is done in YALMIP - we can pretty much directly write constraints

### 4. Solve the optimization problem
Then, we solve the optimization problem with YALMIP (language)/MOSEK(solver).

### 5. Recover controller
Then we recover
$$
D[z] = \frac{W[z]}{X[z]}
$$
where
$$
\begin{align}
W[z]  & = \sum_{i=1}^{m} \frac{w_{i}}{z-p_{i}} \\[2ex] 
X[z]  & = \sum_{i=1}^{m} \frac{x_{i}}{z-p_{i}} + \sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{z-q_{k}}
\end{align}
$$

## Design Implications

- Safety
    - Stability margins for improved robustness
    - Simplicity of controllers (reducing the number of poles)
    - More robust to physical or engineered limits (can tighten limits $u[k] \leq C$ or $y[k]\leq C$) further in specs
      
- Economics
    - Less expensive sensors; increase sampling time $T$, which limits the performance (response time) of our control system
    - Reducing actuator wear and tear
        - (i) By minimizing the size of the control signal
        - (ii) By minimizing the variability of the control signal
$$
\begin{align}
\text{objective}  & = \underset{0<k\leq K}{\operatorname{max}}(u[k]) = \text{max}(\text{step\_{ru}}* w) \\
\text{objective}  & = \text{norm}(u[2:K]- u[1:(K-1)], \text{`inf'})
\end{align}
$$
- Note that here we are using the [[Infinity Norm]] 

- Sustainability
    - Minimizing the energy use of our controller
$$
\begin{align}
\text{objective} & = \text{norm}(y[1:K], 2)^{2}  \\
\text{objective} & = \text{norm}(u[1:K], 2)^{2}
\end{align}
$$
