---
title: Stereo Cameras
tags:
  - mte544
date: 2025-10-30
aliases: stereo cameras
---
Stereo vision uses two cameras observing the same scene to recover depth. 

If an object is the same in two images, its position will generally shift horizontally between them. This shift is called disparity. The closer an object is, the greater the disparity. The farther an object is, the smaller the disparity.

Stereo vision has two main steps:
1. Correspondence: Matching the same points from two images
2. 3D reconstruction

To see how this works, consider two camera image planes that are rectified (aligned horizontally). This means that disparity only occurs in the $x$ direction. Let:
- $b$ be the baseline
- $f$ be the focal length
- $u^{l}, u^{r}$ be the $x$-coordinates of a matching pixel in the left and right images.

Then, the depth of the point, $z$, is found by
$$
z = b \frac{f}{u^{\ell}-u^{r}}
$$
where the $u^{\ell}-u^{r}$ is called disparity.


![[Stereo Cameras-20251030170952092.png|517]]


## Epipolar Geometry
Epipolar geometry describes the geometric relationship between two camera views. Any point in one image must lie along a specific line (the epipolar line) in the other image. This reduces the search for matching points from 2D to 1D (along a line), making the correspondence problem easier. 

An epipolar plane is formed by the 3D point, the left camera center, and the right camera center. This plane intersects each image to form a left epipolar line and a right epipolar line.

![[Stereo Cameras-20251030171221526.png]]

This plane intersects each image to form a left epipolar line and a right epipolar line. The two matching points must lie on their respective epipolar lines. Rectification simplifies things even more because the epipolar lines become horizontal, so that matching can be done row-by-row.

![[MTE 544 Notes sensing ex4.pdf]]

Pros:
- Works outdoors (natural lighting).
- Can have long ranges if baseline is large.
- No structured light pattern needed.
- Camera hardware is cheap.
Cons:
- Requires **good texture** to match pixels.
- Struggles on:
    - Blank walls
    - Shiny surfaces
    - Low-light scenes