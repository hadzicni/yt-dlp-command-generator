import { useState } from 'react'
import Header from './components/Header'
import UrlInput from './components/UrlInput'
import FormatSelector from './components/FormatSelector'
import QualitySelector from './components/QualitySelector'
import AdvancedOptions from './components/AdvancedOptions'
import GenerateCommand from './components/GenerateCommand'
import Footer from './components/Footer'

function App() {
  const [url, setUrl] = useState('')
  const [format, setFormat] = useState('mp3')
  const [quality, setQuality] = useState('best')
  const [audioOnly, setAudioOnly] = useState(false)
  const [videoOnly, setVideoOnly] = useState(false)
  const [playlist, setPlaylist] = useState(false)

  function isValidYouTubeUrl(url) {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/
    return regex.test(url)
  }

  return (
    <div className="container">
      <Header />
      <UrlInput url={url} setUrl={setUrl} />
      <FormatSelector format={format} setFormat={setFormat} />
      <QualitySelector quality={quality} setQuality={setQuality} />
      <AdvancedOptions
        audioOnly={audioOnly} setAudioOnly={setAudioOnly}
        videoOnly={videoOnly} setVideoOnly={setVideoOnly}
        playlist={playlist} setPlaylist={setPlaylist}
      />
      <GenerateCommand
        url={url}
        format={format}
        quality={quality}
        audioOnly={audioOnly}
        videoOnly={videoOnly}
        playlist={playlist}
      />
      <Footer />
    </div>
  )
}

export default App
