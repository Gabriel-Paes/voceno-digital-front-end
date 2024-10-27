<template>
  <header v-if="!hideNavbar">
    <div class="logo">
      <IconLogo class="logo__icon" color="#fff" />
      <h2 class="ubuntu-medium logo__text">voceno.digital</h2>
    </div>
    <div class="spacer"></div>
    <nav class="navbar">
      <RouterLink to="/" class="link">Home</RouterLink>
    </nav>
  </header>

  <main :class="{ main: !hideNavbar }">
    <RouterView />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'
import IconLogo from '@/components/icons/IconLogo.vue'

const route = useRoute()

const hideNavbar = computed(() => route.meta.hideNavbar === true)
</script>

<style lang="scss" scoped>
@use './styles/main.scss' as *;

$header-size: 70px;

header {
  background-color: $color-light-blue;
  height: $header-size;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  @include breakpoint('md') {
    padding: 2rem 4rem;
  }

  .logo {
    display: flex;
    align-items: center;

    &__text {
      color: $color-white;
      font-size: 20px;
      margin-left: 5px;
      user-select: none;
      -webkit-user-drag: none;

      @include breakpoint('sm') {
        font-size: 32px;
      }
    }

    &__icon {
      width: 45px;
      height: 45px;

      @include breakpoint('sm') {
        width: 55px;
        height: 55px;
      }
    }
  }

  .spacer {
    margin: auto;
  }

  .navbar {
    .link {
      display: none;
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

      @include breakpoint('sm') {
        display: block;
      }
    }
  }
}

.main {
  padding: 1rem;
  height: calc(calc(100vh - $header-size) - 1rem);

  @include breakpoint('lg') {
    margin: 0 6rem;
  }
}
</style>
