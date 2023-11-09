<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>router 연습하기</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Some</RouterLink> |
        <RouterLink to="/other">Other</RouterLink> |
        <RouterLink to="/students">students</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
