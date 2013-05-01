var mongoose = require('mongoose');
mongoose.connect('mongodb://sample:123456@isotopo.net/test');
console.log('Conectando a MongoDB');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'error de conexión'));
db.once('open', function callback () {
    
    console.log("Conexión a Mongo exitosa!!");
    //db.authenticate("sample", "123456", function(err, authdb) {
    //    //console.log(err);
    //});
  
});

