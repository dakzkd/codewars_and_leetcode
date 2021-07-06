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
// Given a list of integers, determine whether the sum of its //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//                               2                              //
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////elements is odd or even.

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


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//                               3                              //
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
function twoSum(numbers, target) {
    // ...
    if(numbers.length > 0 && target) {

        for(let i =0 ; i<numbers.length; i++) {
            let sum = 0
            for(let j = i+1; j< numbers.length; j++) {
                sum=  numbers[i] + numbers[j]
               if(sum === target) return [i, j];
            }
    
        }
    } else {
        return [0,0];
    }
  }

  console.log(twoSum([1,2,3,4], 7));


