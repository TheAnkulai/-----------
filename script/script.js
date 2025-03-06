let counter = 0;
let currentPlusValue = 1;
let upgradePrices = {upgrade1: 50, upgrade2: 2000};
let passivePlus = 0;
let passiveUpgradePrice = 100;
let timer;

const clickButton = document.querySelector('#mainButton');
const upgradeButton1 = document.querySelector('#upgrade1');
const passiveUpgradeButton = document.querySelector('#passiveUpgrade1');
const upgradeButton2 = document.querySelector('#upgrade2');

clickButton.addEventListener('click', function(event) {
    counter = parseFloat((counter + currentPlusValue).toFixed(2));
    document.getElementById('counter').value = counter;
});

upgradeButton1.addEventListener('click', function(event) {
    if (counter >= upgradePrices.upgrade1) {
        currentPlusValue += 1;
        priceUpdate('upgrade1', 'currentUpgradePrice1');
    }
});

upgradeButton2.addEventListener('click', function(event) {
    if (counter >= upgradePrices.upgrade2) {
        currentPlusValue += 5;
        priceUpdate('upgrade2', 'currentUpgradePrice2');
    }
})

passiveUpgradeButton.addEventListener('click', function(event) {
    if (counter >= passiveUpgradePrice) {
        passivePlus = parseFloat((passivePlus + 0.1).toFixed(2));
        counter = parseFloat((counter - passiveUpgradePrice).toFixed(2));
        passiveUpgradePrice = parseFloat((passiveUpgradePrice * 1.15).toFixed(2));

        document.getElementById('counter').value = counter;
        document.getElementById('currentPassivePlus').innerText = `Единиц в секунду: ${passivePlus}`;
        passiveUpgradeButton.innerText = `Купить за ${passiveUpgradePrice}`;
        
        passiveTimer();
    }
});

function passiveTimer() {
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(passivePlusometr, 100);
}

function passivePlusometr() {
    counter = parseFloat((counter + (passivePlus * 0.1)).toFixed(2));
    document.getElementById('counter').value = counter;
}

function priceUpdate(upgradeKey, PriceTextId) {
    counter = parseFloat((counter - upgradePrices[upgradeKey]).toFixed(2));
    upgradePrices[upgradeKey] = parseFloat((upgradePrices[upgradeKey] * 1.25).toFixed(2));

    document.getElementById('counter').value = counter;
    document.getElementById('currentValuePerClick').innerText = `Единиц за нажатие: ${currentPlusValue}`;
    document.getElementById(PriceTextId).innerText = `Цена улучшения: ${upgradePrices[upgradeKey]}`;
}
