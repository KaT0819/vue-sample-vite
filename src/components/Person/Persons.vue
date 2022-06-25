<script setup lang="ts">
// const { ref } = 'vue';
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';
</script>

<template>
  <div class="container">
    <h1>Title</h1>
    <PersonPostForm />
    <div class="list-container">
      <PersonList />
    </div>
  </div>
</template>

<style scoped></style>
