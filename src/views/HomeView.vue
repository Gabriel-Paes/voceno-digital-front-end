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
      <a href="#" class="btn-primary">Comece agora</a>
      <a href="#" class="btn-secondary">Saiba mais</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/main.scss' as *;

#hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 80px;
  text-align: center;

  h1 {
    font-size: 72px;
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
        background-color 0.3s,
        color 0.3s; /* Transição suave */
      cursor: pointer; /* Indica que é clicável */
    }

    .btn-primary {
      background-color: $color-light-blue; /* Azul para o botão primário */
      color: #ffffff; /* Texto branco */
    }

    .btn-primary:hover,
    .btn-primary:focus {
      background-color: #0056b3; /* Azul mais escuro ao passar o mouse */
    }

    .btn-secondary {
      background-color: #6c757d; /* Cinza para o botão secundário */
      color: #ffffff; /* Texto branco */
    }

    .btn-secondary:hover,
    .btn-secondary:focus {
      background-color: #5a6268; /* Cinza mais escuro ao passar o mouse */
    }
  }
}
</style>
