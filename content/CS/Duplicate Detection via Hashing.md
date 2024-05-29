---
title: Duplicate Detection via Hashing
tags:
  - cs
  - dsa
date: 2024-05-01
aliases:
---
The key idea of [[Hashing|hashing]] is to represent a large object (key, string, whatever) with a single number. The large object is turned into a value that can be manipulated in constant time, and a good hash function makes it unlikely that two different large objects map to the same value. This gives it some nice applications.

## Document Originality
*Is a document unique within a large corpus?* 

Google crawls a webpage — how can it tell whether this is new content, or just a duplicate page that exists elsewhere?

Explicitly comparing the new document $D$ against all $n$ previous documents is hopelessly inefficient for a large corpus. However, we can hash $D$ to an integer, and compare $H(D)$ to the hash codes of the rest of the corpus. Only if there is a collision might $D$ be a possible duplicate. Since we expect few collisions, we can explicitly compare the few documents sharing a particular hash code, which is much less work.

## Plagiarism Detection
*Is part of this document plagiarized?*  

This is a more difficult than the previous application, as any changes to the document document will completely change its hash code. The hash codes produced in the previous application thus cannot help for this more general problem. However, we could build a hash table of all overlapping windows (substrings) of length $w$ in all the documents in the corpus. If there is a match of hash codes, there is likely a common substring of length $w$ between the two documents, which can then be further investigated. We need to make sure $w$ to be long enough so such a co-occurrence is very unlikely to happen by chance.

The biggest downside of this scheme is that the size of the hash table becomes as large as the document corpus itself. Retaining a small but well-chosen subset of these hash codes is exactly the goal of [[Min-wise Hashing|min-wise hashing]]. 

## File Cryptography
*How can I convince you that a file isn’t changed?* 

In a closed-bid auction, each party submits their bid in secret before the announced deadline. If you knew what the other parties were bidding, you could arrange to bid $1 more than the highest opponent and walk off with the prize as cheaply as possible. Thu, you could hack into the computer containing the bids just prior to the deadline, read the bids, and then emerge as the winner.

How can this be prevented? What if everyone submits a hash code of their actual bid prior to the deadline, and then submits the full bid only after the deadline? The auctioneer will pick the largest full bid, but checks to make sure the hash code matches what was submitted prior to the deadline. Such cryptographic hashing methods provide a way to ensure that the file you give me today is the same as the original, because any change to the file will change the hash code.