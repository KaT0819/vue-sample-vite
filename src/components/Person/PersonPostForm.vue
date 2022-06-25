<script setup lang="ts">
import { ref, defineEmits } from "vue";

const inputtingDescription = ref<string>("");

const emit = defineEmits(["post-person"]);

const postTweet = () => {
  emit("post-person", inputtingDescription.value);
};
</script>

<template>
  <div class="form-container">
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="basic-addon1">名前</span>
      <input
        type="text"
        class="form-control"
        placeholder="名前"
        aria-label="名前"
        aria-describedby="basic-addon1"
      />
    </div>

    <div class="input-group input-group-lg">
      <span class="input-group-text" id="basic-addon2">年齢</span>
      <input
        type="text"
        class="form-control"
        placeholder="年齢"
        aria-label="年齢"
        aria-describedby="basic-addon1"
      />
    </div>

    <button class="save-button" @click="postTweet()">post</button>
  </div>
</template>

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
