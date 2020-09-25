// arrow function
const felizNatal = () => console.log('Feliz Natal!')
felizNatal()

const saudacao = nome => `Fala ${nome}, blza!!!`
console.log(saudacao('Maria'))

// Sempre que tem { } ao corpo da função precisamos colocar o return
const somar = array => {
    let total = 0
    for(let number of array){
        total += number
    }
    return total
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))


