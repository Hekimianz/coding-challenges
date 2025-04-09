// Challenge: Construct Note

// Write a function canConstructNote(noteText, magazineText) that returns true if the noteText can be constructed using letters from the magazineText. Otherwise, return false.

// 	•	Each letter in the magazineText can only be used once.
// 	•	Both inputs are lowercase strings with no punctuation.
// 	•	O(n) time and space is the goal.

// ⸻

// Examples:
// canConstructNote("a", "b");                     // false
// canConstructNote("aa", "ab");                   // false
// canConstructNote("aa", "aab");                  // true
// canConstructNote("secret message", "some secret message"); // true

// Constraints:
// 	•	You can ignore whitespace if you want, or treat it like any other character.
// 	•	Don’t sort — aim for linear time.

const canConstructNote = (noteText, magazineText) => {
  // takes two strings
  // build two frequency counters for each string (noteText, magazineText)
  const noteFrequency = {};
  const magazineFrequency = {};
  for (let char of magazineText) {
    if (char == ' ') continue;
    magazineFrequency[char] = (magazineFrequency[char] || 0) + 1;
  }

  for (let char of noteText) {
    // if current char in noteText isn't in magazineText, early exit returning false
    if (char == ' ') continue;
    noteFrequency[char] = (noteFrequency[char] || 0) + 1;
  }

  // loop over noteText and check if the frequency of each char fits into the frequency of magazineTexts frequency (above zero AND smaller OR equal)
  for (let char in noteFrequency) {
    if (
      !magazineFrequency[char] ||
      magazineFrequency[char] < noteFrequency[char]
    ) {
      return false;
    }
  }
  // return true if frequency of chars in noteText fit into the frequency of magazineText
  return true;
};

console.log(canConstructNote('a', 'b')); // false
console.log(canConstructNote('aa', 'ab')); // false
console.log(canConstructNote('aa', 'aab')); // true
console.log(canConstructNote('secret message', 'some secret message')); // true
