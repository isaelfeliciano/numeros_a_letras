var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	mime = require('mime'),
	cache = {},
	nal = require('nal/leer_numeros.js');
	/*io = require('socket.io').listen(server)*/

	function envia404 (respuesta){
		respuesta.writeHeader(404, {'Content-Type': 'text/plain'});
		respuesta.write('Error 404: recurso no encontrado.');
		respuesta.end();
	}

	function enviaFile (respuesta, filePath, fileContents){
		respuesta.writeHeader(200, {'Content-Type':mime.lookup(path.basename(filePath))});
		respuesta.end(fileContents);
	}

	function serveStatic (respuesta, cache, absPath){
		if (cache[absPath]){
			enviaFile(respuesta, absPath, cache[absPath]);
		} else{
			fs.exists(absPath, function (exists){
				if(exists){
					fs.readFile(absPath, function (err, data){
						if(err){
							envia404(respuesta);
						} else{
							cache[absPath] = data;
							enviaFile(respuesta, absPath, data);
						}
					});
				} else{
					envia404(respuesta);
				}
			});
		}
	}

	var server = http.createServer(function (pedido, respuesta){
		var filePath = false;

		if(pedido.url == '/'){
			filePath = 'public/index.html';
		} else{
			filePath = 'public' + pedido.url;
		}
		var absPath = './' + filePath;
		serveStatic(respuesta, cache, absPath);
	});

	var port = Number(process.env.PORT || 5000)
	server.listen(port, function (){
		console.log('Servidor escuchando en puerto: '+port);
	});

	var io = require('socket.io').listen(server);
	io.sockets.on('connection', function (socket){
		console.log('Socket conectado');

		socket.on('consulta', function (data){
			var respuesta = data.dato;
			io.sockets.emit('resp_consulta', nal.leerNumeros(respuesta));
			console.log(nal.leerNumeros(respuesta)); 
		});

	});

