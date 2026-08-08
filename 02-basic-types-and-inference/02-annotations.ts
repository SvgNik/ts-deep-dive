// A1
function buildImageUrl(path: string, size: string): string {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

// A2
let selectedMovieId: number; //evolving any
selectedMovieId = 550;

// A3
const favoriteIds: number[] = []; //evolving array;
favoriteIds.push(550);

const movieTitle = "Fight Club";
const releaseYear = 1999;
const isAdult = false;
const genres = ["Drama", "Thriller"];

const movies = [
  { title: "Batman", vote_average: 6.7 },
  { title: "Spiderman", vote_average: 7.8 },
  { title: "Matrix", vote_average: 8.9 },
];

function getAverageRating(
  movies: { title: string; vote_average: number }[],
): number {
  if (movies.length === 0) {
    return 0;
  }
  const total = movies.reduce((sum, movie) => {
    return sum + movie.vote_average;
  }, 0);

  const averageRating = Number((total / movies.length).toFixed(1));
  return averageRating;
}

console.log(getAverageRating(movies));
console.log(getAverageRating([]));
