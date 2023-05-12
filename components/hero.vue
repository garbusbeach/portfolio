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

<script setup lang="ts">
  onMounted(() => {
    let bgRotation1 = 190;
    let bgRotation2 = 165;
    let ratio = 10;

    let bgDirection1 = 1;
    let bgDirection2 = -1;
    let ratioDirection = -0.1;

    let hero = document.querySelector('#hero') as HTMLElement;

    setInterval(() => {
      if (bgRotation1 >= 200) bgDirection1 = -0.3;
      if (bgRotation1 <= 190) bgDirection1 = 0.3;

      if (bgRotation2 >= 176) bgDirection2 = -0.3;
      if (bgRotation2 <= 165) bgDirection2 = 0.3;

      if (ratio >= 10) ratioDirection = -0.1;
      if (ratio <= 0) ratioDirection = 0.1;

      bgRotation1 += bgDirection1;
      bgRotation2 += bgDirection2;
      // ratio += ratioDirection;

      hero.style.setProperty('--bg-rotation-1', `${bgRotation1}deg`);
      hero.style.setProperty('--bg-rotation-2', `${bgRotation2}deg`);
      // hero.style.setProperty('--ratio', `${ratio}%`);
    }, 50);
  });
</script>

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

    background-image: linear-gradient(var(--bg-rotation-1), var(--bg-color)0 60%, transparent 65%),
      linear-gradient(var(--bg-rotation-2), var(--bg-color)0 70%, transparent 75%);

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
