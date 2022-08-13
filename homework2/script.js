// Место для первой задачи
function firstTask() {
    for (i = 5; i <= 10; i++) {
        console.log(i)
    }
}
firstTask();

function secondTask() {
    for (let i = 20; i > 10; i--) {
        if (i === 13) return;
        console.log(i)
    }
}
secondTask();

function thirdTask() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0 && i != 0) {
            console.log(i)
        }
    }
}
thirdTask();

function fourthTask() {
    let n = 2;
    while (n <= 16) {
        if (n % 2 === 1) {
            console.log(n)
        }
        n++;
    }
}
fourthTask();

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    // Не трогаем
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}
fifthTask();