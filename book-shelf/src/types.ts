export type EntityId = number | string;

type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type HasId = {
  id: EntityId;
};

export type Book = HasId &
  Timestamped & {
    title: string;
    author: string;
    isbn: string;
    isAvailable: boolean;
  };

export type IsbnParts = [
  group: number,
  publisher: string,
  titleIdentifier: string,
];

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export type BookCreatePayload = Omit<Book, "id" | "createdAt" | "updatedAt">;
export type BookUpdatePayload = Partial<BookCreatePayload>;
export type BookPreview = Pick<Book, "id" | "title" | "author">;
