<script setup lang="ts">
import { ref, computed } from "vue";
import FirstCardList from "./FirstCardList.vue";
import SecondCardList from "./SecondCardList.vue";

const isFirstTab = ref(true);
const udateTab = (isFirst: boolean) => {
  isFirstTab.value = isFirst;
};

const currentComponent = computed(() => {
  return isFirstTab.value ? FirstCardList : SecondCardList;
});
</script>

<template>
  <div class="tab-changer">
    <button @click="udateTab(true)">First</button>
    <button @click="udateTab(false)">Second</button>
  </div>
  <div class="tab-contents">
    <FirstCardList v-if="isFirstTab" />
    <SecondCardList v-else />
  </div>

  <p>動的コンポーネント</p>
  <div class="tab-contents">
    <component :is="currentComponent"></component>
  </div>
</template>

<style scoped>
.tab-contents {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
