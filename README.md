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

[@ZEELZ](https://twitter.com/zeelz)
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" zoomAndPan="magnify" viewBox="0 0 450 179.999997" height="240" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="7f4f2b7530"><path d="M 0 27 L 450 27 L 450 150 L 0 150 Z M 0 27 " clip-rule="nonzero"/></clipPath><clipPath id="87231b17b9"><path d="M -31.207031 72.855469 L 474.339844 27.46875 L 481.207031 103.933594 L -24.339844 149.320312 Z M -31.207031 72.855469 " clip-rule="nonzero"/></clipPath><clipPath id="797b1a69c2"><path d="M -31.207031 72.855469 L 474.339844 27.46875 L 481.207031 103.933594 L -24.339844 149.320312 Z M -31.207031 72.855469 " clip-rule="nonzero"/></clipPath></defs><rect x="-45" width="540" fill="#ffffff" y="-18" height="215.999996" fill-opacity="1"/><rect x="-45" width="540" fill="#ff914d" y="-18" height="215.999996" fill-opacity="1"/><g clip-path="url(#7f4f2b7530)"><g clip-path="url(#87231b17b9)"><g clip-path="url(#797b1a69c2)"><path fill="#1e1e1e" d="M -31.207031 72.855469 L 474.339844 27.46875 L 481.207031 103.933594 L -24.339844 149.320312 Z M -31.207031 72.855469 " fill-opacity="1" fill-rule="nonzero"/></g></g></g><g fill="#ff914d" fill-opacity="1"><g transform="translate(135.345599, 117.305596)"><g><path d="M 18.015625 -0.203125 C 13.035156 0.253906 9.039062 -1.179688 6.03125 -4.515625 C 3.019531 -7.859375 1.175781 -13.203125 0.5 -20.546875 C -0.394531 -30.304688 1.53125 -37.242188 6.28125 -41.359375 C 8.738281 -43.484375 11.914062 -44.722656 15.8125 -45.078125 C 20.46875 -45.503906 24.160156 -43.988281 26.890625 -40.53125 C 29.617188 -37.082031 31.289062 -31.984375 31.90625 -25.234375 C 32.28125 -21.179688 32.015625 -17.960938 31.109375 -15.578125 C 30.203125 -13.191406 28.582031 -11.894531 26.25 -11.6875 C 25.207031 -11.582031 24.191406 -11.960938 23.203125 -12.828125 C 22.210938 -13.691406 21.453125 -14.929688 20.921875 -16.546875 C 20.773438 -14.722656 20.332031 -13.265625 19.59375 -12.171875 C 18.851562 -11.085938 17.878906 -10.488281 16.671875 -10.375 C 14.753906 -10.195312 13.082031 -10.929688 11.65625 -12.578125 C 10.238281 -14.234375 9.363281 -16.851562 9.03125 -20.4375 C 8.707031 -24.03125 9.035156 -26.941406 10.015625 -29.171875 C 10.992188 -31.398438 12.507812 -32.609375 14.5625 -32.796875 C 15.53125 -32.878906 16.425781 -32.671875 17.25 -32.171875 C 18.082031 -31.671875 18.734375 -31.019531 19.203125 -30.21875 L 19.671875 -33.265625 L 22.8125 -33.546875 L 24.03125 -20.3125 C 24.175781 -18.707031 24.421875 -17.523438 24.765625 -16.765625 C 25.109375 -16.015625 25.585938 -15.664062 26.203125 -15.71875 C 26.828125 -15.78125 27.269531 -16.117188 27.53125 -16.734375 C 28.082031 -17.941406 28.148438 -20.910156 27.734375 -25.640625 C 26.742188 -36.453125 22.789062 -41.539062 15.875 -40.90625 C 11.695312 -40.519531 8.742188 -38.597656 7.015625 -35.140625 C 5.296875 -31.679688 4.710938 -26.925781 5.265625 -20.875 C 5.828125 -14.820312 7.128906 -10.460938 9.171875 -7.796875 C 11.222656 -5.140625 14.070312 -3.976562 17.71875 -4.3125 C 19.363281 -4.46875 20.90625 -4.84375 22.34375 -5.4375 L 23.375 -1.390625 C 21.101562 -0.710938 19.316406 -0.316406 18.015625 -0.203125 Z M 16.046875 -28.4375 C 13.734375 -28.226562 12.800781 -25.722656 13.25 -20.921875 C 13.625 -16.753906 14.863281 -14.765625 16.96875 -14.953125 C 17.90625 -15.046875 18.660156 -15.597656 19.234375 -16.609375 C 19.816406 -17.617188 20.039062 -18.890625 19.90625 -20.421875 L 19.234375 -27.78125 C 17.972656 -28.300781 16.910156 -28.519531 16.046875 -28.4375 Z M 16.046875 -28.4375 "/></g></g></g><g fill="#ff914d" fill-opacity="1"><g transform="translate(171.614257, 113.987887)"><g><path d="M 2.375 -0.21875 L 1.84375 -6 L 7.84375 -38.203125 L -0.21875 -37.46875 L -0.734375 -43.09375 L 14.171875 -44.453125 L 14.65625 -39.171875 L 8.703125 -6.453125 L 17.375 -7.25 L 17.890625 -1.640625 Z M 2.375 -0.21875 "/></g></g></g><g fill="#ff914d" fill-opacity="1"><g transform="translate(191.304347, 112.186717)"><g><path d="M 3.203125 -0.296875 L -0.71875 -43.09375 L 13.625 -44.40625 L 14.140625 -38.78125 L 6.3125 -38.0625 L 7.453125 -25.609375 L 14.890625 -26.28125 L 15.390625 -20.796875 L 7.953125 -20.125 L 9.203125 -6.5 L 17.328125 -7.234375 L 17.84375 -1.625 Z M 3.203125 -0.296875 "/></g></g></g><g fill="#ff914d" fill-opacity="1"><g transform="translate(211.140289, 110.372206)"><g><path d="M 20.828125 -12.984375 C 21.179688 -9.054688 20.695312 -6.09375 19.375 -4.09375 C 18.0625 -2.101562 15.753906 -0.957031 12.453125 -0.65625 C 9.160156 -0.351562 6.675781 -1.0625 5 -2.78125 C 3.332031 -4.507812 2.320312 -7.332031 1.96875 -11.25 L -0.953125 -43.09375 L 5.546875 -43.6875 L 8.453125 -11.96875 C 8.660156 -9.71875 8.890625 -8.359375 9.140625 -7.890625 C 9.398438 -7.421875 9.695312 -7.003906 10.03125 -6.640625 C 10.375 -6.273438 11.015625 -6.132812 11.953125 -6.21875 C 12.890625 -6.3125 13.535156 -6.648438 13.890625 -7.234375 C 14.253906 -7.816406 14.441406 -8.523438 14.453125 -9.359375 C 14.460938 -10.191406 14.410156 -11.242188 14.296875 -12.515625 L 11.390625 -44.234375 L 17.90625 -44.828125 Z M 20.828125 -12.984375 "/></g></g></g><g fill="#ff914d" fill-opacity="1"><g transform="translate(235.935216, 108.104067)"><g><path d="M 1.265625 -12.25 L 0.90625 -16.078125 L 7.078125 -16.640625 L 7.46875 -12.328125 C 7.6875 -9.953125 8.039062 -8.300781 8.53125 -7.375 C 9.03125 -6.445312 9.835938 -6.035156 10.953125 -6.140625 C 12.066406 -6.242188 12.769531 -6.707031 13.0625 -7.53125 C 13.363281 -8.351562 13.429688 -9.664062 13.265625 -11.46875 C 13.109375 -13.269531 12.644531 -14.804688 11.875 -16.078125 C 11.101562 -17.347656 9.941406 -18.648438 8.390625 -19.984375 L 4.921875 -22.953125 C 3.316406 -24.359375 2.023438 -25.847656 1.046875 -27.421875 C 0.078125 -29.003906 -0.503906 -30.878906 -0.703125 -33.046875 C -1.023438 -36.585938 -0.585938 -39.273438 0.609375 -41.109375 C 1.816406 -42.953125 4.082031 -44.023438 7.40625 -44.328125 C 10.738281 -44.640625 13.082031 -43.847656 14.4375 -41.953125 C 15.800781 -40.054688 16.65625 -37.191406 17 -33.359375 L 17.25 -30.6875 L 11.234375 -30.140625 L 10.953125 -33.203125 C 10.765625 -35.285156 10.453125 -36.757812 10.015625 -37.625 C 9.578125 -38.5 8.847656 -38.890625 7.828125 -38.796875 C 6.816406 -38.703125 6.117188 -38.289062 5.734375 -37.5625 C 5.359375 -36.832031 5.234375 -35.789062 5.359375 -34.4375 C 5.484375 -33.082031 5.804688 -32.019531 6.328125 -31.25 C 6.859375 -30.476562 7.773438 -29.519531 9.078125 -28.375 L 12.953125 -24.859375 C 14.890625 -23.109375 16.398438 -21.296875 17.484375 -19.421875 C 18.566406 -17.546875 19.210938 -15.445312 19.421875 -13.125 C 19.785156 -9.132812 19.382812 -6.117188 18.21875 -4.078125 C 17.050781 -2.035156 14.78125 -0.859375 11.40625 -0.546875 C 8.039062 -0.242188 5.597656 -1.097656 4.078125 -3.109375 C 2.566406 -5.117188 1.628906 -8.164062 1.265625 -12.25 Z M 1.265625 -12.25 "/></g></g></g><g fill="#ff914d" fill-opacity="1"><g transform="translate(257.934636, 106.09165)"><g><path d="M 3.203125 -0.296875 L -0.71875 -43.09375 L 7.390625 -43.828125 L 16.3125 -13.125 L 19.171875 -44.90625 L 27.328125 -45.65625 L 31.25 -2.859375 L 25.421875 -2.328125 L 23.96875 -18.28125 L 22.875 -32.9375 L 19.90625 -2.03125 L 14.71875 -1.546875 L 5.9375 -31.390625 L 7.53125 -16.78125 L 8.984375 -0.828125 Z M 3.203125 -0.296875 "/></g></g></g><g fill="#ff914d" fill-opacity="1"><g transform="translate(292.404447, 102.938492)"><g><path d="M 3.203125 -0.296875 L -0.71875 -43.09375 L 4.390625 -43.5625 L 15.8125 -18.703125 L 14.28125 -30.328125 L 13 -44.34375 L 18.859375 -44.875 L 22.78125 -2.078125 L 18.15625 -1.65625 L 6.421875 -27.390625 L 7.8125 -16.1875 L 9.21875 -0.84375 Z M 3.203125 -0.296875 "/></g></g></g></svg>
