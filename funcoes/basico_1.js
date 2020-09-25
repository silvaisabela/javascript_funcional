let a = 4
console.log(a)

// Function Declaration
function bomDia(){
    console.log('Bom dia!')
}
//----> executando a função  <----
bomDia();

// Function Expression
// Normalmente armazenamos uma função dentro de uma variavel e podendo ser anonima
const boaTarde = function () {
    console.log('Boa Tarde!')
}
//----> executando a função  <----
boaTarde();


// Conseguimos atribuir parametros dentro da função na quantidade que preferirmos
function somar(a,b){
    return a + b
}

const resutado = somar(3,4);

console.log(resutado);