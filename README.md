# MoodCanvas

MoodCanvas is a small LED display that reacts to what’s happening in the room.  
I’m using an ESP32 + sensors (temp/humidity and maybe sound) to control the colors and animations, so the lights actually change based on the “mood” of the room instead of just running random rainbow stuff.

The goal is to make something that looks nice in a bedroom or desk setup, with simple ambient vibes instead of loud flashy RGB gamer lights.

I’m planning to build a wood + epoxy enclosure so it doesn’t look like exposed wires sitting on my table.

This whole thing is mostly me teaching myself:
- PCB design
- electronics/power stuff
- firmware/animations
- woodworking + epoxy  

---

## 🔧 Current Progress

### Hardware:
- installed KiCad and started placing footprints for the ESP32 + connectors  
- watched a bunch of tutorials to understand routing + spacing  
- still figuring out power requirements for a lot of LEDs  
- mostly experimenting with layout right now, nothing final

### Firmware:
- set up a basic project file so there’s somewhere to write code later  
- planning how animations might work based on sensor input  
- reading about FastLED vs NeoPixel libraries  
- no real testing yet because I don’t have parts

### Design:
- sketched some basic enclosure ideas in a notebook  
- looking at wood + diffuser options  
- trying to make it look minimal and not like a science project  
- still deciding on final shape/size

I’m still very early in the build, mostly learning stuff and trying to plan everything before buying parts so I don’t waste money.

---

## 📸 Work in Progress Screenshots

Here are some early screenshots from KiCad and a few rough sketches.  
They’re not final at all — just me figuring out placement, spacing, and general layout ideas.

![pcb](./images/PCB.jpg)  
![sketch](./images/Sketch.jpg)

Still experimenting with footprints and trying to understand how routing + power traces should work before committing to a full design.

---

## 📁 Repo Structure

```
moodcanvas/
│
├── firmware/      # esp32 code + notes
├── hardware/      # kicad files + pcb progress
├── cad/           # enclosure sketches + ideas
├── images/        # screenshots + photos
├── tools/         # old experiments
│   └── thermo-mood-cube-web-sim/
├── docs/          # logs, notes, bom, etc
└── README.md

```
---

## 🧪 Old web sim thing

Before starting the hardware version I made a small web app to play with color transitions.  
It wasn’t meant to be a final project, just a quick experiment.

I moved it to the `tools/` folder because it’s not part of this build anymore.  
Full guide here: `tools/thermo-mood-cube-web-sim/readme.md`

---

## 📚 Things I’m Learning 

- pcb design + footprints
- proper routing + spacing
- power requirements for leds
- reading sensors on esp32
- mapping data → colors
- woodworking + epoxy casting

Basically everything.

---

## 🚧 Next Steps

### Hardware:
- keep learning KiCad  
- try a cleaner layout with better spacing  
- figure out power routing for LEDs  
- decide when to order prototype PCBs  

### Firmware:
- pick an LED library  
- plan basic animation structure  
- write simple test code once parts arrive  

### Enclosure:
- pick dimensions  
- choose diffuser material  
- make a small prototype (cardboard or wood)  

---

## 🧠 Why I’m Doing This

I wanted to build something that makes my room feel more “alive.”  
Lights change atmosphere a lot, so having them react to the environment sounded fun.

Also, I wanted a reason to learn electronics properly, not just copy tutorials.

---

## 📝 Notes

This repo will be messy while I’m building.  
I’ll post more pictures, logs, and updates as I make progress.

Everything here is work-in-progress, and I’m still figuring most of it out as I go.
