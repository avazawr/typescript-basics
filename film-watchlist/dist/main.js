import { formatFilm, getUnwatched } from "./types.js";
const playList = {
    name: "My play list",
    films: [
        {
            id: 1,
            title: "The Matrix",
            year: "1999",
            watched: true,
            rating: 5,
        },
        {
            id: 2,
            title: "Interstellar",
            year: "2014",
            watched: false,
            rating: 4,
        },
        {
            id: 3,
            title: "Inception",
            year: "2010",
            watched: false,
        },
    ],
};
console.log(playList.name);
console.log("All:");
playList.films.forEach((film) => {
    console.log(formatFilm(film));
});
console.log("\nUnwatched:");
const unwatched = getUnwatched(playList);
unwatched.forEach((film) => {
    console.log(formatFilm(film));
});
//# sourceMappingURL=main.js.map