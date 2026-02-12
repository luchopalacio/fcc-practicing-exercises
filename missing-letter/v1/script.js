function fearNotLetter(letters){
  const abecedary = "abcdefghijklmnopqrstuvwxyz";

  let target = abecedary.slice(abecedary.indexOf(letters[0]));

  for(let i = 0; i < letters.length; i++){
    if(letters[i] !== target[i]){
      return target[i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce")) // d

console.log(fearNotLetter("stvwx")) // u 