import { Play, Sparkles } from "lucide-react";

function Header() {
  return (
    <div className="text-center mb-16">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <Play className="w-10 h-10 text-purple-400 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                YT-DLP
              </h1>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-white/90">Pro</span>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
            Generate powerful download yt-dlp commands
          </p>

          <div className="absolute -top-10 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-1000 opacity-60"></div>
          <div className="absolute -top-6 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce animation-delay-2000 opacity-80"></div>
          <div className="absolute -top-8 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce animation-delay-3000 opacity-70"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
