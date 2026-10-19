const textoDecimal = '123.45' // Convertendo texto para número
const numeroConvertido = Number(textoDecimal) // Agora podemos usar de verdade!
const total = numeroConvertido + 10
console.log(total) // Saída: 133.45

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(100)); // true
console.log(Boolean(gato)); // true