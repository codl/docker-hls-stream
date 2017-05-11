#!/bin/bash

cd $(dirname $0)

PLAYLIST=$(youtube-dl -f 95 -g "$1")

ffmpeg -i $PLAYLIST -c:a copy -c:v copy -f hls -hls_flags delete_segments -hls_list_size 40 stream.m3u8

rm stream*.ts stream.m3u8
