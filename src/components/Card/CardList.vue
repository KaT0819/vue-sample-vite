<script setup lang="ts">
import { ref, computed } from "vue";
import FirstCardList from "./FirstCardList.vue";
import SecondCardList from "./SecondCardList.vue";
import Modal from "./Modal.vue";

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

const isModalOpen = ref<boolean>(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="tab-changer">
    <button @click="udateTab(true)">First</button>
    <button @click="udateTab(false)">Second</button>
    <button @click="toggleDialog()">dialog</button>
    <button @click="toggleModal()">modal</button>
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

  <!-- <transition name="modal"> -->
  <modal :open="isModalOpen">
    <h1>モーダル</h1>
    <p>This is a dialog</p>
    <button @click="toggleModal">Close</button>
  </modal>
  <!-- </transition> -->
</template>

<style scoped>
.tab-contents {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
