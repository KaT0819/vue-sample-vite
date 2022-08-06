<script setup lang="ts">
import { ref, Ref } from "vue";
import PersonPostForm from "./PersonPostForm.vue";
import PersonList from "./PersonList.vue";

export type Person = {
  id: number;
  name: string;
  age: number;
};

const persons: Ref<Person[]> = ref([
  { id: 1, name: "太郎", age: 20 },
  { id: 2, name: "次郎", age: 18 },
  { id: 3, name: "三郎", age: 16 },
  { id: 4, name: "たろうたろうたろ", age: 16 },

]);

const postPerson = (person: Person) => {
  persons.value.push(person);
};

const deletePerson = (id: number) => {
  persons.value = persons.value.filter(person => person.id !== id);
};

</script>

<template>
  <div class="container">
    <h1>Title</h1>
    <PersonPostForm @post-person="postPerson" />
    <div class="list-container">
      <PersonList :persons="persons" @delete-person="deletePerson" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
