<template>
  <header class="header">
    <div class="logo">
      <img v-if="config?.logo" class="logo__icon" :src="config.logo" />
      <h2 class="ubuntu-medium logo__text">{{ config?.name }}</h2>
    </div>
    <div class="spacer"></div>
    <button @click="toggleMenu" class="hamburger">&#9776;</button>
    <nav class="navbar" :class="{ 'is-open': isMenuOpen }">
      <a href="#hero" class="link">Home</a>
      <a href="#about" class="link">Sobre</a>
      <a href="#services" class="link">Serviços</a>
      <a href="#contact" class="link">Contato</a>
    </nav>
  </header>
  <main class="main">
    <section
      id="hero"
      class="hero"
      :style="
        config?.hero?.backgroundImage
          ? { backgroundImage: `url(${config.hero.backgroundImage})` }
          : {}
      "
    >
      <div class="hero-content">
        <h1 class="highlight ubuntu-medium">
          {{ config?.hero?.highlight }}
        </h1>
        <h3 class="description">
          {{ config?.hero?.description }}
        </h3>
        <div class="btn-group">
          <a href="#about" class="btn-cta">Saiba mais</a>
        </div>
      </div>
    </section>
    <section id="about" class="about">
      <h2 class="about__title ubuntu-medium">Sobre</h2>
      <p class="about__text">
        {{ config?.name }}, acreditamos que cada projeto é uma oportunidade para
        criar algo extraordinário. Nossa equipe é composta por profissionais
        apaixonados e especializados em diversas áreas, desde estratégia e
        design até tecnologia e execução. Com anos de experiência e uma
        abordagem centrada nas necessidades dos clientes, estamos prontos para
        superar expectativas em cada etapa do processo. Nossa filosofia é
        simples: excelência, transparência e resultados tangíveis. Estamos
        comprometidos em construir relações de longo prazo, baseadas em
        confiança e colaboração, para que juntos possamos alcançar grandes
        conquistas.
      </p>
    </section>
    <section id="services" class="services">
      <h2 class="services__title ubuntu-medium">Nossos Serviços</h2>
      <div class="services__cards">
        <div class="services__card">
          <h3 class="services__card-title ubuntu-light">
            Estratégia & Planejamento
          </h3>
          <p class="services__card-description">
            Criamos planos de ação eficazes, alinhados aos seus objetivos de
            negócio e focados em resultados reais. Trabalhamos lado a lado para
            desenvolver estratégias que guiem o seu projeto do início ao fim.
          </p>
        </div>
        <div class="services__card">
          <h3 class="services__card-title ubuntu-light">Design & Branding</h3>
          <p class="services__card-description">
            Desenvolvemos identidades visuais autênticas e memoráveis. Desde
            logotipos até toda a identidade gráfica, ajudamos sua marca a se
            destacar com criatividade e coerência.
          </p>
        </div>
        <div class="services__card">
          <h3 class="services__card-title ubuntu-light">
            Desenvolvimento & Tecnologia
          </h3>
          <p class="services__card-description">
            Oferecemos soluções digitais robustas e intuitivas. Nossos
            especialistas em tecnologia estão prontos para criar desde sites
            interativos até sistemas completos, adaptados para proporcionar uma
            experiência única aos usuários.
          </p>
        </div>
      </div>
    </section>
    <section id="contact" class="contact">
      <h2 class="contact__title ubuntu-medium">Entre em Contato</h2>
      <div class="contact__info">
        <p class="contact__item">
          <strong>Endereço:</strong> Rua Exemplo, 123 - Centro, Cidade/UF
        </p>
        <p class="contact__item"><strong>Telefone:</strong> (11) 1234-5678</p>
        <p class="contact__item">
          <strong>Horário de Atendimento:</strong> Seg-Sex, 08:00 - 18:00
        </p>
        <p class="contact__item"><strong>Email:</strong> contato@exemplo.com</p>
      </div>
    </section>
  </main>
  <footer class="footer">
    <span class="text ubuntu-medium">
      &copy; {{ new Date().getFullYear() }} {{ config?.name }}. Todos os
      direitos reservados. | Desenvolvido por
      <a
        class="link"
        href="https://www.voceno.digital"
        target="_blank"
        rel="noopener noreferrer"
      >
        voceno.digital
      </a>
    </span>
  </footer>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue'

const props = defineProps({
  config: Object,
})

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  updateColors(props.config.color)
})

watch(
  () => props.config.color,
  newColor => {
    updateColors(newColor)
  },
)

function updateColors(color) {
  document.documentElement.style.setProperty('--primary-color', color)

  const contrastColor = getContrastingColor(color)
  document.body.style.setProperty('--contrast-color', contrastColor)
}

function luminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const a = [r, g, b].map(c =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4),
  )
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

function getContrastingColor(hex) {
  const lum = luminance(hex)
  return lum > 0.5 ? '#000000' : '#FFFFFF'
}
</script>

<style lang="scss" scoped>
@use '../../styles/main.scss' as *;
@use 'sass:color';

$header-height: 70px;
$content-padding: $gap-size;

$primary-color: var(--primary-color);
$contrast-color: var(--contrast-color);

html {
  scroll-padding-top: $header-height;
  scroll-behavior: smooth;
}

.header {
  background-color: $primary-color;
  height: $header-height;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 9999;

  @include breakpoint('md') {
    padding: 2rem 4rem;
  }

  .logo {
    display: flex;
    align-items: center;

    &__text {
      color: $contrast-color;
      font-size: 20px;
      margin-left: 10px;
      white-space: nowrap;
      user-select: none;
      -webkit-user-drag: none;

      @include breakpoint('sm') {
        font-size: 32px;
      }
    }

    &__icon {
      height: 45px;
      width: 100%;
      object-fit: contain;
      user-select: none;
      -webkit-user-drag: none;

      @include breakpoint('sm') {
        height: 55px;
      }
    }
  }

  .spacer {
    margin: auto;
  }

  .hamburger {
    display: block;
    background: transparent;
    border: none;
    color: $contrast-color;
    font-size: 24px;
    cursor: pointer;
    padding: 0;

    @include breakpoint('sm') {
      display: none;
    }
  }

  .navbar {
    display: none;
    gap: 5px;
    padding: 5px;
    .link {
      display: block;
      background-color: transparent;
      color: $contrast-color;
      border: thin solid $contrast-color;
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

    &.is-open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: $primary-color;
      z-index: 1000;

      .link {
        text-align: center;
        border: none;
      }
    }

    @include breakpoint('sm') {
      display: flex;

      .link {
        display: block;
      }
    }
  }
}

.main {
  padding: 0 $content-padding;
  max-width: 1200px;
  margin: 0 auto;
}

@mixin full-height {
  height: calc(100vh - $header-height);
}

$content-padding: 20px;

.main {
  padding: 0 $content-padding;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  @include breakpoint('sm') {
    width: calc(100vw - 9px);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: calc($gap-size * 5);
    padding: 2rem 1rem;
    max-width: 1200px;

    .highlight {
      font-size: 44px;

      @include breakpoint('sm') {
        font-size: 72px;
      }
    }

    .description {
      font-size: 20px;
      max-width: 560px;
    }

    .btn-group {
      display: flex;

      .btn-cta {
        background-color: $primary-color;
        color: $contrast-color;
        padding: 15px 25px;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        transition:
          background-color 0.3s ease,
          color 0.3s ease,
          transform 0.3s ease;

        &:hover,
        &:focus {
          color: $color-white;
          background-color: color.adjust($color-white, $lightness: -85%);
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}

.about {
  padding: 2rem 1rem;

  &__title {
    font-size: 24px;
    margin-bottom: 1rem;

    @include breakpoint('sm') {
      font-size: 36px;
      margin-top: 3rem;
    }
  }

  &__text {
    font-size: 16px;

    @include breakpoint('sm') {
      font-size: 18px;
    }
  }
}

.services {
  text-align: center;
  padding: 2rem 1rem;

  @include breakpoint('sm') {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include full-height;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 2rem;

    @include breakpoint('sm') {
      font-size: 36px;
    }
  }

  &__cards {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: $gap-size;

    @include breakpoint('md') {
      flex-direction: row;
      justify-content: center;
      align-items: stretch;
      gap: calc($gap-size * 4);
    }
  }

  &__card {
    background-color: $primary-color;
    color: $contrast-color;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 8px;
    padding: 2rem;
    width: 300px;
    box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.3);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &-title {
      font-size: 18px;
      margin-bottom: 0.5rem;

      @include breakpoint('sm') {
        font-size: 24px;
      }
    }

    &-description {
      text-align: start;
      font-size: 0.9rem;
      line-height: 160%;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 2px 10px 12px rgba(0, 0, 0, 0.4);
    }
  }
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  margin-bottom: 3rem;

  &__title {
    font-size: 24px;
    margin-bottom: 1rem;

    @include breakpoint('sm') {
      font-size: 36px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__item {
    font-size: 1rem;
    line-height: 1.5;
  }
}

.footer {
  background-color: $primary-color;
  color: $contrast-color;
  padding: 1.5rem;
  text-align: center;

  .text {
    font-size: 1rem;

    .link {
      color: $color-light-blue;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: color.adjust($color-light-blue, $lightness: 10%);
      }
    }
  }
}
</style>
