export function groupBy(items, key) {
    const result = {};
    for (const item of items) {
        const group = String(item[key]);
        if (!result[group]) {
            result[group] = [];
        }
        result[group].push(item);
    }
    return result;
}
export function pluck(items, key) {
    const result = [];
    for (const item of items) {
        result.push(item[key]);
    }
    return result;
}
export function merge(base, updates) {
    return {
        ...base,
        ...updates,
    };
}
//# sourceMappingURL=generic.js.map