hey

this is how i restream country-gated youtube streams like eurovision

please dont call the cops on me

## how to do the

```
set PLAYLIST=$(youtube-dl -f 95 -g "https://www.youtube.com/watch?v=hjkhjklhjkl")
ffmpeg -i $PLAYLIST -c:a copy -c:v copy -f hls /srv/http/eurovision/stream.m3u8 -hls_flags delete_segments -hls_list_size 40
```
