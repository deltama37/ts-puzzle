import { Equal, Expect } from "./utils";

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type cases = [Expect<Equal<MyReadonly<Todo>, Readonly<Todo>>>];

type Todo = {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
};
