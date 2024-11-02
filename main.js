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

// function mastermind(guess, solution) {
//     let feedback = []; // Ensure feedback is initialized as an array

//     // Count matches for exact positions
//     for (let i = 0; i < guess.length; i++) {
//         if (guess[i] === solution[i]) {
//             feedback.push('black'); // 'black' indicates correct color and position
//         } else if (solution.includes(guess[i])) {
//             feedback.push('white'); // 'white' indicates correct color but wrong position
//         }
//     }

//     // Ensure the feedback array is correct size by padding with 'none' for incorrect guesses
//     while (feedback.length < guess.length) {
//         feedback.push('none'); // 'none' indicates color is not in solution
//     }

//     // Check if the guess exactly matches the solution
//     const isSolved = feedback.every(mark => mark === 'black');

//     return {
//         feedback,   // Array with 'black', 'white', or 'none'
//         solved: isSolved
//     };
// }

// // Example usage
// const guess = ["Red", "Red", "Yellow", "Blue"];
// const solution = ["Red", "Red", "Red", "Red"];
// const result = mastermind(guess, solution);

// console.log("Feedback:", result.feedback); // Logs feedback array
// console.log("Solved:", result.solved); // Logs true if solved, otherwise false

// #3

// Sum of Pairs (Instructions)
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined/Nothing (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

// Solution




// function sumPairs(ints, s) {
//     const seen = new Set();
    
//     for (let i = 0; i < ints.length; i++) {
//         const current = ints[i];
//         const complement = s - current;
        
//         if (seen.has(complement)) {
//             return [complement, current];
//         }
        
//         seen.add(current);
//     }
    
//     return undefined;
// }

// // Test cases
// console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]
// console.log(sumPairs([0, 0, -2, 3], 2));   // null
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]


// #4

// function anagrams(subjects, memories, players) {
//     const playerScores = Array(memories.length).fill(0);
    
//     // Function to check if two words are anagrams
//     const areAnagrams = (word1, word2) => {
//         const sorted1 = word1.split('').sort().join('');
//         const sorted2 = word2.split('').sort().join('');
//         return sorted1 === sorted2;
//     };

//     // Iterate over subjects to check for anagrams in players' memories
//     subjects.forEach(subject => {
//         let foundAnagram = false;
        
//         players.forEach(playerIndex => {
//             const playerWords = memories[playerIndex];
//             for (const word of playerWords) {
//                 if (areAnagrams(subject, word)) {
//                     playerScores[playerIndex]++;
//                     foundAnagram = true;
//                     break;  // Break if we found at least one anagram for this subject
//                 }
//             }
//         });
        
//         // If no player found an anagram for this subject, increase the score for none
//         if (!foundAnagram) {
//             players.forEach(playerIndex => {
//                 playerScores[playerIndex]--;
//             });
//         }
//     });
    
//     // Determine the final score outcome
//     const finalScore = playerScores.reduce((total, score) => total + score, 0);
    
//     // Return the score based on the game rules
//     return finalScore;
// }

// #5

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function convertFracs(lst) {
    // Step 1: Find the LCM of all denominators
    let commonDenom = lst.reduce((acc, [, denom]) => lcm(acc, denom), 1);
    
    // Step 2: Convert each fraction to have the common denominator
    return lst.map(([numer, denom]) => {
        let scaledNumer = (numer * commonDenom) / denom;
        return `(${scaledNumer},${commonDenom})`;
    }).join(' ');
}
console.log(convertFracs(12, 6))
