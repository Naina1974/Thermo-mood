import { Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Thermo Mood Cube</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              An open-source ambient lighting project that brings warmth and personality to your workspace.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#simulator" className="hover:text-white transition-colors">Try Simulator</a></li>
              <li><a href="#documentation" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#data" className="hover:text-white transition-colors">Live Data</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Arduino Code</a></li>
              <li><a href="#" className="hover:text-white transition-colors">3D Models</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wiring Diagrams</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for makers and tinkerers</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Open source hardware project • MIT License</p>
        </div>
      </div>
    </footer>
  );
}
