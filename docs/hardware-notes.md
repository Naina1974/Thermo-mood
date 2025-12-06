hardware notes

parts im thinking about:
- esp32 devkit or maybe esp32-c3 mini
- ws2812b leds or sk6812
- dht22 or bme280 for temp sensing
- some capacitors for power filtering

pcb problems:
- routing is confusing lol
- not sure where to put the power traces
- ground plane stuff is weird

power concerns:
- leds draw a lot of current when bright
- might need external 5v supply
- voltage drop could be an issue with long led strips
- need to figure out decoupling caps placement
