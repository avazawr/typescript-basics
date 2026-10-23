export interface Watchable {
  readonly id: number;
  title: string;
  year: string;
}

export type Rating = 1 | 2 | 3 | 4 | 5;

export interface Film extends Watchable {
  watched: boolean;
  rating?: Rating;
}

export interface Playlist {
  name: string;
  films: Film[];
}

export function formatFilm(film: Film): string {
  let filmString = `${film.title} ${film.year}`;
  if (film.rating) filmString += ` rating: ${film.rating}`;
  return filmString;
}

export function getUnwatched(playlist: Playlist): Film[] {
  return playlist.films.filter((film) => film.watched === false);
}
