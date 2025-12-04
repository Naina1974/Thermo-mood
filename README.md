# Thermo Mood Cube

A desk companion that changes color based on ambient temperature. The Thermo Mood Cube brings life to your workspace with temperature-responsive ambient lighting that shifts from cool blues to warm oranges.

## Overview

The Thermo Mood Cube is an open-source hardware project that combines Arduino, temperature sensing, and RGB LEDs to create a calming ambient light display. Rather than displaying exact temperature readings, it creates a subtle mood through color that reflects your environment.

## Features

- **Temperature-Responsive Lighting** - Automatically shifts colors based on ambient temperature
- **Smooth Transitions** - Gentle color fading creates a calming atmosphere
- **Interactive Web Interface** - Real-time simulator, documentation, and data logging
- **DIY Friendly** - Built with affordable, accessible components
- **3D Printable** - Custom enclosure designs for light diffusion
- **Open Source** - Fully documented hardware and software

## Web Application

This repository includes a comprehensive web application featuring:

- **Live 3D Visualization** - Animated cube showing real-time color changes
- **Interactive Simulator** - Adjust temperature and see colors change instantly
- **Complete Documentation** - Parts list, wiring diagrams, and assembly steps
- **About Section** - Learn about the project philosophy and design
- **Data Logger** - Track temperature readings from connected devices

## Hardware Components

- Arduino Nano (ATmega328P)
- NTC Thermistor (10kΩ)
- RGB LED (common cathode or 5050 SMD)
- Resistors (10kΩ, 220Ω × 3)
- 3D Printed Enclosure
- Mini USB Cable

## Technology Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase
- **Build Tool**: Vite
- **Hardware**: Arduino

## Getting Started

### Prerequisites

- Node.js 17,18+ and npm
- Supabase account (for data logging features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/naina1974/thermo-mood-cube.git
cd thermo-mood-cube
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
thermo-mood-cube/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Landing section with animated cube
│   │   ├── Simulator.tsx     # Interactive temperature simulator
│   │   ├── Documentation.tsx # Build guide and parts list
│   │   ├── About.tsx         # Project story and philosophy
│   │   ├── DataLogger.tsx    # Real-time temperature logging
│   │   └── Footer.tsx        # Site footer
│   ├── lib/
│   │   ├── supabase.ts       # Database client
│   │   └── colorUtils.ts     # Temperature to color conversion
│   ├── App.tsx
│   └── main.tsx
├── supabase/
│   └── migrations/           # Database schema
└── public/
```

## Building the Hardware

Visit the web application's documentation section for:

1. Complete parts list with specifications
2. Detailed wiring diagrams
3. 3D enclosure design guidelines
4. Step-by-step assembly instructions
5. Arduino firmware code

## Color Algorithm

The cube uses a custom algorithm that maps temperature to RGB values:

- **15-20°C**: Ice Blue → Cool Cyan
- **20-23°C**: Mint Green
- **23-27°C**: Warm Amber
- **27-30°C**: Hot Orange

Colors transition smoothly using PWM on the Arduino's digital pins.

## Contributing

Contributions are welcome! Feel free to:

- Report bugs and request features
- Submit pull requests
- Share your builds and modifications
- Improve documentation

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments

- Built for makers and tinkerers who want to add personality to their workspace
- Inspired by the ambient computing movement
- Thanks to the open-source hardware community

---

Made with care for the maker community
