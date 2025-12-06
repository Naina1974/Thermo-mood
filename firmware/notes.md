firmware notes

animations:
- got breathing effect working sorta
- color temp mapping is tricky
- cold = blue, hot = red, but the middle colors are weird

sensor stuff:
- reading temp every few seconds
- trying to smooth out the data
- map() function is helpful

timing issues:
- animations stutter when reading sensors
- might need to use interrupts or something
- or just read sensor less often

ideas:
- add a mode button to switch effects
- maybe wifi for remote temp logging
- could add a display later idk
