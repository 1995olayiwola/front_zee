
 export  function getYouTubeVideoId(url) {
    const pattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([a-zA-Z0-9_-]+)/;
    const match = url.match(pattern);
    if (match) {
        return match[1];
    }
    return null;
}

