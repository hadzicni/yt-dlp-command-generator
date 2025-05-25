import { Download, Globe, Heart, Zap } from 'lucide-react'

function Footer() {
  return (
    <footer className="mt-20 pb-8">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
              <div className="flex items-center gap-2 text-purple-400">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Powered by</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10">
            <Download className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-lg font-semibold text-gray-300">
            yt-dlp
          </span>
          <div className="flex items-center gap-1 text-pink-400">
            <span className="text-sm">+</span>
            <Heart className="w-4 h-4 animate-pulse" />
          </div>
        </div>
        
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          A modern, beautiful interface for the powerful{' '}
          <span className="text-purple-400 font-medium">yt-dlp</span>{' '}
          command-line tool. Download with style.
        </p>
        
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/yt-dlp/yt-dlp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Globe  className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium">yt-dlp</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce animation-delay-1000 opacity-60"></div>
      <div className="absolute bottom-16 right-1/3 w-0.5 h-0.5 bg-pink-400 rounded-full animate-bounce animation-delay-2000 opacity-80"></div>
      <div className="absolute bottom-12 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce animation-delay-3000 opacity-70"></div>
    </footer>
  )
}

export default Footer