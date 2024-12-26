let calcularDias = require('./funcoes/diasRestantes');

//obtendo os parametros de entrada
let dia = process.argv[2];
let mes = process.argv[3];
let ano = process.argv[4];

let dias = calcularDias(dia, mes, ano);
console.log(dias);