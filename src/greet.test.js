const greet = require("./app");

test("prints a greeting with the provided name", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation();

  greet("John");

  expect(consoleSpy).toHaveBeenCalledWith("Hello John");

  consoleSpy.mockRestore();
});
