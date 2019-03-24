// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    var coinsValue = {"H":50,"Q":25,"D":10,"N":5,"P":1};
    var exchangedCoins = {};

    if (currency >= 10000) {
        
        exchangedCoins = {error: "You are rich, my friend! We don't have so much coins for exchange"};

    } else if (currency <= 0) {

        exchangedCoins = {};

    } else {

        for (var i in coinsValue) {
            exchangedCoins[i] = Math.floor(currency/coinsValue[i]);
            if(exchangedCoins[i] === 0) {
                delete exchangedCoins[i];
            } else {
                currency = currency - coinsValue[i] * exchangedCoins[i];
                console.log('coin '+coinsValue[i]+':  '+exchangedCoins[i]);
            }
        }
    
    }

    return exchangedCoins;
    
}
