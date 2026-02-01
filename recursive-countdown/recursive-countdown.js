function countdown(num) {
  if (num < 1) {
    return [];
  }

  if (num === 1) {
    return [1];
  }

  return [num].concat(countdown(num - 1));
}