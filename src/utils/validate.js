export function isValidYouTubeUrl(url) {
    const regex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|shorts\/|playlist\?list=)?[a-zA-Z0-9\-\_]+(&[a-zA-Z0-9\-\_=&]*)?$/
    return regex.test(url)
}
