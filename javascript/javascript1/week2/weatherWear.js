//WEATHER WEAR FUNCTIONALITY

console.log('\n***** Homework Javascript Week02 Task 03-WEATHER WEAR *****');

function whatToWear(temprature) {
    if (temprature <= 0) {
        return '\nWear a heavy coat, scarf, gloves, and boots\n\n Do Not Go Outside without atleast suggested warm clothes by assuming yourself as a snowman';
    } else if (temprature <= 10) {
        return '\nWear a winter jacket and boots\n\nYou can also wear a scarf and gloves if you want';
    } else if (temprature <= 20) {
        return '\nWear a sweater and jeans\n\nYou can also wear a light jacket if you want but No need of scarf and gloves';
    } else if (temprature <= 30) {
        return '\nWear a t-shirt and shorts or torusers\n\nYou can check if it will rain or not and take an umbrella if needed';
    } else {
        return '\nWear a tank top and shorts\n\nYou can also wear a hat and sunglasses if you want';
    }
}

console.log(whatToWear(20) + '\n\nEnjoy your day!');