---
title: Automatic Differentiation
tags:
  - amath449
  - dl
date: 2026-01-27
aliases: automatic differentiation
---
Consider this expression:
$$
f = \underbrace{ \sin(x) }_{ a }+ \underbrace{ xy }_{ b }
$$
This expression can be built using the following code:
$$
\begin{align}
x  & = \text{Var}, \quad  y= \text{Var}  \\
a  & = \sin(x) \\
b  & = a \ast  y \\
f  & = a+b
\end{align}
$$
We can visualize this as an expression grass

![[Automatic Differentiation-1769539838983.webp|285x374]]

- **Dependences:**: Arrows on the graph
- **Creators:** Indicate which operations generated each variable

We can build a data structure to represent the expression graph using two different types of objects:
- **Var:** Stores a value and a creator (which is an Op)

![[Automatic Differentiation-1769539954005.webp|191x206]]

- **Op:** Takes arguments (which are Vars) and applies an operation

![[Automatic Differentiation-1769539970745.webp|215x163]]

### Example
Consider the example $f=a\ast b$.
1. Create Op object.
2. Save references to args (a, b).
3. Create a Var for output f.
4. Fet f.val to a.val * b.val
5. Set f.creator to this Op.

![[Automatic Differentiation-1769540120526.webp|202x265]]

## Differentiation
The expression can also be used to compute derivatives. Each var stores the derivative of the expression with respect to itself (its own argument?). It stores it in its member *grad*.

Consider:
$$
\begin{align}
f & =F(G(H(x))) \\[2ex]
x\text{.grad} & = \frac{df}{dx}
\end{align}
$$

Now we can derive the chain rule. Define $h=H(x), g=G(h), f=F(g)$.
$$
\begin{align}
\frac{df}{dx}  & = \frac{dF}{dg} \frac{dG(H(x))}{dx} \\[2ex] 
     & = \frac{dF(g)}{dg} \frac{dG(h)}{dh} \frac{dH(x)}{dx} \\[2ex] 
     & = \frac{df}{dg} \frac{dg}{dh} \frac{dh}{dx}
\end{align}
$$

Here's an expression graph that can be used to compute the derivatives:

![[Automatic Differentiation-1769540510152.webp|297x416]]

Starting with a value of $1$ at the top, we work our way down through the graph, and increment the *grad* of each Var as we go.

Each Op contributes its factor (according to the chain rule) and passes the updated derivate down the graph.

### Example
$$
f=(x+y)+\sin(y)
$$
Because of the chain rule, we multiply as we work our way down a branch. We also added whenever multiple branches converge.

![[Automatic Differentiation-1769545177854.webp|490x286]]

Var class backward method:
```python
class Var:
    def backward(s):
        self.grad += s
        self.creator.backward(s)
```
- `self.val`, `self.grad`, `s` must all have the same shape
- `s` is the upstream gradient

Op class backward method:
```python
class Op:
    def backward(s):
        for x in self.args:
            x.backward (s * ∂(Op)/∂x)
```
- `s` must match the shape of the operation's output
- $\frac{ \partial \text{Op} }{ \partial x }$ is the derivative of the operation with respect to $x$

Thus, the chain rule is applied recursively. At each node, the gradient is propagated backward through the graph.