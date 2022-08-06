<script setup lang="ts">
import Card from "./Card.vue";
import Icon from "./Icon.vue";
</script>

<template>
  <div class="container">
    <Card title="Card 1" class="card">
      <div class="contents">
        コンテンツ
        <Icon />
      </div>
    </Card>

    <Card title="Card 2" class="card">
      <div class="contents">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
      <template #footer>
        <span>フッター置き換え</span>
        <Icon size="16px" />
      </template>
    </Card>

    <Card title="Card 3" class="card">
      <div class="contents">
        <Icon />
        <span>Rock</span>
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
