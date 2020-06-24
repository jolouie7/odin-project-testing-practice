const calculator = require("./calculator")

test('should add the 2 numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
})

test('should subtract the 2 numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
})

test('should divide the 2 numbers', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
})

test('should multiply the 2 numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
})
