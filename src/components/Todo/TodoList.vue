<script setup lang="ts">
import { inject } from "vue";
import { todoKey } from "../../useTodo";

// 親コンポーネントでprovideしたものを受け取り
// const todos = inject("todos");
// const _addToDo = inject("addTodo");
// const addTodo = (title: string) => {
//   _addToDo(title);
// };

const state = inject(todoKey);
if (!state) {
  throw new Error("TodoList requires todos");
}
const { todos, addTodo } = state;
</script>

<template>
  <div>
    <button @click="addTodo('add')">追加</button>
    <ul :style="{ listStyle: 'none' }">
      <li
        :style="{ backgroundColor: 'aliceblue', marginBottom: '10px' }"
        v-for="todo in todos"
      >
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
