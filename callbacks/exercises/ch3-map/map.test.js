let map;
map = require('./map');

// uncomment line below to test your mapWith solution from challenge 5
// map = require('../ch5-map-with/map_with');

// map = require('./solution'); // uncomment to test solution file

describe('map(array, callback)', () => {
  // Arrange
  const data = [1, 2, 3];
  const mockCb = jest.fn(function doubleAndAddIndex(num, index) {
    return num * 2 + index;
  });
  const expected = [2, 5, 8];

  // Act
  const result = map(data, mockCb);

  // Assert
  test('should return a new array', () => {
    expect(result).toBeInstanceOf(Array);
    expect(result).not.toBe(data);
  });

  test('callback should be called for every array element', () => {
    expect(mockCb).toHaveBeenCalledTimes(data.length);
  });

  test('array elements should have been transformed by callback', () => {
    expect(result).toEqual(expected);
  });

  test('should handle optional index, array, and thisArg parameters for callback', () => {
    // Arrange
    const thisArg = 4;
    const thisAwareCb = jest.fn(function addThisArrayLengthAndIndex(
      num,
      index,
      array
    ) {
      return this + array.length + num + index;
    });
    const expected = [8, 10, 12];

    // Act
    const result = map(data, thisAwareCb, thisArg);

    // Assert
    expect(result).toEqual(expected);
  });
});
