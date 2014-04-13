var valor1;
var valor2 = 0;
var $in = $('input[name="entrada_numero"]');
var $out = $('textarea[name="salida_numero"]');
$(document).on("ready", function(){
	inicio();
});	
	function inicio(){
		$('input[name="convertir"]').on("click", function(){
			$(this).trigger("comparar");	
		});
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
			$in.val('');
		}
		if (i == 2){
			$out.val("");
			i = 0;
		}
	});
});

$(document).on("comparar", function(){
	valor1 = $('input:first').val();
	if (valor1 == valor2){
		console.log('Misma consulta');
	}else{
		if ($('input:first').val().length > 15){
			$(this).trigger('enviar');
			//alert('Por ahora solo podemos contar hasta 15 digitos, \n estamos trabajando para mejorarlo.');
		}else{
			$(this).trigger('enviar');
		}
	}
	valor2 = $('input:first').val();
});

$(document).on('enviar', function(){
	var socket = io.connect();
	var salida_numero = "";
	var entrada_numero = $in.val();
	var n1 = $('input:first').val();
	var ceros = 0;
	var s_cero = "";
	for(var i=0;n1[i] == 0;i++){
		if(n1[i] == 0){
			ceros += 1;
			s_cero += "cero ";
		}
	}

	if(/[a-zA-Z]/.test(entrada_numero)){
		$in.val('').attr('placeholder', 'Solo numeros');
	}else{
		entrada_numero = String(entrada_numero).substring(ceros);
		console.log(typeof(entrada_numero));
		socket.emit('consulta', {dato: entrada_numero});
		if($('input[name="salida_numero"]').val(salida_numero) !== ""){
			$out.val("");
		}
	}
	socket.on('resp_consulta', function (respuesta){
			$out.val(s_cero + respuesta);
		})
});


$(document).on("ready", function(){
	$("form").submit(function(){ 
		return false; 
	});
});

