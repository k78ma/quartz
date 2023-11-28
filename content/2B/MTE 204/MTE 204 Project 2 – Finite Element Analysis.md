---
title: Project 2– Finite Element Analysis
tags:
  - mte204
date: 2023-11-27
aliases:
---
### Problem #1: Stepped Shaft under Axial Loading
The stepped shaft is divided into 3 finite linear elements ($e_{1}, e_{2},e_{3}$), where each element corresponds to a stepped section of the shaft. This then corresponds to four nodes, each of which have deformation of $\delta_{1}, \delta_{2}, \delta_{3}, \delta_{4}$. We model each element to have two equal and opposite forces acting on its ends/nodes, $F_{1}$ and $F_{2}$. $P$ represents the internal axial force, where $P =\sigma A$. The stress $\sigma$ can in turn be modeled as a function of the strain using Hooke's Law, which states that $\sigma=E\epsilon$. Here, $\epsilon$ represents he strain of each element as defined as the ratio of its deformation due to applied force to its original length, such that $\epsilon = (\delta_{1}-\delta_{2}) / L$. 

The expression $\epsilon = (\delta_{1}-\delta_{2}) / L$ can e substituted into $\sigma=E\epsilon$ to get $\sigma = E (\delta_{1}-\delta_{2}) / L$. This can in turn be substituted into $P = \sigma A$ to get $P = \frac{EA}{L}(\delta_{1}-\delta_{2})$. To maintain equilibrium, we must have $\sum F = F_{1}+P=0$, which gives $F_{1}=-P=-\frac{EA}{L}(\delta_{1}-\delta_{2})$. Since $F_{2}$ is equal and opposite to $F_{1}$, we have $F_{2}=\frac{EA}{L}(\delta_{1}-\delta_{2})$.

Thus, the local stiffness matrix $k_{\text{local}}$​ for an element of length $L$ and area $A$ and Young's Modulus is given by:
$$
\begin{bmatrix}
F_{1} \\
F_{2}
\end{bmatrix}=
 \begin{bmatrix}
k  & -k \\
-k & k
\end{bmatrix}
\begin{bmatrix}
\delta_{1} \\
\delta_{2}
\end{bmatrix}, \quad k=\frac{EA}{L}
$$

This matrix shows the force response at each end of the element due to a unit displacement at each end, considering applied axial forces. The $2\times2$ matrix composed of $k$ and $-k$ values is the local stiffness matrix. 

Using the values of $E=200 \text{ GPa}$, we can find the value of $k$ for each the local stiffness matrix of each element. $L$ differs for each element and is directly given. $A$ can be found by taking the given diameter and calculating $\pi \left( \frac{d}{2} \right)^{2}$. We have:
$$
\begin{align}
k_{e_{1}}  & = \frac{200 \times  10^{9}\text{ Pa} \cdot 0.08 \text{m}}{\pi \left( \frac{0.03}{2}\text{ m} \right)^{2}} = 609665324.34 \\[3ex] 
k_{e_{2}}  & = \frac{200 \times  10^{9}\text{ Pa} \cdot 0.16 \text{m}}{\pi \left( \frac{0.02}{2}\text{ m} \right)^{2}} = 135481183.19 \\[3ex] 
k_{e_{1}}  & = \frac{200 \times  10^{9}\text{ Pa} \cdot 0.24 \text{m}}{\pi \left( \frac{0.01}{3}\text{ m} \right)^{2}} = 22580197.24
\end{align}
$$
These $k$ values in the local stiffness matrices are then used to assemble our global stiffness matrix. Our global stiffness matrix has dimensions $4\times 4$ since we have $4$ nodes. We also need to consider boundary conditions; specifically, the left end of $e_{1}$ is fixed so there is no displacement ($\delta_{1}=0$). Thus, all of the influences on Node 1 are set to zero, but $K_{11}$ is set to $1$ to reflect that it is fixed.
$$
K_{\text{global}} = 
\begin{bmatrix}
1  & 0 & 0 & 0 \\
0 & k_{e_{1}}+k_{e_{2}} & -k_{e_{2}} & 0 \\
0 & -k_{e_{2}} & k_{e_{2}}+k_{e_{3}} & 0 \\
0 & 0 & -k_{e_{3}} & -k_{e_{3}}
\end{bmatrix}
$$
Thus, our full systems of equations is:
$$
\begin{align}
\{ F \}  & = [K]\{ \delta \} \\[3ex] 
\begin{Bmatrix}
0 \\
0 \\
0 \\
6100
\end{Bmatrix}  & =\begin{bmatrix}
1.00  & 0.00 & 0.00 & 0.00 \\
0.00 & 745146507.52 & -135481183.19 & 0.00 \\
0.00 & -135481183.19  & 158061380.38 & -22580197.24 \\
0.00 & 0.00 & -22580197.24 & 22580197.24
\end{bmatrix} \begin{Bmatrix}
\delta_{1} \\
\delta_{2} \\
\delta_{3} \\
\delta_{4}
\end{Bmatrix}
\end{align}
$$

This is solved using MATLAB by simply doing `u = K_global \ F;`. The engineering stress and strain are also determined using the equations above. The results are summarized in the table below.

| Element | Displacement (m E-5) | Engineering Strain | Stress (Pa E7) |
| ------- | -------------------- | ------------------ | -------------- |
| 1       | 0.01001              | 0.000125           | 0.8630         |
| 2       | 0.5503               | 0.000281           | 1.9417         |
| 3       | 0.32518              | 0.001125           | 7.7668         |

To verify our FEA result, we can calculate deformations by hand using the deformation formula. They are given here:
$$
\begin{align}
\delta_{1}  & = \frac{FL_{1}}{A_{1}E} = \frac{6100 \text{ N}(0.08\text{ m})}{\pi \left( \frac{0.03}{2}\text{ m} \right)^{2}(69\times 10^{9}\text{ Pa})} = 0.01001 \times  10^{-3} \text{ m} \\[3ex] 
\delta_{2} & = \frac{FL_{2}}{A_{2}E} + \delta_{1} = \frac{6100 \text{ N}(0.16\text{ m})}{\pi \left( \frac{0.02}{2}\text{ m} \right)^{2}(69\times 10^{9}\text{ Pa})} + 0.01001 \times  10^{-3} = 0.05503 \times  10^{-3} \text{m} \\[3ex] 
\delta_{3} & = \frac{FL_{2}}{A_{2}E} + \delta_{1} = \frac{6100 \text{ N}(0.24\text{ m})}{\pi \left( \frac{0.01}{2}\text{ m} \right)^{2}(69\times 10^{9}\text{ Pa})} + 0.05503 \times  10^{-3} \text{ m} = 0.32503 \times  10^{-3} \text{m}
\end{align}
$$
These are consistent with our FEA calculations!
### Problem #2: Deformation of a Truss Structure
The truss comprises of four nodes. Each node ($A,B,C,D$) is defined by its coordinates in 2D space, with $A=(0,2), B=(4,2), C=(2,0), D=(0,0)$. To build our FEA model, the elements of the truss are defined such that each member is an element (total of four elements). A connectivity matrix is then created to define how nodes are connected by elements. Each column in this matrix represents an element, and the two rows provide the start and end nodes for each element. For example, element 1 connects node 1 (A) to node 2 (B), element 2 connects node 2 (B) to node 3 (C), and so forth.

The local stiffness matrix for this problem how much a truss member/element resists deformation under applied forces. It links the forces at the nodes of an element to the displacements at those nodes. For 2D members, this matrix is defined as:
$$

k_{\text{local}} = k_{e_{i}} \times 
\begin{bmatrix}
\cos(\theta)^2 & \cos(\theta)\sin(\theta) & -\cos(\theta)^2 & -\cos(\theta)\sin(\theta) \\
\cos(\theta)\sin(\theta) & \sin(\theta)^2 & -\cos(\theta)\sin(\theta) & -\sin(\theta)^2 \\
-\cos(\theta)^2 & -\cos(\theta)\sin(\theta) & \cos(\theta)^2 & \cos(\theta)\sin(\theta) \\
-\cos(\theta)\sin(\theta) & -\sin(\theta)^2 & \cos(\theta)\sin(\theta) & \sin(\theta)^2
\end{bmatrix}

$$
where $k_{e_{i}} = EA / L$This reflects the element's response to axial, shear, and bending forces, assuming linear elastic behavior. By incorporating the directional cosines and cosines, the matrix is also in the global coordinate system. For our elements, we have:
$$
\begin{align}
k_{e_{1}}  & = \frac{(200 \times 10^{9}\text{ Pa}) (400\times 10^{-6}\text{ m})}{4 \text{ m}} = 20000000, \quad \theta_{1} = 0 \\[3ex] 
k_{e_{2}} = k_{e_{3}}  & = \frac{(200 \times 10^{9}\text{ Pa}) (400\times 10^{-6}\text{ m})}{2\sqrt{ 2 } \text{ m}} = 20000000\sqrt{ 2 }, \quad \theta_{2}=\theta_{3} = 45 \\[3ex] 
k_{e_{4}}  & =  \frac{(200 \times 10^{9}\text{ Pa}) (400\times 10^{-6}\text{ m})}{2 \text{ m}} = 40000000, \quad \theta_{4}=0
\end{align}
$$
With these, the full local stiffness matrices can be found; they are omitted here for brevity. We can then integrate each element's stiffness matrix into the global stiffness matrix, $K_{\text{global}}$. Since there are four nodes, and each node has 2 degrees of freedom, our global stiffness matrix has dimensions of $8 \times 8$. The placement of each element’s stiffness matrix within $K_{\text{global}}$​ depends on the nodes that the element connects. This is guided by the connectivity matrix. For example, the connectivity matrix states that element 1 connects nodes 1 (A) and 2 (B); thus, its local stiffness matrix affects the DOFs corresponding to these nodes in $K_{\text{global}}$​. Following this approach, the corresponding entries in $K_{\text{global}}$ are updated for each element by adding the element's stiffness contributions to the appropriate positions in the global matrix. Finally, boundary conditions are applied to nodes 1 (A) and 4 (D), which are fixed. Fixed nodes have their corresponding rows and columns in the global stiffness matrix set to zero; since this applies to node A (row/columns 1 and 2) and node B (row/columns 7 and 8), our original $8\times8$ matrix is simplified to $4 \times 4$ so that our system of equations is:
$$
\begin{align}
\{ F \}  & = [K]\{ \delta \} \\[3ex]  \\
\begin{Bmatrix}
0 \\
-51000 \\
0 \\
0
\end{Bmatrix}  & =10^{7} \times \begin{bmatrix}
3.4142 & 1.4142 & -1.4142 & -1.4142 \\
1.4142 & 1.4147 & -1.4142  & -1.4142 \\
-1.4142 & -1.4142 & 6.8284 & 0 \\
-1.4142 & -1.4142 & 0 & 2.8284
\end{bmatrix} \ \begin{Bmatrix}
\delta_{3} \\
\delta_{4} \\
\delta_{5} \\
\delta_{6}
\end{Bmatrix}
\end{align}
$$

This is once again solved with MATLAB by setting up the matrices and calling `u = K_global \ F;`. Results for interior force, change in length, engineering stress and strain, and horizontal/vertical displacements are shown in the table below.

| Element | Interior force | Change in length | Stress      | Strain      | Horizontal d | Vertical d  | FS     |
| ------- | -------------- | ---------------- | ----------- | ----------- | ------------ | ----------- | ------ |
| 1       | 51 kN (T)      |        2.5776e-03          | 0.1275 GPa  | 6.3750e-04  | 0            | 0           | 1.9608 |
| 2       | -72.12 kN (C)  |     -2.5331e-03             | -0.1803 GPa | -9.0156e-04 | 2.55e-03     | -1.4862e-02 | 1.3865 |
| 3       | 72.12 kN (T)   |     2.5567e-03             | 0.1803 GPa  | 9.0156e-04  | -2.5500e-03  | -6.1562e-03 | 1.3865 |
| 4       | -102 kN (C)    |        -2.5405e-03          | -2.55 GPa   | -1.2750e-03 | 0            | 0           | 0.9804 | 
