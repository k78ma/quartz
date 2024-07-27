---
title: 2-ADC Bug
tags:
  - mte325
date: 2024-07-11
aliases:
---
We wanted to set up two ADCs so that we could control both motors at the same time and earn the bonus mark. This led to various bugs that took a long time to resolve - likely around 3 hours in total.

The main bug we had was an issue with flipping values between the ADCs. For example, having one potentiometer set to the minimum value and one potentiometer set to the maximum value should produce readings of:
```
63, 0
63, 0
63, 0
63, 0
```

Instead, we observed what we called "flipping":
```
63, 0
0, 63
0, 63
63, 0
```

This "flipping" behavior was mostly random, which made it harder to debug because there would be periods of time where no flipping occurred, leading us to believe that we had fixed the problem.

We believed that the flipping problem was due to the configuration of the ADC. Thus, in our initialization function, we tried changing various configuration parameters.
- Clock speed: We tried using slower clock speeds, as we thought that higher clock speeds might be introducing noise. Unfortunately, changing the clock speed did not fix the flipping problem.
- Sampling time: Similarly, we tried using a longer sampling time in order to reduce noise and "average out" the values being read. Changing the sampling time also did not fix the problem.
- We tried different `DMAContinuousRequests` and `EOCSelection` settings but these also did not improve anything, it seemed like our original settings were the correct ones.

We also looked into some hardware-based solutions:
- We experimented with adding capacitors acting as low-pass filters to reduce noise. This did not fix the flipping issue.
- We looked into the difference analog and digital grounds. Unfortunately, it seemed like we would have to solder to add header pins in order to access the analog ground pin on the board, so we did not pursue this direction.

We also walked through the code step-by-step using the VSCode debugger. The code appeared to function correctly, but the flipping issue persisted, indicating that the problem might not be with the code logic but with how data was being handled.

Finally, through online research we found that our DMA initialization was insufficient. Aside from enabling the ADC to make DMA requests, we also needed to set up a DMA controller, and link the DMA handle to the ADC handle

```c
void DMA_Init(void) {

	// Enable the clock for DMA2
	__HAL_RCC_DMA2_CLK_ENABLE();
	
	  
	// Configure DMA for ADC
	hdma_adc1.Instance = DMA2_Stream0; // Set the DMA instance to Stream 0 of DMA2
	hdma_adc1.Init.Channel = DMA_CHANNEL_0; // Set the DMA channel to 0
	hdma_adc1.Init.Direction = DMA_PERIPH_TO_MEMORY; // Set the direction of data transfer from peripheral to memory
	hdma_adc1.Init.PeriphInc = DMA_PINC_DISABLE; // Disable peripheral increment mode
	hdma_adc1.Init.MemInc = DMA_MINC_ENABLE; // Enable memory increment mode
	hdma_adc1.Init.PeriphDataAlignment = DMA_PDATAALIGN_WORD; // Set peripheral data alignment to word (32-bit)
	hdma_adc1.Init.MemDataAlignment = DMA_MDATAALIGN_WORD; // Set memory data alignment to word (32-bit)
	hdma_adc1.Init.Mode = DMA_CIRCULAR; // Set DMA mode to circular
	hdma_adc1.Init.Priority = DMA_PRIORITY_HIGH; // Set DMA priority to high
	hdma_adc1.Init.FIFOMode = DMA_FIFOMODE_DISABLE; // Disable FIFO mode
	HAL_DMA_Init(&hdma_adc1); // Initialize the DMA with the specified parameters
	
	// Link the DMA handle to the ADC handle
	__HAL_LINKDMA(&hadc1, DMA_Handle, hdma_adc1);

}

HAL_ADC_Start_DMA(&hadc1, adcBuffer, ADC_BUFFER_LENGTH);
```

By properly initializing and linking the DMA to the ADC, we ensured that the DMA controller would handle data transfers consistently and reliably. This setup allowed the ADC to perform conversions and automatically transfer the results to the memory buffer without CPU intervention. The corrected initialization eliminated the flipping behavior, most likely due to reduction of timing inconsistencies and race conditions.

This also had the added benefit of reducing CPU load, as the CPU was free from handling ADC conversion interrupts and manually reading ADC values, reducing its load and avoiding potential missed conversions.

From this experience, we learned about the complexity of embedded systems debugging, where there are a large number of possible error sources. Thus, systematic troubleshooting, where one parameter is changed at a time, can help isolate the root cause, although it may feel slow and hopeless at times. We also learned the value of online research and community forums as a resource for embedded systems, and the importance of having well-documented code so that we know where we left off between working sessions.