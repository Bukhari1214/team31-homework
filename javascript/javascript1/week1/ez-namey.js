

const firstWords = ['Tech', 'Power', 'Code', 'Web', 'Data', 'Info', 'Cyber', 'Net', 'Soft', 'Sys'];
const secondWords = ['Master', 'Genius', 'Wizard', 'Guru', 'Ninja', 'Pro', 'Hacker', 'Coder', 'Script', 'Dev']; 

// I want to create 5 random names from the above arrays

for (let i = 0; i < 5; i++) {
    let indexForFirstWords = Math.floor(Math.random() * firstWords.length);
    let indexForSecondWords = Math.floor(Math.random() * secondWords.length);
    let startupName = firstWords[indexForFirstWords] + ' ' + secondWords[indexForSecondWords];
    let noOfCharacters = startupName.length; 
    console.log('"' + 'The startup: ' + '"' +startupName + '"' + ' contains ' + noOfCharacters + ' characters' + '"');
}   