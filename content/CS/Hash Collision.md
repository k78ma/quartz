---
title: Hash Collision
tags:
  - dsa
  - cs
date: 2024-04-29
aliases:
---
Hash collisions occur when a [[Hashing|hash function]] has the same output for two distinct keys. 
- This is hard to avoid entirely, as having a simple and fast hash function will likely have a lot of collisions, while complex hash functions with low chance of collision tend to be slow, which is counterproductive.

Some methods of dealing with hash collisions:
- [[Separate Chaining]]
- [[Open Addressing]]