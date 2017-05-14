if(Hls.isSupported()) {
    let video = document.getElementById('video');
    let hls = new Hls();
    let streamname = window.location.search.slice(1) || "stream"
    hls.loadSource(`${streamname}.m3u8`);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
    });
}
