export function formatFilm(film) {
    let filmString = `${film.title} ${film.year}`;
    if (film.rating)
        filmString += ` rating: ${film.rating}`;
    return filmString;
}
export function getUnwatched(playlist) {
    return playlist.films.filter((film) => film.watched === false);
}
//# sourceMappingURL=types.js.map