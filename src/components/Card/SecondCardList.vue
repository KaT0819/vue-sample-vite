<script setup lang="ts">
import Card from "./Card.vue";
import Icon from "./Icon.vue";
</script>

<template>
  <div class="container">
    <Card title="Card 1" class="card">
      <div class="contents">
        コンテンツ２つめ
        <Icon />
      </div>
    </Card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  margin-bottom: 32px;
}
</style>
