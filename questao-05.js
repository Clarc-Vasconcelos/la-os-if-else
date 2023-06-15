var x = Number(prompt("Insira o primeiro número:"));
var y = Number(prompt("Insira o segundo número:"));
var z = Number(prompt("Insira o terceiro número:"));

const crescente = " " + " " + " ";

const decrescente = " " + " " + " ";

// Ordem Crescente
if (x < y && y < z) {
  alert(x + " é menor que " + y + " que é menor que " + z);
} else if (x < z && y > z) {
  alert(x + " é menor que " + z + " que é menor que " + y);
} else if (y < x && x < z) {
  alert(y + " é menor que " + x + " que é menor que " + z);
} else if (y < z && x > z) {
  alert(y + " é menor que " + z + " que é menor que " + x);
} else if (z < x && x < y) {
  alert(z + " é menor que " + x + " que é menor que " + y);
} else if (z < y && x > y) {
  alert(z + " é menor que " + y + " que é menor que " + x);
} else {
}

// Orderem Decrescente

// primeiro é menor que segundo que é menor que o terceiro
