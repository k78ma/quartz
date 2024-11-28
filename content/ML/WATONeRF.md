---
title: WATONeRF
tags:
  - wato
date: 2024-03-29
aliases: 
draft: "true"
---
Run container:

Shell 1:
```bash
docker-compose up emernerf
```

Shell 2:
```
docker exec -it wato_dense_prediction_emernerf_1 /bin/bash
```


- take the dataset used in nerfRPN paper, which comes with object annotations
- run a gaussian splatting model on nerfRPN dataset (nerfStudio?)
- output stuff in Gaussian splat format
- try 3D object detection model on gaussian splats

- Downgrade pip to 23.1.1
- Downgrade `setuptools` to 66.1.1 

Explore the steps required to either modify or re-implement gaussian splatting to work with dynamic point inputs?

our points will basically be an array of NxKx3, where N is the number of points and K is the number of timestamps. It will store the point’s location at each timestamp. When we render a given timestamp t, we will use the points at index `[:, t]`

i suspect re-implementation will be best since the original repo is probably quite messy and will be hard to inject our code into. If so, a good place to start would be to go thru the paper and the code repo and note down a list of everything we will need to implement (any special embeddings, implementation details, etc they do beyond just the basic “render gaussians”. Specifically, things like densification i’m curious about), and try to find any helper functions or code snippets that we can re-use. For example, I believe they made a standalone gaussian rendering library separate from their main codebase we can use independently (edited)

$$
\mathbf{P}^{t} \in \mathbb{R}^{N\times 3}
$$

$$
\text{Clusters}_{t}=\text{DBSCAN}(\mathbf{P}_{t}, \epsilon, m)
$$
$$
\{ -1,0,1,\dots,C_{t} \}
$$
$$
\tilde{\mathbf{P}}_{t}= \left \{ \begin{bmatrix}
\mathbf{p_{i}} \\
t / \text{timescale} 
\end{bmatrix} \, | \, \mathbf{p}_{i}\in \mathbf{P}_{t} \right \}
$$
$$
\mathbf{P}_{t:t-1}=[\mathbf{P}_{t-1}, \mathbf{P}_{t}]
$$
$$
\tilde{\mathbf{C}}_{t:t-1}=\text{DBSCAN}(\tilde{\mathbf{P}}_{t:t-1}, \epsilon,m)
$$
$$
\tilde{\mathbf{P}}_{\tilde{c}}^{t-1}=\tilde{c}\cap  \tilde{\mathbf{P}}_{t-1}, \quad \tilde{\mathbf{P}}^{t}_{\tilde{c}}=\tilde{c} \cap  \tilde{\mathbf{P}}_{t}
$$ If $\tilde{\mathbf{P}}^{t}_{\tilde{c}}\neq \emptyset$ and $\tilde{\mathbf{P}}_{\tilde{c}}^{t-1}\neq \emptyset$, the cluster persists. Persistent clusters represent either static objects, which remain spatially consistent across frames, or dynamic objects which have been associated across frames despite spatial displacement. This lets us do static-dynamic decomposition of the scene implicitly.

$\tilde{\mathbf{P}}^{t}_{\tilde{c}}\neq \emptyset$ and $\tilde{\mathbf{P}}_{\tilde{c}}^{t-1}\neq \emptyset$

- Need to mention that we are capable of running on a real-time system - instead of optimizing each scene at once, we can add frames incrementally
- 