function pyramid(pattern, rows, isInverted) {
  let rowsArray = [];
  
  for (let i = 0; i < rows; i++) {
    let spaces = " ".repeat(rows - 1 - i);
    let chars = pattern.repeat(2 * i + 1);
    rowsArray.push(spaces + chars);
  }

  if (isInverted) {
    rowsArray.reverse();
  }

  return "\n" + rowsArray.join("\n") + "\n";
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