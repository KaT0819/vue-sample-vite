<script setup lang="ts">
import { ref, computed } from "vue";
import FirstCardList from "./FirstCardList.vue";
import SecondCardList from "./SecondCardList.vue";

const isFirstTab = ref<boolean>(true);
const udateTab = (isFirst: boolean) => {
  isFirstTab.value = isFirst;
};

const currentComponent = computed(() => {
  return isFirstTab.value ? FirstCardList : SecondCardList;
});

const isDialogOpen = ref<boolean>(false);
const toggleDialog = () => {
  isDialogOpen.value = !isDialogOpen.value;
};
</script>

<template>
  <div class="tab-changer">
    <button @click="udateTab(true)">First</button>
    <button @click="udateTab(false)">Second</button>
    <button @click="toggleDialog()">dialog</button>
  </div>
  <div class="tab-contents">
    <FirstCardList v-if="isFirstTab" />
    <SecondCardList v-else />
  </div>

  <p>動的コンポーネント</p>
  <div class="tab-contents">
    <component :is="currentComponent"></component>
  </div>

  <teleport to="body">
    <dialog class="dialog" :open="isDialogOpen">
      <h1>Dialog</h1>
      <p>This is a dialog</p>
      <button @click="toggleDialog">Close</button>
    </dialog>
  </teleport>
</template>

<style scoped>
.tab-contents {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 150px;
  background-color: rgba(230, 230, 200, 0.8);
  border-color: grey;
  border-radius: 16px;
  align-items: center;
}
</style>
