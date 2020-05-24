const reverse = require("./reverse-string");

test('should reverse the input string', () => {
  expect(reverse("hello")).toEqual("olleh");
})

test('should reverse the input string', () => {
  expect(reverse("World")).toEqual("dlroW");
})

test('should reverse the input string', () => {
  expect(reverse("Hello World")).toEqual("dlroW olleH");
})
