// Objetivo: Conseguir passar uma função como parametro para outra função e retornar uma função

function bomDia() {
  console.log("Bom dia!");
}

const boaTarde = function () {
  console.log("Boa tarde!");
};

//Passar uma função como parametro para outra função
function executarQualquerCoisa(func) {
  if (typeof func === "function") {
    func();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// Retornando uma função a partir de uma outra função
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);

console.log(potenciaDe2(8));
