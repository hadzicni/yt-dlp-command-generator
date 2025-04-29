import { motion } from 'framer-motion'

function FormatSelector({ format, setFormat }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="form-group"
            style={{ marginBottom: '1.5rem' }}
        >
            <label style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#e4e6eb' }}>Select Format</label>
            <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                style={{
                    backgroundColor: '#161b22',
                    border: '1px solid #30363d',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    width: '100%',
                    color: '#e4e6eb',
                    fontSize: '1rem',
                    transition: '0.3s'
                }}
            >
                <option value="mp3">MP3 (Audio)</option>
                <option value="mp4">MP4 (Video)</option>
                <option value="webm">WEBM (Video)</option>
                <option value="m4a">M4A (Audio)</option>
            </select>
        </motion.div>
    )
}

export default FormatSelector
