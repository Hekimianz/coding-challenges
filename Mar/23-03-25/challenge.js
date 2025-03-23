// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const RemoveExclamationMarks = (string) =>
  string
    .split('')
    .filter((x) => x !== '!')
    .join('');
