<script setup lang="ts">
import { ref } from "vue";
import TweetPostForm from "./TweetPostForm.vue";
import TweetList from "./TweetList.vue";

const tweets = ref([
  { id: 0, description: "Hello, world!" },
  { id: 1, description: "Hello, Vue!" },
  { id: 2, description: "Hello, Vue.js!" },
]);

const postTweet = (description: string) => {
  const newTweet = {
    id: tweets.value.length,
    description,
  };
  tweets.value.push(newTweet);

  console.log(description);
};

const deleteTweet = (id: number) => {
  tweets.value = tweets.value.filter(tweet => tweet.id !== id);
};
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <TweetPostForm @post-tweet="postTweet" />

    <div class="tweet-container">
      <p v-if="tweets.length == 0">ツイートがありません。</p>
      <!-- <TweetList v-else :tweets="tweets" @delete-tweet="deleteTweet" />-->
      <TweetList v-else :tweets="tweets" :delete-tweet-prop="deleteTweet" @delete-tweet="deleteTweet" />

    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-size: 20px;
  font-weight: bold;
}
</style>
