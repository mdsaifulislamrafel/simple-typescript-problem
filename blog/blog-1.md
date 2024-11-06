Problem 1:
The sumArray function takes an ES6 array of numbers (numbers: number[]) as input and returns a single number (number).

Using the reduce Method: Inside the function, we’ve used the reduce method, which combines all elements in the array into a single value by summing them up. Here’s how it works:

* p (previous value) and c (current value) are parameters in the reduce method.
* For each element, reduce adds the current value to the previous total.
* Starting with zero, it sums all elements, ultimately returning the total sum.