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
    counter = parseFloat((counter + currentPlusValue).toFixed(2));
    document.getElementById('counter').value = counter;
});

upgradeButton.addEventListener('click', function(event) {
    if (counter >= upgradePrice) {
        currentPlusValue += 1;
        counter = parseFloat((counter - upgradePrice).toFixed(2));
        upgradePrice = parseFloat((upgradePrice * 1.5).toFixed(2));

        document.getElementById('counter').value = counter;
        document.getElementById('currentValuePerClick').innerText = `Единиц за нажатие: ${currentPlusValue}`;
        document.getElementById('currentUpgradePrice').innerText = `Цена улучшения: ${upgradePrice}`;
    }
});

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
