// forma tradicional
function calcularSoma(x, y) {
    //x = parseFloat(x);
   // y = parseFloat(y);

   if(typeof(x) != "number"){
    throw new error ("O parâmetro x deve ser numérico");
   }
   if(typeof(y) != "number"){
    throw new error ("O parâmetro y deve ser numérico");
   }   
  

    return x + y;
}

// função anônima
let maiorValor = function() {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}

//arrow function
let calcularSubtracao = (x, y) => x - y;

let menorValor = (x, y) => (x < y) ? x : y;


module.exports = {calcularSoma, maiorValor, calcularSubtracao, menorValor };