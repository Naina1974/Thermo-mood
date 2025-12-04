import { useState, useEffect } from 'react';
import { Thermometer } from 'lucide-react';
import { temperatureToColor, rgbToHex } from '../lib/colorUtils';

export function Hero() {
  const [currentTemp, setCurrentTemp] = useState(22);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const tempInterval = setInterval(() => {
      setCurrentTemp(prev => {
        const change = (Math.random() - 0.5) * 0.5;
        return Math.max(15, Math.min(30, prev + change));
      });
    }, 3000);

    const rotateInterval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);

    return () => {
      clearInterval(tempInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  const color = temperatureToColor(currentTemp);
  const hexColor = rgbToHex(color);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Thermometer className="w-4 h-4" />
            <span className="text-sm font-medium">Ambient Mood Lighting</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Thermo Mood Cube
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A desk companion that breathes life into your space with temperature-responsive ambient lighting
          </p>
        </div>

        <div className="relative perspective-1000">
          <div
            className="w-64 h-64 transition-all duration-1000 ease-in-out"
            style={{
              transform: `rotateX(${rotation * 0.3}deg) rotateY(${rotation}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl shadow-2xl transition-all duration-2000"
              style={{
                backgroundColor: hexColor,
                boxShadow: `0 0 80px ${hexColor}80, 0 0 160px ${hexColor}40`,
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-4xl font-bold mb-1">{currentTemp.toFixed(1)}°C</div>
              <div className="text-sm text-slate-300">Current Temperature</div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl mb-2">🌡️</div>
            <h3 className="text-lg font-semibold mb-2">Temperature Responsive</h3>
            <p className="text-slate-400 text-sm">Colors shift from cool blues to warm oranges based on ambient temperature</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="text-lg font-semibold mb-2">Smooth Transitions</h3>
            <p className="text-slate-400 text-sm">Gentle color changes create a calming, ambient atmosphere</p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl mb-2">🔧</div>
            <h3 className="text-lg font-semibold mb-2">DIY Friendly</h3>
            <p className="text-slate-400 text-sm">Built with Arduino, basic electronics, and 3D printing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
