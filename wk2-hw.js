// function maxOfTwoNumbers (numberOne, numberTwo) {
//     let numberOne = 0
//     let numberTwo = 3
//     if (numberOne > numberTwo) {
//         console.log('Number One is Larger.');
//     } else (numberTwo > numberOne); 
//         console.log('Number Two is Larger');
//     }

// console.log(maxOfTwoNumbers(3,5));

// function maxOfThreeNumbers (numberOne, numberTwo, numberThree) {
//     let numberOne = 0;
//     let numberTwo = 0;
//     let numberThree = 0;
//     if (numberOne > numberTwo && numberOne > numberThree) {
//         console.log('Number One is largest');
//     } else if (numberTwo > numberOne && numberTwo > numberThree) {
//         console.log('Number Two is largest')
//     } else if (numberThree > numberOne && numberThree > numberTwo) {
//         console.log('Number Three is Largest');
//     }
//     }
// console.log(maxOfThreeNumbers(3, 6, 5));

// function isCharacterAVowel (char) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         console.log('Character is a vowel');
//     } else {
//         console.log('Character is not a vowel');
//     }
// }
// let char = "b"
// console.log(isCharacterAVowel(char));

// let ingredient = [1, 2, 3];
// function sumArray (ingredient) { 
//     let bowl = 0;
//     for (let i = 0; i < ingredient.length; i++) {
//      bowl += ingredient[i]
//     }
//     return bowl;
// }
// console.log(sumArray(ingredient));

// let ingredient = [1, 2, 3];
// function multiplyArray (ingredient) {
//     let bowl = 1;
//     for (let i = 0; i < ingredient.length; i++) {
//          bowl *= ingredient[i];
//       }
//    return bowl;
// }
// console.log(multiplyArray(ingredient));

// Write a function that returns the number of arguments passed to the function when called.

// function numberOfArguements () {
//     return arguments.length;
// }
// console.log(numberOfArguements(0, 1, 2));

// function reverseString (str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('hello'));

// function findLongestWord (str) {
//     let strSplit = str.split('');
//     //splits the string into a series of words (the empty paren. notes splitting words not letters)
//     let longestWord = 0;
//     for (let i = 0; i < strSplit.length; i++) {
// //define an iterator, start iteration when < strSplit.length, loop again
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//         } 
//     }
//     return longestWord;
// }
// console.log(findLongestWord("Hello how are you?"));

// str = "I feel like this function is supremely incorrect"
// function filterLongWords (str){
//     let strSplit = str.split('');
//     let acceptedLength = 10;
//     for (let i = 0; i < strSplit; i++) {
//         if (strSplit[i].length > acceptedLength) {
//             return strSplit[i];
            
//         }
//     }
// }
// //I'm not entirely certain what went wrong here so I coded until I hit a wall
// console.log(filterLongWords("I feel like this function is supremely incorrect"));