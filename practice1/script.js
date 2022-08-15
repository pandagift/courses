const numberOfFilmes = +prompt("How many movies have you watched?");

const personalMovieDB = {
    count: numberOfFilmes,
    moives: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
    const a = prompt("The last movie you watched");
    const b = prompt("what grade would you give");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.moives[a] = b;
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('You have watched a small number of movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are an ordinary viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('You are a movie buff');
} else {
    console.log('Error');
}
console.log(personalMovieDB);