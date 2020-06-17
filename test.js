// const input = process.argv;
const name = ["john", "jane", "sarah", "alex", "a", "b", "c"];
const num = [1, 2, 3, 4, 5, 6, 7, 8];
function shift(arr, move, number) {
  let position;
  if (move === "left") {
    position = Number(number) - arr.length;
  } else if (move === "right") {
    position = Number(number);
  }
  const output = [];
  if (position < 0) {
    position = position * -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (position === arr.length) {
      position = 0;
    }
    output[position++] = arr[i];
  }
  return output;
}

const a = shift(name, "left", 2);
const b = shift(num, "right", 3);
console.log(a);
console.log(b);
