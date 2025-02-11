//FLIGHT BOOKING FULLNAME FUNCTIONALITY

console.log('\n***** Homework Javascript Week02 Task 01-FULL NAME" *****');


function getFullname(firstname, surname, useFormalName,gender) {
    if (firstname === '' && surname === '') {
            return 'Please enter both First Name and Last Name';
    } else if (useFormalName) {
        if(gender=='male'){
                return '\n"' + 'Lord ' + firstname + ' ' + surname + '"';
            } else {
                return '\n"' + 'Lady ' + firstname + ' ' + surname + '"';
            }    
    } else {
        return '\n"' + firstname + ' ' + surname + '"';
    }
}

console.log(getFullname('Benjamin', 'Hughes')); // Benjamin Hughes
const fullname1 = getFullname('Benjamin', 'Hughes', true,'male'); //Lord Benjamin Hughes
const fullname2 = getFullname('Benjamin', 'Hughes', false,); // Benjamin Hughes
const fullname3 = getFullname('Benjamin', 'Hughes', true,'female'); //Lady Benjamin Hughes

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);

console.log('\nClick on the link to see my code on CodePen without gender functinality' + '\n\nhttps://codepen.io/Wasim51214/pen/PwoYaXe'); //CodePen link

