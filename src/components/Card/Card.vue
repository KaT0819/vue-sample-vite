<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="card-container">
    <div class="content">
      <span class="title">{{ title }}</span>
      <slot />
    </div>
    <div class="footer">
      <slot name="footer">Default footer</slot>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  box-shadow: 2, 8px, black;
  border-radius: 8px;
  padding: 20px 0 0 0;
  width: 300px;
  height: auto;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  padding: 0px 20px 0px 20px;
  margin-bottom: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer {
  display: flex;
  height: 30px;
  background-color: aquamarine;
  width: 100%;
  border-radius: 0 0 8px 8px;
  justify-content: center;
  align-items: center;
}
</style>
