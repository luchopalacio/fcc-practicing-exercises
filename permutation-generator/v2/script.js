function permuteString(inputString, prefix = "", results = new Set()) {
  if (inputString.length === 0) {
    results.add(prefix);
    return results;
  }

  for (let i = 0; i < inputString.length; i++) {
    const newPrefix = prefix + inputString[i];
    const newString =
      inputString.slice(0, i) + inputString.slice(i + 1);

    permuteString(newString, newPrefix, results);
  }

  return Array.from(results);
}