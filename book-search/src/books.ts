export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  url: string;
}

export interface SearchResult {
  status: string;
  total: number;
  books: Book[];
}

function isBook(value: unknown): value is Book {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "string" &&
    "title" in value &&
    typeof value.title === "string" &&
    "subtitle" in value &&
    typeof value.subtitle === "string" &&
    "authors" in value &&
    typeof value.authors === "string" &&
    "image" in value &&
    typeof value.image === "string" &&
    "url" in value &&
    typeof value.url === "string"
  );
}

function isSearchResult(value: unknown): value is SearchResult {
  return (
    typeof value === "object" &&
    value !== null &&
    "status" in value &&
    typeof value.status === "string" &&
    "total" in value &&
    !isNaN(Number(value.total)) &&
    "books" in value &&
    Array.isArray(value.books)
  );
}

export async function fetchBooks(url: string): Promise<Book[]> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!isSearchResult(data)) throw new Error(`Expected a list of Book`);
  data.total = Number(data.total);

  return data.books.filter(isBook);
}
