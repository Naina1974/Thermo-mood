software notes

animation stuff:
- got basic color fades working
- rainbow cycle looks ok but kinda choppy
- trying to make smooth transitions between temps

sensor reading:
- dht22 is slow, like 2 sec between reads
- sometimes get weird spikes in data
- need to average readings maybe

issues:
- leds flicker sometimes when updating fast
- timing is off, delays mess with animations
- fastled library helps but still learning it
- might need to use millis() instead of delay()
