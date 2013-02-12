// This function adds 2 to each element of the given array
var arrayTimesTwo = function(array) {
  var returnArr = [];

  for (var i=0; i<array.length; i++) {
    var val = array[i] * 2;
    returnArr.push(val);
  }

  return returnArr;
}

// This function applies a given function to each element
// of a given array
var myEach = function(array, func) {
  var returnArr = [];

  for (i=0; i<array.length; i++) {
    var val = func(array[i]);
    returnArr.push(val);
  }

  return returnArr;
}

// This function concatenates an array of strings
var concatenate = function(array) {
  var string = "";

  for(i=0; i<array.length; i++) {
    string += array[i];
  }

  return string;
}