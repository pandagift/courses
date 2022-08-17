function fib(count) {
    if (typeof (count) !== 'number' || count <= 0 || !Number.isInteger(count)) {
        return '';
    }

    let first = 0;
    let second = 1;
    let step = first + second;
    let str = '';

    for (let i = 0; i < count; i++) {
        if (i === count - 1) {
            str += `${first}`;
        } else {
            str += `${first} `;
        }

        step = first + second;
        first = second;
        second = step;
    }
    return str;
}
