

const personalMovieDB = {
    count: 0,
    moives: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("How many movies have you watched?");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies have you watched?");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
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
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favourite genre of film by position: ${i}`);
            if (genre === '' || genre == null) {
                console.log('You entered a wrong data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favourite genre ${i + 1} - is ${item}`)
        })
    }
}







