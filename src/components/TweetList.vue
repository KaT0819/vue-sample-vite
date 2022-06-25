<template>
  <ul>
    <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
      <span>{{ tweet.description }}</span>
      <!-- emitでの操作（値を私て呼び出し元の関数に値を受け渡し） -->
      <button class="delete-button" @click="deleteTweet(tweet.id)">
        delete
      </button>
      <!-- Propsで関数を私て実行 -->
      <button class="delete-button" @click="deleteTweetProp(tweet.id)">
        deleteProp
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

type Tweet = {
  id: number;
  description: string;
};

type Props = {
  tweets: Tweet[];
  deleteTweetProp: (id: number) => void;
};

defineProps<Props>();

const emit = defineEmits(["delete-tweet"]);

const deleteTweet = (id: number) => {
    emit("delete-tweet", id);
};


</script>
<style scoped>
.tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 16px;
  
  display: flex;
  justify-content: space-between;
  background-color: #b0e6bd;
  padding: 8px 20px;
  width: 400px;
}


.delete-button {
  color: #fff;
  font-weight: bold;
  background-color: #eac95e;
  border-radius: 4px;
  border: none;
  width: 80px;
  height: 30px;
}

.delete-button:hover {
  background-color: #c1a23a;
}

</style>
