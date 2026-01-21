const vowelRegex = /^[aeiou]/
const consonantRegex = /^[^aeiou]+/

function translatePigLatin(word){

  if (!/^[a-z]+$/i.test(word)) {
  return "Please enter a single word with letters only";
}

  if(vowelRegex.test(word)){
    word += "way";
    return word;
  }

  const clusterMatch = word.match(consonantRegex);
  if (clusterMatch) {
    return word.slice(clusterMatch[0].length) + clusterMatch[0] + "ay";
  }

  return word + "ay";

}