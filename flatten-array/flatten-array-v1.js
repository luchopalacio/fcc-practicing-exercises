//Resuelto de forma recursiva

const steamrollArray = nestedArray => {
  let flattenedArray = [];

  for (const element of nestedArray) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(steamrollArray(element));
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};