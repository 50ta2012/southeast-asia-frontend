# React 播放 RTSP

## Docker Go RTSP to HLS 端


啟動 docker container
```
docker run -v `pwd`/rtsp-stream.yml:/app/rtsp-stream.yml \
            -p 8080:8080 -d \
           --name rtsp \
           roverr/rtsp-stream:2
```


用 Post 增加 rtsp 串流
```
http POST :8080/start uri=rtsp://admin:123456@220.228.148.247:5102/media/media.amp?streamprofile=Profile1 alias=cam2
```


查看 rtsp to hls 串流清單
```javascript
http :8080/list

// output
[
    {
        "alias": "cam2",
        "id": "102bc2f2-bc68-4a30-9ef2-5fbff7f53b29",
        "running": false,
        "uri": "/stream/cam2/index.m3u8"
    }
]
```

hls 串流網址：
```
http://127.0.0.1:8080/stream/cam2/index.m3u8
```

> 重啟需要重架服務，可以用代號讓網址不變

## React 端

安裝
```
yarn add react-hls-player
```

替換 App.js 的 source 變數成你的 hls url，像是：

App.js
```javascript
function App() {
  const source = "http://localhost:8080/stream/0465f684-8278-4e5d-ac8d-4a7fb4557898/index.m3u8";

  ...


}
```