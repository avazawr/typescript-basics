import type { Book, BookCreatePayload } from "./types.js";
import { createBook, updateBook } from "./bookService.js";

const b1: BookCreatePayload = {
  title: "Der Hobbit",
  author: "J. R. R. Tolkien",
  isbn: "978-3608939842",
  isAvailable: true,
};
//createBook(b1);
console.log(createBook(b1));

console.log(updateBook(99, { isAvailable: false }));
