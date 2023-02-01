const express = require('express')
const app = express()
const http = require('http')
const { hostname } = require('os')
const expressServer = http.createServer(app)


app.get('/', function (req, res) {
   res.sendFile(__dirname+"/index.html")  
})

expressServer.listen(5000, function(){
    console.log("server running at port: 5000")
})