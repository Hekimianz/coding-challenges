// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (s) => {
  let result = '';
  const chars = s.split('');
  for (let i = 0; i < chars.length; i++) {
    const repeatedChar =
      chars[i].toUpperCase() + chars[i].toLowerCase().repeat(i);
    result += i === 0 ? repeatedChar : `-${repeatedChar}`;
  }
  return result;
};
console.log(accum('hello'));
