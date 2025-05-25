import { useState } from "react";
import AdvancedOptions from "./components/AdvancedOptions";
import Footer from "./components/Footer";
import FormatSelector from "./components/FormatSelector";
import GenerateCommand from "./components/GenerateCommand";
import Header from "./components/Header";
import { NotificationProvider } from "./components/NotificationContext";
import QualitySelector from "./components/QualitySelector";
import UrlInput from "./components/UrlInput";

function App() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("mp3");
  const [quality, setQuality] = useState("best");
  const [audioOnly, setAudioOnly] = useState(false);
  const [videoOnly, setVideoOnly] = useState(false);
  const [playlist, setPlaylist] = useState(false);

  return (
    <NotificationProvider>
      <div className="min-h-screen bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/10 via-neutral-800/10 to-neutral-900/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-neutral-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-neutral-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-neutral-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 py-12 max-w-2xl">
            <Header />
            <div className="space-y-8">
              <UrlInput url={url} setUrl={setUrl} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormatSelector format={format} setFormat={setFormat} />
                <QualitySelector quality={quality} setQuality={setQuality} />
              </div>
              <AdvancedOptions
                audioOnly={audioOnly}
                setAudioOnly={setAudioOnly}
                videoOnly={videoOnly}
                setVideoOnly={setVideoOnly}
                playlist={playlist}
                setPlaylist={setPlaylist}
              />
              <GenerateCommand
                url={url}
                format={format}
                quality={quality}
                audioOnly={audioOnly}
                videoOnly={videoOnly}
                playlist={playlist}
              />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </NotificationProvider>
  );
}

export default App;
