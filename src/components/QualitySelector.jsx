import { Download, Gauge, Zap } from 'lucide-react'

function QualitySelector({ quality, setQuality }) {
  const qualities = [
    { 
      value: 'best', 
      label: 'Best Quality', 
      icon: Zap, 
      description: 'Highest available quality', 
      color: 'text-emerald-400',
      gradient: 'from-emerald-500/20 to-green-500/20'
    },
    { 
      value: 'medium', 
      label: 'Medium Quality', 
      icon: Gauge, 
      description: 'Balanced size & quality', 
      color: 'text-yellow-400',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    },
    { 
      value: 'worst', 
      label: 'Lowest Quality', 
      icon: Download, 
      description: 'Fastest download', 
      color: 'text-gray-400',
      gradient: 'from-gray-500/20 to-slate-500/20'
    }
  ]

  return (
    <div className="group">
      <label className="block text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
        <Gauge className="w-4 h-4 text-purple-400" />
        Video Quality
      </label>
      
      <div className="space-y-3">
        {qualities.map((qualityOption) => {
          const Icon = qualityOption.icon
          const isSelected = quality === qualityOption.value
          
          return (
            <button
              key={qualityOption.value}
              onClick={() => setQuality(qualityOption.value)}
              className={`
                w-full relative p-4 rounded-xl border transition-all duration-300 text-left
                hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
                ${isSelected 
                  ? `bg-gradient-to-r ${qualityOption.gradient} border-white/30 shadow-lg` 
                  : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
                }
              `}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
              )}
              
              <div className="flex items-center gap-4">
                <div className={`
                  p-3 rounded-xl transition-all duration-300
                  ${isSelected ? 'bg-white/15 shadow-lg' : 'bg-white/5'}
                `}>
                  <Icon className={`w-6 h-6 ${isSelected ? qualityOption.color : 'text-gray-400'}`} />
                </div>
                
                <div className="flex-1">
                  <div className={`font-semibold text-lg mb-1 ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {qualityOption.label}
                  </div>
                  <div className={`text-sm ${isSelected ? 'text-gray-300' : 'text-gray-400'}`}>
                    {qualityOption.description}
                  </div>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`
                        w-1 h-6 rounded-full transition-all duration-300
                        ${isSelected && i < (qualityOption.value === 'best' ? 3 : qualityOption.value === 'medium' ? 2 : 1)
                          ? qualityOption.color.replace('text-', 'bg-')
                          : 'bg-gray-600'
                        }
                      `}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className={`
                absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
                bg-gradient-to-r ${qualityOption.gradient}
                ${isSelected ? 'opacity-100' : 'opacity-0 hover:opacity-50'}
              `}></div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QualitySelector