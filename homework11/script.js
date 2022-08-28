const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str='';
    if (arr.length == 0) {
        str='Семья пуста';
    }else{
    str=`Семья состоит из: `;
    str+=arr.join(' ');
    }
    return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(el => {
        console.log(el.toLowerCase());
    });
}
standardizeStrings(favoriteCities);

