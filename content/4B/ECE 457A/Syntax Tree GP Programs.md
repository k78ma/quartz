---
title: Syntax Tree GP Programs
tags:
  - ece457a
date: 2026-04-10
aliases: syntax tree gp programs
---
A syntax tree has functions as internal nodes and terminals as leaves. The evaluation proceeds bottom-up. This representation makes program structure explicit and easy to manipulate.

For example, for the expression $f(x,y)=x+2y$:

![[Syntax Tree Programs-1775810417995.webp|283]]

Symbolic expressions can be defined by two fundamental sets.

The **function set** $F$ is the internal computational operators. For example:
$$
F = \{ +, -, \times, \div, \sin, \cos \}
$$

The **terminal set** $T$ is the leaves of the tree:
$$
T = \{ x,y, \text{constants} \}
$$
All candidate programs are compositions built from $F \cup T$. The design of $F$ and $T$ strongly influences search effectiveness.

We enforce a **closure requirement**: every function must accept any input produced by the tree. However, random trees may generate invalid expressions, like division by zero. To deal with this, we introduce **protected operators**. For example:
$$
\div_{p}(a,b) = \begin{cases}
a / b,  & \left| b \right| >\epsilon \\
a,  & \left| b \right| \leq\epsilon
\end{cases}
$$
This ensures that output is always defined, and makes division closed over all inputs.

In the context of [[Genetic Programming|GP]], a single individual can be written in several equivalent forms:

![[Syntax Tree Programs-1775810809898.webp]]

Each form is useful. Trees are good for visualization, prefix are good for implementation (Lisp?), and infix is good for human interpretation.

Each function in $T$ has a fixed number of children called its **arity**.
$$
\text{arity}(+) = 2, \quad  \text{arity}(\sin) = 1, \quad \text{arity}(\text{ifgt}) = 4
$$
where $\text{ifgt}$ implements "if $a>b$, return $c$, else $d$":

![[Syntax Tree Programs-1775810925074.webp|293]]

Arity determines the legal tree structure. If the function set contains mostly binary operators, subtree crossover can be disruptive, and size will grow quickly with depth. Thus, the choice of functions shapes both representation and search behavior.

With the above components, we can formally define a GP individual to be modeled as a rooted ordered tree:
$$
T = (V,E,r)
$$
where $V$ is the set of nodes, $E$ is the set of edges, and $r$ is the root node.

We partition the node set as:
$$
V = V_{F} \cup V_{T}
$$
where $V_{F}$ are function nodes and $V_{T}$ are terminal nodes. This formal view helps when reasoning about tree size and depth.

## Strongly Typed Representation
Standard GP allows any subtree as long as closure holds. In strongly typed GP, nodes carry data types. For example:
- Arithmetic nodes return real values
- Logical nodes return Boolean values
- Conditional nodes combine both.

This prevents nonsensical constructions such as $\sin(\text{True})$. Typing constrains the search space but often involves semantic quality.

## Automatically Defined Functions
GP can evolve reusable subprograms. Instead of a single tree, an individual may contain a main program, along with one or more auxiliary functions

Conceptually, we say:
$$
\text{program} = \text{main tree} + \text{callable subtrees}
$$
This promotes modularity and encourages code reuse. Repeated structure is represented more compactly.

## Tree Execution
Tree execution is recursive. For $f(x,y)=x+2y$, the evaluation order is:
1. Read terminal $x$
2. Read terminal $y$
3. Compute $2y$
4. Compute $x+2y$

![[Syntax Tree Programs-1775810417995.webp|246]]

We can consider this more cleanly by writing it in prefix form:
$$
(+ \,\,x \,\,(\ast \,\, y \,\, 2))
$$
Let $x=3$ and $y=5$. Then:
$$
(\ast  \,\, y \,\,2) = 5 \cdot 2 = 10
$$
and finally
$$
(+\,\,x\,\,10) = 3+10=13
$$

## Search Space
GP search spaces are huge; even shallow trees produce enormous search spaces. To see this, let $\left| F \right|=m$ and $\left| T \right|=k$. For a rough binary-tree estimate, the number of syntactic probabilities grows on the order of
$$
(\left| F \right| +\left| T \right| )^{2d}
$$
for depth $d$.

This implies that exhaustive search is impossible, and local structure matters greatly. Thus, good variation operators are crucial.

There is a distinction that we can make: **semantic** vs. **syntactic** search spaces. Two different trees can compute the same function. For example, $x+0$ and $x$. This means that GP searches in a huge **syntactic** space, but a smaller **semantic** space. This redundancy can both help and hurt search.


