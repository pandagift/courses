const someString = 'This is some strange string';

function reverse(str) {
    let output = '';
    if (typeof (str) !== 'string') {
        output = 'Ошибка!';
    } else {
        output = str.split('').reverse().join('');
    }
    return output;
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function (curr) {
        if (curr !== missingCurr) {
            str += `${curr}\n`
        }
    });
    return str;

}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');