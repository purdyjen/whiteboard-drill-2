/*
Parameters, Return, Example, Pseudocode (PREP)
P: Input of a string
R: Outputs the same string, but with title casing
E: "I'm a little tea pot" / "I'M A LITTLE TEA POT"
P: 
  1. lowercase everything
  2. split the string into separate words
  3. for loop
  - iterate through each word
  - access the first character (0 index) and save to variable (firstChar)
  - slice (copy) any characters at index 1 and later (assuming any exist) (wordRemainder)
  - uppercase firstChar
  - join firstChar and wordRemainder at str[i]
  4. Join elements in str array with spaces
  5. return str
*/
function titleCase(str) {
  str = str.toLowerCase();

  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    let firstChar = str[i].charAt(0);
    let wordRemainder = str[i].slice(1);
    firstChar = firstChar.toUpperCase();
    str[i] = firstChar + wordRemainder;
    // str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  str = str.join(" ");
  return str;
}

console.log(titleCase("I'm a little tea pot"));
