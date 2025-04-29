import { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NotificationContext = createContext()

export function useNotification() {
    return useContext(NotificationContext)
}

export function NotificationProvider({ children }) {
    const [message, setMessage] = useState(null)

    const showNotification = (msg) => {
        setMessage(msg)
        setTimeout(() => {
            setMessage(null)
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={showNotification}>
            {children}
            <AnimatePresence>
                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            position: 'fixed',
                            bottom: '2rem',
                            right: '2rem',
                            background: '#10b981',
                            color: 'white',
                            padding: '1rem 1.5rem',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
                            fontSize: '1rem',
                            zIndex: 1000
                        }}
                    >
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>
        </NotificationContext.Provider>
    )
}
