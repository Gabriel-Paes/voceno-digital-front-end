<template>
  <header>
    <IconLogo color="#fff" width="55" height="55" />
    <h2 class="ubuntu-medium">voceno.digital</h2>
    <div class="spacer"></div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<style lang="scss" scoped>
@use './styles/main.scss' as *;

$header-size: 70px;

header {
  background-color: $color-light-blue;
  height: $header-size;
  display: flex;
  align-items: center;
  padding: 2rem 4rem;

  h2 {
    color: $color-white;
    font-size: 32px;
    margin-left: 5px;
    user-select: none;
    -webkit-user-drag: none;
  }

  .spacer {
    margin: auto;
  }

  nav {
    a {
      background-color: transparent;
      color: $color-white;
      border: thin solid $color-white;
      padding: 8px 20px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      margin: 0 8px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
      }
    }
  }
}

main {
  /* max-width: 1200px; */
  margin: 0 6rem;
  height: calc(100vh - $header-size);
}
</style>
