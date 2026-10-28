import { fetchBooks } from "./books.js";
import type { Book } from "./books.js";

const form = document.getElementById("search-form");
const list = document.getElementById("book-list");

if (!(form instanceof HTMLFormElement)) {
  throw new Error("Element #search-form not found");
}
if (!(list instanceof HTMLUListElement)) {
  throw new Error("Element #book-list not found");
}

function readQuery(form: HTMLFormElement): string {
  const query = new FormData(form).get("query");
  return typeof query === "string" ? query.trim().toLowerCase() : "";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = readQuery(form);
  const url = `https://www.dbooks.org/api/search/query=${encodeURIComponent(query)}`;

  try {
    books = await fetchBooks(url);

    render(books);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    list.textContent = `Could not load books: ${message}`;
  }
});

const render = (results: Book[]): void => {
  list.replaceChildren(
    ...results.map((book) => {
      const item = document.createElement("li");
      const title = document.createElement("b");
      title.textContent = book.title;
      item.append(title, ` by ${book.authors}`);
      return item;
    }),
  );
};

let books: Book[] = [];

///---------Character Counter----------------

const message = document.getElementById("message");
const charCount = document.getElementById("char-count");
const sendButton = document.getElementById("send-button");

if (!(message instanceof HTMLTextAreaElement)) {
  throw new Error("Element #message not found");
}
if (!(charCount instanceof HTMLParagraphElement)) {
  throw new Error("Element #char-count not found");
}
if (!(sendButton instanceof HTMLButtonElement)) {
  throw new Error("Element #char-count not found");
}

const handleInput = (event: InputEvent): void => {
  const target = event.target as HTMLTextAreaElement;
  charCount.textContent = `${target.value.length} / 140`;

  sendButton.disabled = target.value.length > 140;
};

message.addEventListener("input", handleInput);

////---------Color Picker------------------------

type BoxColor = "white" | "lightblue" | "lightgreen";

const colorBox = document.getElementById("color-box");
const colorSelect = document.getElementById("color-select");

if (!(colorBox instanceof HTMLDivElement)) {
  throw new Error("Element #color-box not found");
}
if (!(colorSelect instanceof HTMLSelectElement)) {
  throw new Error("Element #color-select not found");
}

const paintBox = (color: BoxColor): void => {
  colorBox.style.backgroundColor = color;
};

function isBoxColor(value: string): value is BoxColor {
  return (
    typeof value === "string" &&
    ["white", "lightblue", "lightgreen"].includes(value)
  );
}

colorSelect.addEventListener("change", (event) => {
  const color = colorSelect.value;
  if (isBoxColor(color)) paintBox(color);
});

//--------------Counter--------------------
let count: number = 0;

const counterButtons =
  document.querySelectorAll<HTMLButtonElement>("button[data-step]");
const counter = document.getElementById("counter");

if (!(counter instanceof HTMLSpanElement)) {
  throw new Error("Element #counter not found");
}

const handleClick = (event: MouseEvent): void => {
  const btn = event.target as HTMLButtonElement;
  const step = Number(btn.dataset.step);
  count = count + step;
  if (count < 0) count = 0;
  counter.textContent = String(count);
};

counterButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

//--------------To-do List------------------
const todoInput = document.getElementById("todo-input");
const addTodo = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

if (!(todoInput instanceof HTMLInputElement)) {
  throw new Error("Element #todo-input not found");
}
if (!(addTodo instanceof HTMLButtonElement)) {
  throw new Error("Element #add-todo not found");
}
if (!(todoList instanceof HTMLUListElement)) {
  throw new Error("Element #todo-list not found");
}
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function isTodo(value: unknown): value is Todo {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "number" &&
    "text" in value &&
    typeof value.text === "string" &&
    "done" in value &&
    typeof value.done === "boolean"
  );
}

function loadTodos(): Todo[] {
  const todosStorage: unknown = localStorage.getItem("todos") ?? "[]";

  if (typeof todosStorage !== "string") {
    return [];
  }

  const todosParsed = JSON.parse(todosStorage);
  return todosParsed.filter(isTodo);
}

function saveTodos(todos: Todo[]): void {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const renderTodos = (items: Todo[]): void => {
  todoList.replaceChildren(
    ...items.map((todo) => {
      const item = document.createElement("li");
      item.dataset.id = String(todo.id);
      if (todo.done) {
        item.classList.add("done");
      }

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.done;

      const label = document.createElement("span");
      label.textContent = todo.text;

      const remove = document.createElement("button");
      remove.type = "button";
      remove.dataset.action = "delete";
      remove.textContent = "Delete";

      item.append(checkbox, " ", label, " ", remove);
      return item;
    }),
  );
};

addTodo.addEventListener("click", (event) => {
  const text = todoInput.value;
  if (text) {
    let newId = 0;

    if (todos.length > 0) {
      newId = todos[todos.length - 1].id + 1;
    }

    const newTodo: Todo = {
      id: newId,
      text: text,
      done: false,
    };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos);
  }
});

todoList.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLButtonElement ||
    event.target instanceof HTMLInputElement
  ) {
    const item = event.target.closest("li");
    const id = Number(item?.dataset.id);
    const index = todos.findIndex((todo) => todo.id === id);

    if (event.target instanceof HTMLButtonElement) {
      if (index !== -1) {
        todos.splice(index, 1);
      }
    }

    if (event.target instanceof HTMLInputElement) {
      if (index !== -1) {
        todos[index].done = !todos[index].done;
      }
    }
    saveTodos(todos);
    renderTodos(todos);
  }
});

const todos: Todo[] = loadTodos();
renderTodos(todos);
