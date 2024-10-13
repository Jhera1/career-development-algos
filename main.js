//#1 
// Description:
//My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
//I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
//For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
Given a string with the weights of ffc members in normal order can you give this string ordered by "weights" of these numbers?


const orderWeight = str =>
  str
    .split(' ')
    .sort((a, b) => {
      const weightA = sumOfDigits(a);
      const weightB = sumOfDigits(b);
      return weightA === weightB ? a.localeCompare(b) : weightA - weightB;
    })
    .join(' ');

const sumOfDigits = numStr =>
  [...numStr].reduce((sum, digit) => sum + +digit, 0);

// Example usage:
const input = "56 65 74 100 99 68 86 180 90";
console.log(orderWeight(input)); // Output: "100 180 90 56 65 74 68 86 99"
