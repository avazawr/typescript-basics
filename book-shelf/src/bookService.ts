import type {
  Book,
  BookPreview,
  ApiResponse,
  EntityId,
  BookCreatePayload,
  BookUpdatePayload,
  IsbnParts,
} from "./types.js";

export async function fetchBooks(): Promise<ApiResponse<BookPreview[]>> {
  return {
    status: 200,
    message: "Success",
    data: [],
  };
}

export async function fetchBook(_id: EntityId): Promise<ApiResponse<Book>> {
  let book: Book = {
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

export async function createBook(
  payload: BookCreatePayload,
): Promise<ApiResponse<Book>> {
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

export async function updateBook(
  _id: EntityId,
  changes: BookUpdatePayload,
): Promise<ApiResponse<Book>> {
  let book: Book = {
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

export function parseIsbn(_isbn: string): IsbnParts {
  return [1, "", ""];
}
