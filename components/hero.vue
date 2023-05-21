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

<style lang="scss" scoped>
  .hero {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;

    // fade-in effect for wrapper lines
    background-image: linear-gradient(170deg, var(--bg-color) 25%, transparent 40%);

    @media screen and (max-width: $medium) {
      // introduce margin-top to compensate for nav height
      margin-top: 32px;
      .content .title .name { font-size: 64px; }
    }

    @media screen and (max-width: $small) {
      margin-top: 64px;
    }

    .content {
      .title {
        margin-bottom: 96px;

        @media screen and (max-width: $small) {
          margin-bottom: 32px;
        }

        .prefix {
          font-size: 32px;
          color: $primary;
        }

        .name {
          font-size: 96px;
          color: $white;

          @media screen and (max-width: $small) {
            font-size: 64px;
          }
        }

        .suffix {
          font-size: 32px;
          color: $light;
        }
      }

      .subtitle {
        font-size: 32px;
        color: $primary;
      }
    }
  }
</style>
