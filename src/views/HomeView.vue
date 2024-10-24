<template>
  <section id="hero">
    <h1 class="ubuntu-medium">
      Sua presença digital de forma <br />simples e rápida
    </h1>
    <h3>
      Desenvolva sua presença digital com um template pronto.<br />
      Sem códigos, sem complicações - apenas <span>você no digital</span>,
      pronto para compartilhar!
    </h3>
    <div class="btn-group">
      <RouterLink to="/new" class="btn-primary">Comece agora</RouterLink>
      <button href="#" class="btn-secondary" disabled>Saiba mais</button>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@use '../styles/main.scss' as *;
@use 'sass:color';

#hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 80px;
  text-align: center;

  @include breakpoint('sm') {
    height: 100%;
  }

  h1 {
    font-size: 44px;

    @include breakpoint('sm') {
      font-size: 72px;
    }
  }
  h3 {
    font-size: 20px;

    span {
      background-color: $color-light-blue;
      color: $color-white;

      &::selection {
        background-color: $color-white;
        color: $color-light-blue;
      }
    }

    br::selection {
      background-color: $color-white;
    }
    &::selection {
      background-color: $color-white;
      color: $color-light-blue;
    }
  }
  .btn-group {
    display: flex;
    gap: 20px;

    .cta-buttons {
      display: flex;
      gap: 20px; /* Espaçamento entre os botões */
    }

    .btn-primary,
    .btn-secondary {
      padding: 15px 25px; /* Espaçamento interno */
      border: none; /* Remove a borda padrão */
      border-radius: 5px; /* Bordas arredondadas */
      text-decoration: none; /* Remove o sublinhado */
      font-weight: bold; /* Texto em negrito */
      transition:
        background-color 0.3s ease,
        color 0.3s ease,
        transform 0.3s ease; /* Adicionada transição suave para hover */
      cursor: pointer; /* Indica que é clicável */
    }

    .btn-primary {
      background-color: $color-light-blue; /* Azul claro definido */
      color: $color-white; /* Texto branco */
    }

    .btn-primary:hover,
    .btn-primary:focus {
      background-color: color.adjust($color-light-blue, $lightness: -10%);
      transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adicionado sombra para destacar o efeito */
    }

    .btn-secondary {
      background-color: transparent; /* Fundo transparente para o botão outlined */
      color: #6c757d; /* Texto em cinza padrão */
      border: 2px solid #6c757d; /* Borda cinza */

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }

      &:disabled {
        border-color: color.adjust(#6c757d, $lightness: 20%);
        color: #ccc;
        cursor: default;
      }
    }
  }
}
</style>
