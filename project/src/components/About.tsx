import { User, Lightbulb, Code, Wrench } from 'lucide-react';

export function About() {
  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-full mb-4">
              <User className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">About This Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Story Behind the Cube
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The Thermo Mood Cube was born from a simple observation: my desk felt empty and lifeless.
                I wanted something that would bring a bit of warmth and personality to my workspace without
                being distracting or requiring constant attention.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                After experimenting with various ambient lighting ideas, I realized that combining temperature
                sensing with gentle color transitions created something truly special. The cube doesn't just
                display data—it creates an emotional connection to your environment. When the room warms up
                on a sunny afternoon, the cube glows with warm oranges. On cooler mornings, it bathes your
                desk in calming blues.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                This project represents my passion for making technology more human and accessible. It's
                designed to be beginner-friendly, using affordable components and straightforward code.
                Whether you're new to Arduino or an experienced maker, you can build your own Thermo Mood Cube
                and customize it to match your style.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Why I Built This</h3>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Make my workspace feel more alive</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Learn about temperature sensors and color theory</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Create something beautiful and functional</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Share knowledge with the maker community</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500 rounded-lg">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">What I Learned</h3>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Arduino PWM for smooth LED fading</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Temperature sensor calibration techniques</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>3D modeling for light diffusion</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Color mapping algorithms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">My Maker Philosophy</h3>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I believe that the best projects are the ones you can actually build and enjoy. That's why
                the Thermo Mood Cube uses readily available components and doesn't require expensive tools
                or specialized knowledge.
              </p>
              <p>
                Technology should enhance our lives in subtle, meaningful ways. The cube isn't about showing
                off the latest gadget—it's about creating a small moment of delight every time you sit down
                at your desk and notice the colors have shifted.
              </p>
              <p>
                This project is completely open source. I encourage you to build it, modify it, and make it
                your own. Change the color mapping, adjust the temperature ranges, or add new features.
                Share your creations with the community and inspire others to start making.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Arduino</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">IoT</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">3D Printing</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Electronics</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Open Source</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Ambient Light</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Have questions or want to share your build?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com"
                className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-medium"
              >
                Star on GitHub
              </a>
              <a
                href="#documentation"
                className="px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 rounded-xl hover:bg-slate-50 transition-colors font-medium"
              >
                Start Building
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
