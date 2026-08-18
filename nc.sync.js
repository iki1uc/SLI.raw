export function NC_SYNC(list) {
    return {
        count: list.keys.length,
        keys: list.keys
    };
}
