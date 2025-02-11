//CANDY HELPER APPLICATION FUNCTIONALITY

        console.log('\n***** Homework Javascript Week02 Task 05-CANDY HELPER *****');

    let boughtCandyPrices = [];

function addCandy(candyType, weight) {
    let pricePerGram;
    let totalPrice;
        if (candyType === 'Sweet') {
            pricePerGram = 0.5;
        } else if (candyType === 'Chocolate') {
            pricePerGram = 0.7;
        } else if (candyType === 'Toffee') {
            pricePerGram = 1.1;
        } else if (candyType === 'Chewing-gum') {
            pricePerGram = 0.03;
        } else {
        console.log('\nInvalid candy type');
            return;
        }
    totalPrice = pricePerGram * weight;
    boughtCandyPrices.push(totalPrice);
}

    addCandy('Chocolate', 50);

function canBuyMoreCandy() {
        let amountToSpend = Math.random() * 100;
        console.log('Amount to spend: ' + amountToSpend);
        let totalPrice = 0;
        for (let i = 0; i < boughtCandyPrices.length; i++) {
            totalPrice += boughtCandyPrices[i];
        }
        console.log('\nYour total price for buying candies is : ' + totalPrice);
            amountToSpend -= totalPrice;
        console.log('\nNow you have ' + amountToSpend + ' to spend');
        if (amountToSpend < 0) {        //Its extra check because sometimes amountToSpend is negative just to add an extra check.
            console.log('\nYou are trying to spend more than you have! so please return some candies');
        }  else if (totalPrice < amountToSpend) {
            console.log('\nYou can buy more, so please do!');
        }  else {
            console.log('\nEnough candy for you!');
        }  
}

    canBuyMoreCandy();
