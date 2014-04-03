$(document).on("ready", function(){
	inicio();
});	
	function inicio(){
		var socket = io.connect();
		$('input[name="convertir"]').on("click", function(){
			var salida_numero = "";
			var entrada_numero = $('input[name="entrada_numero"]').val();
			if(/[a-zA-Z]/.test(entrada_numero)){
				$('input[name="entrada_numero"]').val('').attr('placeholder', 'Solo numeros');
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

$(document).on("ready", function(){
	var i = 0;
	$(document).on('keypress', function(e){
		console.log(e.keyCode);
		if(e.keyCode == 13){
			$('input[name="convertir"]').click();
			i = 0;
		}
		
		if(e.keyCode == 46){
			i++;
			$('input[name="entrada_numero"]').val('');
		}
		if (i == 2){
			$('textarea[name="salida_numero"]').val("");
			i = 0;
		}
	});
});

$(document).on("ready", function(){
	$("form").submit(function(){ 
		return false; 
	});
});