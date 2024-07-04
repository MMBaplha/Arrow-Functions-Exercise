//Arrow Functions Exercise

//ES5 Map Callback
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//ES2015 Arrow Functions Shorthand

function double(arr) { 
  return arr.map((val) => {
    return val * 2
  });
}; 
//--------

// Refactor the following function to use arrow functions:
// Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

//Refactor

function squareAndFindEvens(numbers){
    var squares = numbers.map((num) => {
      return num ** 2;
    });
    var evens = squares.filter((square) => {
      return square % 2 === 0;
    });
    return evens;
  }

//This one works
function squareAndFindEvens1(numbers){
    var squares = numbers.map((num) =>  num ** 2);
    var evens = squares.filter((square) => square % 2 === 0)
    return evens
};