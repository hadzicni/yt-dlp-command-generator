import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { isValidYouTubeUrl } from '../utils/validate'
import CopyButton from './CopyButton'

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
        if (!url || url.trim() === '') return
        if (!showCommand) {
            setLoading(true)
            setTimeout(() => {
                setShowCommand(true)
                setLoading(false)
            }, 700)
        }
    }

    const handleRegenerateCommand = () => {
        setLoading(true)
        setTimeout(() => {
            setRefreshKey(prev => prev + 1)
            setLoading(false)
        }, 700)
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            {!showCommand ? (
                <motion.button
                    onClick={handleShowCommand}
                    disabled={!url || url.trim() === '' || !isValidYouTubeUrl(url)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: !url ? '#2c2f36' : 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                        opacity: !url ? 0.5 : 1,
                        pointerEvents: !url ? 'none' : 'auto',
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        borderRadius: '10px',
                        color: 'white',
                        fontSize: '1rem',
                        cursor: !url ? 'not-allowed' : 'pointer',
                        width: '100%',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: '0.3s'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path>
                    </svg>
                    Show Command
                </motion.button>
            ) : (
                <motion.button
                    onClick={handleRegenerateCommand}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        borderRadius: '10px',
                        color: 'white',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        width: '100%',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: '0.3s'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path>
                    </svg>
                    Regenerate Command
                </motion.button>
            )}

            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            textAlign: 'center',
                            color: '#8b5cf6',
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem'
                        }}
                    >
                        Generating command...
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showCommand && !loading && (
                    <motion.div
                        key={refreshKey} // <- WICHTIG: Key neu setzen beim Regenerate!
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: [0, 1, 0.7, 1] }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 1 }}
                        style={{
                            backgroundColor: '#161b22',
                            border: '1px solid #30363d',
                            borderRadius: '10px',
                            padding: '1rem',
                            position: 'relative'
                        }}
                    >
                        <pre style={{
                            overflowX: 'auto',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            color: '#e4e6eb',
                            fontSize: '0.95rem',
                            fontFamily: 'monospace',
                            marginBottom: '1rem'
                        }}>
                            {command}
                        </pre>

                        <CopyButton text={command} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default GenerateCommand
