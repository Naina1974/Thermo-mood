#include <FastLED.h>

#define NUM_LEDS 256
#define DATA_PIN 5

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(40); // don't blind myself
}

void loop() {
  for(int i = 0; i < NUM_LEDS; i++){
    leds[i] = CHSV((i + millis()/10), 255, 200);
  }
  FastLED.show();
}
