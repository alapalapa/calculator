
var Calculadora = function(input_id){
	var resultado = 0, operacion = 0, calculadoraUsada = false;
	var input = document.getElementById(input_id);
	return{
		reset:function(){
			resultado=operacion=0;
			input.value='';
		},
		operacion:function(operation){
			//Falta verificar y evitar que sobreescriba
			//debugger;
			if(!operacion == 0){//Comprueba si hay una operacion pendiente
				if(!calculadoraUsada){
					switch(operacion){
						case 1:
							resultado += parseFloat(input.value);
							input.value = resultado;
							break;
						case 2:
							resultado -= parseFloat(input.value);
							input.value = resultado;
							break;
						case 3:
							resultado *= parseFloat(input.value);
							input.value = resultado;
							break;
						case 4:
							resultado /= parseFloat(input.value);
							input.value = resultado;
							break;
						default:
							alert('Ocurrio un problema');
							break;
					}
				}
			}else{
				if (!isNaN(parseFloat(input.value))){
					resultado = parseFloat(input.value);
				}
			}
			operacion = operation;
			calculadoraUsada = true;
		},
		escribirNumero:function(numero){
			if(calculadoraUsada){
				input.value='';
				input.value += (''+numero);
				calculadoraUsada = false;
			}else{
				input.value += (''+numero);
			}
			
		},
	};
};

var calculator = new Calculadora('field');	