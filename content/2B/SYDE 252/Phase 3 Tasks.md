---
title: Phase 3 Tasks
tags:
  - syde252
date: 2023-12-03
aliases:
---
### Task 10: Programming Bandpass Filter Bank
We write a general function to generate a signal oscillating with the a certain frequency:
```python
def generate_cosine_signal(freq, length, samplerate):
	t = np.arange(length) / samplerate
	return np.cos(2 * np.pi * freq * t)
```

### Task 11: Amplitude Modulation
Similarly, a general function for amplitude modulation is written.
```python
def amplitude_modulate(cosine_signal, rectified_signal):
	return cosine_signal * rectified_signal
```

### Tasks 12 + 13: Output
Using the functions defined above, a cosine signal is generated for each band, oscillating around the central frequency of each band. Then, its amplitude is modulated using the rectified envelopes found in Phase 2. These signals are then all added together in order to generate an output signal; following the suggestion, this signal is normalized using the maximum of its maximum value. The sound is then played using the previously defined `play_sound()` function from Phase 1.

```python
data, samplerate = get_audio_info('audio.mp3')
N = 20
bands = define_frequency_bands(N)

filtered_signals = [create_bandpass_filter(band, samplerate, filter_type='IIR')(data) for band in bands]

envelopes = [extract_envelope(signal, samplerate) for signal in filtered_signals]

modulated_signals = []
for i, band in enumerate(bands):
	central_freq = np.sqrt(band[0] * band[1]) # Calculate central frequency
	cosine_signal = generate_cosine_signal(central_freq, len(data), samplerate)
	modulated_signal = amplitude_modulate(cosine_signal, envelopes[i])
	modulated_signals.append(modulated_signal)

# Sum all signals for the output
output_signal = np.sum(modulated_signals, axis=0)

max_abs_value = np.max(np.abs(output_signal))

normalized_output_signal = output_signal / max_abs_value

play_sound(output_signal, samplerate)
```

### Task 14: Initial Design Evaluation
Our design evaluation methodology (outlined in detail in phase 1) evaluates a given design by testing it across 8 audio samples. For each sample, a score between 0 and 5 is given by our team for the three categories of "Overall Clarity", "Word intelligibility", and "Similarity to original". Thus, each filter has a maximum score of 120 (5 points * 3 categories * 8 audio samples = 120 points).

Our initial design has the following parameters:
- `N = 20` (20 frequency bands, split logarithmically, no overlap)
- Filter type: FIR
- Cut-off frequency: 400

This initial design performed poorly. While the general cadence of the audio could be heard, words were completely unintelligible and there was a lot of buzzing noise, leading to a low score of 27/120.
### Task 15: Design Iterations
#### Spacing Types

#### Overlapping sub bands

#### IIR vs FIR filters

#### Filter Types

#### Envelope LPF cut-off frequency


### Task 16: Number of Channels
