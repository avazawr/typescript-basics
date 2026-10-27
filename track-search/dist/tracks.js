export async function fetchTracks(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
        throw new Error("Expected a list of tracks");
    }
    return data.filter(isTrack);
}
function isTrack(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        typeof value.id === "number" &&
        "title" in value &&
        typeof value.title === "string" &&
        "artist" in value &&
        typeof value.artist === "string" &&
        "liked" in value &&
        typeof value.liked === "boolean");
}
