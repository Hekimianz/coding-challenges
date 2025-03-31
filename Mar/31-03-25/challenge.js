// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

const getMiddle = (str) => {
  const length = str.length;
  const halfway = Math.floor(length / 2);
  let middle =
    length % 2 === 0 ? str[halfway - 1] + str[halfway] : str[halfway];

  return middle;
};
