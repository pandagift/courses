const obj = {
    name: 'Paul',
    age: 13,
    isJob: true,
    isCar: {
        model: 'X',
        year: 1999
    },
    makeTest:function(){console.log("Try test")}
}
console.log(Object.keys(obj).length);