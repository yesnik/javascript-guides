# Express Framework guides

[Express](https://github.com/expressjs/express) is web framework for node.

## Get params

### Params from URL

Object `req.params` contains values from URL's placeholders - parts of URL with colons (eg. `:id`).

Express:

```js
app.get('/posts/:id', function (req, res) {
  res.send('Content of post.id = ' + req.params.id)
});
```

Request:

```bash
curl "http://127.0.0.1:3000/posts/11"

# Output: 
# Content of post.id = 11
```

### Query params

Object `req.query` contains query params from URL - those that go after `?`, eg. `http://127.0.0.1:3000/?a=1&b=2`.

Express:

```js
app.get('/', function (req, res) {
  res.send(req.query);
});
```

Request:

```bash
curl "http://127.0.0.1:3000/?a=1&b=2"

# Output:
# {"a":"1","b":"2"}
```
