let findPerfectNumber = (lastIndex) => {
    total = 0;
  for (let i = 0; i < lastIndex; i++) {
    if(lastIndex % i == 0){
        total += i;
    }
    
  }  
  if(total == lastIndex){
    console.log(lastIndex + " is perfect number!")
    }  else{
        console.log(lastIndex + " is not perfect number")
    }
};
findPerfectNumber(6);
findPerfectNumber(28);
findPerfectNumber(468);
findPerfectNumber(496);
