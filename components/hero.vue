<template>
  <div id="hero" class="hero">
    <div class="content">
      <div class="title">
        <div class="prefix">Hi, I'm</div>
        <div class="name">Piotr Garbicz</div>
        <div class="suffix">I build things that begin with www </div>
      </div>
      <div class="subtitle">
        As a Frontend && Backend developer.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .hero {
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    --bg-rotation-1: 190deg;
    --bg-rotation-2: 165deg;

    --ratio: 10%;

    display: flex;
    align-items: center;

    background-image: linear-gradient(170deg, var(--bg-color) 25%, transparent 40%);

    @media screen and (max-width: 720px) {
      margin-top: 32px;

      .content .title .name { font-size: 64px; }
    }

    @media screen and (max-width: 540px) {
      margin-top: 64px;
    }

    .content {
      .title {
        margin-bottom: 96px;

        @media screen and (max-width: 540px) {
          margin-bottom: 32px;
        }

        .prefix {
          font-size: 32px;
          color: var(--primary);
        }

        .name {
          font-size: 96px;
          color: var(--white);

          @media screen and (max-width: 720px) {
            font-size: 64px;
          }
        }

        .suffix {
          font-size: 32px;
          color: var(--light);
        }
      }

      .subtitle {
        font-size: 32px;
        color: var(--primary);
      }
    }
  }
</style>
