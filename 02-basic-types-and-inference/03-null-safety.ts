const catalog: { id: number; title: string; poster_path: string | null }[] = [
  { id: 550, title: "SpiderMan", poster_path: "/spd.jpg" },
  { id: 770, title: "Matrix", poster_path: null },
  { id: 320, title: "Batman", poster_path: "/btm.jpg" },
  { id: 120, title: "Se7en", poster_path: null },
];

function findMovieTitle(
  catalog: { id: number; title: string; poster_path: string | null }[],
  id: number,
): string {
  const movie = catalog.find((m) => m.id === id);
  if (!movie) return "Movie not found";
  return movie.title;
}

function getPosterUrl(movie: { poster_path: string | null }): string {
  if (!movie.poster_path) {
    return "/placeholder.png";
  }
  return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
}

function countMoviesWithoutPoster(
  catalog: { id: number; title: string; poster_path: string | null }[],
): number {
  return catalog.filter((m) => !m.poster_path).length;
}

console.log(findMovieTitle(catalog, 320));
console.log(findMovieTitle(catalog, 999));

const firstMovie = catalog[0];
if (firstMovie) {
  console.log(getPosterUrl(firstMovie));
}

const secondMovie = catalog[1];
if (secondMovie) {
  console.log(getPosterUrl(secondMovie));
}

console.log(countMoviesWithoutPoster(catalog));

// const m = catalog.find((x) => x.id === 320);
// console.log(m.title);
// 'm' is possibly 'undefined'.ts(18048)

export {};
