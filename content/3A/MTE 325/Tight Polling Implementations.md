---
title: Tight Polling Implementations
tags:
  - mte325
date: 2024-05-15
aliases:
  - tight polling implementations
---
A basic tight polling implementation would look something like this:
```c
// Loop until data is available  
while (not data_available) loop  

// Read the input data  
read data  

// Clear data_available if not done automatically by hardware  
clear data_available  

// Process the input data  
process data  

// Exit subroutine and return to caller  
return
```

Similarly, we can use polling to check if the device is ready to receive data (output from the CPU). Optimistically, we can assume that the device is initially ready to receive data. In this case, the code clears the flag, sends the data, and then tight polls for the device to set the flag again, indicating it is ready to continue.

```c
// Clear manually if required by hardware  
clear ready_to_output

// Output the data  
output data 

// Wait for the device to be ready to continue  
while ( not ready_to_output ) loop  

// Exit subroutine  
return
```

This might work most of the time, there's a danger of losing the first piece sent if the device is not actually ready.

A more conservative option is to tight poll for the device to be ready first, then clear the flag and output the data once its ready to receive it.

```c
// Wait for the device to be ready to continue
while (not ready_to_output) loop

// Clear manually if required by hardware
clear ready_to_output

// Output the data
output data

// Exit subroutine
return
```

Here, we assume the device is not initially ready, poll the device,  wait until device is ready, and then output the data.