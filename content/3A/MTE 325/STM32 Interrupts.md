---
title: STM32 Interrupts
tags:
  - mte325
date: 2024-05-22
aliases:
  - stm32 interrupts
draft: "true"
---
```c
void BSP_PB_Init(Button_TypeDef Button, ButtonMode_TypeDef ButtonMode)
{
	GPIO_InitTypeDef GPIO_InitStruct;
	/* Enable the BUTTON Clock */
	BUTTONx_GPIO_CLK_ENABLE(Button);
	
	if(ButtonMode == BUTTON_MODE_GPIO)
	{
		/* Configure Button pin as input */
		GPIO_InitStruct.Pin = BUTTON_PIN[Button];
		GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
		GPIO_InitStruct.Pull = GPIO_PULLDOWN;
		GPIO_InitStruct.Speed = GPIO_SPEED_FAST;
		HAL_GPIO_Init(BUTTON_PORT[Button], &GPIO_InitStruct);
	}
	
	if(ButtonMode == BUTTON_MODE_EXTI)
	{
		/* Configure Button pin as input with External interrupt */
		GPIO_InitStruct.Pin = BUTTON_PIN[Button];
		GPIO_InitStruct.Pull = GPIO_NOPULL;
		GPIO_InitStruct.Mode = GPIO_MODE_IT_FALLING; // IT means interrupt, FALLING is falling edge
		HAL_GPIO_Init(BUTTON_PORT[Button], &GPIO_InitStruct);
		/* Enable and set Button EXTI Interrupt to the lowest priority */
		HAL_NVIC_SetPriority((IRQn_Type)(BUTTON_IRQn[Button]), 0x0F, 0x00); // Set priority for the interrupt
		HAL_NVIC_EnableIRQ((IRQn_Type)(BUTTON_IRQn[Button])); // Enable the interrupt
	}
}
```