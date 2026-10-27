import type {
  Book,
  BookCreatePayload,
  BookUpdatePayload,
  EntityId,
} from "./types.js";
import { createBook, updateBook } from "./bookService.js";
import { groupBy, pluck, merge } from "./generic.js";
import type { MyPartial, MyReadonly, MyPick } from "./generic.js";

const b1: BookCreatePayload = {
  title: "Der Hobbit",
  author: "J. R. R. Tolkien",
  isbn: "978-3608939842",
  isAvailable: true,
};
//createBook(b1);
// console.log(createBook(b1));

// console.log(updateBook(99, { isAvailable: false }));

const books: Book[] = [
  {
    id: 1,
    title: "Der Hobbit",
    author: "J. R. R. Tolkien",
    isbn: "978-3-608-93984-2",
    isAvailable: true,
    createdAt: new Date("2026-01-10"),
    updatedAt: new Date("2026-01-10"),
  },
  {
    id: 2,
    title: "Der Herr der Ringe",
    author: "J. R. R. Tolkien",
    isbn: "978-3-608-93800-5",
    isAvailable: false,
    createdAt: new Date("2026-01-11"),
    updatedAt: new Date("2026-01-11"),
  },
  {
    id: 3,
    title: "Faust",
    author: "Johann Wolfgang von Goethe",
    isbn: "978-3-15-000001-4",
    isAvailable: true,
    createdAt: new Date("2026-01-12"),
    updatedAt: new Date("2026-01-12"),
  },
  {
    id: 4,
    title: "Die Leiden des jungen Werthers",
    author: "Johann Wolfgang von Goethe",
    isbn: "978-3-15-000002-1",
    isAvailable: true,
    createdAt: new Date("2026-01-13"),
    updatedAt: new Date("2026-01-13"),
  },
];

//console.log(groupBy(books, "author"));

//console.log(pluck(books, "author"));
//console.log(pluck(books, "title"));

console.log(books[1]);
let ub: BookUpdatePayload = {
  isAvailable: true,
  title: "Der Herr der Ringe II",
};

console.log(merge(books[1], ub));

type PartialBook = MyPartial<Book>;
type ReadonlyBook = MyReadonly<Book>;
type PickBook = MyPick<Book, "title" | "author">;

type BookUpdatePayload2 = MyPartial<
  MyPick<Book, "title" | "author" | "isbn" | "isAvailable">
>;

type BookPreview2 = MyPick<Book, "id" | "title" | "author">;

//type B = Pick<Book, "Id">;

type BookEvents = {
  bookAdded: Book;
  bookRemoved: { id: EntityId };
  searchPerformed: { query: string; resultCount: number };
};

// Type-safe event emitter
function createEmitter<Events>() {
  const handlers: {
    [K in keyof Events]?: ((payload: Events[K]) => void)[];
  } = {};
  return {
    on<K extends keyof Events>(
      event: K,
      handler: (payload: Events[K]) => void,
    ): void {
      //
    },
    emit<K extends keyof Events>(event: K, payload: Events[K]): void {
      //
    },
  };
}

const emitter = createEmitter<BookEvents>();
