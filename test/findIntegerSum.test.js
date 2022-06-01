const testJS = require('../jsTest.js');

it('find String Length Test', () => {
   expect(testJS.findIntegerSum([1, 4, 2, 3, 5])).toStrictEqual(9);
   expect(testJS.findIntegerSum([1, 2, 3, 4])).toStrictEqual(7);
});
