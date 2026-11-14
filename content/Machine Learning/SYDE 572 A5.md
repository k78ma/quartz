---
title: SYDE 572 A5
tags:
  - ml
date: 2024-03-31
aliases:
---
## Q1

### Part 1
Transformer:
- Transformer-based architectures use self-attention mechanisms to weigh the importance of different words in the input data, regardless of their positional distance from each other. This allows them to better handle long-range dependencies within the text, which is crucial for understanding the context and generating coherent next-word predictions.
- RNNs process data sequentially, while Transformers can process entire sequences of data in parallel during training. This characteristic significantly reduces training time and allows for more efficient scaling with larger datasets and more complex models.
- A weakness of Transformer-based architectures is that the self-attention mechanism requires significant computational resources, especially for longer sequences, due to its quadratic complexity with respect to the sequence length. This aspect can make Transformers more demanding in terms of memory and compute power.

RNN:
- RNNs are specifically designed for sequential data and next word prediction is sequential by nature; context is built up over time.
- RNNs are designed to handle variable-length input sequences naturally, as they maintain a hidden state that is updated with each input token. This can be beneficial for next word prediction in scenarios where the input sequences have varying lengths.
- RNNs typically require less memory compared to Transformers, as they do not need to store the entire input sequence in memory during processing. This can be good when working with resource-constrained environments or when dealing with extremely long sequences.
- RNNs struggle with long-range dependencies due to the vanishing gradient problem, which makes it hard for them to maintain context over long text sequences. This limitation often results in poorer performance on tasks requiring understanding of complex, extended contexts.
### Part 2
CNN:
- CNNs excel at capturing the spatial hierarchy in images through their layered architecture. Usually they do something like this:
	- Detect edges and textures at lower layers
	- Parts of objects in middle layers
	- High-level representations in deeper layers. 
- This hierarchical feature extraction is particularly well-suited for image classification.
- Due to weight sharing and local receptive fields, CNNs are highly efficient in terms of the number of parameters. This efficiency allows them to achieve good performance even with relatively less computational resources.
- Designed to be translation-invariant, meaning the network can recognize objects regardless of their position in the image. This property is crucial for robust image classification.
- Take advantage of inductive biases like spatial locality.
- While CNNs are excellent at identifying local patterns within an image, their ability to capture global context or the relationship between distant parts of an image is limited. This limitation can affect performance in complex scenes or tasks requiring a holistic understanding of the image.

Transformer:
- Transformers process entire input sequences (or sets of image patches) simultaneously, allowing them to capture relationships between any two parts of an image, regardless of their spatial distance. This global view can lead to a more comprehensive understanding of the image as a whole.
- Self-attention mechanism enables parallel processing of the input data, leading to potentially faster training times, especially on modern hardware designed to accelerate such computations.
- Transformer-based models can be scaled up to large sizes and trained on massive datasets, which has led to state-of-the-art performance on various image classification benchmarks.
- Computational complexity of self-attention grows quadratically with the sequence length (or the number of image patches). This growth can make Transformers computationally intensive, especially for high-resolution images.
- Unlike CNNs, which have built-in biases towards capturing local patterns and hierarchies, Transformers lack these inductive biases, making them potentially less efficient at learning spatial hierarchies from scratch without sufficient data and computational power.

### Part 3
We need to add up the following:
- Input-to-hidden weight matrix (`W_ih`) of shape `(hidden_dim, input_dim)`
	- Shape `(200, 100)`
	- Number of parameters: `200 x 100 = 20,000`
- Hidden-to-hidden weight matrix (`W_hh`): of shape `(hidden_dim, hidden_dim)`
	- Shape `(200, 200)`
	- Number of parameters: `200 × 200 = 40,000`
- Bias term for hidden state (`b_hh`)
	- Shape `(200, )`
		- Number of parameters: `200`
Total: `20,000 + 40,000 + 200 = 60,200`
If you want to do this with one formula, it could be written as:
$$
\text{\# of params} = (n_{h}\times  n_{h})+(n_{i}+n_{h}) +n_{h}
$$
### Part 4
We need to add up the following:
- Convolutional filters: Each filter has shape `(kernel_size, kernel_size, input_channels)`
	- Shape of each filter: `(3, 3, 3)`
	- Number of params per filter: `3 x 3 x 3 = 27`
	- Total number of filter params: `64 x 27 = 1728`
- Bias terms:
	- Number of bias terms = Number of filters = `64`
Total: `1728 + 64 = 1792`

### Part 5
Self-attention layer:
- The complexity of computing the attention scores is O($l^2 \times d$), as it involves computing the dot product between each pair of positions in the sequence.
- The complexity of computing the attention output is $O(l \times d^2)$, as it involves matrix multiplication between the attention scores and the value matrix.
- Overall complexity is $O(l^{2}\times d+l \times d^{2})$

Feed-Forward Layer:
- The feed-forward layer consists of two linear transformations with an activation function (like ReLU) in between.
- The complexity of each linear transformation is $O(l \times d^2)$, as it involves matrix multiplication between the input and the weight matrix.
- Activation function has a complexity of $O(l \times d)$, as it is applied element-wise

Layer Normalization:
- The complexity of layer normalization is $O(l × d)$, as it involves computing the mean and variance across the hidden dimension for each position in the sequence.

Residual Connections:
- Residual connections are used to add the input to the output of the self-attention and feed-forward layers. The complexity of residual connections is $O(l \times d),$ as it involves element-wise addition.

Total complexity:
$$
O(l^{2}\times d+l\times d^{2}) + O(l \times d^{2})+O(l\times d)+O(l\times d) = O(l^{2}\times d+l\times d^{2})
$$
If you have more than one Transformer layer, this would turn into $O(N \times (l^{2}\times d+l\times d^{2})$, where $N$ is the number of layers.