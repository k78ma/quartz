---
title: Information Entropy
tags:
  - cs
date: 2024-04-04
aliases:
---
We found that we can define a [[Measure of Information]] when observing a particular event such that:
$$
h(x)=-\log_{2}p(x)
$$

Suppose a sender wants to transmit the value of a random variable to a receiver. The average amount of information is obtained by taking the expectation of $h(x)$ with respect to $p(x)$ and is given by:
$$
H[x]=-\sum_{x} p(x)\log_{2}p(x)
$$
This is called the entropy of the random variable $x$. Note that $\lim_{ a \to 0 }(a \ln a) =0$ and so we will take $p(x) \ln p(x) = 0$ whenever we encounter a value for $x$ such that $p(x) = 0$.

### Example
Consider a random variable $x$ having eight possible states, each of which is equally likely. To communicate the value of $x$ to a receiver, we would need to transmit a message of length 3 bits. 

The entropy of this variable is given by:
$$
H[x]=-8 \times \frac{1}{8}\log_{2} \frac{1}{8}=3 \text{ bits}
$$
Now consider an example of a variable having 8 possible states $\{ a,b,c,d,e,f,g,h \}$ for which the respective probabilities are given by $\left( \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \frac{1}{16}, \frac{1}{64},\frac{1}{64}, \frac{1}{64}, \frac{1}{64}  \right)$. The entropy in this case is given by:
$$
H[x]=-\frac{1}{2}\log_{2} \frac{1}{2}-\frac{1}{4}\log_{2} \frac{1}{4}-\frac{1}{8}\log_{2} \frac{1}{8} - \frac{1}{16}\log_{2} \frac{1}{16} - 4\cdot \frac{1}{64}\log_{2} \frac{1}{64} = 2 \text{ bits}
$$
How would we transmit the identity of the variable's state to a receiver? We could use a 3 bit number like before. However, we can take advantage of the non-uniform distribution by using shorter codes for more probable events, leading to a shorter average code length. For example:
$$
\{ a,b,c,d,e,f,g,h \}=0,10,110,1110,111110,111101,111110,111111
$$
The average code length would then be:
$$
\frac{1}{2}\times 1+\frac{1}{4}\times 4+\frac{1}{8}\times 3+\frac{1}{16}\times 4+4\times \frac{1}{64} \times 6=2 \text{ bits}
$$

which again is the same as the entropy of the random variable. 
- Note that shorter code strings cannot be used because it must be possible to disambiguate a concatenation of such strings into its component parts. For instance, 11001110 decodes uniquely into the state sequence $c, a, d$. 
- This relation between entropy and shortest coding length is a general one. The noiseless coding theorem states that the entropy is a lower bound on the number of bits needed to transmit the state of a random variable.
- The non-uniform distribution has a smaller entropy than the uniform one.

## Physical Entropy
The concept of entropy has origins in physics where it was introduced in the context of equilibrium thermodynamics and later given a deeper interpretation as a measure of disorder through developments in statistical mechanics. 

This alternative view of entropy can be understood by considering a set of $N$ identical objects that are to be divided amongst a set of bins, such that there are $n_{i}$ objects in the $i$th bin. Consider the number of different ways of allocating the objects to the bins: 
- There are $N$ ways to choose the first object
- There are $N-1$ ways to choose the second object, and so on. 
- This leads to a total of $N!$ ways to allocate all $N$ objects to the bins.

We don't want to to distinguish between rearrangements of objects within each bin. In the $i$th bin there are $n_{i}!$ ways of reordering the objects, and so the total number of ways of allocating the $N$ objects to the bins is given by:
$$
W = \frac{N!}{\prod_{i}n_{i}!}
$$