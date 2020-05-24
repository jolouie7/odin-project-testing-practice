const capitalizeString = require("./capitalize-string");

test('should make the first letter of the word uppercase and the rest of the word lowercase', () => {
  expect(capitalizeString("meow")).toEqual("Meow");
})

test("should make the first letter of the word uppercase and the rest of the word lowercase", () => {
  expect(capitalizeString("WoW")).toEqual("Wow");
});

test("should make the first letter of the word uppercase and the rest of the word lowercase", () => {
  expect(capitalizeString("Cool")).toEqual("Cool");
});