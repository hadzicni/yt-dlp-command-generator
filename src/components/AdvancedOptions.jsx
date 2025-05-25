import { List, Music, Settings, Video } from 'lucide-react'

function AdvancedOptions({ audioOnly, setAudioOnly, videoOnly, setVideoOnly, playlist, setPlaylist }) {
  const options = [
    {
      id: 'audio',
      label: 'Audio Only',
      description: 'Extract audio track only',
      icon: Music,
      checked: audioOnly,
      onChange: () => setAudioOnly(!audioOnly),
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      id: 'video',
      label: 'Video Only',
      description: 'Download video without audio',
      icon: Video,
      checked: videoOnly,
      onChange: () => setVideoOnly(!videoOnly),
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      id: 'playlist',
      label: 'Full Playlist',
      description: 'Download entire playlist',
      icon: List,
      checked: playlist,
      onChange: () => setPlaylist(!playlist),
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    }
  ]

  return (
    <div className="group">
      <label className="block text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
        <Settings className="w-4 h-4 text-purple-400" />
        Advanced Options
      </label>
      
      <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
        <div className="space-y-4">
          {options.map((option) => {
            const Icon = option.icon
            
            return (
              <div
                key={option.id}
                className={`
                  flex items-center justify-between p-4 rounded-xl transition-all duration-300
                  hover:bg-white/5 cursor-pointer group/option
                  ${option.checked ? option.bgColor + ' border border-white/20' : 'border border-transparent'}
                `}
                onClick={option.onChange}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    p-2 rounded-lg transition-all duration-300
                    ${option.checked ? 'bg-white/15 shadow-lg' : 'bg-white/5 group-hover/option:bg-white/10'}
                  `}>
                    <Icon className={`w-5 h-5 ${option.checked ? option.color : 'text-gray-400'}`} />
                  </div>
                  
                  <div>
                    <div className={`font-semibold ${option.checked ? 'text-white' : 'text-gray-300'}`}>
                      {option.label}
                    </div>
                    <div className={`text-sm ${option.checked ? 'text-gray-300' : 'text-gray-400'}`}>
                      {option.description}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={option.onChange}
                    className="sr-only"
                  />
                  <div className={`
                    w-12 h-6 rounded-full transition-all duration-300 cursor-pointer
                    ${option.checked 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30' 
                      : 'bg-gray-600'
                    }
                  `}>
                    <div className={`
                      w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300 mt-0.5
                      ${option.checked ? 'translate-x-6' : 'translate-x-0.5'}
                    `}></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-6 p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
          <div className="text-sm text-blue-300">
            💡 <strong>Tip:</strong> Audio and Video only options are mutually exclusive
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedOptions