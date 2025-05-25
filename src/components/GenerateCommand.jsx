import { ArrowRight, RotateCcw, Sparkles, Terminal } from 'lucide-react'
import { useMemo, useState } from 'react'
import CopyButton from './CopyButton'

function isValidYouTubeUrl(url) {
  const regex = /^(https?:\/\/)?(www\.(youtube\.com|youtu\.be)|youtu\.be)\/.+$/
  return regex.test(url)
}

function GenerateCommand({ url, format, quality, audioOnly, videoOnly, playlist }) {
  const [showCommand, setShowCommand] = useState(false)
  const [loading, setLoading] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const command = useMemo(() => {
    if (!url || url.trim() === '') return ''

    let commandParts = ['yt-dlp']

    if (audioOnly) {
      commandParts.push('--extract-audio')
      commandParts.push(`--audio-format ${format}`)
    } else if (videoOnly) {
      commandParts.push('-f bestvideo+bestaudio/best')
    } else {
      if (format === 'mp3' || format === 'm4a') {
        commandParts.push('--extract-audio')
        commandParts.push(`--audio-format ${format}`)
      }
    }

    if (!playlist) {
      commandParts.push('--no-playlist')
    }

    if (quality === 'medium') {
      commandParts.push('-f "best[height<=720]"')
    } else if (quality === 'worst') {
      commandParts.push('-f worst')
    }

    commandParts.push('-o "%(title)s.%(ext)s"')
    commandParts.push(`"${url}"`)

    return commandParts.join(' ')
  }, [url, format, quality, audioOnly, videoOnly, playlist, refreshKey])

  const handleShowCommand = () => {
    if (!url || url.trim() === '' || !isValidYouTubeUrl(url)) return
    
    if (!showCommand) {
      setLoading(true)
      setTimeout(() => {
        setShowCommand(true)
        setLoading(false)
      }, 800)
    }
  }

  const handleRegenerateCommand = () => {
    setLoading(true)
    setTimeout(() => {
      setRefreshKey(prev => prev + 1)
      setLoading(false)
    }, 600)
  }

  const isDisabled = !url || url.trim() === '' || !isValidYouTubeUrl(url)

  return (
    <div className="space-y-6">
      {!showCommand ? (
        <button
          onClick={handleShowCommand}
          disabled={isDisabled}
          className={`
            group relative w-full p-6 rounded-2xl border transition-all duration-300
            ${isDisabled 
              ? 'bg-gray-600/20 border-gray-600/30 cursor-not-allowed opacity-50' 
              : 'bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 border-purple-400/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98]'
            }
          `}
        >
          {!isDisabled && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          )}
          
          <div className="relative flex items-center justify-center gap-3">
            <div className={`
              p-2 rounded-lg transition-all duration-300
              ${isDisabled ? 'bg-gray-600/30' : 'bg-white/10 group-hover:bg-white/20'}
            `}>
              <Terminal className={`w-6 h-6 ${isDisabled ? 'text-gray-500' : 'text-purple-400 group-hover:text-white'}`} />
            </div>
            <span className={`text-xl font-semibold ${isDisabled ? 'text-gray-500' : 'text-white'}`}>
              Generate Command
            </span>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isDisabled ? 'text-gray-500' : 'text-purple-400 group-hover:translate-x-1'}`} />
          </div>
        </button>
      ) : (
        <button
          onClick={handleRegenerateCommand}
          className="group relative w-full p-4 rounded-2xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 border border-purple-400/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          
          <div className="relative flex items-center justify-center gap-3">
            <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300">
              <RotateCcw className="w-5 h-5 text-purple-400 group-hover:text-white group-hover:rotate-180 transition-all duration-500" />
            </div>
            <span className="text-lg font-semibold text-white">
              Regenerate Command
            </span>
            <Sparkles className="w-5 h-5 text-purple-400 group-hover:text-white animate-pulse" />
          </div>
        </button>
      )}

      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin"></div>
            <div className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-pink-500 animate-spin animation-delay-150"></div>
          </div>
          <div className="ml-4 text-purple-300 font-medium animate-pulse">
            Generating your command...
          </div>
        </div>
      )}

      {showCommand && !loading && (
        <div 
          key={refreshKey}
          className="group/command animate-in slide-in-from-bottom-4 duration-700"
        >
          <div className="relative p-6 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover/command:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold text-gray-300">Generated Command</span>
              <div className="flex-1"></div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="relative">
              <pre className="text-sm font-mono text-gray-100 leading-relaxed whitespace-pre-wrap break-all p-4 bg-black/30 rounded-xl border border-slate-600/30">
                <span className="text-green-400">$</span> {command}
              </pre>
            </div>
            
            <div className="relative mt-4">
              <CopyButton text={command} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GenerateCommand