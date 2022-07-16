let findPerfectNumber = (lastIndex) => {
  total = 0;
  for (let i = 0; i < lastIndex; i++) {
    if (lastIndex % i == 0) {
      total += i;
    }
  }
  if (total == lastIndex) {
    console.log(lastIndex + " is perfect number!");
  } else {
    console.log(lastIndex + " is not perfect number");
  }
};
// findPerfectNumber(6);
// findPerfectNumber(28);
// findPerfectNumber(468);
// findPerfectNumber(496);

let findPerfectNumbers = (lastIndex) => {
  let perfectNumbers = [];
  total = 0;
  for (let i = 1; i < lastIndex; i++) {
    for (let j = 1; j <= i - 1; j++) {
      if (i % j == 0) {
        total += j;
      }
    }
    if (i == total) {
      perfectNumbers.push(i);
    }
    total = 0;
  }
  console.log("perfect numbers: " + perfectNumbers);
};
findPerfectNumbers(1000);