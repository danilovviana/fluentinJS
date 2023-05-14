/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.

  Dica: pesquise por remainder operator (%).
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const oddNumbers = randomNumbers.filter(randomNumber => randomNumber % 2 === 1)

console.log(oddNumbers);