/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

/* 

- usando o método filter para saber quais são os números abaixo de 501

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const smallNumbers = crazyNumbers.filter(user => user < 501)

console.log(smallNumbers);

*/

/* - usando o método reduce para saber quantos números tem, abaixo de 501 

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numbersMinors501 = crazyNumbers.reduce((accumulator, crazyNumbers) => {
    if (crazyNumbers < 501) {
        return accumulator + 1
    }

    return accumulator
}, 0)

console.log(numbersMinors501);

*/

/* - usando uma forma mais enxuta/concisa */

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numbersMinors501 = crazyNumbers.reduce((accumulator, crazyNumbers) =>
    crazyNumbers < 501 ? accumulator + 1 : accumulator, 0)

console.log(numbersMinors501);