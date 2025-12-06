firmware notes

plans:
- use arduino framework on esp32
- keep code simple and modular
- separate sensor reading from animation logic

animation ideas:
- smooth color transitions using lerp or easing
- update leds at consistent intervals
- avoid using delay(), use millis() instead
- maybe state machine for different modes

sensor handling:
- read values every few seconds (sensors are slow anyway)
- average multiple readings to smooth out noise
- map sensor range to color range

waiting on hardware:
- cant really test anything until parts arrive
- will start with basic led blink test
- then add sensor reading
- then combine everything


might write some pseudocode in the meantime

wrote a first version of the firmware using fake sensor values.
right now it just simulates temp/humidity/noise and switches between a few basic "moods".
i haven’t tested this on real hardware yet because i don't have parts, it’s more like a planning draft.
when the parts arrive i’ll swap the fake sensor code with real sensor reads and tune the animations.
