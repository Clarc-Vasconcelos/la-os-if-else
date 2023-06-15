// Solicita ao usuário que declare o salário atual e converte o valor para um número de ponto flutuante
var salario = parseFloat(prompt("Declare o salário atual:"));

// Verifica se o valor do salário é menor ou igual a 280.00
if (salario < 280.0) {
  alert("Aumento de 20%");
  var novoValor = (salario * 1.2).toFixed(2); // Aplica um reajuste de 20%
  alert("Salário antes do reajuste: " + salario);
  alert("Percentual de reajuste: 20%");
  var diferencaValor = (novoValor - salario).toFixed(2);
  alert("Diferença entre os valores: " + diferencaValor);
  alert("Novo salário com aumento: " + novoValor);
} else if (salario < 700.0) {
  alert("Aumento de 15%");
  var novoValor = (salario * 1.15).toFixed(2); // Aplica um reajuste de 15%
  alert("Salário antes do reajuste: " + salario);
  alert("Percentual de reajuste: 15%");
  var diferencaValor = (novoValor - salario).toFixed(2);
  alert("Diferença entre os valores: " + diferencaValor);
  alert("Novo salário com aumento: " + novoValor);
}
else if (salario < 1500.00) {
  alert("Aumento de 10%");
  var novoValor = (salario * 1.10).toFixed(2); // Aplica um reajuste de 10%
  alert("Salário antes do reajuste: "+salario)
  alert("Percentual de reajuste: 10%")
  var diferencaValor = (novoValor-salario).toFixed(2)
  alert("Diferença entre os valores: "+diferencaValor)
  alert("Novo salário com aumento: "+novoValor)
}
else if (salario >= 1500.00) {
  alert("Aumento de 5%");
  var novoValor = (salario * 1.05).toFixed(2); // Aplica um reajuste de 5%
  alert("Salário antes do reajuste: "+salario)
  alert("Percentual de reajuste: 5%")
  var diferencaValor = (novoValor-salario).toFixed(2)
  alert("Diferença entre os valores: "+diferencaValor)
  alert("Novo salário com aumento: "+novoValor)
}
else {
  alert("Valor não identificado, recarregue a página!")
}
