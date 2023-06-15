var nota1 = Number(prompt("Insira a primeira nota:"));
var nota2 = Number(prompt("Insira a segunda nota:"));

const notaMedia = ((nota1 + nota2) / 2).toFixed(2);
alert("A nota média do aluno foi de: " + notaMedia);
if (notaMedia >= 7.0) {
  alert("Aprovado");
} else if (notaMedia < 7.0) {
  alert("Reprovado");
} else if ((notaMedia = 10.0)) {
  alert("Reprovado");
} else {
  alert("Falha");
}
