// moodcanvas firmware - early skeleton
// dec 6: just setting things up, no real hardware tests yet

#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  Serial.println("moodcanvas: starting up");

  // TODO: init leds here later
  // TODO: init sensors here later
}

void loop() {
  // for now just print something so we know the loop runs
  static unsigned long lastPrint = 0;
  unsigned long now = millis();

  if (now - lastPrint > 1000) { // every 1 second
    lastPrint = now;
    Serial.println("loop tick - leds + sensors coming later");
  }

  // later:
  // 1. read sensors
  // 2. map values to colors
  // 3. update leds
}
