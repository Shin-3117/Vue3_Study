<template>
  <header>
    <h1>저는 헤더에요</h1>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        |
        <RouterLink to="/about">About</RouterLink>
    </nav>
    <LoginBtn/>

  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import LoginBtn from './LoginBtn.vue';

</script>

<style scoped lang="scss">
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  >nav{
    background-color: greenyellow;
    padding: 16px;
  }
}
</style>