// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

const count = (str) => {
  const count = {};
  for (let i = 0; i < str.length; i++) {
    count[str[i]] = count[str[i]] + 1 || 1;
  }
  return count;
};
