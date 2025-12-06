
# Run the development server:
```bash
npm run dev
```

# Build for production:
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
