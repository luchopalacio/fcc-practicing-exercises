const decimalToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input === 0) {
        console.log("Inputs: [0]");
        console.log("Quotients: []");
        console.log("Remainders: [0]");
        return "0";
    }

    let current = input;

    while (current > 0) {
        const quotient = Math.floor(current / 2);
        const remainder = current % 2;

        inputs.push(current);
        quotients.push(quotient);
        remainders.push(remainder);

        current = quotient;
    }

    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);

    return remainders.reverse().join("");
};