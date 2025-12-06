hardware notes

parts im thinking about:
- esp32 (probably devkit to start, maybe custom board later)
- ws2812b or sk6812 leds, not sure how many yet
- temp/humidity sensor like dht22 or bme280
- maybe a light sensor too

power concerns:
- leds use a lot of current especially at full white
- need to calculate max draw based on led count
- probably need external 5v supply, usb might not be enough
- worried about voltage drop on longer strips

pcb ideas:
- keep it simple, just breakout for esp32 and connectors
- maybe add some filtering caps
- not sure about 2 layer vs 4 layer

routing confusion:
- ground planes are confusing
- dont really get vias yet
- watched some tutorials but still fuzzy on best practices
