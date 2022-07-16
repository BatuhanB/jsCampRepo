let findFriendNumber = (number1, number2) => {// we created a function that calculate our friendNumbers and takes 2 parameters to calc
  total1 = 0;// first total is for the sum of the divisors of the first number
  total2 = 0;// second total is for the sum of the divisors of the second number
  for (let i = 1; i < number1; i++) { // we are looping first divisors to our number
    if (number1 % i == 0) {// if our number can divide to ith(i.) number and if the remaining is equal to 0 it means that number divisor 
      total1 = total1 + i; // we are adding our divisors and assigning to total
    //   console.log(i);
    }
  }
//   console.log(total1);
  for (let j = 1; j < number2; j++) { // we are looping first divisors to our number
    if (number2 % j == 0) {// if our number can divide to ith(i.) number and if the remaining is equal to 0 it means that number divisor 
      total2 = total2 + j;// we are adding our divisors and assigning to total
    //   console.log(j);
    }
  }
//   console.log(total2);
  if(total1 == number2 && number1 == total2){ // if total of the our parameters is equal to this each parameters, it means they are friend 
    console.log(number1 + " " + number2 + " are friend numbers!")
  }else{
    console.log(number1 + " " + number2 + " are not friend numbers!")
  }
};
findFriendNumber(2621,2924);
findFriendNumber(284,220);
findFriendNumber(2620,2924);
