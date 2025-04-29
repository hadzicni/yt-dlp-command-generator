import { isValidYouTubeUrl } from '../utils/validate'

function UrlInput({ url, setUrl }) {
    return (
        <div className="form-group">
            <label>Video URL</label>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste the video URL here..."
            />
            {url && !isValidYouTubeUrl(url) && (
                <div style={{ color: '#ef4444', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                    Please enter a valid YouTube video, short or playlist URL.
                </div>
            )}
        </div>
    )
}

export default UrlInput
