const Funcionario = require('./classes/funcionario');

// instanciando a classe
let p = new Funcionario();  // construtor executado

p.atribuir('Antonio Carlos', 40, 'motoboy', 3000);
console.log(p.mostrarDados());