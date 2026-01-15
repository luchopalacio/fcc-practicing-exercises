
const sumPrimes = num => {
  
  const numbers = Array.from({ length: num - 1 }, (_, i) => i + 2);

  const primes = numbers.filter(number => {
    let dividers = Array.from(
      { length: Math.floor(Math.sqrt(number)) - 1 },
      (_, i) => i + 2
      );
    return dividers.every(d => number % d !== 0);
  });

  const sum = primes.reduce((acc,element) =>
    acc + element,0
  );

  return sum;
};

//Version algoritmica
const sumPrimesAlt = num => {

  let sum = 0;
  let esPrimo = true;

  for(let i = 2; i <= num; i++){
    for(let j = 2; j*j <= i ; j++){
      if(i % j === 0){
        esPrimo = false;
        break;
      }
    }
    if(esPrimo) sum += i;
    esPrimo = true;
  }

  return sum;

};

