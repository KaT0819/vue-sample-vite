<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Payment from "./components/Payment/Payment/Payment.vue";
import Tweet from "./components/Tweet/Tweet.vue";
import Person from "./components/Person/Persons.vue";
import CardList from "./components/Card/CardList.vue";
import TodoList from "./components/Todo/TodoList.vue";

import { provide } from "vue";
import { todos, todoKey } from "./useTodo";
// provide("todos", todos);
provide(todoKey, todos);
</script>

<template>
  <!-- <Payment /> -->
  <!-- <Tweet /> -->
  <!-- <Person /> -->
  <CardList />
  <!-- <TodoList /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
