---
title: Initializer LIst
tags:
  - cs
date: 2024-07-29
aliases:
  - initializer list
---
In C++ constructors, initializer lists directly initialize members, avoiding the cost of default construction and subsequent alignment associated with initializing in the constructor body.

Using an initializer list:
```cpp
Tensor(const std::vector<double>& data, bool requires_grad = false)
    : data(data), requires_grad(requires_grad), grad(data.size(), 0.0) {}
```

Initializing in constructor body:
```cpp
class Tensor {
public:
    std::vector<double> data;
    std::vector<double> grad;
    bool requires_grad;

    // Constructor
    Tensor(const std::vector<double>& data, bool requires_grad = false) {
        // Assign values inside the constructor body
        this->data = data;
        this->requires_grad = requires_grad;
        this->grad = std::vector<double>(data.size(), 0.0);
    }
};
```

- When member variables are initialized in the constructor body, they are first default-initialized (if they have a default constructor) and then assigned new values. For example, the `data` vector is first default-constructed (which might allocate an empty vector) and then assigned the actual data, potentially causing an unnecessary allocation and copy.
- If `data` has a large number of elements, default constructing it as an empty vector and then copying the elements from the provided `data` parameter can result in unnecessary memory allocations and operations.