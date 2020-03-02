const sum = require ('../src/sum.js');

test('adds 1 + 2 to equal three', () => {

  const result = sum(1, 2);

  expect(result).toBe(3);
  expect(result).toEqual(3);

  expect(result).not.toBeNull();
  expect(result).toBeDefined();
  expect(result).toBeTruthy();
  expect(result).not.toBe(0);

  expect(result).toBeGreaterThan(2);
  expect(result).toBeGreaterThanOrEqual(3);
  expect(result).toBeLessThan(4);
  expect(result).toBeLessThanOrEqual(3);

});
