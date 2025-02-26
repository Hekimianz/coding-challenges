// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  const normalizedString = str.toLowerCase();
  const seen_chars = new Set();
  for (let char of normalizedString) {
    if (seen_chars.has(char)) return false;
    seen_chars.add(char);
  }
  return true;
}
