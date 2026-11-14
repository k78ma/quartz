---
title: Running Averages
tags:
  - ml
date: 2024-01-21
aliases:
  - moving average
---
Running averages is a computational strategy for estimating a possibly weighted average of a sequence of data. 

Let our data sequence be $a_{1}, a_{2}, \dots$ then we define a sequence of running average values, $A_{0}, A_{1}, A_{2}, \dots$ using the equations
$$
\begin{align}
A_{0}  & = 0 \\
A_{t} & = \gamma_{t}A_{t-1} + (1-\gamma_{t})\,a_{t}
\end{align}
$$
where $\gamma_{t} \in (0,1)$. If $\gamma_{t}$ is constant, then this is a *moving* average, in which:
$$
\begin{align}
A_{T}  & = \gamma A_{T-1} + (1-\gamma)a_{T} \\
	 & = \gamma(\gamma A_{T-2}+(1-\gamma)a_{T-1}) + (1-\gamma)\,a_{T} \\[2ex]
	 & = \sum_{t=0}^{T}\gamma^{T-t}(1-\gamma) \, a_{t}
\end{align}
$$
So, we are essentially tracking of all the $a$ values that we have seen. But the ones that are further away have less influence; you can see that inputs at closer to the end of the sequence have more effect on $A_{t}$ than early inputs. If, instead, we set $\gamma_{t} = (t − 1)/t$, then we get the actual average.

