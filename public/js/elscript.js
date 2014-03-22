$(document).on("ready", function(){
	inicio();
});	
	function inicio(){
		var socket = io.connect('http://localhost');
		$('input[name="convertir"]').on("click", function(){
			var salida_numero = "";
			var entrada_numero = $('input[name="entrada_numero"]').val();
			socket.emit('consulta', {dato: entrada_numero});
			//var entrada_numero = $('input[name="entrada_numero"]').val();
			//var salida_numero = leerNumeros(entrada_numero);
			if($('input[name="salida_numero"]').val(salida_numero) !== ""){
				$('textarea[name="salida_numero"]').val("");
			}
			//$('input[name="salida_numero"]').val(salida_numero);
		});

		socket.on('resp_consulta', function (respuesta){
			$('textarea[name="salida_numero"]').val(respuesta);
		})
	}