export function formatId(id) {
    return `TRK-${id}`;
}
const formatLabels = {
    vinyl: "Vinyl record",
    cd: "Compact disc",
    digital: "Digital download",
};
export function describeFormat(format) {
    return formatLabels[format];
}
//# sourceMappingURL=track.js.map