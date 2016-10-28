var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola mundo');

});

var server = app.listen(3000, function() {
 var port = server. address().port;
 console.log('Servidor ejecutando en el puerto', port);

});


