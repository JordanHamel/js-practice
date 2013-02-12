// Removes duplicates from an array
var dedup = function(array) {
  var deduped = [];

  for (var i = 0; i < array.length; i++) {
    if (deduped.indexOf(array[i]) === -1) {
      deduped.push(array[i]);
    }
  }
  return deduped;
}

// Returns the indeces of pairs in an array that add to zero
var twoSum = function(array) {
  var pairs = [];

  for (var i=0; i<array.length; i++) {
    for (var j=i; j<array.length; j++) {
      if (array[i] + array[j] == 0 && (i != j) ) {
        pairs.push([i, j])
      }
    }
  }

  return pairs;
}

// Takes in an array of arrays (square) and
// flip-flops rows and columns
var myTranspose = function(array) {
  var matrix = []

  for (var i=0; i<array.length; i++) {
    matrix.push([])
  }

  for (var j=0; j<array.length; j++) {
    for (var k=0; k<array.length; k++) {
      matrix[j].push(array[k][j])
    }
  }

  return matrix;
}