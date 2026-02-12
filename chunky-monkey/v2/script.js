function chunkArrayInGroups(array, num) {
  let result = [];
  let copy = [...array];

  while (copy.length > 0) {
    result.push(copy.splice(0, num)); 
  }

  return result;
}

onsole.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) ) // [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]

console.log( cchunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) )   // [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) )   //  [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]