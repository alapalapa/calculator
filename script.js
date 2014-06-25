//Botones Class

var botones = function(numero)
{
	var cuenta = document.getElementById('field').value += numero;
	var boton = {
		add: function(){
			document.getElementById('field').value = cuenta;
		}
	};

	return boton;
}

//Variable global para almacenar resultado
var resultado = 0;


//Calcular class
var calcular = function()
{
	var operacion = {
		count: 0,
		verificar: function(valor){
			if(!isNaN(parseFloat(valor)) && isFinite(parseFloat(valor)))
			{	
				return valor;
			} else {
				return 0;
			}
		},
		iniciarField: function(){
			document.getElementById('field').value = "";
		},
		verResultado: function(valor){
			document.getElementById('field').value = valor;
		},
		sumar: function(){
			resultado += parseFloat(this.verificar(document.getElementById('field').value));
			this.iniciarField();
			console.log(resultado);
		},
		restar: function(){
			resultado -= parseFloat(this.verificar(document.getElementById('field').value));
			this.iniciarField();
			console.log(resultado);
		},
		multiplicar: function(){
			resultado *= parseFloat(this.verificar(document.getElementById('field').value));
			this.iniciarField();
			console.log(resultado);
		},
		dividir: function(){
			resultado /= parseFloat(this.verificar(document.getElementById('field').value));
			this.iniciarField();
			console.log(resultado);
		},
		igual: function(){
			this.verResultado(resultado);
		}
	};

	return operacion;
}
