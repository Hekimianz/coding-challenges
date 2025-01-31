// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = (str) => {
  let result = "";
  str.split("").forEach((char) => {
    if (char === char.toUpperCase()) {
      result += ` ${char}`;
    } else {
      result += char;
    }
  });
  return result;
};

console.log(solution("camelCasing"));
