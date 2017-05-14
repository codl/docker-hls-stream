FROM tiangolo/nginx-rtmp

COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir /hls
COPY static/* /hls/
RUN chown -R nobody /hls/

EXPOSE 1935 80
