//Variables con los prefijos almacenados
var num_en_letras="", dieci='dieci',veinte='Veinte',veinti='veinti',treinta='treinta', cuarenta='cuarenta',
	cincuenta='cincuenta', sesenta='sesenta', setenta='setenta',ochenta='ochenta', noventa='noventa', cientos='cientos ';

//9007199254740992
function leerNumeros(misnumeros){
	//Decimas parte 1
	if(misnumeros >= 1 && misnumeros <= 20){
		return del_0_19(misnumeros);
	}
	//Decimas parte 2
	if(misnumeros >= 21 && misnumeros <= 29){
		return del_21_29(misnumeros);
	}
	//Decimas parte 3
	if(misnumeros >= 30 && misnumeros <= 99){
		return del_30_99(misnumeros);
	}
	//Centenas
	if(misnumeros >=100 && misnumeros <= 999){
		return del_100_999(misnumeros);
	}
	//Millares
	if (misnumeros >=1000 && misnumeros <= 999999){
		return del_1000_999999(misnumeros);
	}
	//Millones
	if (misnumeros >=1000000 && misnumeros <= 999999999999){
		return del_1000000_999999999(misnumeros);
	}
	//Billones
	if(misnumeros >=1000000000000 && misnumeros <=999999999999999999){
		return del_1000000000000_999999999999999999(misnumeros);
	}
}
function del_0_19(numero){
	switch (parseInt(numero)){
		case 1: num_en_letras = "Uno";
		break;
		case 2: num_en_letras = "Dos";
		break;
		case 3: num_en_letras = "Tres";
		break;
		case 4: num_en_letras = "Cuatro";
		break;
		case 5: num_en_letras = "Cinco";
		break;
		case 6: num_en_letras = "Seis";
		break;
		case 7: num_en_letras = "Siete";
		break;
		case 8: num_en_letras = "Ocho";
		break;
		case 9: num_en_letras = "Nueve";
		break;
		case 10: num_en_letras = "Diez";
		break;
		case 11: num_en_letras = "Once";
		break;
		case 12: num_en_letras = "Doce";
		break;
		case 13: num_en_letras = "Trece";
		break;
		case 14: num_en_letras = "Catorce";
		break;
		case 15: num_en_letras = "Quince";
		break;
		case 16: num_en_letras = dieci+del_0_19(parseInt(String(numero)[1]));
		break;
		case 17: num_en_letras = dieci+del_0_19(parseInt(String(numero)[1]));
		break;
		case 18: num_en_letras = dieci+del_0_19(parseInt(String(numero)[1]));
		break;
		case 19: num_en_letras = dieci+del_0_19(parseInt(String(numero)[1]));
		break;
		case 20: num_en_letras = veinte;
		break;
	}
	return num_en_letras.toLowerCase();
	}

function del_21_29(numero){
	var n_1 = parseInt(String(numero)[0]),
		n_2 = parseInt(String(numero)[1]),
		primero;
	switch(n_1){
		case 2:primero=veinti;
		break;
	}
	return num_en_letras = primero+del_0_19(n_2);
}

function del_30_99(numero){
	var n_1 = parseInt(String(numero)[0]),
		n_2 = parseInt(String(numero)[1]),
		primero;
	switch(n_1){	
		case 3:primero=treinta;
		break;
		case 4:primero=cuarenta;
		break;
		case 5:primero=cincuenta;
		break;
		case 6:primero=sesenta;
		break;
		case 7:primero=setenta;
		break;
		case 8:primero=ochenta;
		break;
		case 9:primero=noventa;
		break;
	}
	if (n_2 === 0){
		num_en_letras = primero;
	}else{
		num_en_letras = primero+' y '+del_0_19(n_2);	
	}
return num_en_letras;			
}

function del_100_999(numero){
	var n_1 = parseInt(String(numero).substring(0,1)),
		n_2 = parseInt(String(numero).substring(1));
	if(n_2 === 00){
		if(n_1 === 1 || n_1 === 5 || n_1 === 7 || n_1 === 9){
			switch (n_1){
				case 1:num_en_letras = 'cien';
				break;
				case 5:num_en_letras = 'quinientos ';
				break;
				case 7:num_en_letras = 'setecientos ';
				break;
				case 9:num_en_letras = 'novecientos ';
			}
		}else{
			num_en_letras = del_0_19(n_1)+cientos;
		}
	}else{	
		if(n_1 === 1 || n_1 === 5 || n_1 === 7 || n_1 === 9){
			switch (n_1){
				case 1:num_en_letras = 'ciento '+leerNumeros(n_2);
				break;
				case 5:num_en_letras = 'quinientos '+leerNumeros(n_2);
				break;
				case 7:num_en_letras = 'setecientos '+leerNumeros(n_2);
				break;
				case 9:num_en_letras = 'novecientos '+leerNumeros(n_2);
			}
		}else{
			num_en_letras = del_0_19(n_1)+cientos+leerNumeros(n_2);
		}
	}
return num_en_letras;
}	

function del_1000_999999(numero){
	if(parseInt(String(numero).length) === 4){
		var n_1 = parseInt(String(numero).substring(0,1)),
			n_2 = parseInt(String(numero).substring(1));
			if(n_1 === 1){
				if(n_2 === 000){
					num_en_letras = 'mil';
				}else{
				num_en_letras = 'mil '+leerNumeros(n_2);
				}
			}else{
				if (n_2 === 000){
					num_en_letras = del_0_19(n_1)+' mil';
				}else{	
					num_en_letras = del_0_19(n_1)+' mil '+leerNumeros(n_2);
				}	
			}	
	}
	if(parseInt(String(numero).length) === 5){
		var n_1 = parseInt(String(numero).substring(0,2)),
		n_2 = parseInt(String(numero).substring(2));
		if(n_2 === 000){
			num_en_letras = leerNumeros(n_1)+' mil ';
		}else{
			num_en_letras = leerNumeros(n_1)+' mil '+leerNumeros(n_2);
		}	
	}
	if (parseInt(String(numero).length) === 6){
		var n_1 = parseInt(String(numero).substring(0,3)),
		n_2 = parseInt(String(numero).substring(3));
		if(n_2 === 000){
			num_en_letras = leerNumeros(n_1)+' mil ';
		}else{	
			num_en_letras = leerNumeros(n_1)+' mil '+leerNumeros(n_2);
		}	
	}
return num_en_letras;	
}

function del_1000000_999999999(numero){
	if(parseInt(String(numero).length) === 7){
		var n_1 = parseInt(String(numero).substring(0,1)),
			n_2 = parseInt(String(numero).substring(1));
			if(n_1 === 1){
				if(n_2 === 0000){
					num_en_letras = 'un millon';
				}else{
				num_en_letras = 'un millon '+leerNumeros(n_2);
				}
			}else{
				if(n_2 === 0000){
					num_en_letras = del_0_19(n_1)+' millones ';
				}else{	
					num_en_letras = del_0_19(n_1)+' millones '+leerNumeros(n_2);
				}	
			}
	}
	if(parseInt(String(numero).length) === 8){
		var n_1 = parseInt(String(numero).substring(0,2)),
		n_2 = parseInt(String(numero).substring(2));
		if(n_2 === 0000){
			num_en_letras = leerNumeros(n_1)+' millones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' millones '+leerNumeros(n_2);
		}	
	}
	if(parseInt(String(numero).length) === 9){
		var n_1 = parseInt(String(numero).substring(0,3)),
		n_2 = parseInt(String(numero).substring(3));
		if(n_2 === 0000){
			num_en_letras = leerNumeros(n_1)+' millones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' millones '+leerNumeros(n_2);
		}	
	}
	if(parseInt(String(numero).length) === 10){
		var n_1 = parseInt(String(numero).substring(0,4)),
		n_2 = parseInt(String(numero).substring(4));
		if(n_2 === 0000){
			num_en_letras = leerNumeros(n_1)+' millones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' millones '+leerNumeros(n_2);
		}	
	}
	if(parseInt(String(numero).length) === 11){
		var n_1 = parseInt(String(numero).substring(0,5)),
		n_2 = parseInt(String(numero).substring(5));
		if(n_2 === 0000){
			num_en_letras = leerNumeros(n_1)+' millones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' millones '+leerNumeros(n_2);
		}	
	}
	if(parseInt(String(numero).length) === 12){
		var n_1 = parseInt(String(numero).substring(0,6)),
		n_2 = parseInt(String(numero).substring(6));
		if(n_2 === 0000){
			num_en_letras = leerNumeros(n_1)+' millones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' millones '+leerNumeros(n_2);
		}	
	}
return num_en_letras;		
}

function del_1000000000000_999999999999999999(numero){
	if(parseInt(String(numero).length) === 13){
		var n_1 = parseInt(String(numero).substring(0,1)),
			n_2 = parseInt(String(numero).substring(1));
			if(n_1 === 1){
				if(n_2 === 0000){
					num_en_letras = 'un billon';
				}else{
				num_en_letras = 'un billon '+leerNumeros(n_2);
				}
			}else{
				if(n_2 === 00000){
					num_en_letras = del_0_19(n_1)+' billones ';
				}else{	
					num_en_letras = del_0_19(n_1)+' billones '+leerNumeros(n_2);
				}	
			}
	}
	if(parseInt(String(numero).length) === 14){
		var n_1 = parseInt(String(numero).substring(0,2)),
		n_2 = parseInt(String(numero).substring(2));
		if(n_2 === 00000){
			num_en_letras = leerNumeros(n_1)+' billones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' billones '+leerNumeros(n_2);
		}	
	}
	if(parseInt(String(numero).length) === 15){
		var n_1 = parseInt(String(numero).substring(0,3)),
		n_2 = parseInt(String(numero).substring(3));
		if(n_2 === 00000){
			num_en_letras = leerNumeros(n_1)+' billones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' billones '+leerNumeros(n_2);
		}	
	}
	/*if(parseInt(String(numero).length) === 16){
		var n_1 = parseInt(String(numero).substring(0,4)),
		n_2 = parseInt(String(numero).substring(4));
		if(n_2 === 00000){
			num_en_letras = leerNumeros(n_1)+' billones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' billones '+leerNumeros(n_2);
		}		
	}
	if(parseInt(String(numero).length) === 17){
		var n_1 = parseInt(String(numero).substring(0,5)),
		n_2 = parseInt(String(numero).substring(5));
		if(n_2 === 00000){
			num_en_letras = leerNumeros(n_1)+' billones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' billones '+leerNumeros(n_2);
		}	
	}
	if(parseInt(String(numero).length) === 18){
		var n_1 = parseInt(String(numero).substring(0,6)),
		n_2 = parseInt(String(numero).substring(6));
		if(n_2 === 00000){
			num_en_letras = leerNumeros(n_1)+' billones ';
		}else{
			num_en_letras = leerNumeros(n_1)+' billones '+leerNumeros(n_2);
		}	
	}*/
return num_en_letras;
}
//console.log(leerNumeros(9999999999999999));