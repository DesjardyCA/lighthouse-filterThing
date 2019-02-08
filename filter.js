// recreate filter functionality

// The filter() method creates a new array with all elements that pass the test implemented
var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var testArr2 = ['hi', 'there', 'four'];

// custom filter function
function myFilter(arr, callback) {
  var results = [];

  arr.forEach((elem, i) => {
    if (callback(elem, i, arr)) {
      results.push(arr[i]);
    }
  });

  return results;
}

// callback to test custom filter
var results = myFilter(testArr, function filter(elem) {
  // test case to filter
  return Number.parseInt(elem) > 3;
});

console.log(results);

// callback to test custom filter
var results2 = myFilter(testArr2, function filter(elem, i, arr) {
  console.log(`${i} is the index I'm currently in and [${arr}] is the whole array`);
  // test case to filter
  return elem.length > 3;
});

console.log(results2);