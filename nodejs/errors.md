# Errors of Node.js

Here I want to log all errors that I got using Node.js.

## Can't start dev server

26.11.2025. I run a command on Windows 10, node v. 25.2.1 in a Vite app.

Error occurs:

```
error when starting dev server:
Error: listen EACCES: permission denied ::1:5173
    at Server.setupListenHandle [as _listen2] (node:net:1918:21)
    at listenInCluster (node:net:1997:12)
    at GetAddrInfoReqWrap.callback (node:net:2206:7)
    at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:133:8)
```

I ran console as admin, but it didn't help.

**Solution:** Change port number from default `5173` to `8000`. Edit `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 8000,
  },
});
```
