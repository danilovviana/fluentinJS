/*
APRENDENDO OS MÉTODOS:

Map, Filter, Reduce
Obs. Sempre que utilizarmos esses métodos, a função deve sempre retornar - return - algum valor 

-
MAP
Quando você deve usar o map:
- Quando você precisa obter um novo array, com a mesma quantidade de itens do array original e também tenha cada item transformado.

Obs. A *imutabilidade* com a função Arrow Function usando o return implicito.
     *Principio da programação funcional 
     Um codigo imutavel-Tredself, previne futuros bugs e deixa seu codigo em ordem, com mais clareza e entendimento.

  Obs2: Gerenciaomento de memória  - JS  - mecanismo Garbage collection 'coleta de lixo'
*/

/*

Exercício 1

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => item * 2)

console.log(numbers === doubleNumbers)
console.log(numbers, doubleNumbers)

*/

/* 

Exercício 2

const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(price => price / 2)

console.log(salePrices)

*/

/*

Exercício 3

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {
    if (product.price >= 30) {
        return {
            name: product.name,
            price: product.price / 2
        }
    }

    return product
})

console.log(saleProducts)

*/

/*

-
FILTER
Quando você deve usar o Filter:
- Quando você precisa obter um novo array, com uma quanitdade de itens menor a do array original.

Obs. Se a função ao ser executada retornar true, será automaticamente inserido os novos itens no novo array. Se for false o filter retornará uma array vazia.
*/

/*

Exercício 1

const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

console.log(numbersGreaterThan37)
*/

/*

Exercício 2

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers)
*/

/*

-
REDUCE
Quando você deve usar o Reduce:
 Quando baseado no array original, você precisa "reduzir" o array a um valor(qualquer valor).

Obs. - O mais poderoso dos tres métodos - Ao contrário dos métodos map e filter, o reduce tem poder e versatilidade para gerar um valor que não necessariamente vai ser um array.

*/

/*
Exercício 1

const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult)

Exercício 2
*/

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
        return accumulator + phaseScore.score
    }

    return accumulator
}, 0)

console.log(rogerScore);