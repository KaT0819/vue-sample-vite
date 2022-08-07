<script setup lang="ts">
import { ref } from "vue";

// カスタムコンポーネントのv-modelプロパティ
// https://v3.ja.vuejs.org/guide/migration/v-model.html
const props = defineProps(["modelValue"]);
// カスタムコンポーネントのv-modelイベント
const emits = defineEmits(["update:modelValue"]);

const isActiveButton = ref<string>(props.modelValue);
const onClick = (buttonType: string) => {
  isActiveButton.value = buttonType;
  emits("update:modelValue", isActiveButton.value);
};
</script>

<template>
  <div>
    <ul>
      <li>
        <button
          :class="{ active: isActiveButton === 's5' }"
          @click="onClick('s5')"
          type="button"
        >
          ★★★★★
        </button>
      </li>
      <li>
        <button
          :class="{ active: isActiveButton === 's4' }"
          @click="onClick('s4')"
          type="button"
        >
          ★★★★
        </button>
      </li>
      <li>
        <button
          :class="{ active: isActiveButton === 's3' }"
          @click="onClick('s3')"
          type="button"
        >
          ★★★
        </button>
      </li>
      <li>
        <button
          :class="{ active: isActiveButton === 's2' }"
          @click="onClick('s2')"
          type="button"
        >
          ★★
        </button>
      </li>
      <li>
        <button
          :class="{ active: isActiveButton === 's1' }"
          @click="onClick('s1')"
          type="button"
        >
          ★
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}

li {
  margin: 0 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  /* width: 60px; */
  height: 30px;
  border-radius: 20%;
  border-style: none;
  background-color: #46f;
  color: #eea;
  cursor: pointer;
}

.active {
  background-color: tomato;
}
</style>
