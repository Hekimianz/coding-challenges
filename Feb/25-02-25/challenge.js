// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < str1.length; i++) {
    map1[str1[i].toLowerCase()]
      ? (map1[str1[i].toLowerCase()] = map1[str1[i].toLowerCase()] + 1)
      : (map1[str1[i].toLowerCase()] = 1);
    map2[str2[i].toLowerCase()]
      ? (map2[str2[i].toLowerCase()] = map2[str2[i].toLowerCase()] + 1)
      : (map2[str2[i].toLowerCase()] = 1);
  }

  const keys1 = Object.keys(map1);
  const keys2 = Object.keys(map2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!map2.hasOwnProperty(key) || map1[key] !== map2[key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("Buckethead", "DeathCubeK"));
