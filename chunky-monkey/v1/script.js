function chunkArrayInGroups(array,num){
  let result = [];

  for(let i = 0; i < array.length; i += num){
    result.push(array.slice(i, i + num));
  }
  return result;
}

console.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) ) // [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]

console.log( cchunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) )   // [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) )   //  [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]