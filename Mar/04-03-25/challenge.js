// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

const noBoringZeros = n => n === 0 ? 0 : +n.toString().replace(/0+$/, '');

console.log(noBoringZeros(0));
