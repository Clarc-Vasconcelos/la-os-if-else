var valor = parseFloat(prompt("Declare o valor pago por hora de trabalho:"));
var horas = parseFloat(prompt("Declare o número de horas trabalhadas:"));

var salarioBruto = (valor * horas).toFixed(2);

var impostoDeRenda;
var INSS = (salarioBruto * 0.1).toFixed(2);
var FGTS = (salarioBruto * 0.11).toFixed(2);
var descontos;
var salarioLiquido;

if (salarioBruto <= 900) {
  impostoDeRenda = (0).toFixed(2);
} else if (salarioBruto <= 1500) {
  impostoDeRenda = (salarioBruto * 0.05).toFixed(2);
} else if (salarioBruto <= 2500) {
  impostoDeRenda = (salarioBruto * 0.15).toFixed(2);
} else if (salarioBruto > 2500) {
  impostoDeRenda = (salarioBruto * 0.2).toFixed(2);
} else {
  alert("Valores inválidos");
}

descontos = (parseFloat(INSS) + parseFloat(impostoDeRenda)).toFixed(2);
salarioLiquido = (parseFloat(salarioBruto) - parseFloat(descontos)).toFixed(2);

alert("Seu salário salario bruto é de: " + salarioBruto);
alert("Imposto de Renda: " + impostoDeRenda);
alert("INSS: " + INSS);
alert("FGTS: " + FGTS);
alert("Total de descontos: " + descontos);
alert("Salário Liquido: " + salarioLiquido);
