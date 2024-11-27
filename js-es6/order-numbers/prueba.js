const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

console.log('Arreglo aleatorio:', numbers);

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++){
        if (numbers[i] > numbers[j]) {
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
    }
  }
  console.log('Arreglo ordenado:', numbers); 
