function sayHello(name) {
    return `Привет, ${name}!`;
}

function returnNeighboringNumbers(int) {
    return [int - 1, int, int + 1];
}

function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }
    let str = '';
    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`
        }
    }
    return str;
}

