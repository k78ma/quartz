---
title: Harris Corner Detector
tags:
  - mte544
date: 2025-11-01
aliases:
  - harris corner detector
  - SIFT
---
A corner is an intersection of edges. It's visually distinctive because movement in any direction causes a large change in appearance.

![[Harris Corner Detector-20251101014701720.png]]

Shifting an image window:
- Flat region: Shifting looks almost the same
- Edge: shifting along the looks similar, across looks different
- Corner: Shifting in any direction changes appearance a lot

## Harris Corner Detector
The goal of Harris corner detection is to detect points where small shifts cause large differences in image intensity.

This uses the [[Similarity Metrics|SSD]] similarity measure. We compare a patch at $u,v$ with the same patch shifted by $x,y$:
$$
SSD(x,y) = \sum_{u}\sum_{v} \left(I(u,v) - I(u + x, v + y)\right)^2
$$
However, working with the last term directly is expensive, so we approximate it using a Taylor expansion:
$$
I(u + x, v + y) \approx I(u,v) + I_x(u,v)x + I_y(u,v)y
$$
Substituting back:
$$
SSD(x,y) \approx \sum_{u}\sum_{v} (I_x(u,v)x + I_y(u,v)y)^2
$$
In matrix form:
$$
SSD(x,y) = \begin{bmatrix}
x & y
\end{bmatrix} \, M \begin{bmatrix}
x \\
y
\end{bmatrix}
$$
where
$$
M = \sum_{u} \sum_{v} \begin{bmatrix}
I_{x}^{2} & I_{x}I_{y} \\
I_{x}I_{y}  & I_{y}^{2}
\end{bmatrix}
$$
is the second moment matrix that summarizes how intensity changes around the pixel.

The eigenvalues $\lambda_{1}, \lambda_{2}$ of $M$ can tell us whether the corner type:
- Both eigenvalues are small: Flat region
- One large, one small: Edge
- Both large: Corner

Rather than computing eigenvalues directly, Harris uses:
$$
R = \det(M) - k \cdot (\text{trace}(M))^2
$$
- R large positive → corner
- R near zero → flat region
- R negative → edge

## SIFT
Harris corners work only at one fixed scale. If you zoom in or out, the detected corners change. SIFT (Scale Invariant Feature Transform) was designed to detect the same feature even if the image is rotated, viewpoint is changed, scaled, or illuminated differently.

**DoG:** First, we create multiple blurred versions of the same image using Gaussians of increasing blur ($\sigma$). This gives us image layers from sharp to blurry. Then, the images are downsampled, forming lower resolution copies. This is called a Gaussian pyramid. 

Then, we use DoG (Difference of Gaussians) to search multiple scales:
$$
DoG = G(x,y,\sigma_{2}) - G(x,y,\sigma_{1})
$$
which highlights regions where intensity changes sharply.

![[Corner Detection-20251101015559478.png]]


**SIFT keypoint seleciton:** Then, we select keypoints by comparing each point to 26 neighbors (8 in the same scale, 9 in the scale above, 9 in the scale below). If it's a maximum or a minimum, it becomes a keypoint candidate.

**Keypoint refinement:** Some extrema come from noise, unstable edges, or weak textures. Thus, SIFT uses interpolation to refine keypoint location and reject weak ones.

**Remove low contrast/poor keypoints**: Only strong, distinctive keypoints are kept.

**Orientation assignment**: For each keypoint, compute the dominant gradient direction. Then locate the local patch so that this direction becomes $0\degree$. This means that if the object rotates, the descriptor rotates with it, making SIFT rotation invariant.

SIFT detector privileges highly informative image patches rather than simple edges. It doesn't just find corners or edges, but find stable, repeatable patterns with a strong local gradient structure.