import { formatId } from "./track.js";
import type { Track, FeaturedTrack } from "./types.js";
import { readFileSync } from "node:fs";

const libraryName = "Late Night Listening";

function describeTrack(track: Track): string {
  return `${track.title} by ${track.artist}`;
}

const tracks: Track[] = [
  { id: 1, title: "Blue Light", artist: "Jorja Smith", liked: true },
  { id: 2, title: "Nights", artist: "Frank Ocean", liked: false },
];

const pick: FeaturedTrack = {
  id: 3,
  title: "Golden",
  artist: "Jill Scott",
  liked: true,
  curatedBy: "editorial",
  addedDate: "2024-01-15",
};

console.log(`Library: ${libraryName}`);
console.log(describeTrack(tracks[0]));
tracks.forEach((t) => console.log(formatId(t.id)));
console.log(`Featured: ${pick.title}, added ${pick.addedDate}`);

const notes = readFileSync("notes.txt", "utf8");
console.log(notes);
