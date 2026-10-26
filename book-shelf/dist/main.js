import { createBook, updateBook } from "./bookService.js";
const b1 = {
    title: "Der Hobbit",
    author: "J. R. R. Tolkien",
    isbn: "978-3608939842",
    isAvailable: true,
};
//createBook(b1);
console.log(createBook(b1));
console.log(updateBook(99, { isAvailable: false }));
//# sourceMappingURL=main.js.map