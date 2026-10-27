export function groupBy<T, K extends keyof T>(
  items: T[],
  key: K,
): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  for (const item of items) {
    const group = String(item[key]);

    if (!result[group]) {
      result[group] = [];
    }

    result[group].push(item);
  }

  return result;
}

export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const result: T[K][] = [];

  for (const item of items) {
    result.push(item[key]);
  }

  return result;
}

export function merge<T>(base: T, updates: Partial<T>): T {
  return {
    ...base,
    ...updates,
  };
}

export type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

export type MyPick<T, K extends keyof T> = {
  [newK in K]: T[newK];
};
