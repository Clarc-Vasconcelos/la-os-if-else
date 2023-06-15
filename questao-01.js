var peso = prompt("Insira seu peso em kg:");
var altura = prompt("Insira sua altura metros:");
const imc = (peso/(altura*altura)).toFixed(2);

if (imc <(18,5)) {
	alert ("Abaixo do peso normal");
} 
else if (imc < (24.9)) {
	alert ("Peso normal / imc: " + imc);
}
else if (imc < (29.9)) {
	alert ("Excesso de peso / imc: " + imc);
}
else if (imc < (34.9)) {
	alert ("Obesidade classe 1 / imc: " + imc);
}
else if (imc < (39.9)) {
	alert ("Obesidade classe 2 / imc: " + imc);
}
else if (imc >= (40.0)) {
	alert ("Obesidade classe 3 / imc: " + imc);
}
else {
	alert ("Falha")
}
