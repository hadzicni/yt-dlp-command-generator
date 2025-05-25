# 🎬 YT-DLP Command Generator

A modern web-based tool to generate advanced **yt-dlp** commands using a visual UI — no need to remember long CLI flags. Built with **React**, **Vite**, and **Tailwind-style CSS**. Supports audio/video format selection, quality filters, and more.

![Framework](https://img.shields.io/badge/framework-React-blue?logo=react)
![Bundler](https://img.shields.io/badge/bundler-Vite-purple?logo=vite)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![yt-dlp](https://img.shields.io/badge/yt--dlp-compatible-brightgreen)

---

## ✨ Features

- 🎥 Input YouTube (or other) URLs
- ⚙️ Select output format: audio/video
- 📐 Choose quality settings (e.g. best, worst, 720p)
- 🎛️ Toggle advanced `yt-dlp` flags
- 📋 One-click copy to clipboard
- 🧼 Clean & responsive UI (desktop/mobile)
- 🧠 Built-in validation + hinting
- 🖼️ Includes screenshots for preview

---

## 🚀 Getting Started

### 📦 Install dependencies

```bash
npm install
```

### 🧪 Start development server

```bash
npm run dev
```

App will be available at: [http://localhost:5173](http://localhost:5173)

### ⚙️ Build for production

```bash
npm run build
```

---

### Build Docker Image

```bash
docker build -t ghcr.io/hadzicni/yt-dlp-command-generator:latest .
```

### Login to ghcr.io

```bash
echo <GITHUB_TOKEN> | docker login ghcr.io -u hadzicni --password-stdin
```

#### <GITHUB_TOKEN> must be a GitHub Personal Access Token with the write:packages scope.

### Push Image

```bash
docker push ghcr.io/hadzicni/yt-dlp-command-generator:latest
```

---

## 👨‍💻 Author

Made by **Nikola Hadzic**  
GitHub: [@hadzicni](https://github.com/hadzicni)

---

## 📄 License

This project is licensed under the Apache License 2.0. See the [LICENSE](./LICENSE) file for details.
