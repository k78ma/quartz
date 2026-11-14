---
title: Text Data Processing
tags:
  - dl
date: 2026-06-26
aliases: text data processing
---
Consider a string of text data:
- *"The restaurant refused to serve me a ham sandwich because it only cooks vegetarian food. In the end, they just gave me two slices of bread. Their ambiance was just as good as the food and service."*

Our goal is to design a network to process this text into a representation suitable for downstream tasks. For example, it might be used to classify the review as positive or negative, or to answer questions like "Does the restaurant serve steak?". There are some observations to make about this problem.

First, the encoded input can be surprisingly large. Each of the 37 words above might be represented by represented by an embedding vector of length 1024, so the encoded input would be length $37\times 1024$ even for this small passage. Text passages can be much longer, so fully connected networks are not practical.

Second, each input (one or more sentences) is of a different length; hence, it's not even obvious how to apply a fully connected network. These observations suggest that the network should share parameters across words at different input positions, similarly to how convolutional networks share parameters across different image positions.

Third, language is ambiguous. For example, it's unclear from the syntax alone that the pronoun "it" refers to the restaurant and not to the ham sandwich. To understand the text, the "it" should somehow be connected to "restaurant". In the parlance of transformers, the former word should pay [[Dot-Product Self-Attention]] to the latter. This implies that there must be connections between the words, and the strength of these connections depends on the words themselves. These connections need to extend large text spans; for example, the word "their" in the last sentence also refers to the restaurant.

#cards/dl 
Why are fully connected networks not practical for text?::Text has variable-length inputs, and FC layers need an impractically large number of parameters for long sequences.
<!--SR:!fsrs,2026-12-11T20:27:18.544Z,125,124.69358716,2.09745544,2,4,0,0,2026-08-08T20:27:18.544Z-->