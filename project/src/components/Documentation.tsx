import { Cpu, Zap, Box, Wrench } from 'lucide-react';

export function Documentation() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Build Your Own
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to create your own Thermo Mood Cube
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Parts List</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h4 className="font-semibold text-lg text-slate-900 mb-4">Electronics</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900">Arduino Nano</div>
                      <div className="text-sm text-slate-600">ATmega328P microcontroller board</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900">NTC Thermistor</div>
                      <div className="text-sm text-slate-600">10kΩ temperature sensor</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900">RGB LED</div>
                      <div className="text-sm text-slate-600">Common cathode or 5050 SMD RGB LED</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900">Resistors</div>
                      <div className="text-sm text-slate-600">10kΩ (thermistor divider), 220Ω × 3 (LED current limiting)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900">Mini USB Cable</div>
                      <div className="text-sm text-slate-600">For power and programming</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h4 className="font-semibold text-lg text-slate-900 mb-4">Hardware & Materials</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900">3D Printed Enclosure</div>
                      <div className="text-sm text-slate-600">Cube shell (60-80mm sides recommended)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900">Diffuser Material</div>
                      <div className="text-sm text-slate-600">Translucent white filament or acrylic sheet</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900">Breadboard or Protoboard</div>
                      <div className="text-sm text-slate-600">For prototyping or permanent assembly</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <div className="font-medium text-slate-900">Jumper Wires</div>
                      <div className="text-sm text-slate-600">Male-to-male and male-to-female</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Wiring Guide</h3>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-xl mb-6 text-blue-300">Temperature Sensor</h4>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center gap-4">
                      <span className="bg-blue-500 px-3 py-1 rounded">Thermistor Pin 1</span>
                      <span className="text-slate-400">→</span>
                      <span>Arduino 5V</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="bg-blue-500 px-3 py-1 rounded">Thermistor Pin 2</span>
                      <span className="text-slate-400">→</span>
                      <span>Arduino A0 & 10kΩ to GND</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xl mb-6 text-purple-300">RGB LED</h4>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center gap-4">
                      <span className="bg-red-500 px-3 py-1 rounded">Red Pin</span>
                      <span className="text-slate-400">→</span>
                      <span>220Ω → Arduino D9 (PWM)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="bg-green-500 px-3 py-1 rounded">Green Pin</span>
                      <span className="text-slate-400">→</span>
                      <span>220Ω → Arduino D10 (PWM)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="bg-blue-500 px-3 py-1 rounded">Blue Pin</span>
                      <span className="text-slate-400">→</span>
                      <span>220Ω → Arduino D11 (PWM)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="bg-slate-600 px-3 py-1 rounded">Cathode</span>
                      <span className="text-slate-400">→</span>
                      <span>Arduino GND</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-xl">
                <p className="text-sm text-yellow-200">
                  <strong>Note:</strong> If using common anode RGB LED, connect common pin to 5V and invert PWM values in code
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-100 rounded-xl">
                <Box className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">3D Enclosure Design</h3>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">60-80mm</div>
                  <div className="text-sm text-slate-600">Cube dimensions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">2-3mm</div>
                  <div className="text-sm text-slate-600">Wall thickness</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">20%</div>
                  <div className="text-sm text-slate-600">Infill density</div>
                </div>
              </div>

              <h4 className="font-semibold text-lg mb-4">Design Recommendations</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Use translucent white or frosted filament for best light diffusion</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Include small vent holes for temperature sensor accuracy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Add cable channel for USB power cable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Consider snap-fit or magnetic closure for easy access</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Position LED centrally with internal reflectors for even glow</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Wrench className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Assembly Steps</h3>
            </div>

            <div className="space-y-4">
              {[
                { step: 1, title: 'Prepare Components', desc: 'Gather all parts and test each component individually before assembly' },
                { step: 2, title: 'Wire the Circuit', desc: 'Follow the wiring guide to connect the thermistor and RGB LED to the Arduino' },
                { step: 3, title: 'Upload Firmware', desc: 'Program the Arduino with the temperature-to-color code' },
                { step: 4, title: 'Test Electronics', desc: 'Verify temperature readings and color changes work correctly' },
                { step: 5, title: '3D Print Enclosure', desc: 'Print the cube shell and any internal mounting brackets' },
                { step: 6, title: 'Install Components', desc: 'Mount Arduino and LED inside the enclosure' },
                { step: 7, title: 'Final Assembly', desc: 'Close the enclosure and connect power via USB' },
                { step: 8, title: 'Calibrate', desc: 'Fine-tune temperature ranges in code for your environment' }
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-6 items-start bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 mb-1">{title}</h4>
                    <p className="text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
