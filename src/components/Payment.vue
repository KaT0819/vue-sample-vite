<script setup lang="ts">
import { computed, reactive, ref, toRefs, watch } from 'vue'

const itemName1 = ref<string>('Desk')
const itemName2 = 'Bike'

const item1 = reactive({
    name: 'Desk',
    price: 40000
})

const price1  =40000
const price2 = 20000

const url = 'https://www.amazon.co.jp/dp/B09QMBH5R7'

const buy = (itemName: string) => {
    alert('ほんとに買いますか？ ' + itemName + '?')
}

const input = (e: any) => {
    item1.name = e.target.value
}
const inputPrice = (e: any) => {
    item1.price = e.target.value
}
const clear = () => {
    item1.name =''
    item1.price = 0
}

const budget = 40000

const priceLabel = computed(() => {
    if (item1.price > budget) {
        return '高杉'
    } else {
        return item1.price + ' 円'
    }
})

const priceLabel1 = ref<string>(item1.price + ' 円')
const { price } = toRefs(item1)
watch(price, () => {
    console.log('watch');
    
})


</script>

<template>
  <div class="container">
    <h1>最近の支出</h1>
    <input v-model="item1.name">
    <input v-model="item1.price">
    <button @click="clear">クリア</button>

    <div class="payment">
      <label>{{ item1.name }}</label>
      <label>{{ priceLabel }}</label>
      <a :href="url">商品詳細</a>
      <button @click="buy(item1.name)">購入する</button>
    </div>
    <div class="payment">
      <label>{{ itemName2 }}</label>
      <label>{{ price2 }}円</label>
      <button @click="buy(itemName2)">購入する</button>
    </div>
  </div>

  <label>Payment.js</label>
</template>
p

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.payment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 80px;
  width: 400px;
  background: aliceblue;
}

label {
  font-size: 20px;
}
</style>
