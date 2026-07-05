---
title: STM32 ADC
tags:
  - mte325
date: 2024-07-10
aliases:
  - stm32 adc
---
- `hadc1.Init.ClockPrescaler`: Determines the division factor applied to the ADC clock. The ADC clock is derived from the APB2 peripheral clock (PCLK2). The pre-scaler is used to scale down the PCLK2 to a suitable frequency for the ADC operations.
	- `ADC_CLOCK_SYNC_PCLK_DIV2` (resulting in a higher ADC clock speed) provided stable values because the ADC could sample more frequently and accurately. DIV4 and DIV8 resulted in unstable values.
- `hadc1.Init.ScanConvMode`: Allows the ADC to scan multiple channels in a sequence. Enable this if we need to read multiple ADC channels in a single conversion sequence. For example, multiple sensors connected to different ADC channels and want to read all of them in one go.
- `hadc1.Init.ContinuousConvMode`: This mode makes the ADC continuously perform conversions without stopping. The ADC starts another conversion as soon as the previous one is finished. Enable if we need continuous sampling of the input signal. 
- `hadc1.Init.DiscontinuousConvMode`: This mode allows the ADC to perform conversions in smaller sequences rather than scanning all the channels at once. It is typically used in conjunction with Scan Conversion Mode.
- `hadc1.Init.ExternalTrigConvEdge`: Specifies the edge of the external trigger used to start the conversion.
	- `ADC_EXTERNALTRIGCONVEDGE_NONE`: No external trigger, conversion is started by software. This is probably what we want?
	- `ADC_EXTERNALTRIGCONVEDGE_RISING`: Conversion starts on the rising edge of the external trigger.
	- `ADC_EXTERNALTRIGCONVEDGE_FALLING`: Conversion starts on the falling edge of the external trigger.
	- `ADC_EXTERNALTRIGCONVEDGE_RISINGFALLING`: Conversion starts on both rising and falling edges of the external trigger.
- `hadc1.Init.DataAlign`: Data alignment refers to how the ADC conversion result is stored in the data register. This affects how the digital output of the ADC is presented and accessed in memory. 
	- `ADC_DATAALIGN_RIGHT`: ADC conversion result is stored starting from the least significant bit (LSB).
		- `0x0ABC` → `0x0ABC`
	- `ADC_DATAALIGN_LEFT`: The ADC conversion result is stored starting from the most significant bit (MSB).
		- `0x0ABC` → `0xABC0`
	- We just want to use standard right alignment I think.
- `hadc1.Init.NbrOfConversion`: Specifies the number of conversions to be performed in the regular channel group. Value is any integer value, typically `1` if you are only converting a single channel.
	- When we want to do 2 potentiometers, we will set this to 2, and enable `ScanConvMode`
- `hadc1.Init.DMAContinuousRequests`: Specifies whether the ADC generates DMA requests continuously.
	- Enable this if you are using DMA to transfer ADC data to memory and need continuous data transfer.
	- Disable this if you are not using DMA or only need single conversions without continuous data transfer
- `hadc1.Init.EOCSelection`: Specifies what triggers the end-of-conversion (EOC) flag.
	- `ADC_EOC_SINGLE_CONV`: EOC flag is set at the end of a single conversion.
	- `ADC_EOC_SEQ_CONV`: EOC flag is set at the end of a sequence of conversions.