---
title: "Task Arithmetic"
tag: ml
date: 2023-08-09
draft:
---

Paper: [Editing Models with Task Arithmetic](https://arxiv.org/abs/2212.04089)
- From UWashington, Microsoft, and AI2

Altering model behavior — improving performance on downstream tasks or mitigating biases learned during pre-training. This is obviously important and may have significant implications for [[Alignment]].

Revolves around the idea of a task vector.

>[!info] Task Vector
>Specifies a direction in the weight space of a pre-trained model, such that movement in that direction improves performance on the task.
>To obtain a task vector, subtract the weights of a pre-trained model from the weights of the same model after fine-tuning: $$\tau = \theta_{\text{ft}} - \theta_{\text{pr}}$$

## Capabilities & Applications

- **Forgetting via negation**
	Subtract the task vector to pre-trained model for behavior you want the model to forget. This is useful for censoring things like toxic language for LLMs. Also works with image classification tasks, lowering accuracy on negated tasks
	
- **Learning via addition**
	Add task vector to pre-trained model to improve performance; similar to fine-tuning. You can improve performance on a single task or create multi-task models by adding new tasks to a pre-trained backbone.
	
- **Task Analogies**
	"*A* is to *B* as *C* is to *D*". Basically, combining task vectors from the first three tasks improves performance on the fourth with little or no training data. This improves domain generalization to a new target task without using labeled data from that task.

This seems to basically be the ML equivalent of a lobotomy?