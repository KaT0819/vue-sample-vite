<script setup lang="ts">
import { ref, inject, DirectiveBinding, watch } from "vue";
import axios from "axios";

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

const onSubmit = (e: Event) => {
  //   // fetchでサーバーにデータを送信する
  //   fetch("https://vue-example-e7ace-default-rtdb.firebaseio.com/todos.json", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       content: inputTodo.value,
  //       rating: ratings.value,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   axios
  axios
    .post("https://vue-example-e7ace-default-rtdb.firebaseio.com/todos.json", {
      content: inputTodo.value,
      rating: ratings.value,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      inputTodo.value = "";
      ratings.value = "";
    });
};
</script>

<template>
  <div>
    <button @click="addTodo(inputTodo)">追加</button>
    <button @click="onSubmit">DB登録</button>
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
