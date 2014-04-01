$(document).on("ready", function(){
	inicio();
});	
	function inicio(){
		var socket = io.connect();
		$('input[name="convertir"]').on("click", function(){
			var salida_numero = "";
			var entrada_numero = $('input[name="entrada_numero"]').val();
			if(/[a-zA-Z]/.test(entrada_numero)){
				$('input[name="entrada_numero"]').val('');
				$('input[name="entrada_numero"]').attr('placeholder', 'Solo numeros');
			}else{
				socket.emit('consulta', {dato: entrada_numero});
				if($('input[name="salida_numero"]').val(salida_numero) !== ""){
					$('textarea[name="salida_numero"]').val("");
				}
			}
		});

		socket.on('resp_consulta', function (respuesta){
			$('textarea[name="salida_numero"]').val(respuesta);
		})
	}
