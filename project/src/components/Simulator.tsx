import { useState } from 'react';
import { Sliders, Play, Pause } from 'lucide-react';
import { temperatureToColor, rgbToHex, getColorName } from '../lib/colorUtils';

export function Simulator() {
  const [temperature, setTemperature] = useState(22);
  const [minTemp, setMinTemp] = useState(15);
  const [maxTemp, setMaxTemp] = useState(30);
  const [isAnimating, setIsAnimating] = useState(false);

  const color = temperatureToColor(temperature, minTemp, maxTemp);
  const hexColor = rgbToHex(color);
  const colorName = getColorName(temperature, minTemp, maxTemp);

  const startAnimation = () => {
    if (isAnimating) {
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    let currentTemp = minTemp;
    let direction = 1;

    const interval = setInterval(() => {
      currentTemp += direction * 0.2;

      if (currentTemp >= maxTemp) {
        direction = -1;
        currentTemp = maxTemp;
      } else if (currentTemp <= minTemp) {
        direction = 1;
        currentTemp = minTemp;
      }

      setTemperature(currentTemp);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnimating(false);
    }, 30000);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-full mb-4">
            <Sliders className="w-4 h-4 text-slate-700" />
            <span className="text-sm font-medium text-slate-700">Interactive Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Try the Simulator
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Adjust the temperature and watch the colors change in real-time
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="w-full aspect-square rounded-3xl shadow-xl transition-all duration-1000 relative overflow-hidden"
                style={{
                  backgroundColor: hexColor,
                  boxShadow: `0 0 60px ${hexColor}60`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                      {temperature.toFixed(1)}°C
                    </div>
                    <div className="text-xl font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                      {colorName}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={startAnimation}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  {isAnimating ? (
                    <>
                      <Pause className="w-5 h-5" />
                      Stop Animation
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Animate Colors
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Current Temperature: {temperature.toFixed(1)}°C
                </label>
                <input
                  type="range"
                  min={minTemp}
                  max={maxTemp}
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    accentColor: hexColor,
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Min Temp: {minTemp}°C
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="25"
                    step="1"
                    value={minTemp}
                    onChange={(e) => {
                      const newMin = parseFloat(e.target.value);
                      setMinTemp(newMin);
                      if (temperature < newMin) setTemperature(newMin);
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Max Temp: {maxTemp}°C
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="40"
                    step="1"
                    value={maxTemp}
                    onChange={(e) => {
                      const newMax = parseFloat(e.target.value);
                      setMaxTemp(newMax);
                      if (temperature > newMax) setTemperature(newMax);
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-slate-600">RGB Values:</span>
                  <span className="text-sm font-mono font-semibold text-slate-900">
                    R: {color.r} G: {color.g} B: {color.b}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-slate-600">Hex Code:</span>
                  <span className="text-sm font-mono font-semibold text-slate-900">{hexColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-slate-600">Color Name:</span>
                  <span className="text-sm font-semibold text-slate-900">{colorName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
