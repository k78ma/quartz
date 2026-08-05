---
title: Deep Learning
tags:
  - dl
  - ml
date: 2024-09-11
aliases:
  - deep learning
---
Notes from:
- [Understanding Deep Learning](https://udlbook.github.io/udlbook/)

Some of these notes are also included in [[Machine Learning]].
## Foundations
- [[Tensor]]
- [[Einstein Notation]]

## Neural Networks
- [[Supervised Learning]]
    - [[Linear Regression]]
- [[Discriminative vs. Generative Models]]
### Shallow Neural Networks
- [[Shallow Neural Network]]
- [[Universal Approximation Theorem]]
- [[Multivariate Inputs and Outputs]]
### Deep Neural Networks
- [[Composing Shallow Networks]]
- [[Deep Neural Network]]
- [[Shallow vs. Deep Networks]]

## Loss Functions
- [[Loss Function]]
- [[Conditional Probabilistic Perspective of Learning]]
- [[Maximum Likelihood Criterion]]
- [[Log-Likelihood Criterion]]
- [[Loss Function Recipe]]
    - [[Univariate Regression]]
        - [[Heteroscedastic Regression]]
    - [[Binary Classification]]
    - [[Multi-class Classification]]
- [[Cross-Entropy Loss]]

## Model Fitting/Training
- [[Model Optimization]]
- [[Gradient Descent]]
    - [[Gradient Descent for Linear Regression]]
    - [[Gradient Descent for Non-convex Gabor Model]]
- [[Stochastic Gradient Descent]]
- [[Momentum (ML)]]
    - [[Nesterov Accelerated Momentum]]
- [[Adaptive moment estimation|Adam]]
- [[Line Search]]
 
## Gradients and Initialization
- [[Backpropagation Intuition]]
- [[Backpropagation Algorithm]]
- [[Backpropagation Scalar Example]]
- [[Backpropagation 3-Layer Example]]
- [[Parameter Initialization]]

## Model Performance
- [[Sources of Test Error]]
    - [[MNIST 1D Test Error Example]]
- [[Mathematical Formulation of Test Error]]
- [[Reducing Model Error]]
- [[Double Descent]]
- [[Inductive Bias]]
- [[Curse of Dimensionality]]
- [[Hyperparameter Search]]
- [[Cross-Validation]]
- [[Model Capacity]]

## Regularization
- [[Regularization]]
- [[Explicit Regularization]]
    - [[L2 Regularization]]
- [[Implicit Regularization]]

## Heuristics for Improvement
- [[Early stopping]]
- [[Model Ensembling]]
- [[Dropout]]
- [[Applying Noise During Training]]
    - [[Adversarial Training]]
- [[Bayesian Inference]]
- [[Transfer learning]]
- [[Multi-task Learning]]
- [[Self-supervised Learning]]
- [[Data Augmentation]]

## Convolutional Networks
- [[Invariance and Equivariance]]
- [[Convolutional Neural Networks]]
- [[1D Convolution]]
- [[Convolutional Layer]]
- [[Feature Map]]
- [[Receptive Field]]
- [[2D Convolution]]
    - [[2D Convolution Example]]
- [[Operations on Image Representations]]
- [[AlexNet]]
- [[VGG]]
- [[YOLO]]
- [[Semantic Segmentation Network]]

## Residual Networks
- [[Shattered Gradients]]
- [[Residual Networks]]
- [[Residual Connections]]
- [[Exploding Gradients in Residual Networks]]
- [[Batch Normalization]]
    - [[BatchNorm Backprop]]
- [[ResNet]]
- [[DenseNet]]
- [[U-Net]]
    - [[Hourglass Network]]

## Transformers
- [[Text Data Processing]]
- [[Dot-Product Self-Attention]]
- [[Positional Encoding]]
- [[Multi-Head Self-Attention]]
- [[Transformer]]
    - [[Transformer Summary]]
- [[Transformers for NLP]]
    - [[Vector Embeddings]]
        - [[Embedding Model]]
    - [[Encoder Model]] – BERT
    - [[Decoder Model]] – GPT-3
        - [[Masked Self-Attention]]
        - [[KV Cache]]
     - [[Encoder-Decoder Model]] – Machine translation
- [[Transformers for Long Sequences]]
- [[Transformers for Images]]
    - [[ImageGPT]]
    - [[Vision Transformer]]
    - [[Multi-Scale Vision Transformers]] – Swin Tranformer, DaViT

## Graph Neural Networks
- [[Graph Neural Networks]]
- [[Graph]]
- [[Graph Representation]]
- [[Inductive vs. Transductive Models]]
- [[Graph Convolutional Network]]
    - [[Graph Classification]]
    - [[Node Classification]]
- [[Graph Attention]]
- [[Edge Graph]]

## Unsupervised Learning
- [[Unsupervised Learning]]
- [[K-means]]
- [[Generative Models]]

## Generative Adversarial Networks
- [[Generative Adversarial Network]]
    - [[GAN Intuition]]
- [[Deep Convolutional GAN]]
- [[GAN Stability Analysis]]
- [[Wasserstein GAN]]
- [[GAN Quality Improvements]]
- [[Conditional Generation GAN Models]] – Conditional GAN, ACGAN, InfoGAN
- [[Image Translation GAN Models]]
    - [[Pix2Pix]]
    - [[Super Resolution GAN|SRGAN]]
    - [[CycleGAN]]
- [[StyleGAN]]

## Normalizing Flows
- [[Normalizing Flows]]
    - [[1D Normalizing Flows Intuition]]
- [[Linear Flows]]
- [[Elementwise Flows]]
- [[Coupling Flows]]
- [[Autoregressive Flows]]
- [[Residual Flows]]
- [[Multi-scale Flows]]
- [[Generative Flows]]
- [[Normalizing Flows for Modeling Densities]]

## Variational Autoencoders
- [[Variational Autoencoder]]

## Diffusion Models
- [[Diffusion Models]]

## Learning Theory
- [[Neural Tangent Kernel]]

## Other
- [[Precision Metric]]
- [[Recall Metric]]
- [[Precision-Recall Curve]]
- [[Flow Matching]]

## Practical
- [[Einops]]
- [[PyTorch Tensor Creation]]
- [[NumPy Axes]]

## Exercises
- [[UDL Problems]]

## Projects
- [[Counterfactual Probing]]
- [[Embed to Control]]