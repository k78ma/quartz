---
title: U-Net
tags:
  - dl
date: 2026-06-25
aliases:
  - hourglass networks
---
We saw a basic [[Semantic Segmentation Network|semantic segmentation network]] that used an encoder-decoder hourglass structure. 
- The encoder downsamples the image until the receptive fields are large and information is integrated from across the image. 
- The decoder then upsamples it back to the size of the original image. The final output is the probability over possible object classes at each pixel.

The drawback of this architecture is that the low-resolution representation in the middle of the network must "remember" the high resolution details to make the final results accurate. This is unnecessary if [[Residual Connections|residual connections]] transfer the representations from the encoder to their partner in the decoder.

**U-Net** is an encoder-decoder architecture where the earlier representations are concatenated to the later ones.
- The original implementation used [[1D Convolution#Padding|"valid" convolutions]], so the spatial size decreases by two pixels each time a $3\times 3$ convolutional layer is applied. This means that the upsampled version is smaller than its counterpart in the encoder, which must be cropped before concatenation.
- Subsequent implementations use zero-padding, where no cropping is necessary.

![[U-Net-1782410177895.webp]]

Note that U-Net was completely convolutional, so after training, it can be run on an image of any size.
- Note that we don't train with arbitrarily sized images. Batch training (especially with batchnorm) wouldn't be effective; if every image has different dimensions, they cannot be stacked into a single tensor without padding or resizing. Also, GPU memory uses varies with image size so consistent sizing is better for memory use.

#cards/dl 
Why can U-Net be run on images of any size?::It's completely convolutional, with no FC layers.
<!--SR:!fsrs,2026-07-03T02:53:07.453Z,7,7.31530068,2.11121424,2,2,0,0,2026-06-26T02:53:07.453Z-->

U-Net
?
Encoder-decoder architecture for segmentation where we concatenate earlier representations with later ones.

![[U-Net-1782410177895.webp]]
<!--SR:!fsrs,2026-07-03T02:53:03.412Z,7,7.31530068,2.11121424,2,2,0,0,2026-06-26T02:53:03.412Z-->
+++