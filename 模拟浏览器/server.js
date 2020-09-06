const http = require('http')

http.createServer((req, res) => {
  let body = []
  req.on('error', err => {
    console.error(err)
  }).on('data', chunk => {
    body.push(chunk.toString())
  }).on('end', () => {
    // body = Buffer.concat(body).toString()
    console.log('body:', body)
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(
    `<html lang="en">
      <head>
        <title>Document</title>
        <style>
          #container {
            width: 500px;
            height: 300px;
            display: flex;
            background-color: rgb(255, 255, 255);
          }
          #container #testDiv {
            width: 200px;
            height: 100px;
            background-color: rgb(255, 0, 255);
          }
          #container .flexDiv {
            flex: 1;
            background-color: rgb(0, 255, 0);
          }
        </style>
      </head>
      <body>
        <div id="container">
          <div id="testDiv">hello world!</div>
          <div class="flexDiv">hello world!</div>
        </div>
      </body>
    </html>`
    )
  })
}).listen(8088)

console.log('服务启动成功')