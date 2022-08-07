<script setup lang="ts">
import { ref, inject, DirectiveBinding, watch } from "vue";
import { todoKey } from "../../useTodo";
import Rating from "./Rating.vue";

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

const inputTodo = ref<string>("");
// デバッグ用
// watch(inputTodo, () => {
//   console.log("inputTodo", inputTodo.value);
// });

// カスタムディレクティブ
const vFocus = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.focus();
    console.log("mounted");

    // アラート時に色を変える
    if (binding.modifiers.alert) {
      el.style.backgroundColor = "pink";
    }
  },
};

// カスタムコンポーネントの値受け渡し
const ratings = ref<string>("");
watch(ratings, () => {
  console.log("ratings", ratings.value);
});
</script>

<template>
  <div>
    <button @click="addTodo(inputTodo)">追加</button>
    <!-- v-focus.alert でアラート表示 -->
    <input type="text" name="todo" id="todo" v-model="inputTodo" v-focus />
    <ul :style="{ listStyle: 'none' }">
      <li
        :style="{ backgroundColor: 'aliceblue', marginBottom: '10px' }"
        v-for="todo in todos"
      >
        {{ todo.title }}
      </li>
    </ul>
  </div>
  <div>
    <h2>Rating</h2>
    <Rating v-model="ratings" />
  </div>
</template>

<style scoped></style>
