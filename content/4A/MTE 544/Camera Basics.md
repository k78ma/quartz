---
title: Camera Basics
tags:
  - mte544
date: 2025-10-30
aliases: camera basics
---
2D image sensors:
- Monocular vision: black/white, e.g. 512x512
- Color: 3 sets of 2D matrix data for RGB, e.g. 512x512x3
- Bit depth: data size of each pixel (e.g. 8 bit: 0 ~ 255)

## Image Coordinates (MATLAB)
Pixel indices:
- Row and column indices are ordered from top to bottom, and from left to right.
- In general, there are three indices $I(\text{r}_{\text{ow}}, \text{c}_{\text{column}}, \text{ch}_{\text{annel}})$ with $\text{ch}_{\text{annel}} \in \{ R,G,B \}$.

![[Camera Basics-20251030115214663.png|188]]


Spatial coordinates:
- Intrinsic coordinate: Representing locations in image on a continuous plane
- World coordinate (mapping the intrinsic coordinate to the spatial frame of reference)

![[Camera Basics-20251030115303031.png|249]]

## Camera Optics
A thin lens with focal length $f$ forms a sharp image of an object at distance $z$ from the lens on an image plane located at distance $e$ behind the lens:
$$
\frac{1}{f}= \frac{1}{z}+\frac{1}{e}
$$
When the object is far away ($z\to \infty$), the image forms at the focal plane ($e\to f$).

![[Camera Basics-20251030162223723.png]]

If we let the aperture shrink to a point (or equivalently consider very distant scenes with $z\to \infty$), we obtain the pinhole camera: all rays from a scene point pass through a single point (the optical center) and intersect a plane at distance $f$. This "ray-through-a-point" geometry is the basis for the projection equations below.

## Pinhole Camera Model
Consider a point in camera coordinates $(x,y,z)$ with the origin at the pinhole and $z$ axis pointing forward. Its image coordinates (in metric measurements, not pixel measurements) on a image plane at distance $f$ are $(u,v)$. Similar triangles give us:
$$
\frac{u}{x}= \frac{u}{y}=\frac{f}{z} \quad \Longrightarrow \quad u = \frac{f}{z}x, \quad  v=\frac{f}{z}y
$$
The division by $z$ is a hallmark of perspective projection; points further away (large $z$) appear closer to the principal point (center of the image from the camera's geometric perspective).

![[Camera Basics-20251030163157112.png|338]]

![[Camera Basics-20251030163211964.png|317]]


We can represent the above with a homogeneous representation:
$$
\lambda \overline{p} = KP
$$
where
$$
\overline{p} = \begin{bmatrix}
u \\
v \\
1 
\end{bmatrix}, \quad  K = \begin{bmatrix}
f & 0 & 0 \\
0 & f & 0 \\
0 & 0 & 1
\end{bmatrix}, \quad  P = \begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
$$
where $\lambda=z$ is the unknown projective scale.

In practice, 3D points are given in a world frame $(x^{w}, y^{w}, z^{w})$. The rigid motion from world to camera coordinates is:
$$
p_{c} = Rp_{w} + t
$$
with rotation matrix $R \in \text{SO}(3)$ and translation $t \in \mathbb{R}^{3}$.

In homogeneous form, we can then transform between the two as
$$
P=\begin{bmatrix}
R_{w}^{c} \, | \, t_{w}^{c}
\end{bmatrix} \bar{P}^{w}
$$
where $\bar{P} = [x_{w} \,\,\, y_{w} \,\,\, z_{w} \,\,\, 1]^{T}$. We call $[R_{w}^{c} \, | \, t_{w}^{c}]$ the **extrinsic matrix**; it positions the camera within the world.

Real sensors measure pixels, not metric lengths. We let:
- $k_{u}$ and $k_{v}$ be the pixel densities (pixels/meter) along the sensor's $u$ and $v$ axes.
- $(u_{0},v_{0})$ be the principal point (the pixel where the optical axis hits the sensor, typically near the image center)

Converting the metric projection to pixels gives:
$$
u=k_{u} \frac{f}{z} x + u_{0}, v = k_{v} \frac{f}{z}y + v_{0}
$$
- $\alpha_{u}=fk_{u}$ and $\alpha_{v}$ are called the focal lengths in pixels.

Then, the **intrinsic calibration matrix** that maps metric image-plane coordinates into pixel coordinates is:
$$
K = \begin{bmatrix}
\alpha_{u}  & 0 & u_{0} \\
0 & \alpha_{v}  & v_{0} \\
0 & 0 & 1
\end{bmatrix}
$$
- The image plane is is the surface where the 3D world is projected to form a 2D image

![[Camera Basics-20251030164916728.png|400]]


Putting the pieces together, a world point $\bar{P}^{w} = [x_{w} \,\,\, y_{w} \,\,\, z_{w} \,\,\, 1]^{T}$ projects to image pixels via
$$
\lambda \overline{p} = K \begin{bmatrix}
R_{w}^{c} \,\, | \,\, t_{w}^{c}
\end{bmatrix}\,\bar{P}^{w}
$$
