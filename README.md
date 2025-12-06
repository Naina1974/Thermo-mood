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
- made a rough PCB layout in KiCad
- figured out basic footprints for ESP32, LEDs, and some passives
- routed a couple traces just to test things
- learning how to not destroy everything with current draw

### Firmware:
- testing LED animations on ESP32
- trying to map sensor input to animations
- experimenting with color palettes

### Design:
- sketched enclosure ideas
- thinking about a diffuser panel or frosted acrylic
- looking at ways to mount sensors cleanly

This is my first PCB attempt, so I’m starting small with just a few LEDs before scaling up to a full matrix.

---

## 📸 Work in Progress Screenshot

Here is a screenshot of my first PCB experiment in KiCad & some sketchs (very unfinished):

![pcb](./images/PCB.jpg)
![sketch](./images/Sketch.jpg)
![sketch2](./images/sketch2.jpg)

I’m still just placing parts and figuring out spacing/routing, not actually doing final wiring yet.

---

## 📁 Repo Structure

```
moodcanvas/
│
├── firmware/      # ESP32 code + tests
│
├── hardware/      # KiCad PCB files + notes
│
├── cad/           # enclosure sketches + models
│
├── images/        # photos + screenshots
│
├── tools/         # experiments + side projects
│   └── thermo-mood-cube-web-sim/
│
├── docs/          # build notes, logs, BOM, etc
│
└── README.md
```

---

## 🧪 Old web sim thing

Before building the hardware version I made a small web app to test color transitions.  
It wasn’t meant to be a full project, just a way to experiment with ideas.  

I moved it to the `tools/` folder because it’s not part of the final build.
Full guide ![Click Me](./tools/thermo-mood-cube-web-sim/readme.md)
---

## 📚 Things I’m Learning (aka struggling with)

- PCB design + footprints
- proper routing + spacing
- power requirements for lots of LEDs
- reading sensors on ESP32
- mapping data → animations
- woodworking + epoxy casting

Basically everything.

---

## 🚧 Next Steps

### Hardware:
- clean up PCB layout
- add connectors for LED strips
- do proper routing
- order PCB prototype

### Firmware:
- read sensor values
- map them to different color modes
- smooth the animations so they don’t look chaotic

### Enclosure:
- prototype wood frame
- add diffuser
- figure out heat/safety stuff

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
