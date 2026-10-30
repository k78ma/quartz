---
title: Matrix Diagonalization
tags:
  - lin-alg
date: 2026-10-29
aliases: matrix diagonalization
---
#cards/lin-alg 
Diagonalizable matrix::A square matrix $A$ is called diagonalizable if there exists a diagonal matrix $D$ and an invertible matrix $P$ such that $A=PDP^{-1}$.
<!--SR:!fsrs,2026-10-30T05:24:03.993Z,0,2.3065,2.11810397,1,1,0,1,2026-10-30T05:14:03.993Z-->

Steps to diagonalize:
1. Find eigenvalues of the matrix by solving the characteristic equation $\left| A-\lambda I \right|=0$.
2. Find the basis of $\mathbb{R}^{n}$ consisting of eigenvectors of the matrix.
3. Construct the matrices $D$ and $P$.
    - The matrix $D$ has the eigenvalues of $A$ as entries on the diagonal.
    - The columns of $P$ are the corresponding eigenvectors. Note that the columns should match.

The diagonalization of a matrix is unique up to the permutations of the order of the eigenvalues.