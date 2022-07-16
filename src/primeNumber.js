//this numbers only could divide by themselfs and 1
let findPrimeNumber = (...numbers) => {
  const primeNumbers = []; // array to we are gonna push in to prime numbers
  if (numbers.length != 0) {
    // if there is no parameter to send our function send(error)
    for (let i = 0; i < numbers.length; i++) {
      // in this loop for give-print the number by one by
      if (numbers[i] == 0 || numbers[i] == 1) {
        // in this condition if our numbers 0 and 1 these are not going in to other conditions
        console.log(numbers[i] + " are not the prime numbers!");
      }
      for (let j = 2; j < numbers[i]; j++) {
        // we are searching the numbers from 2 to the number of we are seeking
        if (numbers[i] % j == 0) {
          // if the mode of the number we are on equals to 0
          console.log(numbers[i] + " are not the prime number!"); // this number is not the prime
          break; // break loop because if it's not keep printing the numbers
        } else {
          primeNumbers.push(numbers[i]); // if these number not the prime then it's a prime number
          break; // so we are pushing these numbers into our primeNumber array
        }
      }
    }
    console.log(primeNumbers + " are the prime numbers!");
  } else console.log("There is no parameters to send!");
};

//findPrimeNumber(0, 12, 23, 43, 1);

let isPrime = (lastIndex) => {
  if (lastIndex == 0 || lastIndex == 1) return false;
  for (let i = 2; i < lastIndex; i++) {
    if (lastIndex % i == 0) return false;
  }
  return true;
};

let listPrimeNumbers = (number1, number2) => {
  const primeNumbers = []; 
  for (let i = number1; i < number2; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  console.log(primeNumbers);
};

listPrimeNumbers(0, 1000);