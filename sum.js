//write a function called sum that takes in a variable number of parameters and sums them all. if there are no arguments provided, it should return 0. 

//it should parse strings as well

function sum(){
  var args = [...arguments];
  return args.reduce((a,b) => a + +b, 0)
}

let answer = sum(1,2,3,4,5,6)
answer