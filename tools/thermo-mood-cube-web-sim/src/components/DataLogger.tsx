import { useState, useEffect } from 'react';
import { Activity, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { supabase, TemperatureReading } from '../lib/supabase';
import { rgbToHex } from '../lib/colorUtils';

export function DataLogger() {
  const [readings, setReadings] = useState<TemperatureReading[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReadings();

    const channel = supabase
      .channel('temperature_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'temperature_readings'
        },
        (payload) => {
          setReadings(prev => [payload.new as TemperatureReading, ...prev].slice(0, 50));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadReadings = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('temperature_readings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);

    if (!error && data) {
      setReadings(data);
    }
    setIsLoading(false);
  };

  const getStats = () => {
    if (readings.length === 0) return null;

    const temps = readings.map(r => r.temperature);
    const current = temps[0];
    const avg = temps.reduce((a, b) => a + b, 0) / temps.length;
    const min = Math.min(...temps);
    const max = Math.max(...temps);

    let trend: 'up' | 'down' | 'stable' = 'stable';
    if (readings.length >= 2) {
      const recent = temps.slice(0, 5).reduce((a, b) => a + b, 0) / Math.min(5, temps.length);
      const older = temps.slice(-5).reduce((a, b) => a + b, 0) / Math.min(5, temps.length);
      if (recent > older + 0.5) trend = 'up';
      else if (recent < older - 0.5) trend = 'down';
    }

    return { current, avg, min, max, trend };
  };

  const stats = getStats();

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Activity className="w-4 h-4" />
            <span className="text-sm font-medium">Live Data</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Temperature Logger
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real-time temperature readings from connected Thermo Mood Cubes
          </p>
        </div>

        {isLoading ? (
          <div className="max-w-6xl mx-auto text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-400">Loading readings...</p>
          </div>
        ) : readings.length === 0 ? (
          <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/10">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-3">No Data Yet</h3>
            <p className="text-slate-400 max-w-md mx-auto mb-6">
              Connect your Thermo Mood Cube to start logging temperature data. Readings will appear here in real-time.
            </p>
            <div className="inline-block px-6 py-3 bg-white/10 rounded-xl text-sm font-mono text-slate-300">
              Waiting for device connection...
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto space-y-8">
            {stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-sm text-slate-400 mb-2">Current</div>
                  <div className="text-3xl font-bold">{stats.current.toFixed(1)}°C</div>
                  <div className="mt-2 flex items-center gap-1 text-sm">
                    {stats.trend === 'up' && (
                      <>
                        <TrendingUp className="w-4 h-4 text-red-400" />
                        <span className="text-red-400">Rising</span>
                      </>
                    )}
                    {stats.trend === 'down' && (
                      <>
                        <TrendingDown className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400">Falling</span>
                      </>
                    )}
                    {stats.trend === 'stable' && (
                      <>
                        <Minus className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-400">Stable</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-sm text-slate-400 mb-2">Average</div>
                  <div className="text-3xl font-bold">{stats.avg.toFixed(1)}°C</div>
                  <div className="mt-2 text-sm text-slate-400">Last {readings.length} readings</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-sm text-slate-400 mb-2">Minimum</div>
                  <div className="text-3xl font-bold text-blue-400">{stats.min.toFixed(1)}°C</div>
                  <div className="mt-2 text-sm text-slate-400">Coolest recorded</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-sm text-slate-400 mb-2">Maximum</div>
                  <div className="text-3xl font-bold text-orange-400">{stats.max.toFixed(1)}°C</div>
                  <div className="mt-2 text-sm text-slate-400">Warmest recorded</div>
                </div>
              </div>
            )}

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-bold">Recent Readings</h3>
                <p className="text-sm text-slate-400 mt-1">Live updates from connected devices</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Time</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Temperature</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Color</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Device</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {readings.map((reading) => {
                      const hexColor = rgbToHex({ r: reading.color_r, g: reading.color_g, b: reading.color_b });
                      const time = new Date(reading.created_at);

                      return (
                        <tr key={reading.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 text-sm font-mono text-slate-300">
                            {time.toLocaleTimeString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-lg font-semibold">{reading.temperature.toFixed(1)}°C</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-lg shadow-lg"
                                style={{
                                  backgroundColor: hexColor,
                                  boxShadow: `0 0 20px ${hexColor}80`
                                }}
                              ></div>
                              <span className="text-sm font-mono text-slate-400">{hexColor}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-400 font-mono">
                            {reading.device_id}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
