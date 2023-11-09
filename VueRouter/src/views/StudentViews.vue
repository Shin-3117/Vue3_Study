<template>
  <div>
    <h1>학생 상세 정보 목록 입니다.</h1>
    <ul v-for="student in students" :key="student.name">
      <RouterLink :to="`/student/${student.name}`">{{ student.name }} 학생 정보 보기</RouterLink>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
const students = ref([
  {
    name: '김하나'
  },
  {
    name: '김두리'
  },
  {
    name: '김서이'
  }
])
</script>

<style scoped>

</style>