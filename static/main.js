if(Hls.isSupported()) {
    let video = document.getElementById('video');
    let hls = new Hls();
    let stream = window.location.search.slice(1) || "stream";
    hls.loadSource(`${stream}.m3u8`);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.addEventListener("click", () => video.play());
        video.play();
    });
}
