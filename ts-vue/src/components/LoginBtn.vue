<template>
  <div>
    <!-- <p>store 사용</p> -->
    <button v-if="!authStore.isLogin" 
    v-on:click="authStore.toggleLogin"
    >로그인</button>
    <button v-if="!authStore.isLogin">회원가입</button>
    
    <button v-if="authStore.isLogin" 
    v-on:click="authStore.toggleLogin">로그아웃</button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()
</script>

<style scoped>

</style>