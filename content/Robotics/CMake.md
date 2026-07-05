---
title: CMake
tags:
  - cs
  - robotics
date: 2023-09-23
---
CMake is cross-platform free and open-source software for build automation, testing, packaging and installation of software by using a compiler-independent method. 

Any program can be compiled with `g++` in theory; however, when programs get bigger, a project will have more folders and files. CMake automates this process by compiling all files together by running a long command for you.

- Used it before but learned about it properly in Visual SLAM book

CMake basically automatically creates a Makefile. So we just need to:
- Write `CMakeLists.txt`
- Call `cmake ..` in `/build`
- Call `make` to create executables using `g++`
