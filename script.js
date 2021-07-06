'use strict'

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//                               1                              //
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

////////////////////////////////////////////////
////////////////////////////////////////////////
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
////////////////////////////////////////////////
////////////////////////////////////////////////

// function sortByLength (array) {
//     // Return an array containing the same strings, ordered from shortest to longest
//     return array.sort((a,b)=> a.length - b.length)
//   };

// console.log(sortByLength(["Beg", "Life", "I", "To"]));

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//                               2                              //
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// function oddOrEven(array) {
    //enter code here
    // if (array.length === 0) return 'even'
    // else {

    //     const sum = array.reduce((sum,el)=>sum+el );
    //     return sum%2 === 0 ? 'even' : 'odd';
    // }
    //  Calling reduce() on an empty array without an initialValue will throw a TypeError
   
//         return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
//  }


// console.log(oddOrEven([0, 1, 4]));



