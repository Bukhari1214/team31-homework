

document.getElementById("human-age").addEventListener("submit", function(event) 
{
    event.preventDefault();

    const birthYear = document.getElementById("birth-year").value;
    const futureYear = document.getElementById("future-year").value;
    const humanAge = futureYear - birthYear;
    console.log(humanAge);
    document.getElementById("result").textContent = humanAge;
});


/*
const yearOfBirth = 1984;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in 2045.");
*/