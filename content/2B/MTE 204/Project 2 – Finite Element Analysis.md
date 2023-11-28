---
title: Project 2– Finite Element Analysis
tags:
  - mte204
date: 2023-11-27
aliases:
---
### Problem #1: Stepped Shaft under Axial Loading


To verify our FEA result, we can do 

### Problem #2: Deformation of a Truss Structure
For each truss element, you can define a local stiffness matrix. If we assume the element is oriented along the x-axis for simplicity, the local stiffness matrix $k_{\text{local}}$​ for an element of length $L$ and area $A$ would be:
$$
\begin{bmatrix}
F_{1} \\
F_{2}
\end{bmatrix}=
k\begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}
\begin{bmatrix}
\delta_{1} \\
\delta_{2}
\end{bmatrix}
$$where $k=\frac{EA}{L}$.
- E is Young's Modulus of the material
- A is the cross-sectional area of the element. 
This matrix shows the force response at each end of the element due to a unit displacement at each end, considering only axial forces and not bending moments. 
### Step 3: Transformation to Global Coordinates 
If the element is not aligned with the global coordinate system, you need to rotate the local stiffness matrix to account for the actual orientation of the element. This involves calculating the cosine and sine of the angle \( \theta \) that the element makes with the global x-axis: \[ cos(\theta) = \frac{x_2 - x_1}{L} \] \[ sin(\theta) = \frac{y_2 - y_1}{L} \] where \( (x_1, y_1) \) and \( (x_2, y_2) \) are the coordinates of the start and end nodes of the element, respectively. The transformation matrix \( T \) is: \[ T = \begin{bmatrix} cos(\theta) & sin(\theta) & 0 & 0 \\ 0 & 0 & cos(\theta) & sin(\theta) \end{bmatrix} \] The global stiffness matrix for an element, \( k_{global} \), is then: \[ k_{global} = T^T k_{local} T \] ### Step 4: Assembly of the Global Stiffness Matrix The global stiffness matrix \( K \) for the entire structure is assembled by adding the contributions from each element. This is done by placing each element's global stiffness matrix into the larger global stiffness matrix at the locations corresponding to the element’s global node numbers. For example, if an element connects global nodes \( i \) and \( j \), its stiffness contributions would be added to rows and columns \( i \) and \( j \) in the global stiffness matrix \( K \). ### Step 5: Apply Boundary Conditions - Identify nodes with known displacements (usually zero at supports). - Modify the global stiffness matrix to reflect these boundary conditions by setting the corresponding rows and columns to zero, except for a 1 on the diagonal for each fixed degree of freedom. ### Step 6: Solve for Displacements With the global stiffness matrix assembled and boundary conditions applied, solve for the unknown nodal displacements using the equilibrium equation: \[ K u = F \] where \( u \) is the vector of nodal displacements and \( F \) is the vector of applied forces. ### Step 7: Post-Processing - Compute strains and stresses in each element using the displacements. - Calculate the factor of safety based on the stresses and the material's yield strength. This is a general overview of the FEA process for a truss structure. The actual calculations would involve a substantial amount of algebra, especially for a large structure with many elements and nodes.