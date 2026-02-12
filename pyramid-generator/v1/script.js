function pyramid(pattern, rows, isInverted){
  let result = "\n";
  
  if(!isInverted){
    for(let i = 0; i < rows; i++){
      let spaces;
      let chars;
      
      spaces = rows - 1 - i;
      chars = 2*i + 1;
      
      result += " ".repeat(spaces) + pattern.repeat(chars) + "\n";
    }
  } else {
    for(let i = rows - 1; i >= 0; i--){
      let spaces;
      let chars;

      spaces = rows - 1 - i;
      chars = 2*i + 1;

      result += " ".repeat(spaces) + pattern.repeat(chars) + "\n"
    }

  }

  return result;
}

console.log(pyramid("o", 4, true))
/*
ooooooo
 ooooo
  ooo
   o
*/

console.log(pyramid("*", 5, false))
/*
    *
   ***
  *****
 *******
*********
*/
