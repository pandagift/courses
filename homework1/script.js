const numberOfFilmes = +prompt("How many movies have you watched?");

const personalMovieDB = {
    count: numberOfFilmes,
    moives: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt("The last movie you watched");
const b = prompt("what grade would you give");
const c = prompt("The last movie you watched");
const d = prompt("what grade would you give");

personalMovieDB.moives[a] = b;
personalMovieDB.moives[c] = d;

