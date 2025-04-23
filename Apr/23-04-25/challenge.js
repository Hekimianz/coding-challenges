// Advanced Recursion: Reverse String

// Write a function called reverse which accepts a string and returns a new string in reverse

// EXAMPLES:
// reverse("Hello") // "olleH"
// reverse("Hello World!") // "!dlroW olleH"
// reverse("") // ""

const reverse = (str) => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

console.log(reverse('hello'));
