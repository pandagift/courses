let numberOfFilmes;

function start() {
    numberOfFilmes = +prompt("How many movies have you watched?");

    while (numberOfFilmes == '' || numberOfFilmes == null || isNaN(numberOfFilmes)) {
        numberOfFilmes = +prompt("How many movies have you watched?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilmes,
    moives: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("The last movie you watched").trim();
        const b = prompt("what grade would you give");
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.moives[a] = b;
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre of film by position: ${i}`);
    }
}

writeYourGenres();