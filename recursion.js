var sumIterative = function(array) {
  var total = 0;

  for (i=0; i<array.length; i++) {
    total += array[i];
  }

  return total;
}

var sumRecursive = function(array) {
  if (array.length == 0) {
    return 0;
  } else if (array.length == 1) {
    return array[0];
  } else {
    return array.pop() + sumRecursive(array);
  }
}

var exponentIterative = function(base, power) {
  total = base

  if (power === 0) {
    return 1;
  } else {
    for (var i=1; i<power; i++) {
      total *= base;
    }
  }

  return total;
}

var exponentRecursive = function(base, power) {
  if (power === 0) {
    return 1;
  } else if (power === 1) {
    return base;
  } else {
    return base * exponentRecursive(base, power-1);
  }
}

var fibonacciRecursive = function(num) {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    var return_arr = fibonacciRecursive(num - 1);
    var sum = return_arr[return_arr.length-1] + return_arr[return_arr.length-2];
    return_arr.push(sum);
    return return_arr
  }
}

var fibonacciIterative = function(num) {
  var return_arr = [0, 1]

  for(var i=2; i<=num; i++) {
    var val = return_arr[return_arr.length - 1] + return_arr[return_arr.length - 2];
    return_arr.push(val);
  }

  return return_arr;
}

var binarySearch = function(array, target) {
  var toSearch = array;
  var middle = array.length / 2;

  if (toSearch[middle] === target){
    return middle;
  } else if (toSearch[middle + 1] > target) {
    toSearch = toSearch.slice(0, middle - 1);
    binarySearch(toSearch, target);
  } else {
    toSearch = toSearch.slice(middle + 1, toSearch.length);
    binarySearch(toSearch, target);
  }
}
