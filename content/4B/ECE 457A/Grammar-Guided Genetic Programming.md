---
title: Grammar-Guided Genetic Programming
tags:
  - ece457a
date: 2026-04-10
aliases: grammar-guided genetic programming
---
In unconstrained GP, the search space is vast as there are many syntactically valid but irrelevant or meaningless programs. We can narrow this down by using a formal grammar to define the set of admissible programs:
$$
\mathcal{P} = \{ \text{programs derivable from grammar }G \}
$$
Examples:
$$
\begin{align}
\langle \text{expr} \rangle \to \langle \text{expr} \rangle  + \langle \text{expr} \rangle  \,\, | \,\, \langle \text{expr} \rangle \cdot \langle \text{expr} \rangle \,\,| \times \left|\, 1 \,\right| \sin(\langle \text{expr} \rangle )
\end{align}
$$
- $\langle \text{expr} \rangle$ is non-terminal
- $x,1$ are terminals
- rules specify legal constructions

![[Grammar-Guided Genetic Programming-1775867376813.webp]]

Basically, we start with $\langle \text{expr} \rangle$, choose one of the right-hand side options, and replace the selected non-terminal. We then repeat this until only terminals remain. This means that first options create larger structures, while last options terminate expansion. Generation alternates between expansion and stopping.

![[Grammar-Guided Genetic Programming-1775867415077.webp]]

![[Grammar-Guided Genetic Programming-1775867431240.webp]]
