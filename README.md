hey this is a docker image that takes one or more rtmp streams and exposes a barebones web page that plays the stream as HLS

## usage

    docker run --rm -p 1935:1935 -p 47151:80 codl/hls-stream

then point your rtmp source at rtmp://yourserver/live and pick a stream key

set up a web server to proxy to 127.0.0.1:47151, for example with nginx:

```
server {
    listen 80;
    server_name mystream.example.net;
    location / {
        proxy_pass http://127.0.0.1:47151/
    }
}
```

or with caddy:

```
mystream.example.net {
    proxy 127.0.0.1:47151
}
```

<small>damn caddy is good</small>

your stream will be viewable at `mystream.example.net/?your_stream_key`

by default `mystream.example.net` will show a stream with a key of `stream`
