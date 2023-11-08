<template>
  <div>
    <h3>TEST</h3>
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  'msg': String,
})
// 타입이 틀려도 기본값에선 runtime error 미발생
// 하지만 부모 객체에서 타입에 대한 정보를 알려줌
// 타입스크립트 안 쓰면 타입 정보 안 줌
defineProps({
  msg:{
    type: String,
    required: true, // 필수인지 지정
  } ,
})
</script>

<style scoped>

</style>