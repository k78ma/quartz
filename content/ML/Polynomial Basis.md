---
title: "Polynomial Basis"
tag: ml
date: 
alias:
---

Systematic strategy for constructing a feature space if features are are naturally numerical

>[!note] General idea
>If you are using $k$th-order basis (where $k$ is a positive integer), you include a feature for every possible product of $k$ different dimensions in your original input.
>  
>![400](ML/attachments/Pasted%20image%2020230710185636.png)


Example: XOR problem using a polynomial basis as a feature transformation

>[!example] XOR with feature transformation 
>Let’s say $k=2$ for the XOR problem in 2 dimensions.
> 
>![200](ML/attachments/Pasted%20image%2020230710190154.png)
>
>The feature transform is:
>$$\phi((x_{1}, x_{2})) = (1, x_{1}, x_{2}, x_{1}^{2}, x_{1}x_{2}, x_{2}^2)$$
>
>After training a perceptron for 4 iterations, we have:
>$$\theta = (0,0,0,0,4,0)$$
>$$\theta_{0} = 0$$
>which corresponds to
>$$0 + 0x_{1} + 0x_{2} + 0x_{1}^{2} + 4x_{1}x_{2} + 0x_{2}^{2}+ 0 = 0$$
>
>Plotting this, we can see the gray shaded region classified as negative and the white region
>
>![250](ML/attachments/Pasted%20image%2020230710191000.png)
>
>For more complex dataset, the perceptron can still find appropriate classifiers using this trick:
>
>![250](ML/attachments/Pasted%20image%2020230710191349.png)
>![250](ML/attachments/Pasted%20image%2020230710191419.png)




