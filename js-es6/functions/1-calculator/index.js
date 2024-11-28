export function calculator(operation, num1, num2) {
  // Verificar que los números sean válidos
  if (isNaN(num1) || isNaN(num2)) {
    return "Error: Los números no son válidos.";
  }

    switch (operation) {
    case "suma":
    case "+":
      return num1 + num2;

    case "resta":
    case "-":
      return num1 - num2;

    case "multiplicacion":
    case "*":
      return num1 * num2;

    case "division":
    case "/":
      // Verificar que num2 no sea 0 en el caso de la división
      if (num2 === 0) {
        return "Error: División por cero no permitida.";
      }
      return num1 / num2;

    case "potencia":
    case "**":
      return num1 ** num2;

    default:
      // Si la operación no es válida
      return "Operación no válida";
  }
}

// Ejemplos de uso
console.log(calculator("suma", 5, 3));         // 8
console.log(calculator("-", 10, 4));           // 6
console.log(calculator("multiplicacion", 6, 7)); // 42
console.log(calculator("/", 8, 0));            // Error: División por cero no permitida.
console.log(calculator("división", 8, 2));     // Operación no válida.
