import { motion } from 'framer-motion'

function QualitySelector({ quality, setQuality }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="form-group"
            style={{ marginBottom: '1.5rem' }}
        >
            <label style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#e4e6eb' }}>Select Quality</label>
            <select
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
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
                <option value="best">Best Quality</option>
                <option value="medium">Medium Quality</option>
                <option value="worst">Lowest Quality</option>
            </select>
        </motion.div>
    )
}

export default QualitySelector
