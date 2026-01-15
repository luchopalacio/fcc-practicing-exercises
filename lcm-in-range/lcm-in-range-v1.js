function smallestCommons (array){
  if(array.length !== 2){
    return "ERROR: The array must contain 2 numbers.";
  }

  let range = generateRange(array);

  let lcmSum = range.reduce((acc, curr) => lcm(acc, curr));

  return lcmSum;
}

function generateRange(array){
  let max = Math.max(...array);
  let min = Math.min(...array);

  let range = Array.from({
    length: max - min + 1},
    (_,i) => i + min
  );

  return range;
}

function lcm(a,b){
  let multiple = Math.max(a,b);

  while(multiple % a !== 0 || multiple % b !== 0){
    multiple++;
  }

  return multiple;
}