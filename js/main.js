window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoFile = urlParams.get('video');
    if (videoFile) {
        const videoSource = document.getElementById('videoSource');
        videoSource.src = `videos/${videoFile}`;
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.load();
    }
}
