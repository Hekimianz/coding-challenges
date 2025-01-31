// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = (str) => {
  const split = str.split(" ");
  let reverse = [];
  split.forEach((word) => {
    const splittedWord = word.split("");
    reverse.push(splittedWord.reverse().join(""));
  });

  return reverse.join(" ");
};

reverseWords("double  spaces");
