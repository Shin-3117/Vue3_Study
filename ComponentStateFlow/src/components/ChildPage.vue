<template>
  <div>
    <h3>자식 페이지입니다.</h3>
    <p>이름 : {{ info.name }}</p>
    <p>나이 : {{ info.age }}</p>
    <p>용돈 : {{ info.balance }}</p>
    <button @:click="giveMeAllowance">용돈 주세요.</button>
  </div>
</template>

<script setup>
const props = defineProps({
  info: {
    name: String,
    age: Number,
    balance: Number,
    updateBalance: Function,
  }
})
const giveMeAllowance = () => {
  // console.log(props.info)
  props.info.updateBalance()
}
</script>

<style scoped>

</style>