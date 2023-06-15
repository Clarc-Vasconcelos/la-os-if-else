var letra = prompt ("Insira uma letra:");

if (letra == "a" || letra == "e"  || letra == "i"  || letra == "o"  || letra == "u") {
    alert ("vogal")
}
else if (letra == "A" || letra == "E"  || letra == "I"  || letra == "O"  || letra == "U") {
    alert ("vogal") 
}
else if (letra.length > 1) {
    alert ("escreva somente uma letra")
}
else {
    alert ("consoante")
};
