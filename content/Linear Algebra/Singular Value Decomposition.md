---
title: Singular Value Decomposition
tags:
  - lin-alg
date: 2024-03-07
aliases:
  - SVD
---
Singular value decomposition is a technique used factorizing matrices. Given a matrix $A$ of dimensions $m \times n$, SVD decomposes $A$ into 3 matrices:
$$
A = U \Sigma V^{T}
$$
- $U$ is an $m\times m$ [[Orthogonal Matrix|orthogonal matrix]] whose columns are called the left singular vectors of $A$
- $\Sigma$ is an $m \times n$ matrices diagonal matrix with non-negative real numbers on the diagonal. 
	- These are known as the singular values of $A$, and they are usually arranged in descending order.
	- The singular values give insight into the rank and condition number of $A$.
- $V^{T}$ is the transpose of an $n \times n$ orthogonal matrix whose columns are the right singular vectors of $A$.

SVD provides a lower-rank approximation of the original matrix. In the $\Sigma$ matrix, we have singular values $\sigma_{i}$ on the diagonal, in descending order such that $\sigma_{1}\geq \sigma_{2}\geq \dots \geq \sigma_{n} \geq 0$. To approximate $A$, we keep only the top $k$ singular values, truncating $U$ to keep the first $k$ columns and $V^{T}$ to keep the first $k$ rows.

The intuition behind this is that the singular values $\sigma_{i}$ represent the magnitude of the contribution of each singular vector to the matrix $A$. By keeping only the top $k$ singular values, we retain the most significant components of $A$, which capture the bulk of the information or variability in the data, while possibly reducing noise. 

## Applications
- **Data Compression**: SVD can compress data by identifying patterns and removing redundancies, which is useful in image compression and digital signal processing. By keeping only the largest singular values (and corresponding singular vectors), SVD provides a lower-rank approximation of the original data, reducing its size while retaining essential features.
- **Dimensionality Reduction**: Principal Component Analysis (PCA), a common technique for dimensionality reduction, is essentially based on SVD. It transforms the data to a new coordinate system, reducing its dimensionality by selecting the most significant directions (principal components).
- **Noise Reduction:** SVD can separate the signal from noise in data. By truncating smaller singular values (which often correspond to noise), SVD can produce a cleaner, denoised version of the data.

## Singular Vectors
### Left Singular Vector
The columns of $U$ are called the left singular vectors of $A$. They are orthonormal vectors that form a basis for the column space of $A$ (also known as the range of $A$). The left singular vectors are eigenvectors of the matrix $A A^{T}$.

### Right Singular Vector
The columns of $V$ (or rows of $V^{T}$) are the right singular vectors of $A$. These are orthonormal vectors that form a basis for the row space of $A$ (also known as the domain of $A^{T}$). The right singular vectors are eigenvectors of the matrix $A^{T}A$.