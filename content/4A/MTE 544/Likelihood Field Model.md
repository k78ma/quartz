---
title: "Likelihood Field Model"
tags: 
date: "2025-11-01"
aliases: "likelihood field model"
---
The classic [[LiDAR|Beam Model]] needs ray casting into the map for every beam to find the predicted hit; that’s accurate but slow. The likelihood field replaces ray casting with a precomputed distance-to-obstacle field.

![[Likelihood Field Model-20251101235520192.png]]

Essentially, from the occupancy grid $m$, compute for each grid the Euclidean distance to the nearest occupied cell:
$$
\text{dist}(x,y)=\min_{(x',y'):\,\text{occ}(x',y')}\ \sqrt{(x-x')^2+(y-y')^2}.
$$
- This is the distance transform; it can be computed once with fast algorithms (e.g., Felzenszwalb & Huttenlocher).

Convert that into a likelihood via a Gaussian centered at zero distance:
$$
p_{\text{hit}}(z_k^i\mid \xi_k,m) \;\propto\; \exp\!\Big(-\frac{\text{dist}(x_k^i,y_k^i)^2}{2\sigma_{\text{hit}}^2}\Big),
$$
where $(x_k^i,y_k^i)$ is the endpoint of the measured beam when the robot is at pose $\xi_k$.

![[Likelihood Field Model-20251102002732937.png]]

