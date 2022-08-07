<template>
  <div class="backdrop" v-if="open"></div>
  <transition name="modal">
    <dialog open v-if="open" class="dialog">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type Props = {
  open: boolean;
};

defineProps<Props>();
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.dialog {
  position: fixed;
  top: 30vh;
  left: calc(50% - 15rem);
  width: 30rem;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: rgba(230, 230, 200, 0.8);
  border-color: grey;
  border-radius: 16px;
  z-index: 100;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-active {
  animation: modal 1s ease-out;
}

.modal-reave-active {
  animation: modal 1s ease-out reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
