//write your code here

// Declare a arrow function named reverseString
// Create a parameter named text 
const reverse_String = (text) => {
    // Create a counter variable named reverse that holds an empty string “ “
    let reverse = "";
    // Create for loop that initializes i (let i = text.length - 1), condition that reads the characters of a string (i >= 0), and letting it decrement  (i--)
    for(let i = text.length - 1; i >= 0; i--) {
        // Within that for loop, add that string that was removed to the counter (reverse += text[i])
        reverse += text[i];
    }
        // return reverse
        return reverse;
}

// Call function
console.log(reverse_String('hello'));