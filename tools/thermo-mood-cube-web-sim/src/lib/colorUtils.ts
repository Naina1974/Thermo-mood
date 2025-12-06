export interface RGB {
  r: number;
  g: number;
  b: number;
}

export function temperatureToColor(temp: number, minTemp: number = 15, maxTemp: number = 30): RGB {
  const normalized = Math.max(0, Math.min(1, (temp - minTemp) / (maxTemp - minTemp)));

  if (normalized < 0.5) {
    const t = normalized * 2;
    return {
      r: Math.round(100 + (150 * t)),
      g: Math.round(150 + (100 * t)),
      b: Math.round(255 - (55 * t))
    };
  } else {
    const t = (normalized - 0.5) * 2;
    return {
      r: Math.round(250 - (5 * t)),
      g: Math.round(250 - (150 * t)),
      b: Math.round(200 - (200 * t))
    };
  }
}

export function rgbToHex(rgb: RGB): string {
  return `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;
}

export function getColorName(temp: number, minTemp: number = 15, maxTemp: number = 30): string {
  const normalized = (temp - minTemp) / (maxTemp - minTemp);

  if (normalized < 0.2) return 'Ice Blue';
  if (normalized < 0.4) return 'Cool Cyan';
  if (normalized < 0.6) return 'Mint Green';
  if (normalized < 0.8) return 'Warm Amber';
  return 'Hot Orange';
}
