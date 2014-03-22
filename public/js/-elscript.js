$(document).ready(inicio);
	function inicio(){
		$('input[name="convertir"]').on("click", function(){
			var entrada_numero = $('input[name="entrada_numero"]').val();
			var salida_numero = leerNumeros(entrada_numero);
			if($('input[name="salida_numero"]').val(salida_numero) !== ""){
				$('textarea[name="salida_numero"]').val("");
			}
			$('textarea[name="salida_numero"]').val(salida_numero);
		});

	
}
