let calcularImposto = require('./funcoes/imposto');

let irpf = calcularImposto(1435.2);

console.log(irpf.toFixed(2));
