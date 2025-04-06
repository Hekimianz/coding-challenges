// ***************************************************************  INSTRUCTIONS  ***************************************************************

// Frequency Counter Challenge: Anagrams

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// All inputs will be single words, no periods, no punctuation or numbers. All lowercase

// ***************************************************************  INSTRUCTIONS  ***************************************************************

const isValidAnagram = (str1, str2) => {
  // takes in two strings
  // if str1's length is different than str2's, return false
  if (str1.length !== str2.length) {
    return false;
  }
  // create obj that contains the frequency counter of str1
  const frequencyCounter = {};
  // populate each frequency counter obj for each string
  for (let char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  // loop over the obj to check that both strings match
  // return false if they are different
  for (let char of str2) {
    if (!frequencyCounter[char]) return false;
    frequencyCounter[char] -= 1;
  }

  // return true if str2 consists of the same chars in str1
  return true;
};

console.log(isValidAnagram('cinema', 'iceman'));
