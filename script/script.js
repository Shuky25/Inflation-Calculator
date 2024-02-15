

const inflationCalculator = () => {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let year = document.querySelector('#years');

    // Converting string to Float
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    year = parseFloat(year.value);

    // Calculating result after .... years
    let res = money + (money * (inflationRate / 100));

    for (i = 0; i < year; i++) {
        res += res * (inflationRate / 100);
    }

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Today's ${money} euros will be worth ${res.toFixed(2)} in ${year} years`;

    document.querySelector('.container').appendChild(newElement);
}

const restart = () => {
    document.querySelector('#inflationRate').value = "";
    document.querySelector('#money').value = "";
    document.querySelector('#years').value = "";
    document.querySelector('.new-value').remove();
}