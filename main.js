var PORT = 8080

var express = require('express')
var app = express()
var http = require('http').Server(app)
var localStorage = require('node-localstorage')

app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/static')

app.get('/', function(req, res) {
	res.render("index.ejs")
})

http.listen(PORT, function() {
	console.log("Server started on port *:" + PORT)
})