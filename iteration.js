var bubbleSort = function(array) {
  var swapped = true;

  while (swapped == true) {
    swapped = false;

    for (i=0; i<(array.length - 1); i++) {
      if (array[i+1] < array[i]) {
        var toSwap = array[i+1];
        array[i+1] = array[i];
        array[i] = toSwap;

        swapped = true;
      }
    }
  }

  return array;
}

var substrings = function(string) {
  var substring_arr = [];

  for (i=0; i<string.length; i++) {
    for (j=i+1; j<=string.length; j++) {
      substring_arr.push(string.substring(i, j))
    }
  }

  return substring_arr;
}