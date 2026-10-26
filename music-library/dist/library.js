// src/library.ts
import { findById } from "./api.js";
const library = [];
export function addTrack(payload) {
    const track = {
        ...payload,
        id: library.length + 1,
        addedAt: new Date(),
        playCount: 0,
    };
    library.push(track);
    return track;
}
export function updateTrack(id, changes) {
    const track = findById(library, id);
    if (track) {
        Object.assign(track, changes);
    }
    return track;
}
export function toPreview(track) {
    return { id: track.id, title: track.title, artist: track.artist };
}
//# sourceMappingURL=library.js.map