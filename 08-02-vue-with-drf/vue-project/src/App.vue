<template>
  <header>
    <nav v-if="store.isLogin">
      <RouterLink :to="{ name: 'ArticleView' }">Articles</RouterLink> |
      <form @submit.prevent="store.logOut">
        <input type="submit" value="logOut">
      </form>
    </nav>
    <nav v-else>
      <RouterLink :to="{ name: 'SignUpView' }">SignUp</RouterLink> |
      <RouterLink :to="{ name: 'LogInView' }">LogIn</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped>
</style>
