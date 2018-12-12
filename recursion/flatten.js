/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(inputArray) {
  var flattenedElements = [];

  function extract(array) {
    array.forEach(function (element) {
      if (!Array.isArray(element)) {
        flattenedElements.push(element);
      } else {
        extract(element);
      }
    });
  }

  extract(inputArray);

  return flattenedElements;
}
