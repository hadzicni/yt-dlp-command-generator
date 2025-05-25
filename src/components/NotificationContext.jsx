import { AlertCircle, CheckCircle, X } from 'lucide-react'
import { createContext, useContext, useState } from 'react'

const NotificationContext = createContext()

export function useNotification() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([])

  const showNotification = (message, type = 'success') => {
    const id = Date.now() + Math.random()
    const notification = { 
      id, 
      message, 
      type,
      timestamp: Date.now()
    }
    
    setNotifications(prev => [...prev, notification])
    
    setTimeout(() => {
      removeNotification(id)
    }, 4000)
  }

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      
      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
            onRemove={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

function NotificationCard({ notification, onRemove }) {
  const { message, type } = notification
  
  const variants = {
    success: {
      bg: 'bg-emerald-500/20',
      border: 'border-emerald-400/30',
      text: 'text-emerald-100',
      icon: CheckCircle,
      iconColor: 'text-emerald-400'
    },
    error: {
      bg: 'bg-red-500/20',
      border: 'border-red-400/30', 
      text: 'text-red-100',
      icon: AlertCircle,
      iconColor: 'text-red-400'
    }
  }
  
  const variant = variants[type] || variants.success
  const Icon = variant.icon
  
  return (
    <div className={`
      group relative overflow-hidden
      px-4 py-3 rounded-xl backdrop-blur-md border shadow-lg
      transform transition-all duration-500 ease-out
      animate-in slide-in-from-right-full
      hover:scale-105
      ${variant.bg} ${variant.border} ${variant.text}
    `}>
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300
        ${type === 'success' ? 'bg-emerald-500/10' : 'bg-red-500/10'}
      `}></div>
      
      <div className="relative flex items-center gap-3">
        <div className="flex-shrink-0">
          <Icon className={`w-5 h-5 ${variant.iconColor}`} />
        </div>
        
        <div className="flex-1">
          <span className="text-sm font-medium leading-tight">
            {message}
          </span>
        </div>
        
        <button
          onClick={onRemove}
          className={`
            flex-shrink-0 p-0.5 rounded-full transition-all duration-200
            hover:bg-white/10 opacity-0 group-hover:opacity-100
            ${variant.iconColor}
          `}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <div className={`
          h-full transition-all duration-4000 ease-linear
          ${type === 'success' ? 'bg-emerald-400' : 'bg-red-400'}
          animate-progress
        `}></div>
      </div>
    </div>
  )
}