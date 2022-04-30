function isPalindrome(word) {
  // Write your algorithm here

  //reverse the input string 
  const reverseWord = reverseString(word);
  //if the reversed string is the same as the input
  return word === reverseWord
}

function reverseString(word){
  return word.split("").reverse().join("")
}

// function reverseString(word) {
//   // create an array from the input string
//   const wordArray = word.split("");
//   // reverse the array
//   const reversedWordArray = wordArray.reverse();
//   // create a string from the reversed array
//   const reversedWord = reversedWordArray.join("");
//   // return the reversed string
//   return reversedWord;
// }

/* 
  Add your pseudocode here
  reverse the input string 

  if the reveresed string is the same as the input 
    return true 
    else 
    return false
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
