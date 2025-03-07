let counter = 0;
let currentPlusValue = 1;
let upgradePrices = {upgrade1: 50, upgrade2: 2000};
let passivePlus = 0;
let passiveUpgradePrices = {upgrade1: 100, upgrade2: 1000};
let timer;

const clickButton = document.querySelector('#mainButton');
const upgradeButton1 = document.querySelector('#upgrade1');
const upgradeButton2 = document.querySelector('#upgrade2');
const passiveUpgradeButton1 = document.querySelector('#passiveUpgradeButton1');
const passiveUpgradeButton2 = document.querySelector('#passiveUpgradeButton2');


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

passiveUpgradeButton1.addEventListener('click', function(event) {
    if (counter >= passiveUpgradePrices.upgrade1) {
        passivePriceUpdate(0.1, 'upgrade1', passiveUpgradeButton1);
    }
});

passiveUpgradeButton2.addEventListener('click', function(event) {
    if (counter >= passiveUpgradePrices.upgrade2) {
        passivePriceUpdate(0.5, 'upgrade2', passiveUpgradeButton2);
    }
})

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

function passivePriceUpdate(passivePlusValue, passiveUpgradeKey, buttonTextId) {
    passivePlus = parseFloat((passivePlus + passivePlusValue).toFixed(2));
    counter = parseFloat((counter - passiveUpgradePrices[passiveUpgradeKey]).toFixed(2));
    passiveUpgradePrices[passiveUpgradeKey] = parseFloat((passiveUpgradePrices[passiveUpgradeKey] * 1.15).toFixed(2));

    document.getElementById('counter').value = counter;
    document.getElementById('currentPassivePlus').innerText = `Единиц в секунду: ${passivePlus}`;
    buttonTextId.innerText = `Купить за ${passiveUpgradePrices[passiveUpgradeKey]}`;
    
    passiveTimer();
}
