<template>
  <div>
    <h1>부모 페이지입니다.</h1>
    <ul v-for="info in children" :key="info.name">
      <ChildPage :info="info"/>
    </ul>
  </div>
</template>

<script setup>
import ChildPage from './ChildPage.vue';
import { ref } from 'vue';
// 이거 보다는 매서드 축약형 추천 : prototype가 없기 때문에
const updateBalance = function() {
  // console.log(children.value)
  this.balance += 1000 
}
const children = ref([
  {
    'name': '김하나',
    'age': 30,
    'balance':100000,
    // 매서드 축약형 사용 권장
    updateBalance(){
      this.balance += 1000 
    }
  },
  {
    'name': '김두리',
    'age': 20,
    'balance':10000,
    'updateBalance':updateBalance
  },
  {
    'name': '김서이',
    'age': 10,
    'balance': 1000,
    'updateBalance':updateBalance
  }
])
</script>

<style scoped>

</style>