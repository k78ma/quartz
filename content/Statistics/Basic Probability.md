---
title: Basic Probability
tags:
  - stats
date: 2024-09-19
aliases:
  - basic probability
---
Probability theory provides a formal framework for reasoning about the likelihood of events.

## Definitions
- An **experiment** is a procedure that yields one of a set of possible outcomes. As our ongoing example, consider the experiment of tossing two six-sided dice, one red and one blue, with each face bearing a distinct integer $\{ 1,\dots,6 \}$.
- A **sample space** $S$ is the set of possible outcomes of an experiment. In our dice example, there are 36 possible outcomes
$$
\begin{align}
S=\{ (1, 1),(1, 2),(1, 3),(1, 4),(1, 5),(1, 6),  \\
(2, 1),(2, 2),(2, 3),(2, 4),(2, 5),(2, 6),  \\
(3, 1),(3, 2),(3, 3),(3, 4),(3, 5),(3, 6),  \\
(4, 1),(4, 2),(4, 3),(4, 4),(4, 5),(4, 6),  \\
(5, 1),(5, 2),(5, 3),(5, 4),(5, 5),(5, 6),  \\
(6, 1),(6, 2),(6, 3),(6, 4),(6, 5),(6, 6) \}
\end{align}
$$
- An **event** $E$ is a specified subset of the outcomes of an experiment. The event that the sum of the dice equals 7 or 11 (the conditions to win at craps on the first roll) is the subset
$$
E=\{ (1, 6),(2, 5),(3, 4),(4, 3),(5, 2),(6, 1),(5, 6),(6, 5) \}
$$
- The probability of an outcome $s$, denoted $p(s)$, is a number with the two properties:
	- For each outcome $s$ in sample space $S$, we have $0\leq p(s)\leq 1$
	- The sum of probabilities of all outcomes adds to one: $\sum_{s\in S}p(s)=1$ 
- In our example, if we assume two distinct fair dice, the probability $p(s) = (1/6) × (1/6) = 1/36$ for all outcomes $s \in S$.
- The probability of an event $E$ is the sum of probabilities of the outcomes of the event (members of event subset). Thus,
$$
P(E)=\sum_{s \in E}p(s)
$$
- The complement of the event $\bar{E}$, the case when $E$ does not occur. Then
$$
P(E)=1-P(\bar{E})
$$
- A **random variable** $V$ is s a numerical function on the outcomes of a probability space. The function “sum the values of two dice" ($V((a,b))=a+b$) produces an integer results between 2 and 12. This implies a probability distribution of the possible values of the random variable. The probability $P(V (s) = 7) = 1/6$, while $P(V (s) = 12) = 1/36$.
- The **expected value** of a random variable $V$ defined on a sample space $S$, $E(V)$, is defined
$$
E(V)=\sum_{s \in S}p(s)\cdot V(s)
$$