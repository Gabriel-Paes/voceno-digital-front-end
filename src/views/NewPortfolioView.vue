<template>
  <div class="container">
    <section class="card">
      <h2 class="ubuntu-medium">Novo Portfolio</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label class="field-label" for="name">Nome</label>
          <input
            class="field"
            type="text"
            name="name"
            placeholder="Digite o nome"
            v-model="form.name"
            :class="{ 'error-border': errors.name }"
          />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>

        <div>
          <label class="field-label" for="logo">Logo</label>
          <input
            class="field"
            type="file"
            id="logo"
            name="logo"
            accept="image/png, image/jpeg"
            @change="handleFileUpload('logo', $event)"
            :class="{ 'error-border': errors.logo }"
          />
          <span v-if="errors.logo" class="error">{{ errors.logo }}</span>
        </div>

        <div>
          <label class="field-label" for="color">Cor principal</label>
          <input
            class="field-color"
            type="color"
            id="color"
            name="color"
            v-model="form.color"
          />
        </div>

        <div>
          <label class="field-label" for="heroBackgroundImage">
            Imagem de fundo da primeira dobra
          </label>
          <input
            class="field"
            type="file"
            id="heroBackgroundImage"
            name="heroBackgroundImage"
            accept="image/png, image/jpeg"
            @change="handleFileUpload('heroBackgroundImage', $event)"
            :class="{ 'error-border': errors.heroBackgroundImage }"
          />
          <span v-if="errors.heroBackgroundImage" class="error">
            {{ errors.heroBackgroundImage }}
          </span>
        </div>

        <div>
          <label class="field-label" for="heroHighlight">
            Frase destaque da primeira dobra
          </label>
          <textarea
            class="field ubuntu-regular"
            id="heroHighlight"
            name="heroHighlight"
            placeholder="Digite a frase destaque"
            rows="3"
            v-model="form.heroHighlight"
            :class="{ 'error-border': errors.heroHighlight }"
          ></textarea>
          <span v-if="errors.heroHighlight" class="error">
            {{ errors.heroHighlight }}
          </span>
        </div>

        <div>
          <label class="field-label" for="heroDescription">
            Descrição da primeira dobra
          </label>
          <textarea
            class="field ubuntu-regular"
            id="heroDescription"
            name="heroDescription"
            placeholder="Digite a descrição"
            rows="5"
            v-model="form.heroDescription"
            :class="{ 'error-border': errors.heroDescription }"
          ></textarea>
          <span v-if="errors.heroDescription" class="error">
            {{ errors.heroDescription }}
          </span>
        </div>

        <button type="submit" class="submit-button" :disabled="isLoading">
          <span v-if="!isLoading">Criar</span>
          <span v-else class="loading-spinner"></span>
        </button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const allowedFileTypes = ['image/png', 'image/jpeg']

const isLoading = ref(false)

const form = reactive({
  name: '',
  logo: null,
  color: '#000000',
  heroBackgroundImage: null,
  heroHighlight: '',
  heroDescription: '',
})

const errors = reactive({})

const handleFileUpload = (field, event) => {
  const file = event.target.files[0]
  if (file) {
    if (allowedFileTypes.includes(file.type)) {
      form[field] = file
      errors[field] = ''
    } else {
      errors[field] = 'Por favor, selecione uma imagem válida (PNG ou JPEG).'
      form[field] = null
    }
  } else {
    errors[field] = 'Por favor, selecione um arquivo.'
    form[field] = null
  }
}

const validateForm = () => {
  errors.name = !form.name ? 'O nome é obrigatório' : ''
  errors.heroHighlight = !form.heroHighlight
    ? 'A frase de destaque é obrigatória'
    : ''
  errors.heroDescription = !form.heroDescription
    ? 'A descrição é obrigatória'
    : ''
}

const handleSubmit = async () => {
  validateForm()
  if (!Object.values(errors).some(error => error)) {
    isLoading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Formulário enviado:', form)
    } finally {
      isLoading.value = false
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../styles/main.scss' as *;
@use 'sass:color';

.container {
  display: flex;
  justify-content: flex-start;
}

.card {
  width: 100%;
  margin-bottom: 1rem;

  @include breakpoint('sm') {
    padding: 2rem;
    max-width: 500px;
    background-color: $color-white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    box-shadow: -10px 12px 32px rgba(0, 0, 0, 0.15);
  }
}

.field {
  display: block;
  margin-bottom: 6px;

  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: color.adjust($color-light-blue, $lightness: 20%);
  }

  &:focus {
    border-color: $color-light-blue;
    box-shadow: 0 0 8px rgba($color-light-blue, 0.2);
    outline: none;
  }

  &[type='file'] {
    font-size: 0.9rem;
    background-color: rgba($color-light-blue, 0.1);
  }

  @at-root {
    textarea#{&} {
      resize: vertical;
    }
  }
}

.field-label {
  margin: 6px 0;
  font-weight: bold;
  display: inline-block;
}

.field-color {
  display: block;
  margin-bottom: 5px;
}

.error {
  color: red;
  font-size: 0.9rem;
}

.error-border {
  border-color: red;
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
}

.submit-button {
  margin-top: 6px;

  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: $color-white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  background-color: $color-light-blue;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: color.adjust($color-light-blue, $lightness: -10%);
  }

  &:disabled {
    background-color: color.adjust(#6c757d, $lightness: 20%);
    color: color.adjust($color-white, $lightness: -10%);
    cursor: default;
  }
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 3px solid $color-white;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
