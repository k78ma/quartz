---
title: "Geometry of Linear Equations"
tag: lin-alg
date: 2023-08-20
draft:
---

The fundamental problem of linear algebra:
$$
n \text{ linear equations}, n \text{ unknowns}
$$
Let's use the example:
$$
\begin{align}
2x-y=0 \\
-x+2y = 3
\end{align}
$$
Or in a matrix:
$$
\underbrace{ \begin{bmatrix} 2 & -1 \\ -1 & 2 \\ \end{bmatrix} }_{ A }
\underbrace{ \begin{bmatrix} x \\ y \\ \end{bmatrix} }_{ x }
= \underbrace{ \begin{bmatrix} 0 \\ 3 \end{bmatrix} }_{ b }
$$

---
## Row picture
Row picture is considers the system one line at a time.
- What points fulfill the first equation $2x - y = 0$?
- What points fulfill the second equation $-x + 2y = 3$?
This can be effectively done by plotting the lines on a graph. Then, we just find the intersection:
![row picture](Linear%20Algebra/attachments/row%20picture.png)
Plugging the intersection point $(1,2)$ into the equations we see that:
$$
\begin{align}
2(1)-2 &= 0 \\
-1+2(2) & = 3
\end{align}
$$
---
## Column picture
Column picture considers the system one column at a time by isolating each variable
$$
x\begin{bmatrix}
-2 \\
1 \\
\end{bmatrix}
+
y\begin{bmatrix}
-1 \\
2 \\
\end{bmatrix}
=
\begin{bmatrix}
0 \\
3
\end{bmatrix}
$$
Here, we solve the equation by thinking in terms of linear combinations of vectors:
	- We need to add $x$ copies of the first vector to $y$ copies of the 2nd vector to get \[0,3]
![column picture](Linear%20Algebra/attachments/column%20picture.png)
We find that having having $x=1$ and $y=2$ indeed gives us:

$$
1\begin{bmatrix}
2 \\
-1 \\
\end{bmatrix}
+
2\begin{bmatrix}
-1 \\
2 \\
\end{bmatrix}
=
\begin{bmatrix}
2 \\
-1
\end{bmatrix}
+
\begin{bmatrix}
-2 \\
4
\end{bmatrix}
=
\begin{bmatrix}
0 \\
3
\end{bmatrix}
$$

---
## Matrix form
We write the equations in a matrix:
$$
\begin{bmatrix} 2 & -1 \\ -1 & 2 \\ \end{bmatrix}
\begin{bmatrix} x \\ y \\ \end{bmatrix}
\begin{bmatrix} 0 \\ 3 \end{bmatrix}
$$
Here, the coefficient matrix $A$ is:
$$
A = \begin{bmatrix}
2 & -1 \\
-1  & 2 \\
\end{bmatrix}
$$
And the vector $x$ is the vector of unknowns:
$$
x = \begin{bmatrix} x \\ y\end{bmatrix}
$$