// Anagrams
// Given two strings, write a function to determine if the second string is an anagram of the first.
// EXAMPLES:
// validAnagram("cinema", "iceman") TRUE
// validAnagram("rat", "car") FALSE
// validAnagram("", "") TRUE

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const counter1 = {};
  const counter2 = {};

  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  for (let char in counter1) {
    if (counter2[char] !== counter1[char]) return false;
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('cinema', 'iceman'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('traps', 'trap'));
