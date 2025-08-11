// Number - valores numéricos - inteiros e ponto flutuante
let inteiro = 42;
let numeroPontoFlutuante = 3.4567;
let numeroPontoFlutuante2 = 3.4537;

// Verificar se o número é um inteiro - retorna booleano
console.log(Number.isInteger(inteiro)); // true
console.log(Number.isInteger(numeroPontoFlutuante)); // false

//Formatar número de acordo com as casas decimais
console.log(numeroPontoFlutuante.toFixed(2)); // digitos = casas decimais
console.log(numeroPontoFlutuante2.toFixed(2));
console.log(numeroPontoFlutuante.toFixed());

//Formatar número precisão específica
console.log(numeroPontoFlutuante.toPrecision(4)); // número dígitos que o numeral irá conter
