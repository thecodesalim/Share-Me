var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(8000, () => console.log('**Listening'))
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    console.log(socket.id)
    socket.on('chat', (location) => {
        console.log(location)
       io.emit('chat', location)
       //socket.broadcast.emit('chat', "this is a test");
    })
    socket.on('name', name => {
      io.emit('name', name)
    })

    
})