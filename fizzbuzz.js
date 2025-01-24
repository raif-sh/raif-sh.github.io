// 
// Solving Fizz Buzz
//

// WHEN user inputs a number
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// LOOP from 1 to the number by user input
for (let i = 1; i <= answer; i++) {
    // If the current number is divisible by 3, then print 'Frizz'
    if (i % 3 == 0 && i % 5 === 0) {
        console.log('FrizzBuzz');
    }
    // If the current number is divisible by 5 then print 'Buzz'
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    // If the current number is divisible by 3 and 5, then print 'Fizzbuzz'
    else if (i % 3 === 0) {
        console.log('Frizz');
    }
    // Otherwise print the current number
    else {
        console.log(i);
    }
}
