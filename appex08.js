let dados = require('./dados/listaDados');

let listaCursos = dados.cursos;

// criar uma lista com os cursos ativos (status = true)
let ativos = listaCursos.filter(item => item.status);
console.log(ativos);

// criar uam lista com os cursos longos (carga horária acima de 3000 horas)
let longos  = listaCursos.filter(item => item.ch > 3000);
console.log(longos);

let longosTrue = longos.filter(item => item.status);
console.log(longosTrue);