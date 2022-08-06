<script setup lang="ts">
import { Person } from "./Persons.vue";

// 親コンポーネントから受け取る
type Props = {
  persons: Person[];
};

defineProps<Props>();

const emit = defineEmits(["delete-person"]);
const deletePerson = (id: number, name: string) => {
  confirm("削除してもよろしいですか？ " + name) && emit("delete-person", id);
};
</script>

<template>
  <li v-for="person in persons" :key="person.id" class="person-list">
    <span>{{ person.name }}</span>
    <span>{{ person.age }}</span>
    <button @click="deletePerson(person.id, person.name)"><span>削除</span></button>
  </li>
</template>

<style scoped>
.person-list {
  list-style: none;
  margin: 0 12px 12px;
  padding: 10px 20px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  background-color: aquamarine;
}
</style>
