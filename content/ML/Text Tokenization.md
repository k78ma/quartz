---
title: Text Tokenization
tags:
  - dl
date: 2026-06-28
aliases:
  - text tokenization
  - tokenization
  - byte pair encoding
  - BPE
  - tokenizer
---
A tokenizer splits the text into smaller constituent units (tokens) from a *vocabulary* of possible tokens. A first instinct would be to have tokens represent words, but there are some difficulties:
- Some words (e.g., names) will not be in the vocabulary.
- It's unclear how to handle punctuation, but this is important. If a sentence ends in a question mark, we must encode this information.
- The vocabulary would need different tokens of the same word with different suffixes. For example, verb tenses – walk, walks, walked, walking. There is no way to clarify that these relations are related.

One way would be to do character-level tokens, using letters and punctuation marks as the vocabulary, but this would mean splitting text into very small parts and requiring the subsequent network to re-learn the relations between them.

In practice, a compromise between letters and full words is used, and the final vocabulary includes both common words and word fragments from which larger and less frequent words can be composed. The vocabulary is composed using a *sub-word tokenizer* such as *byte pair encoding* that greedily merges commonly occurring sub-strings based on their frequency.

![[Tokenization-1782674945175.webp]]

#cards/dl 
Byte pair encoding tokenizer::Iteratively merge most commonly occurring adjacent pair of tokens into a new token. Continue until desired vocabulary size is reached.
<!--SR:!fsrs,2026-10-06T19:32:41.659Z,74,74.05423059,2.09745544,2,4,0,0,2026-07-24T19:32:41.659Z-->