// // function collectEggs() {
// //     let totalEggs = 6;
// // }

// // collectEggs();
// // console.log(totalEggs);


// // let bird = 'Scarlet Macaw';
// // function birdWatch() {
// //     let bird = 'Great Blue Heron';
// //     console.log(bird)
// // }


// // birdWatch()

// // let radius = 8;
// // if (radius > 0) {
// //     const PI = 3.14159;
// //     let msg = 'HIII!'
// // }


// // console.log(radius);
// // console.log

// // function callTwice(func) {
// //     func();
// //     func();
// // }

// // function callTenTimes(f) {
// //     for (let i = 0; i < 10; i++) {
// //         f()
// //     }
// // }

// // function rollDie() {
// //     const roll = Math.floor(Math.random() * 6) + 1
// //     console.log(roll)
// // }

// function makeMysteryFunc (){
//     const rand = Math.random();
//     if(rand > 0.5) {
//         return function(){}
//     }
// }


// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }
// const square = {
//     area(side) {
//         return side * side;
//     },
//     perimeter(side) {
//         return side * 4;
//     }
// }


const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        const eggCount = this.eggCount++;
        return "EGG"

    }
}