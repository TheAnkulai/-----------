let counter = 0;
let currentPlusValue = 1;
let upgradePrice = 50;
const mainButton = document.querySelector('#mainButton');
const upgradeButton = document.querySelector('#upgrade');

mainButton.addEventListener('click', function(event) {
    counter += currentPlusValue;
    document.getElementById('counter').value = counter;
})

upgradeButton.addEventListener('click', function(event) {
    if(counter >= upgradePrice) {
        currentPlusValue += 1;
        counter -= upgradePrice;
        document.getElementById('counter').value = parseFloat(counter.toFixed(2));
        upgradePrice = (upgradePrice * 1.5).toFixed(2);
        document.getElementById('currentValuePerClick').innerText = `единиц за нажатие: ${currentPlusValue}`;
        document.getElementById('currentUpgradePrice').innerText = `цена улучшения: ${upgradePrice}`;
    }
})

