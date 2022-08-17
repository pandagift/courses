function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }
    let volume = 0,
        area = 0;
    volume = Math.pow(length, 3);
    area = 6 * Math.pow(length, 2);
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }
    for (let i = 0; i <= 36; i++) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
}
getCoupeNumber(0);
getCoupeNumber(37);