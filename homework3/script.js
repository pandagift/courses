function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}
firstTask();

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) == 'number') {
            data[i] *= 2;
        } else {
            data[i] += ' - done';
        }
    }
    return data;
}
secondTask();

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 0; i < data.length; i++) {
        result[i] = data[(data.length - 1) - i];
    }
    return result;
}
thirdTask();