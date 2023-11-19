## Simple Express API image

[https://hub.docker.com/r/zeelz/simple-express-app](https://hub.docker.com/r/zeelz/simple-express-app)

```
docker run -d
-p [HOST_PORT]:[CONTAINER_PORT] \
-e PORT=[CONTAINER_PORT] \
--platform linux/amd64 \
zeelz/simple-express-app
```

Change `HOST_PORT` and `CONTAINER_PORT` to your desired ports

**Example**

`docker run -d -p 3000:3000 -e "PORT=3000" --platform linux/amd64 zeelz/simple-express-app`

**Available route**

`/status`

@jprodyx
 jprodyx x2
