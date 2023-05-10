<template>
  <div id="hero" class="hero">
    <div class="content">
      <div class="title">
        <div class="prefix">Hi, I'm</div>
        <div class="name">Piotr Garbicz</div>
        <div class="suffix">I build things that begins with www </div>
      </div>
      <div class="subtitle">
        As Frontend & Backend developer.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .hero {
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;

    background-image: linear-gradient(190deg, var(--bg-color)0 70%, transparent 80%);

    @media screen and (max-width: 720px) {
      margin-top: 32px;

      .content .title .name { font-size: 64px; }
    }

    .content {
      .title {
        margin-bottom: 96px;

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
