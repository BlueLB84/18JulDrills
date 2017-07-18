//   original for loop
/*  function max(numbers) {  
  var currentMax = numbers[0];
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] > currentMax) {
       currentMax = numbers[i];
    }
  }
  return currentMax;
*/

function max(numbers) {
    let currentMax = numbers[0];
    let i = 0;
 while (i <= numbers.length) {
     if (numbers[i] > currentMax) {
         currentMax = numbers[i];
     } 
     i++;
 }
    return currentMax;
}

//  original for loop
/*  function min(numbers) {
  
  var currentMin = numbers[0];
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] < currentMin) {
       currentMin = numbers[i];
    }
  }
  return currentMin;
}
*/

function min(numbers) {
    let currentMin = numbers[0];
    let i = 0;
 while (i <= numbers.length) {
     if (numbers[i] < currentMin) {
         currentMin = numbers[i];
     } 
     i++;
 }
    return currentMin;
}

// original "Compute the Average" function
/*  function average(numbers) {
      var summation = 0;
      for (i = 0; i < numbers.length; i++) {
        summation += numbers[i];
      }
      return summation/numbers.length;
    }
*/

function average(numbers) {
    let summation = 0;
    let i = 0;
    while (i < numbers.length) {
        summation += numbers[i];
        i++;
    }
    return summation/numbers.length;
}
//console.log(average([3,6,9,12])); // 7.5

// using forEach();

function average2(numbers) {
    let summation = 0;
    numbers.forEach(function(item){
        summation += item;
        //console.log(summation);
    })
    return summation/numbers.length;
}

// console.log(average2([3,6,9,12])); // 7.5


// original Fizz Buzz function using if/else statements
/* function fizzBuzz(countTo) {
  var finalArr = [];
  for (i = 1; i <= countTo; i++) {
    
    if (i % 15 === 0) {
        finalArr.push("fizzbuzz");
    } else if (i % 3 === 0) {
        finalArr.push("fizz")
      } else if (i % 5 === 0) {
        finalArr.push("buzz");
      } else {
        finalArr.push(i);
      }
  }
  return finalArr;
}
*/

function fizzBuzz(countTo) {
  let finalArr = [];
  let i = 1;
  while (i <= countTo) {
    switch (i) {
      case i % 15 === 0:
        finalArr.push("fizzbuzz");
        break;
      case i % 3 === 0:
        finalArr.push("fizz");
        break;
      case i % 5 === 0:
        finalArr.push("buzz");
        break;
      default:
        finalArr.push(i);
  }
  i++;
}
  return finalArr;
}

console.log(fizzBuzz(16));
  
  
  

