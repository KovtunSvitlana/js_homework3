function pow(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}

// Тестування функції
console.log(pow(2, 3)); // Виведе: 8
console.log(pow(5, 2)); // Виведе: 25
console.log(pow(3, 0)); // Виведе: 1
console.log(pow(7, 1)); // Виведе: 7