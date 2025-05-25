import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { useNotification } from './NotificationContext'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const notify = useNotification()

  const handleCopy = async () => {
    if (!text || text.trim() === '') {
      notify('Nothing to copy!', 'error')
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      notify('Command copied to clipboard!', 'success')
      
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      try {
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        
        setCopied(true)
        notify('Command copied to clipboard!', 'success')
        
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      } catch (fallbackError) {
        console.error('Failed to copy: ', fallbackError)
        notify('Failed to copy. Please try manually!', 'error')
      }
    }
  }

  return (
    <button
      onClick={handleCopy}
      disabled={copied}
      className={`
        group relative w-full p-4 rounded-xl border transition-all duration-300
        ${copied 
          ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-100' 
          : 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-400/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 text-white hover:scale-[1.02] active:scale-[0.98]'
        }
      `}
    >
      {!copied && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      )}
      
      {copied && (
        <div className="absolute inset-0 bg-emerald-500 rounded-xl blur opacity-20 animate-pulse"></div>
      )}
      
      <div className="relative flex items-center justify-center gap-3">
        <div className={`
          p-2 rounded-lg transition-all duration-300
          ${copied 
            ? 'bg-emerald-500/30' 
            : 'bg-white/10 group-hover:bg-white/20'
          }
        `}>
          {copied ? (
            <Check className="w-5 h-5 text-emerald-400 animate-in zoom-in-50 duration-300" />
          ) : (
            <Copy className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors duration-300" />
          )}
        </div>
        
        <span className="text-lg font-semibold">
          {copied ? 'Copied!' : 'Copy Command'}
        </span>
        
        {copied && (
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce animation-delay-100"></div>
            <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce animation-delay-200"></div>
          </div>
        )}
      </div>
      
      {copied && (
        <div className="absolute inset-0 rounded-xl bg-emerald-400/20 animate-ping"></div>
      )}
    </button>
  )
}

export default CopyButton