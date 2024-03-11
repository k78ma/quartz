---
title: Docker vs. VM
tags:
  - cs
date: 2024-02-28
aliases:
---
Basic difference from the user's point of view is the level of encapsulation: 
- VM includes a full copy of OS
- Docker containers share the host system’s kernel but package the application and its dependencies into a container that runs as an isolated process in user space

## VM
VMs are built on top of physical hardware; they use a hardware abstraction layer called the hypervisor to abstract the hardware resources and distribute them across multiple virtual environments.
- Since I just took an OS class; the hypervisor is analogous to an OS virtualizing CPU resources for threads and processes

Each VM includes a full copy of an operating system, the application to be run, and the necessary binaries and libraries. With the hypervisor providing hardware abstraction, VMs are fully isolated from each other, mimicking separate physical computers.

## Docker
Docker images are basically a way to package and run applications along with their dependencies in a portable and isolated environment, including: the code, a runtime environment, libraries, environment variables, and configuration files.. A container is a runtime instance of Docker image.

Docker containers share the host system’s kernel, they don't include a full OS.

Containers have their own filesystem. 
- This is achieved through a union filesystem, which stacks read-only layers with a writable layer on top where the container can modify data. 
- When you modify an existing Docker image, Docker only adds a new layer on top of the base image, making it very efficient in terms of disk space and speed.

Docker containers achieve isolation and resource allocation through Linux features; namespaces and control groups.
- Namespaces – Isolation
	- Isolate process ID space – different PID namespaces can have the same PID
	- Network namespace: Provides isolated instances of the network stack, including network interfaces, routing tables, port numbers, etc
	- User namespace: Isolates user and group IDs, allowing a process to have a different set of privileges for interacting with system resources outside of its namespace.
- Control groups (cgroups) – Resource allocation
	- Provide a mechanism for aggregating/partitioning sets of tasks (processes), and all their future children, into hierarchical groups with specialized behavior.
	- Limit the amount of system resources a group of processes can consume. This prevents any single process or user from monopolizing system resources.

Where it gets tricky is cross-platform. I used to have a Windows computer and use Docker on Windows; in that case, my understanding is that Docker will actually create a lightweight Linux VM (Hype-V), and I think similar things are done for Mac too. So in this case, you might be doing some virtualization or emulation. 

## Virtualization vs. Emulation
- Virtualization involves creating a virtual instance of device hardware, for example allowing multiple VMs to run on a single physical machine. The VMs share the host's hardware resources, but each VM is isolated and operates as if it has its own hardware.
- Emulation involves using software replicating the functionality of one system on another system with different hardware. The emulator translates the instructions of the emulated (guest) system into instructions that the host system's CPU can execute. Emulation is typically slower than virtualization because it translates the hardware calls of the emulated device into something that the host can execute, which involves a significant overhead. 