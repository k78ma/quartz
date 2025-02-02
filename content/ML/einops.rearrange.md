---
title: einops.rearrange
tags:
  - dl
date: 2025-02-02
aliases:
  - einops.rearrange
---
- https://einops.rocks/api/rearrange/

Tensor re-arrange with templates

```python
def rearrange_1() -> t.Tensor:
    """Return the following tensor using only torch.arange and einops.rearrange:

    [[3, 4],
     [5, 6],
     [7, 8]]
    """
    tensor = t.arange(3, 9)
    return rearrange(tensor, "(h w) -> h w", h=3, w=2)

def rearrange_2() -> t.Tensor:
    """Return the following tensor using only torch.arange and einops.rearrange:

    [[1, 2, 3],
     [4, 5, 6]]
    """
    tensor = t.arange(1,7)
    return rearrange(tensor, "(h w) -> h w", h=2, w=3)


assert_all_equal(rearrange_2(), t.tensor([[1, 2, 3], [4, 5, 6]]))


def rearrange_3() -> t.Tensor:
    """Return the following tensor using only torch.arange and einops.rearrange:

    [[[1], [2], [3], [4], [5], [6]]]
    """
    tensor = t.arange(1,7)
    return rearrange(tensor, "a -> 1 a 1")
```