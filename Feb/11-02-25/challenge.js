// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const getCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str.split("").forEach((char) => (vowels.includes(char) ? count++ : null));
  return count;
};

console.log(getCount("apple"));
