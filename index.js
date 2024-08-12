// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = "software"
let correctAnswer = word
  
// Create a new variable called attempts and set it to 0
let attempts = 0
console.log("number of attempts = " + attempts)
// Prompt the user to guess a letter

 let question1 = prompt("please guess a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (word.includes(question1)){
  console.log("that letter is correct")
}else if (!word.includes(question1)){
  console.log("that letter is incorrect" )
}

// Prompt the user to guess the word
// Write an if/else statement that checks if the user guess is equal to your word and tells the user

let question2 = prompt("time to guess the word")
if (question2 == "software"){
  console.log("CORRECT")
}else if (question2 !== "software"){
  console.log("WRONG") 
  
  }
  
// Increase attempts by 1
attempts = attempts + 1
console.log (attempts)
    
// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word

  




// In the while loop, copy the prompt and if/else check for a letter


// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 

