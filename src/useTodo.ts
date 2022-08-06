import { InjectionKey, ref } from "vue";

type Todo = {
  id: number;
  title: string;
};

const defaultTodos = [
  { id: 1, title: "Todo 1" },
  { id: 2, title: "Todo 2" },
  { id: 3, title: "Todo 3" },
];

// provideで受け渡す用のデータ
// export const todos = ref<Todo[]>(defaultTodos);

// export const addToDo = (title: string) => {
//   const id = todos.value.length + 1;
//   todos.value.push({ id, title });
// };

// 複数の変数をまとめる
export const todos = (() => {
  const todos = ref<Todo[]>(defaultTodos);
  const addTodo = (title: string) => {
    const id = todos.value.length + 1;
    const todo: Todo = { id, title };
    todos.value.push(todo);
  };

  return {
    todos,
    addTodo,
  };
})();

type TodosType = ReturnType<typeof todos>;
export const todoKey: InjectionKey<TodosType> = Symbol("useTodos");
