import { motion } from 'framer-motion'
import { useNotification } from './NotificationContext'

function CopyButton({ text }) {
    const notify = useNotification()

    const handleCopy = async () => {
        if (!text || text.trim() === '') {
            notify('Nothing to copy!')
            return
        }

        try {
            const textArea = document.createElement('textarea')
            textArea.value = text
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)

            notify('Command copied to clipboard!')
        } catch (error) {
            console.error('Failed to copy: ', error)
            notify('Failed to copy. Try manually!')
        }
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '0.9rem',
                cursor: 'pointer',
                width: '100%'
            }}
        >
            Copy Command
        </motion.button>
    )
}

export default CopyButton
