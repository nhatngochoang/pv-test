const testJS = require('../jsTest.js');

it('find String Length Test', () => {
   expect(testJS.findStringLength(['a', 'ab', 'abc', 'cd', 'def', 'gh'])).toStrictEqual(['ab', 'cd', 'gh']);
   expect(testJS.findStringLength(['a', 'ab', 'abc', 'cd', 'def', 'gh', 'ccc'])).toStrictEqual(['ab', 'cd', 'gh', 'abc', 'def', 'ccc']);
});
