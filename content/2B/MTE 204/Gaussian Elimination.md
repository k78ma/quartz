---
title: Gaussian Elimination
tags:
  - mte204
date: 2023-10-11
---
Gaussian elimination is a direct method, solving for the "exact" solution in one pass through the equations.

Given the matrix form of a system of equations:
$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
=
\begin{Bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{Bmatrix}
=
\begin{Bmatrix}
b_{1} \\
b_{2} \\
b_{3}
\end{Bmatrix}
$$
#### Forward Elimination
First, we eliminate $x_{1}$ by multiplying the first row by $a_{21} / a_{11}$ so that it is:
$$
a_{21}x_{1} + \frac{a_{21}}{a_{11}}a_{12}x_{2}+\frac{a_{21}}{a_{11}}a_{13}x_{3} = \frac{a_{21}}{a_{11}}b_{1}
$$
This means that it can now be subtracted from the second row to get:
$$
\left(a_{22}-\frac{a_{21}}{a_{11}}\right)a_{22}x_{2} + \left(a_{23}-\frac{a_{21}}{a_{11}}\right)a_{23}x_{3} = b_{2} -\frac{a_{21}}{a_{11}}b_{1}
$$
or
$$
a'_{22}x_{2}+a'_{23}x_{3} = b'_{2}
$$
where the prime indicates that the value has been changed.

We can then also repeat the procedure for row 3, where:
$$
\text{Row \#3} = \text{Row \#3} - \left( \frac{a_{31}}{a_{11}} \right) \text{Row \#1}
$$
At this point our matrix will be:
$$
\begin{bmatrix}
a_{11}  &  a_{12}  & a_{13} \\
0 & a'_{22} & a'_{23} \\
0 & a'_{32} & a'_{33}
\end{bmatrix}
\begin{Bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{Bmatrix}
=
\begin{Bmatrix}
b_{1} \\
b'_{2} \\
b'_{3}
\end{Bmatrix}
$$
We then eliminate $x_{2}$ by doing:
$$
\text{Row \#3} = \text{Row \#3} - \left( \frac{a'_{32}}{a'_{22}} \right) \text{Row \#2}
$$
such that our matrix is:
$$
\begin{bmatrix}
a_{11}  &  a_{12}  & a_{13} \\
0 & a'_{22} & a'_{23} \\
0 & 0 & a''_{33}
\end{bmatrix}
\begin{Bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{Bmatrix}
=
\begin{Bmatrix}
b_{1} \\
b'_{2} \\
b''_{3}
\end{Bmatrix}
$$
Here the double prime on $a''_{33}$ and $b''_{3}$ indicates that they have been changed twice. 

>[!info] Forward Elimination Completion Criteria
>Forward elimination is complete when terms below the diagonal in $A$ are $0$, such as
>$$
>\begin{bmatrix}
>a_{11}  &  a_{12}  & a_{13} \\
>0 & a'_{22} & a'_{23} \\
>0 & 0 & a''_{33}
>\end{bmatrix}
>$$

#### Backward substitution
Starting at the bottom, we can solve $b_{3}$ using:
$$
\begin{align}
a''_{33} x_{3} = b''_{33} \\[3ex]
x_{3} = \frac{b''_{3}}{a''_{33}}
\end{align}
$$
Then, we can move up to row 2 to solve $x_{2}$ by subbing in our solved $x_{3}$ value:
$$
a'_{22}x_{2}+a'_{23}x_{3} = b'_{2}
$$
Then we can continue moving up and sub in $x_{2}$ and $x_{3}$ to solve for $x_{1}$:
$$
a_{11}x_{1} + a_{12}x_{2}+a_{13}x_{3}=b_{1}
$$

#### Notes
The above approach is called **Naïve Gaussian Elimination**, because we are not  
checking for a divide by zero. For example, if we have
$$
\text{Row \#2} = \text{Row \#2} - \left( \frac{a_{21}}{a_{11}} \right) \text{Row \#1}
$$
if the term on the diagonal $a_{11}$ is $0$, we will have a division by zero.

Benefits:
- We achieve the exact solution in one pass
- Straightforward algorithm

Challenges:
- Not very efficient (many calculations needed)
- Divide by zero is possibility (if there is zero on diagonal)
- [[Round-off Error for Gaussian Elimination]]
