# Problem-2
## Here, a function named removeDuplicates has been created, which takes an array of numbers as input and returns a new array with duplicates removed.

### Using the filter Method: The filter method is used to check each element in the array.

#### indexOf Check: If the first occurrence (indexOf(value)) of an element matches its current index, it is included in the new array. If it doesn't match, the element is excluded.

###### example
* removeDuplicates([1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6]) returns [1, 2, 3, 4, 5, 6].