---
title: PyTorch Tensor Creation
tags:
  - cs
  - torch
date: 2025-02-03
aliases:
  - pytorch tensor creation
  - torch.Tensor
  - torch.tensor
---
The best practice to avoid surprises and ambiguity is to use `t.tensor` and pass the dtype explicitly.

Other good ways to create tensors are:

- If we already have a tensor `input` and want a new one of the same size, use functions like [`t.zeros_like(input)`](https://pytorch.org/docs/stable/generated/torch.zeros_like.html). This uses the dtype and device of the input by default, saving you from manually specifying it.
- If we already have a tensor `input` and want a new one with the same dtype and device but new data, use the [`input.new_tensor`](https://pytorch.org/docs/stable/generated/torch.Tensor.new_tensor.html#torch.Tensor.new_tensor) method.
- Many [other creation functions](https://pytorch.org/docs/stable/torch.html#creation-ops) exist, for which you should also specify the dtype explicitly.
## torch.Tensor (Bad!)
The `torch.Tensor` constructor can be ambiguous because the first argument can be interpreted as either data or shape. It also coerces input data to the default floating point type.

Ambiguity:
```python
x = t.arange(5)

y = t.Tensor(x.shape)
print(y) # tensor([0., 0., 0., 0., 0.])
# Input is interpreted as shape, creating an uninitialized tensor of size 5

y2 = t.Tensor(tuple(x.shape))
print(y2) # Gives tensor([5.])
# Input is interpreted as data because tuple(x.shape) is (5,)

y3 = t.Tensor(list(x.shape))
print(y3) # Gives tensor([5.])
# Input is interpreted as data because list(x.shape) is [5]
```

Type coercion:
```python
x = t.Tensor([False, True])
print(x.dtype) # Gives torch.float32
```

## torch.tensor
The creation function `torch.tensor` is a better option. With no dtype specified, it will try to detect the type of the input automatically, which is what we usually want.

```python
try:
    print(t.tensor([1, 2, 3, 4]).mean())
except Exception as e:
    print("Exception raised: ", e)

# Exception raised:  mean(): could not infer output dtype. Input dtype must be either a floating point or complex dtype. Got: Long
```

NumPy's `np.mean` would coerce to float and return 2.5 here, but PyTorch detects that your inputs all happen to be integers and refuses to compute the mean because it's ambiguous if you wanted 2.5 or 10 // 4 = 2 instead.