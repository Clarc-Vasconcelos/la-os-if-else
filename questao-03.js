var number1 = prompt ("Insira o primeiro número:");
var number2 = prompt ("Insira o segundo número:");
var number3 = prompt ("Insira o terceiro número:");


if (number1 > number2 && number1 > number3){
    alert (number1+" é maior que "+number2 + " e " + number3)
}
else if (number2 > number1 && number2 > number3){
    alert (number2+" é maior que "+number1 + " e " + number3)
}
else {
    alert (number3+" é maior que "+number1 + " e " + number2)
};
