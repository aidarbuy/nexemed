var express = require('express');

var eapp = express();
eapp.use(express.static(__dirname + '/public'))
	.set('views', __dirname)
	.get('*', function(req, res){
		res.sendFile(__dirname + '/index.html');
	});

eapp.listen(process.env.PORT || 19000);
