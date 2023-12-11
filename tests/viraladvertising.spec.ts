const viralAdvertisingHelper = require('../src/viraladvertising');

describe('TEST JEST TYPESCRIPT SUITE FOR QUESTION 1', () => {
    test('should the cumulative likes be : 2 at day number : 1', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.viralAdvertising(1))
        .toStrictEqual(2);
    });
    test('should the cumulative likes be : 5 at day number : 2', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.viralAdvertising(2))
        .toStrictEqual(5);
    });
    test('should the cumulative likes be : 9 at day number : 3', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.viralAdvertising(3))
        .toStrictEqual(9);
    });
    test('should the cumulative likes be : 15 at day number : 4', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.viralAdvertising(4))
        .toStrictEqual(15);
    });
    test('should the cumulative likes be : 24 at day number : 5', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.viralAdvertising(5))
        .toStrictEqual(24);
    });
  });

  describe('TEST JEST TYPESCRIPT SUITE FOR QUESTION 2', () => {
    test('should the day be : 1 for the cumulative likes : 1', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.requiredMinimumDays(1))
        .toStrictEqual(1);
    });
    test('should the day be : 1 for the cumulative likes : 2', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.requiredMinimumDays(2))
        .toStrictEqual(1);
    });
    test('should the day be : 2 for the cumulative likes : 4', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.requiredMinimumDays(4))
        .toStrictEqual(2);
    });
    test('should the day be : 2 for the cumulative likes : 5', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.requiredMinimumDays(5))
        .toStrictEqual(2);
    });
    test('should the day be : 2 for the cumulative likes : 7', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.requiredMinimumDays(7))
        .toStrictEqual(3);
    });
    test('should the day be : 3 for the cumulative likes : 9', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.requiredMinimumDays(9))
        .toStrictEqual(3);
    });
    test('should the day be : 4 for the cumulative likes : 10', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.requiredMinimumDays(10))
        .toStrictEqual(4);
    });
    test('should the day be : 5 for the cumulative likes : 24', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.requiredMinimumDays(24))
        .toStrictEqual(5);
    });
    test('should the day be : 6 for the cumulative likes : 30', () => {
      var viralAdvertisingHelperInstance = new viralAdvertisingHelper();
      expect(viralAdvertisingHelperInstance.requiredMinimumDays(30))
        .toStrictEqual(6);
    });
    
  });