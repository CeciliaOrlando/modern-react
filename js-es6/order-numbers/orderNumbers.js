const randomNumbers = [7, -11, 5, 18, 3, 9, 14, 1, 6, -22];

const orderNumbers = (array) => {
    let evenNumbers = [];
    let oddNumbers = [];


    for (let num of array) {
        if (num % 2 === 0) {
            evenNumbers.push(num); // Si es par, lo agregamos al array de pares
        } else {
            oddNumbers.push(num); // Si es impar, lo agregamos al array de impares
        }
    }

    for (let i = 0; i < evenNumbers.length; i++) {
        for (let j = 0; j < oddNumbers.length; j++) {
            if (evenNumbers[i] > oddNumbers[j]) {
                [evenNumbers[i], oddNumbers[j]] = [oddNumbers[j], evenNumbers[i]];
            }
        }
    }

    // Desestructurando los arrays para devolverlos
    return { evenNumbers, oddNumbers };
};

// Usamos la función y desestructuramos el resultado en dos variables
const { evenNumbers, oddNumbers } = orderNumbers(randomNumbers);

console.log('Números Pares:', evenNumbers);
console.log('Números Impares:', oddNumbers);
