const decimalToBinary = (input) => {
  if (input === 0) {
    return "0";
  }

  let binary = "";
  let current = input;

  while (current > 0) {
    binary = (current % 2) + binary;
    current = Math.floor(current / 2);
  }

  return binary;
};