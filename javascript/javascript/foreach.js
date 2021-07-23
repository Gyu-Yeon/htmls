// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// function print(arr) {
//     for (let el of numbers) {
//         console.log(el);
//     }
// }

// // const num2 = numbers.map(function (num) {
// //     return num * 2;
// // })





// // function print(element) {
// //     console.log(element)
// // }

// // numbers.forEach(print)

// // numbers.forEach(function (el) {
// //     if (el % 2 === 0) {
// //         console.log(el)
// //     }
// // })


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    },
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.tilte} - ${movie.score / 10}`
// })

// const newMovies = movie.map => movie(`${movie.tilte} - ${movie.score / 10}`)

// movies.forEach(function (movie) {
//     console.log(movie.title);
// })



// const titles = movies.map(function (movie) {
//     return movie.title;
// })

// const cleanNames = ["   timothee", "           darth_hater", "sassyfraassy      "]

// function cleanNames(name) {

//     console.log(name.trim());
// }

// 

// const names = [" timotheee ", "          darth_hater"];

// function cleanNames(names) {
//     let arr = []
//     for (let i = 0; i < names.length; i++) {
//         arr.push((names[i].trim()))
//     }
//     return arr
// }

// function cleanNames(names) {
//    const arr = names.map(function (name) {
//         name.trim();
//     })
//     return arr
// }


// function sumArray(numbers) {
//     let total = 0
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]
//     }
//     console.log(total)
// }

// const names = ["   timothee", "           darth_hater", "sassyfraassy      "]

// function cleanNames(names) {
//     const arr = names.map(function (name) {
//         return name.trim()
//     })
//     return arr
// // }

// const add = function (x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x * x;
// }

// const greet = (x) => {
//     return `Hey ${x}`;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }


// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }



// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);


// function validUserNames(name) {
//     const arr = name.filter(function (n) {
//         return n.length < 10
//     })
//     return arr
// }
// let kim = ['mark', 'staceysmom1978', 'q41414214', 'carrie1925', 'MoanaFan']


// movies.some(movie => movie.year > 2015)

// function allEvens(even) {
//     return even.every(e => e % 2 === 0);

// }

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// // let total  = 0;
// // for (let price of prices) {
// //     return total += price
// // }
// // console.log(total);

// const total = prices.reduce((total, price) => {
//     return total + pice
// })