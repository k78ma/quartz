---
title: C++ Shared and Static Libraries
tags:
  - cs
date: 2023-09-23
---
Often, we have a file like `main.cpp` calling functions from other files, which are called libraries. There are two types:
- Static libraries (`.a`)
- Shared libraries (`.so`)

A static library will generate a copy each time it’s called, the shared library only has one copy, which saves space.

In `CMake`:
```cmake
// Static library
add_library( hello libHelloSLAM.cpp )

// Shared library
add_library( hello_shared SHARED libHelloSLAM.cpp)

// Link files
target_link_libraries( helloExecutable hello )
```

This `add_library` is needed whenever we are including `.h` files and these interface files have implementation files (`.cpp`). For existing libraries like [[Eigen Basics]], `add_library` isn’t needed because it doesn’t have `.cpp` files, only `.h`.

Common CMake commands:
- `cmake_minimum_required`
- `project`
- `include_directories`
- `add_library`
- `add_executable`
- `target_link_libraries`

Using OpenCV with CMake:
```cmake
cmake_minimum_required(VERSION 2.8)
project( DisplayImage )
find_package( OpenCV REQUIRED )
include_directories( ${OpenCV_INCLUDE_DIRS} )
add_executable( DisplayImage DisplayImage.cpp )
target_link_libraries( DisplayImage ${OpenCV_LIBS} )
```