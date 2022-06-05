/*
 * Given a string, returns a new string that is the same as the original string with the order of its characters reversed.
 * You're not allowed to use String.prototype.reverse().
 * Returns the new string.
 */
function reverseString(string) {
  if(string.length == 0)
    return string;
  else if(string) {
    //solution #1
    // let newString = [];
    // for(let i = string.length - 1; i >= 0; i--) {
    //   newString.push(string[i]);
    // }
    // // return newString.join('');

    //solution #2
    return string.split('').reduceRight((finalString, char) => finalString.concat(char));

    //solution #3
    // return string.split('').reduce((finalString, char) => finalString.unshift(char), []).join('');
    // return string;

    //solution #4
    // string.split('').forEach(char => newString.unshift(char));
    // return newString.join('');
  }
  // else {
  //   console.log('Please enter a valid string');
  // }
}

describe('reverseString', function() {
  const assert = require("chai").assert;

  it('should work for empty string', function() {
    assert.equal(reverseString(""), "");
  });

  it('should work for single-character strings', function() {
    assert.equal(reverseString("a"), "a");
    assert.equal(reverseString(" "), " ");
    assert.equal(reverseString("*"), "*");
  });

  it('should work on non-trivial strings', function() {
    assert.equal(reverseString("cba"), "abc");
    assert.equal(reverseString("foobar"), "raboof");
    assert.equal(reverseString("otatop"), "potato");
    assert.equal(reverseString("foof"), "foof");
  });
});