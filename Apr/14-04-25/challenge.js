// Two Pointers: Longest Substring with Distinct Characters

// Given a string, find the length of the longest substring that does not contain any repeating characters.

// You need to implement this using the two-pointer technique. Aim for O(n) time complexity, where n is the length of the string.

// Examples:
// longestSubstring("abcabcbb")  // 3 ("abc")
// longestSubstring("bbbbb")     // 1 ("b")
// longestSubstring("pwwkew")    // 3 ("wke")
// longestSubstring("")          // 0

// Constraints:
// 	•	The string has at most length 10^5.
// 	•	You cannot use any additional data structures like sets, arrays, or hashmaps for this particular solution.

// Takes a string
// Returns the length string of longest sequence of unique characters inside the original string
// PLAN:

const longestSubstring = (str) => {
  let left = 0;
  let maxLength = 0;
  let seen = {};

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];
    if (seen[currentChar] >= left) {
      left = seen[currentChar] + 1;
    }
    seen[currentChar] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
