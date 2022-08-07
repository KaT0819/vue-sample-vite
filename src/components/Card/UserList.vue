<template>
  <div>
    <input type="text" name="" v-model="inputUser" />
    <button @click="addUser(inputUser)">ユーザ追加</button>
    <ul>
      <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">
          {{ user.name }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const users = ref([{ name: "John" }, { name: "Jane" }, { name: "Joe" }]);
const inputUser = ref("");

const addUser = (name: string) => {
  users.value.push({ name });
  inputUser.value = "";
};

const removeUser = (index: number) => {
  users.value.splice(index, 1);
};
</script>

<style scoped>
ul {
  width: 200px;
  list-style: none;
}

li {
  padding: 0.5rem;
  border: 1px solid #ccc;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-200px);
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.user-list-enter-active {
  transition: all 0.7s ease-out;
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.user-list-leave-active {
  transition: all 0.7s ease-in;
}
</style>
