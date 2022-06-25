<template>
  <div class="form-container">
    <input v-model="inputtingDescription" type="text" />
    <button class="save-button" @click="postTweet()">post</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const inputtingDescription = ref<string>("");

const emit = defineEmits(["post-tweet"]);

const postTweet = () => {
  emit("post-tweet", inputtingDescription.value);
};

</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}

.save-button {
  color: #fff;
  font-weight: bold;
  background-color: #79e7b4;
  border-radius: 4px;
  border: none;
  width: 80px;
  height: 30px;
}

.save-button:hover {
  background-color: #48bf88;
}

input {
  margin-bottom: 16px;
}
</style>
