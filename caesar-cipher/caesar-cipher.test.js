const caesar = require("./caesar-cipher")

test('should check if the caesar cipher works without wrapping', () => {
  expect(caesar("abc", 3)).toBe("def");
})

test('should check if the caesar cipher works with wrapping', () => {
  expect(caesar("xyz", 3)).toBe("abc");
})

test('should check if the caesar cipher works with punctuation', () => {
  expect(caesar("cat!", 3)).toBe("fdw!");
})
