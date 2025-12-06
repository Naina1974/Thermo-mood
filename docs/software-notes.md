software notes

planning to use c++ with arduino framework
seems like the easiest way to get started with esp32
platformio might be useful later

basic idea:
- read sensor values (temp, humidity, etc)
- map those values to colors or patterns
- update leds smoothly without flickering

possible modes:
- temperature reactive (cold=blue, warm=orange/red)
- breathing/pulsing effect
- slow color transitions
- maybe a party mode but thats not the main goal

no real code written yet
waiting until i have hardware to test with
dont wanna write a bunch of stuff that doesnt work

might use fastled library, heard its good for ws2812
need to research timing and non-blocking code
