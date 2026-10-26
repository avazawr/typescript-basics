import { readFileSync } from "node:fs";
import { formatId, describeFormat } from "./track.js";
import { ok, findById } from "./api.js";
import { addTrack, updateTrack, toPreview } from "./library.js";
const libraryName = "Late Night Listening";
function describeTrack(track) {
    return `${track.title} by ${track.artist}`;
}
const tracks = [
    { id: 1, title: "Blue Light", artist: "Jorja Smith", liked: true },
    { id: 2, title: "Nights", artist: "Frank Ocean", liked: false },
];
const pick = {
    id: 3,
    title: "Golden",
    artist: "Jill Scott",
    liked: true,
    curatedBy: "editorial",
    addedDate: "2024-01-15",
};
// console.log(`Library: ${libraryName}`);
// console.log(describeTrack(tracks[0]));
// tracks.forEach((t) => console.log(formatId(t.id)));
// console.log(`Featured: ${pick.title}, added ${pick.addedDate}`);
// const notes = readFileSync("notes.txt", "utf8");
// console.log(notes);
const columns = ["title", "artist", "liked"];
for (const track of tracks) {
    console.log(columns.map((column) => track[column]).join(" | "));
}
const allTracks = ok(tracks);
const featured = ok(pick);
console.log(`${allTracks.data.length} tracks, featured: ${featured.data.title}, picked by ${featured.data.curatedBy}`);
console.log(findById(tracks, 2)?.title);
const ivy = addTrack({
    title: "Ivy",
    artist: "Frank Ocean",
    liked: false,
});
updateTrack(ivy.id, { liked: true });
console.log(toPreview(ivy), ivy.liked);
const formatCounts = {
    vinyl: 12,
    cd: 30,
    digital: 214,
};
console.log(formatCounts);
//# sourceMappingURL=main.js.map