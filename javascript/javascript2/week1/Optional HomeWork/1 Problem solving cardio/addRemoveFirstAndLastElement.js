// This function is designed to add or remove first and last character in given string

function array(string) {
  let sequence = string.split(",");
  if (sequence.length <= 2) {
    return null;
  } else {
    sequence.shift();
    sequence.pop();
    return sequence.join(" ");
  }
}

console.log(array("")); // Null
console.log(array("1")); // Null
console.log(array("A1,B2")); // Null
console.log(array("1,2,3")); // 2
console.log(array("1,2,3,4")); // 2 3
console.log(array("1,2,3,4,5")); // 2 3 4
console.log(array("A1,B2,C3,D4,E5")); // B2 C3 D4
console.log(array("A,1,23,456,78,9,Z")); // 1 23 456 78 9
