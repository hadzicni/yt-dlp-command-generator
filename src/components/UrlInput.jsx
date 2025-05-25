import { AlertCircle, CheckCircle, Link } from 'lucide-react'

function isValidYouTubeUrl(url) {
  const regex = /^(https?:\/\/)?(www\.(youtube\.com|youtu\.be)|youtu\.be)\/.+$/
  return regex.test(url)
}

function UrlInput({ url, setUrl }) {
  const isValid = url ? isValidYouTubeUrl(url) : true
  const hasContent = url.length > 0
  
  return (
    <div className="group">
      <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
        <Link className="w-4 h-4 text-purple-400" />
        YouTube URL
      </label>
      
      <div className="relative">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://youtube.com/watch?v=... or youtu.be/..."
          className={`
            w-full px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-300
            bg-white/5 text-white placeholder-gray-400 text-lg font-medium
            focus:outline-none focus:ring-2 focus:bg-white/10
            group-hover:bg-white/8
            ${isValid 
              ? 'border-white/20 focus:border-purple-400/50 focus:ring-purple-400/20' 
              : 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20 bg-red-500/5'
            }
            ${hasContent ? 'pr-14' : ''}
          `}
        />
        
        {hasContent && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {isValid ? (
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
            ) : (
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 border border-red-400/30">
                <AlertCircle className="w-4 h-4 text-red-400" />
              </div>
            )}
          </div>
        )}
        
        <div className={`
          absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none
          ${isValid ? 'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10' : 'bg-red-500/10'}
          opacity-0 group-hover:opacity-100
        `}></div>
      </div>
      
      {hasContent && !isValid && (
        <div className="mt-3 flex items-center gap-2 text-red-400 text-sm animate-in slide-in-from-top-1 duration-300">
          <AlertCircle className="w-4 h-4" />
          <span>Please enter a valid YouTube video, short, or playlist URL</span>
        </div>
      )}
      
      {!hasContent && (
        <div className="mt-3 text-gray-500 text-sm">
          Supports YouTube videos, Shorts, and playlists
        </div>
      )}
    </div>
  )
}

export default UrlInput