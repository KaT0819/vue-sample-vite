<script setup lang="ts">
import { ref, defineEmits, computed } from "vue";

const inputName = ref<string>("");
const inputAge = ref<number>(0);

const emit = defineEmits(["post-person"]);

const postPerson = () => {
  const person = {
    id: Math.random(),
    name: inputName.value,
    age: inputAge.value,
  };
  emit("post-person", person);
  console.log(person);
};

const nameLengthLimit = 10;
// エラー判定
const isValidName = computed(() => {
  console.log(inputName.value.length);
  return inputName.value.length > nameLengthLimit ? false : true;
});

// エラー時の名前の背景色
const errorColor = computed(() => {
  return isValidName.value ? "white" : "pink";
});
</script>

<template>
  <div class="form-container">
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="basic-addon1">名前</span>
      <input
        v-model="inputName"
        type="text"
        class="form-control input-name"
        placeholder="名前を入力してください"
        aria-label="名前"
        aria-describedby="basic-addon1"
      />
      <div v-if="!isValidName" class="error-message">
        {{ nameLengthLimit }} 文字以内で入力してください。
      </div>
    </div>

    <div class="input-group input-group-lg">
      <span class="input-group-text" id="basic-addon2">年齢</span>
      <input
        v-model="inputAge"
        type="number"
        class="form-control"
        placeholder="年齢を入力してください"
        aria-label="年齢"
        aria-describedby="basic-addon1"
      />
    </div>

    <!-- 名前の文字数によって有効無効を切り替える -->
    <button :disabled="!isValidName" class="save-button" @click="postPerson">post</button>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: honeydew;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

.save-button {
  color: #fff;
  font-weight: bold;
  background-color: #79e7b4;
  border-radius: 4px;
  border: none;
  width: 80px;
  height: 30px;
  margin-top: 20px;
}
.save-button:hover {
  background-color: #48bf88;
}
/* disable時の色指定。hoverより後ろに書かないとマウスポインタを当てた際に色が変化してしまう */
.save-button:disabled{
    color: #FFF;
    background: #AAA;
}


.form-control {
  width: 200px;
  margin: 0px 10px;
  padding: 5px;
  font-size: 20px;
}

.input-group-text {
  font-size: 20px;
}

.input-name {
  /* errorColorの値にバインド */
  background-color: v-bind(errorColor);
}

.error-message {
  color: red;
  font-size: 12px;
  /* margin-bottom: 5px; */
}
</style>
