---
title: RBM Intuition
tags:
  - amath449
date: 2026-04-15
aliases:
---
A [[Restricted Boltzmann Machines|Restricted Boltzmann Machine]] functions by trying to learn a probability distribution over visible patterns $v$. This is done by introducing hidden variables $h$, which act like late features.
1. Observe a visible pattern $v$
2. Infer which hidden features $h$ could explain it
3. Use those hidden features to regenerate a visible pattern
4. Adjust parameters so real data is easier to explain than fake reconstructions.

## Model Components
We have:
$$
\begin{align}
\text{Visible units:} & \quad v\in  \{ 0,1 \}^{m} \\
\text{Hidden units:} & \quad h\in  \{ 0,1 \}^{n}
\end{align}
$$
If $v_{i}=1$, visible feature $i$ is present. If $h_{j}=1$, hidden feature $j$ is active.

Weights $W_{ij}$ connect visible unit to $i$ to hidden unit $j$. A positive $W_{ij}$ means if $v_{i}$ is on, that supports $h_{j}$ being on; if $h_{j}$ is on, that supports $v_{i}$ being on. The weight works both ways.

Why are hidden units useful? The visible pattern alone may be complicated. For example, suppose the visible vector is an image patch. Then, a hidden unit might learn a feature like a vertical edge or a corner. When a visible image comes in, hidden units ask "am I one of the latent features that helps explain this image?". (Basically just latent representation?)

## Energy
Every joint configuration $(v,h)$ is assigned an energy:
$$
E(v,h) = - \sum_{i,j} v_{i}W_{ij}h_{j} - \sum_{i} b_{i}v_{i} - \sum_{j}c_{j}h_{j}
$$
- $-\sum_{ij}v_{i}W_{ij}h_{j}$ rewards agreement between visible and hidden units connected by positive weights. If $v_{i}=1, h_{j}=1$, and $W_{ij}$ is large positive, the energy goes down.
- $-\sum_{i}b_{i}v_{i}$ and $-\sum_{j}c_{j}h_{j}$ encode baseline preferences for units to be on. If $b_{i}$ is a large positive, then $v_{i}=1$ lowers energy before even considering the hidden units. Basically, some units are more naturally likely to turn on.

## Boltzmann Probability
We then define a probability for each state $(v,h)$ based on its energy:
$$
P(v,h) = \frac{1}{Z}e^{-E(v,h)}
$$
where
$$
Z = \sum_{v,h}e^{-E(v,h)}
$$
This means that lower energy gives bigger $e^{-E}$, higher probability $P(v,h)$.

### Conditional probability
Because the graph is bipartite, once the visible layer is fixed, each hidden unit is independent of the others. This gives:
$$
P(h_{j}=1\, | \,v) = \sigma\left( \sum_{i} v_{i}W_{ij}+c_{j} \right)
$$
where $\sigma(z) = \frac{1}{1+e^{-z/T}}$.
- This means we compute total support for hidden feature $j$ and pass it through a sigmoid to convert to probability.

Similarly, for visible units:
$$
P(v_{i}=1 \, | \,h) = \sigma\left( \sum_{j} W_{ij}h_{j}+b_{i} \right)
$$
- Once hidden features are chosen, each visible unit asks whether those features support turning it on.

So the two passes are:
- Upward pass: visible → hidden, infer latent features (recognition)
- Downward pass: hidden → visible, reconstruct data (generation)

### Energy-gap view
We can also think of this in terms of "how much better would the state be if this unit turned on?"

For visible unit $v_{k}$:
$$
\Delta E_{k} = E(v_{k}=0, h) -E(v_{k}=1, h)
$$
and this becomes
$$
\Delta E_{k} = \sum_{j} W_{kj}h_{j} + b_{k}
$$
If $\Delta E_{k}>0$, then turning $v_{k}$ on lowers energy. So:
$$
P(v_{k}=1 \, | \,h) = \sigma(\Delta E_{k})
$$
Likewise for hidden unit $h_{j}$:
$$
E(h_{j}=0, v)-E(h_{j}=1, v) = \sum_{i}v_{i}W_{ij}+c_{j}
$$
and therefore
$$
P(h_{j}=1\, | \,v) = \sigma(\Sigma_{i}v_{i}W_{ij}+c_{j})
$$
## Co-occurrence statistics
To make the intuition more precise, RBM learning does not just compare the original visible pattern to the reconstruction directly. Instead, it compares **visible-hidden co-occurrence statistics**.

After clamping the real data $\nu$, we compute hidden probabilities and record how strongly each visible unit and hidden unit co-occur:
$$
s_{1}=\nu^{T}P(h=1\mid \nu)
$$
This is called the **positive phase** or **clamped statistics**. It measures which visible-hidden associations are supported by the real data.

Then we sample hidden units, reconstruct a visible pattern $v_{2}$, project upward again, and record the co-occurrence statistics of the reconstruction:
$$
s_{2}=v_{2}^{T}P(h=1\mid v_{2})
$$
This is the **negative phase** or **free statistics**. It measures which visible-hidden associations are supported by the model's own reconstruction.

The weight update is then based on the difference:
$$
\Delta W \propto s_{1}-s_{2}
$$

Intuitively:
- if a visible-hidden pair occurs often in real data, strengthen that connection
- if it occurs mainly in the model's reconstruction, weaken that connection

So the RBM is really learning by comparing:
1. what hidden features co-occur with the real input
2. what hidden features co-occur with the model's reconstruction
3. and then pushing the model toward the real-data associations
## Walkthrough
Take a single data point $\nu$.

**Step 1:** Clamp the visible layer to the data, such that
$$
v=\nu
$$

**Step 2:** Infer hidden features, by computing
$$
P(h_{j}=1 \, | \, \nu) = \sigma\left( \sum_{i} \nu_{i}W_{ij} +c_{j}\right)
$$
This gives a probability for each hidden feature given the input.

**Step 3:** We sample $h_{j} \sim \text{Bernoulli}(P(h_{j}=1 \, | \,\nu))$, choosing a concrete hidden explanation for the data.

**Step 4:** We reconstruct the visible layer using the hidden state:
$$
P(v_{i}=1\, | \,h) = \sigma\left( \sum_{j}W_{ij}h_{j}+b_{i} \right)
$$
Then sample a reconstructed visible vector $v$.

**Step 5:** If $v$ looks unlike $\nu$, the hidden explanation was not good enough, so we update the parameters. Another way to say this is that the RBM compares the co-occurrence statistics of the real input and the reconstruction. It strengthens visible-hidden associations found in the real data and weakens associations found mainly in the reconstruction.

## Numerical Example
Take a tiny RBM with:
- 2 visible units
- 2 hidden units

Let the training input be
$$
\vec{\nu} = [1,0].
$$

Choose:
$$
W=
\begin{bmatrix}
0.8 & -0.4\\
0.3 & 0.9
\end{bmatrix},
\qquad
\vec{b}=[0.1,-0.2],
\qquad
\vec{c}=[0.05,-0.1].
$$

Let the learning rates be
$$
\kappa = 0.1, \qquad \gamma = 0.1.
$$

We use
$$
\sigma(z)=\frac{1}{1+e^{-z}}.
$$

---

### 1. Recognition pass 1

Given the visible pattern
$$
\vec{\nu}=[1,0],
$$
compute the hidden pre-activation:
$$
\vec{\Delta E}=\vec{\nu}W+\vec{c}.
$$

First,
$$
\vec{\nu}W =
[1,0]
\begin{bmatrix}
0.8 & -0.4\\
0.3 & 0.9
\end{bmatrix}
=
[0.8,-0.4].
$$

Add the hidden bias:
$$
\vec{\Delta E}=[0.8,-0.4]+[0.05,-0.1]=[0.85,-0.5].
$$

So the hidden probabilities are
$$
P(\vec{h}\mid \vec{\nu})=\sigma(\vec{\Delta E})=
[\sigma(0.85),\sigma(-0.5)].
$$

Numerically,
$$
P(\vec{h}\mid \vec{\nu}) \approx [0.701,\,0.378].
$$

---

### 2. Compute term 1 (positive-phase co-occurrence statistics)

Compute
$$
s_1=\vec{\nu}^{T}\sigma(\vec{\Delta E}).
$$

That is
$$
s_1=
\begin{bmatrix}
1\\
0
\end{bmatrix}
[0.701 \;\; 0.378]
=
\begin{bmatrix}
0.701 & 0.378\\
0 & 0
\end{bmatrix}.
$$

Interpretation:
- the real input has $v_1=1$, so only the first row is active
- the numbers record how strongly each hidden unit co-occurs with the real visible pattern

---

### 3. Generative pass

Now sample the hidden nodes from
$$
\vec{h}_1 \sim \sigma(\vec{\Delta E}).
$$

Suppose the random draws are:
- for $h_1$: ($r_1=0.60$)
- for $h_2$: ($r_2=0.40$)

Since
$$
0.701 > 0.60, \qquad 0.378 < 0.40,
$$
we get
$$
\vec{h}_1=[1,0].
$$

Now project downward:
$$
\vec{\Delta E}=W\vec{h}_1^T+\vec{b}.
$$

Compute
$$
W\vec{h}_1^T=
\begin{bmatrix}
0.8 & -0.4\\
0.3 & 0.9
\end{bmatrix}
\begin{bmatrix}
1\\
0
\end{bmatrix}
=
\begin{bmatrix}
0.8\\
0.3
\end{bmatrix}.
$$

Add visible bias:
$$
\vec{\Delta E}=
\begin{bmatrix}
0.8\\
0.3
\end{bmatrix}
+
\begin{bmatrix}
0.1\\
-0.2
\end{bmatrix}
=
\begin{bmatrix}
0.9\\
0.1
\end{bmatrix}.
$$

So the visible probabilities are
$$
P(\vec{v}\mid \vec{h}_1)=
[\sigma(0.9),\sigma(0.1)]
\approx [0.711,\,0.525].
$$

Now sample the visible reconstruction. Suppose the random draws are:
- for $v_1$: ($r_1=0.80$)
- for $v_2$: ($r_2=0.30$)

Then
$$
0.711 < 0.80, \qquad 0.525 > 0.30,
$$
so
$$
\vec{v}_2=[0,1].
$$

---

### 4. Recognition pass 2

Now project upward again from the reconstruction:
$$
\vec{\Delta E}=\vec{v}_2W+\vec{c}.
$$

Compute
$$
\vec{v}_2W=
[0,1]
\begin{bmatrix}
0.8 & -0.4\\
0.3 & 0.9
\end{bmatrix}
=
[0.3,0.9].
$$

Add hidden bias:
$$
\vec{\Delta E}=[0.3,0.9]+[0.05,-0.1]=[0.35,0.8].
$$

So
$$
\vec{h}_2=\sigma(\vec{\Delta E})=
[\sigma(0.35),\sigma(0.8)]
\approx [0.587,\,0.690].
$$

Here we use the probabilities directly instead of sampling.

---

### 5. Compute term 2 (negative-phase co-occurrence statistics)

Compute
$$
s_2=\vec{v}_2^T\vec{h}_2.
$$

That is
$$
s_2=
\begin{bmatrix}
0\\
1
\end{bmatrix}
[0.587 \;\; 0.690]
=
\begin{bmatrix}
0 & 0\\
0.587 & 0.690
\end{bmatrix}.
$$

Interpretation:
- in the reconstruction, only $v_2$ is on
- so only the second row contributes
- this records the visible-hidden associations supported by the model's reconstruction

---

### 6. Update weights

Use
$$
W_{\text{new}}=W_{\text{old}}+\kappa(s_1-s_2).
$$

First compute
$$
s_1-s_2=
\begin{bmatrix}
0.701 & 0.378\\
0 & 0
\end{bmatrix}
-
\begin{bmatrix}
0 & 0\\
0.587 & 0.690
\end{bmatrix}
=
\begin{bmatrix}
0.701 & 0.378\\
-0.587 & -0.690
\end{bmatrix}.
$$

Multiply by \(\kappa=0.1\):
$$
\kappa(s_1-s_2)
=
\begin{bmatrix}
0.0701 & 0.0378\\
-0.0587 & -0.0690
\end{bmatrix}.
$$

So
$$
W_{\text{new}}
=
\begin{bmatrix}
0.8 & -0.4\\
0.3 & 0.9
\end{bmatrix}
+
\begin{bmatrix}
0.0701 & 0.0378\\
-0.0587 & -0.0690
\end{bmatrix}
=
\begin{bmatrix}
0.8701 & -0.3622\\
0.2413 & 0.8310
\end{bmatrix}.
$$

---

### 7. Update visible biases

Use
$$
\vec{b}_{\text{new}}=\vec{b}_{\text{old}}+\gamma(\vec{\nu}-\vec{v}_2).
$$

Compute
$$
\vec{\nu}-\vec{v}_2 = [1,0]-[0,1]=[1,-1].
$$

Multiply by \(\gamma=0.1\):
$$
\gamma(\vec{\nu}-\vec{v}_2)=[0.1,-0.1].
$$

So
$$
\vec{b}_{\text{new}}=[0.1,-0.2]+[0.1,-0.1]=[0.2,-0.3].
$$


### 8. Update hidden biases

Use
$$
\vec{c}_{\text{new}}=\vec{c}_{\text{old}}+\gamma(\vec{h}_1-\vec{h}_2).
$$

We have
$$
\vec{h}_1=[1,0], \qquad \vec{h}_2=[0.587,0.690].
$$

So
$$
\vec{h}_1-\vec{h}_2=[1-0.587,\;0-0.690]=[0.413,-0.690].
$$

Multiply by ($\gamma=0.1$):
$$
\gamma(\vec{h}_1-\vec{h}_2)=[0.0413,-0.0690].
$$

Thus
$$
\vec{c}_{\text{new}}=[0.05,-0.1]+[0.0413,-0.0690]=[0.0913,-0.1690].
$$


### Final updated parameters
After one CD-1 step:
$$
W_{\text{new}}=
\begin{bmatrix}
0.8701 & -0.3622\\
0.2413 & 0.8310
\end{bmatrix}
$$

$$
\vec{b}_{\text{new}}=[0.2,-0.3]
$$

$$
\vec{c}_{\text{new}}=[0.0913,-0.1690].
$$

### Intuition in terms of co-occurrence statistics
The real input was
$$
\vec{\nu}=[1,0],
$$
so the positive-phase statistic
$$
s_1=
\begin{bmatrix}
0.701 & 0.378\\
0 & 0
\end{bmatrix}
$$
says:
- visible unit 1 co-occurs with the hidden units in the real data
- visible unit 2 does not

But the reconstruction was
$$
\vec{v}_2=[0,1],
$$
so the negative-phase statistic
$$
s_2=
\begin{bmatrix}
0 & 0\\
0.587 & 0.690
\end{bmatrix}
$$
says:
- the model's own reconstruction supports visible unit 2 co-occurring with the hidden units

Therefore the update
$$
\Delta W \propto s_1-s_2
$$
does exactly what we want:
- strengthen the visible-hidden associations supported by the real data
- weaken the visible-hidden associations supported by the reconstruction
