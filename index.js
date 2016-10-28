var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
  res.sendFile(--dirname + '/' + 'index.html');

});

app.post('/', function(req, res) {
  console.log('Hola acabo de hacer un post');
  res.send('Hola acabo de hacer un post');
});

app.get('/user', function(req, res) {
 res.send('Hola estoy haciendo usuarios');

});

var server = app.listen(3000, function() {
 var port = server. address().port;
 console.log('Servidor ejecutando en el puerto', port);

});


