//create a function called greaterpart that takes in a decimal and determines which part is greater. The integer, or the fractional part and then will "alert that number". the decimal will always be greater than 0

//for example 32.45 should alert 45
//112.21 should alert 112
//100 should alert 100

function greaterpart(dec){
    arr = dec.toString().split('')
    decIndex = arr.indexOf('.')
    int = +arr.slice(0, decIndex).join('')
    frac = +arr.slice(decIndex + 1, arr.length).join('')
    if(int > frac){
      return int
    }
    return frac
  }
  
  let answer =greaterpart(2.4)
  answer