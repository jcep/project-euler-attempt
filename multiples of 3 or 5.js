//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below the provided parameter value

function max(n,x) {
  if (x%n == 0){
    return n*Math.floor((x-1)/n)}
  else {
    return n*Math.floor(x/n)
  }
}

function sumto(a,b) {
     return (max(a,b)+a)*max(a,b)/a/2;}
  

function multiplesOf3Or5(number) {
  return sumto(3,number)+sumto(5,number)-sumto(15,number);
}

