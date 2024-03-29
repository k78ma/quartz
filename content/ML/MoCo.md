---
title: MoCo
tags:
  - ml
date: 2024-02-18
aliases:
---
MoCo (momentum contrast) – contrastive method from Facebook that uses a dictionary look-up mechanism. 
- For each image, generate 2 augmentations 
- One is fed into a query encoder network, which produces a feature vector
- Other is fed into the key encoder, which produces the key vector.
- Key encoder and query encoder have the same architecture but different params.
- They key encoders parameters are updated as a moving average of the query encoder's parameters, but with a lag introduced by a momentum term. This slow update helps in maintaining consistency in the representations learned over time.
- MoCo maintains a dynamically updated dictionary (queue) of keys. This dictionary stores the representations (keys) generated by the key encoder from previous batches.
- For a given query, its positive key is the one generated from the same image but through the key encoder. Negative keys are all other keys in the dictionary.
- Use a contrastive loss function to pull the query closer to its positive key while pushing it away from the negative keys. The loss is minimized when the query is similar to its positive key and dissimilar from the negative keys.
- After processing a batch, the keys generated by the key encoder are added to the dictionary. If the dictionary exceeds its size limit, the oldest keys are removed to make space for the new ones

 Weakness: Having two separate encoders (query and key encoders) increases the complexity of the model architecture, sensitive to the choice of the momentum coefficient used to update the key encoder, size and management of the dynamic dictionary of keys can significantly impact the model's performance.