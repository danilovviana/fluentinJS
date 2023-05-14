/*
  06

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
    { name: 'Dark Souls III', price: 95.03 },
    { name: 'Shadow of the Tomb Raider', price: 101.19 },
    { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
    { name: 'Resident Evil 2', price: 119.90 },
    { name: 'Death Stranding', price: 149.99 }
]


const gamesName = cart
    .reduce((accumulator, { name }) => `${accumulator}- ${name}\n`, '')

console.log(gamesName);


/*
- Nome 1
- Nome 2
- Nome 3

Obs: 👆🏻 o objetivo do exercício é gerar a string acima. 

A string deve ter exatamente a formatação acima (com traço, quebra de linha, 
e cada item em uma linha). 

console.log é apenas uma forma de você visualizar a string que você está 
gerando. Não é o objetivo final do exercício.

O objetivo final NÃO É executar um console.log para cada nome. Mas sim gerar 
uma única string que contém uma lista exatamente como o exemplo acima. 
*/