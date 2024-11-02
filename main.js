 // October
//#1 
// Description:
//My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
//I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
//For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
//Given a string with the weights of ffc members in normal order can you give this string ordered by "weights" of these numbers?


// const orderWeight = str =>
//   str
//     .split(' ')
//     .sort((a, b) => {
//       const weightA = sumOfDigits(a);
//       const weightB = sumOfDigits(b);
//       return weightA === weightB ? a.localeCompare(b) : weightA - weightB;
//     })
//     .join(' ');

// const sumOfDigits = numStr =>
//   [...numStr].reduce((sum, digit) => sum + +digit, 0);

// // Example usage:
// const input = "56 65 74 100 99 68 86 180 90";
// console.log(orderWeight(input)); // Output: "100 180 90 56 65 74 68 86 99"

// Nov 2nd

// #1

// Preface (instructions)
// A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// A more detailed description of prime numbers can be found at: http://en.wikipedia.org/wiki/Prime_number

// The Problem
// You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

// isPrime(number)
// Should return boolean true if prime, otherwise false

// getPrimes(start, finish)
// Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive). Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.

// Sample Input:
// isPrime(number):

// isPrime(0); // === false
// isPrime(1); // === false
// isPrime(2); // === true
// isPrime(3); // === true
// isPrime(4); // === false
// isPrime(5); // === true 
// getPrimes(start, finish):

// getPrimes(0, 0); // === []
// getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
// getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

// Solution
// const isPrime = (number) => {
//   if (number <= 1) return false; // 0 and 1 are not prime numbers
//   if (number <= 3) return true; // 2 and 3 are prime numbers
//   // Check for factors from 2 to the square root of the number
//   for (let i = 2; i * i <= number; i++) {
//       if (number % i === 0) return false; // If divisible, it's not prime
//   }
//   return true; // Number is prime 
// };
 
// // Function to get all prime numbers in a given range
// const getPrimes = (start, finish) => {
//   const primes = [];
//   const lowerBound = Math.min(start, finish); // Find the lower bound
//   const upperBound = Math.max(start, finish); // Find the upper bound

//   for (let num = lowerBound; num <= upperBound; num++) {
//       if (isPrime(num)) {
//           primes.push(num); // Add prime numbers to the array
//       }
//   }

//   return [...new Set(primes)].sort((a, b) => a - b); // Return unique sorted primes
// };

// console.log(getPrimes(1, 27));
// console.log(isPrime(27)); 

// #2

function mastermind(guess, solution) {
    let feedback = []; // Ensure feedback is initialized as an array

    // Count matches for exact positions
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === solution[i]) {
            feedback.push('black'); // 'black' indicates correct color and position
        } else if (solution.includes(guess[i])) {
            feedback.push('white'); // 'white' indicates correct color but wrong position
        }
    }

    // Ensure the feedback array is correct size by padding with 'none' for incorrect guesses
    while (feedback.length < guess.length) {
        feedback.push('none'); // 'none' indicates color is not in solution
    }

    // Check if the guess exactly matches the solution
    const isSolved = feedback.every(mark => mark === 'black');

    return {
        feedback,   // Array with 'black', 'white', or 'none'
        solved: isSolved
    };
}

// Example usage
const guess = ["Red", "Red", "Yellow", "Blue"];
const solution = ["Red", "Red", "Red", "Red"];
const result = mastermind(guess, solution);

console.log("Feedback:", result.feedback); // Logs feedback array
console.log("Solved:", result.solved); // Logs true if solved, otherwise false




  
  