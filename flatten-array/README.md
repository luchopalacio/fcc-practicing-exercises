## Exercise: Flatten an Array

### Description
Given an array, return it as a flat array.
If the input array contains nested arrays (at any depth), the function should return a new one-dimensional array, preserving the original order of elements and without modifying non-array values.

### Version v1
Solved using recursion:
1- Iterate over the array passed as an argument.
2- For each element:
    -If it is an array, apply the same function recursively.
    -If it is not an array, add it directly to the result.
3- The result of each recursive call is merged into the final array.
This process repeats until no nested arrays remain.

### Examples
```javascript
console.log( steamrollArray( [1, [2], [3, [[4]]]]) ); // [1, 2, 3, 4]
console.log( steamrollArray([1, {}, [2, [3]], "hola"]) );// [1, {}, 2, 3, "hola"]
