export function ok(data) {
    return { status: 200, message: "OK", data };
}
export function findById(items, id) {
    return items.find((item) => item.id === id);
}
//# sourceMappingURL=api.js.map