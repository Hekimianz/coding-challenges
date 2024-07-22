// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"
// P: 3 ints, representing an rgb color; r, g, b.
// R: a string representing a hex color.
// E: 255, 255, 255 --> "FFFFFF"
//    148, 0, 211   --> "9400D3"

const rgb = (r, g, b) => {
  return [r, g, b]
    .map((x) => Math.max(0, Math.min(255, x)).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
};
