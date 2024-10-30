<template>
  <TemplateDefault v-if="formData" :config="formData"></TemplateDefault>
</template>

<script setup>
import TemplateDefault from '@/components/templates/TemplateDefault.vue'
import { ref, onBeforeMount } from 'vue'

const formData = ref({})

onBeforeMount(() => {
  const data = sessionStorage.getItem('formData')
  if (data) {
    formData.value = JSON.parse(data)
  }
})
</script>

<style lang="scss" scoped>
@use '../styles/main.scss' as *;
</style>
