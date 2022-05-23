var express = require("express")
var server  = express() // createServer()
server.listen(20000)
server.use( express.static("public") )