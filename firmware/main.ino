// moodcanvas firmware - WIP
// dec 6: planning + writing code structure, no real hardware tests yet

#include <Arduino.h>
#include <FastLED.h>

// ---------------------------
// basic led config (can change later)
// ---------------------------
#define NUM_LEDS    60        // will update once i know final setup
#define DATA_PIN    5
#define BRIGHTNESS  80
#define LED_TYPE    WS2812B
#define COLOR_ORDER GRB

CRGB leds[NUM_LEDS];

// ---------------------------
// fake sensor values for now
// (no actual sensors connected yet)
// ---------------------------
int fakeTemp = 24;       // °C-ish
int fakeHumidity = 50;   // %
int fakeNoise = 0;       // just a random value for now

// which "mood" we are in
enum Mood {
  MOOD_CALM,
  MOOD_COLD,
  MOOD_WARM,
  MOOD_CHAOTIC
};

Mood currentMood = MOOD_CALM;

// ---------------------------
// placeholder: pretend we read sensors
// later this will use real sensor libraries
// ---------------------------
void readSensorsFake() {
  // just slowly nudge values around so stuff changes
  fakeTemp += random(-1, 2);      // -1, 0, or +1
  fakeHumidity += random(-1, 2);
  fakeNoise = random(0, 100);     // totally fake "noise" value

  // clamp values a bit
  if (fakeTemp < 15) fakeTemp = 15;
  if (fakeTemp > 32) fakeTemp = 32;

  if (fakeHumidity < 30) fakeHumidity = 30;
  if (fakeHumidity > 80) fakeHumidity = 80;
}

// ---------------------------
// decide mood based on fake sensor values
// later this will use real sensors
// ---------------------------
void updateMoodFromSensors() {
  if (fakeNoise > 70) {
    currentMood = MOOD_CHAOTIC;
  } else if (fakeTemp <= 20) {
    currentMood = MOOD_COLD;
  } else if (fakeTemp >= 28) {
    currentMood = MOOD_WARM;
  } else {
    currentMood = MOOD_CALM;
  }
}

// ---------------------------
// simple animations per mood
// (all very basic on purpose)
// ---------------------------

void showCalm() {
  // soft blue/purple gradient
  for (int i = 0; i < NUM_LEDS; i++) {
    uint8_t hue = 160 + (i * 2); // bluish range
    leds[i] = CHSV(hue, 100, 150);
  }
  FastLED.show();
}

void showCold() {
  // cold blue / cyan breathing style
  static uint8_t breath = 0;
  breath++;

  uint8_t brightness = beatsin8(10, 40, 180); // slow breathing

  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CHSV(140, 200, brightness); // blue/cyan
  }
  FastLED.show();
}

void showWarm() {
  // warm orange / red flicker
  for (int i = 0; i < NUM_LEDS; i++) {
    uint8_t flicker = random(100, 255);
    leds[i] = CHSV(20 + random(0, 10), 200, flicker); // orange-ish
  }
  FastLED.show();
}

void showChaotic() {
  // chaotic rainbow mess
  static uint8_t baseHue = 0;
  baseHue += 3;

  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CHSV(baseHue + i * 3, 255, 255);
  }
  FastLED.show();
}

// wrapper to pick animation based on mood
void renderMood() {
  switch (currentMood) {
    case MOOD_CALM:
      showCalm();
      break;
    case MOOD_COLD:
      showCold();
      break;
    case MOOD_WARM:
      showWarm();
      break;
    case MOOD_CHAOTIC:
      showChaotic();
      break;
  }
}

// ---------------------------
// setup + loop
// ---------------------------

void setup() {
  Serial.begin(115200);
  delay(500);
  Serial.println("moodcanvas: firmware skeleton (not tested on real hardware yet)");

  // fastled setup
  FastLED.addLeds<LED_TYPE, DATA_PIN, COLOR_ORDER>(leds, NUM_LEDS);
  FastLED.setBrightness(BRIGHTNESS);

  // clear leds
  fill_solid(leds, NUM_LEDS, CRGB::Black);
  FastLED.show();

  randomSeed(analogRead(0)); // basic random seed
}

void loop() {
  // 1) "read" fake sensors (later: real)
  readSensorsFake();

  // 2) update mood based on fake sensor values
  updateMoodFromSensors();

  // 3) log a bit to serial so we can see what's going on
  Serial.print("temp: ");
  Serial.print(fakeTemp);
  Serial.print("  hum: ");
  Serial.print(fakeHumidity);
  Serial.print("  noise: ");
  Serial.print(fakeNoise);
  Serial.print("  mood: ");
  Serial.println(currentMood);

  // 4) draw leds based on mood
  renderMood();

  // 5) small delay so it doesn’t spam too hard
  delay(80);
}
