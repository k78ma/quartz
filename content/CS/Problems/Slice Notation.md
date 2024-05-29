---
title: Slice Notation
tags:
  - cs
date: 2023-12-21
aliases:
---
In Python, slice notation is used to access a range of elements in an iterable (string, list, tuple, etc.). The general form is:
```python
[start:stop:step]
```

- `start`: Starting index, inclusive. Default to start of string at `0` if omitted.
- `stop:` Stopping index, exclusive. Defaults to end of string at `-1` if omitted.
- `step:` Step/stride. Defaults to `1` if omitted. Can be negative.

A common idiom for reversing a string would be `string[::-1]`. This traverses the whole string but backward because of the negative `step`.