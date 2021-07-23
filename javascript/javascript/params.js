// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     } 
//     return Math.floor(Math.random() * numSides) + 1
// }

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// function greet(person, msg = "Hey There") {
//     console.log(`${msg}, ${person}!`)
// }

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]

const feline = { legs: 4, famliy: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' }

