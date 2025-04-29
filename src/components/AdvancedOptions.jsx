import { motion } from 'framer-motion'

function AdvancedOptions({ audioOnly, setAudioOnly, videoOnly, setVideoOnly, playlist, setPlaylist }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="form-group"
            style={{ marginBottom: '2rem' }}
        >
            <h3 style={{ marginBottom: '1rem', fontWeight: '600', color: '#e4e6eb' }}>Advanced Options</h3>

            <div className="toggle-group">
                <div className="toggle-item">
                    <span>Extract Audio Only</span>
                    <label className="switch">
                        <input type="checkbox" checked={audioOnly} onChange={() => setAudioOnly(!audioOnly)} />
                        <span className="slider"></span>
                    </label>
                </div>

                <div className="toggle-item">
                    <span>Download Video Only</span>
                    <label className="switch">
                        <input type="checkbox" checked={videoOnly} onChange={() => setVideoOnly(!videoOnly)} />
                        <span className="slider"></span>
                    </label>
                </div>

                <div className="toggle-item">
                    <span>Include Full Playlist</span>
                    <label className="switch">
                        <input type="checkbox" checked={playlist} onChange={() => setPlaylist(!playlist)} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </motion.div>
    )
}

export default AdvancedOptions
