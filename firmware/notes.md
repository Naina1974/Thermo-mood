# firmware notes

## plans
- use arduino framework on esp32
- keep code simple + modular-ish
- separate sensor reading from animation logic
- maybe a tiny state machine

## animation ideas
- smooth transitions
- update at consistent intervals
- avoid delay(), use millis()
- different “moods” based on sensors

## sensor handling
- read values every few seconds
- average values to remove noise
- map temp/humidity → colors

## current status
- code compiles
- using fake sensor data because no hardware yet
- animations kinda work in theory, but not tested

## waiting on hardware
- can’t test anything until parts arrive
- first step: simple LED test
- then add sensors
- then combine everything
