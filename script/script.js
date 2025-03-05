let counter = 0;
let currentPlusValue = 1;
let upgradePrice = 50;
let passivePlus = 0;
let passiveUpgradePrice = 100;
let timer;
const mainButton = document.querySelector('#mainButton');
const upgradeButton = document.querySelector('#upgrade');
const passiveUpgradeButton = document.querySelector('#passiveUpgrade');

mainButton.addEventListener('click', function(event) {
    counter += currentPlusValue;
    document.getElementById('counter').value = counter;
})

upgradeButton.addEventListener('click', function(event) {
    if(counter >= upgradePrice) {
        currentPlusValue += 1;
        counter -= upgradePrice;
        document.getElementById('counter').value = counter.toFixed(2);
        upgradePrice = (upgradePrice * 1.5).toFixed(2);
        document.getElementById('currentValuePerClick').innerText = `единиц за нажатие: ${currentPlusValue}`;
        document.getElementById('currentUpgradePrice').innerText = `цена улучшения: ${upgradePrice}`;
    }
})

passiveUpgradeButton.addEventListener('click', function(event) {
    if(counter >= passiveUpgradePrice) {
        passivePlus += 0.1;
        counter -= passiveUpgradePrice;
        document.getElementById('counter').value = counter.toFixed(2);
        passiveUpgradePrice = (passiveUpgradePrice * 1.15).toFixed(2);
        document.getElementById('currentPassivePlus').innerText = `единиц в секунду: ${passivePlus}`;
        passiveUpgradeButton.innerText = `купить за ${passiveUpgradePrice}`
        passiveTimer();
    }
})

function passiveTimer() {
    if(timer) {
        clearInterval(timer);
    }
    timer = setInterval(passivePlusometr, 1000);
}

function passivePlusometr() {
    counter += passivePlus;
    document.getElementById('counter').value = counter.toFixed(2);
}