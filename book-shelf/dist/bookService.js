export async function fetchBooks() {
    return {
        status: 200,
        message: "Success",
        data: [],
    };
}
export async function fetchBook(_id) {
    let book = {
        id: 1,
        createdAt: new Date("2026-10-20"),
        updatedAt: new Date("2026-10-25"),
        title: "Der Hobbit",
        author: "J. R. R. Tolkien",
        isbn: "978-3608939842",
        isAvailable: true,
    };
    return {
        status: 200,
        message: "Success",
        data: book,
    };
}
export async function createBook(payload) {
    let book = {
        ...payload,
        id: 99,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    return {
        status: 200,
        message: "Success",
        data: book,
    };
}
export async function updateBook(_id, changes) {
    let book = {
        id: 99,
        createdAt: new Date("2026-10-20"),
        updatedAt: new Date("2026-10-25"),
        title: "Der Hobbit",
        author: "J. R. R. Tolkien",
        isbn: "978-3608939842",
        isAvailable: true,
    };
    book = {
        ...book,
        ...changes,
    };
    return {
        status: 200,
        message: "Success",
        data: book,
    };
}
export function parseIsbn(_isbn) {
    return [1, "", ""];
}
//# sourceMappingURL=bookService.js.map