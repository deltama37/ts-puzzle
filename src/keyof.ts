type Todo = {
  foo: string;
  bar: number;
};

let todo: keyof Todo;
todo = "foo";
todo = "bar";
// @ts-expect-error
todo = "error";
