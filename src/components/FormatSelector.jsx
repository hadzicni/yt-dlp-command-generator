import { FileType, Headphones, Music, Video } from 'lucide-react'

function FormatSelector({ format, setFormat }) {
  const formats = [
    { value: 'mp3', label: 'MP3', icon: Music, description: 'Audio only, universal', color: 'text-green-400' },
    { value: 'mp4', label: 'MP4', icon: Video, description: 'Video with audio', color: 'text-blue-400' },
    { value: 'webm', label: 'WEBM', icon: Video, description: 'High quality video', color: 'text-purple-400' },
    { value: 'm4a', label: 'M4A', icon: Headphones, description: 'High quality audio', color: 'text-pink-400' }
  ]

  return (
    <div className="group">
      <label className="block text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
        <FileType className="w-4 h-4 text-purple-400" />
        Output Format
      </label>
      
      <div className="grid grid-cols-2 gap-3">
        {formats.map((formatOption) => {
          const Icon = formatOption.icon
          const isSelected = format === formatOption.value
          
          return (
            <button
              key={formatOption.value}
              onClick={() => setFormat(formatOption.value)}
              className={`
                relative p-4 rounded-xl border transition-all duration-300 text-left
                hover:scale-105 hover:shadow-lg active:scale-95
                ${isSelected 
                  ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-400/50 shadow-lg shadow-purple-500/20' 
                  : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
                }
              `}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              )}
              
              <div className="flex items-center gap-3 mb-2">
                <div className={`
                  p-2 rounded-lg transition-colors duration-300
                  ${isSelected ? 'bg-white/10' : 'bg-white/5'}
                `}>
                  <Icon className={`w-5 h-5 ${isSelected ? formatOption.color : 'text-gray-400'}`} />
                </div>
                <div>
                  <div className={`font-semibold text-lg ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {formatOption.label}
                  </div>
                </div>
              </div>
              
              <div className={`text-sm ${isSelected ? 'text-gray-300' : 'text-gray-400'}`}>
                {formatOption.description}
              </div>
              
              <div className={`
                absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
                bg-gradient-to-br from-purple-500/10 to-blue-500/10
                ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
              `}></div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FormatSelector