<template>
  <TemplateDefault :config="form"></TemplateDefault>
</template>

<script setup>
import TemplateDefault from '@/components/templates/TemplateDefault.vue'

import { reactive } from 'vue'

const form = reactive({
  name: 'Milano',
  logo: null,
  color: '#000000',
  hero: {
    backgroundImage: null,
    highlight: 'Sua presença digital de forma simples e rápida',
    description:
      'Desenvolva sua presença digital com um template pronto. Sem códigos, sem complicações - apenas você no digital, pronto para compartilhar!',
  },
})

document.documentElement.style.setProperty('--primary-color', form.color)
</script>

<style lang="scss" scoped>
@use '../styles/main.scss' as *;
</style>
