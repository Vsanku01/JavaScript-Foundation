class Movie {
  constructor(_title, _studio, _rating = 'PG') {
    this.title = _title;
    this.studio = _studio;
    this.rating = _rating;
    this.movies = [];
    this.movies.push(this.title, this.studio, this.rating);
    this.getPG(this.movies); // call getPG with movie instances
  }

  getPG(movies) {
    // return movies whose rating is 'PG'
    let moviesList = [];
    if (movies[2] == 'PG') {
      moviesList.push(movies[0]);
    } else {
      return;
    }
    console.log('Movies with rating PG are as follows');
    console.log(moviesList.join(''));
  }
}

let film = new Movie('Casino Royale', 'Eon Productions', 'PG13');
let film1 = new Movie('Architect', 'Eon Productions', 'PG');
let film2 = new Movie('Titanic', 'Eon Productions', 'UA');
let film3 = new Movie('Flame', 'Eon Productions', 'PG');
let film4 = new Movie('Mechanic', 'Eon Productions', 'UA');
