---
title: Encoder-Decoder Model
tags:
  - dl
date: 2026-07-03
aliases:
  - encoder-decoder model
  - machine translation
  - cross-attention
---
*Encoder-decoder* models are used in sequence-to-sequence tasks, where one text string is converted into another.

Translation between languages is an example of a sequence-to-sequence task. A common approaches is to use both an encoder (to compute a good representation of the source sentence) and a decoder (to generate the sentence in the target sentence). This is called an encoder-decoder model.

Consider translating from English to French. The [[Encoder Model|encoder]] receives the sentence in English and processes it through a series of [[Transformer|transformer layers]] to create an output representation for each token. During training, the [[Decoder Model|decoder]] receives the ground truth translation in French and passes it through a series of transformer layers that use [[Masked Self-Attention|masked self-attention]] and predict the following word at each position. However, the decoder layers also attend to the output of the encoder. Thus, each French output word is conditioned on the previous output words *and* and the source English sentence.

![[Machine Translation-1782926851160.webp]]

## Cross-attention
This is achieved by modifying the transformer layers in the decoder. Originally, these used masked-self attention, followed by a neural network applied individually at each embedding. A new self-attention layer is added between these two components, in which the decoder embeddings attend to to the encoder embeddings. This uses a version of self-attention known as *encoder-decoder attention* or *cross attention*, where the queries are computed from the decoder embeddings and the keys and values are from the encoder embeddings.

![[Machine Translation-1782927031950.webp|563]]


#cards/dl 
Cross-attention::Used in encoder-decoder architectures to allow the decoder to attend to the encoder's output representations. Queries are computed from decoder embeddings, keys and values are from encoder embeddings.
<!--SR:!fsrs,2026-08-04T01:48:58.062Z,9,8.70550539,4.743334,2,3,0,0,2026-07-26T01:48:58.062Z-->