<template>
  <div id="footer" class="footer container">
    <div class="content">
      <p>
        Build & Design: <a target="_blank" href="https://www.linkedin.com/in/piotr-garbicz">Piotr Garbicz</a>. Feel free to play around with it - you can find source code on my <a target="_blank" href="https://github.com/garbusbeach/portfolio">GitHub</a>.
        <br/>You can find my resume <a href="./piotr-garbicz-resume.pdf" download>here</a>.
      </p>
      <p>Piotr Garbicz © 2023</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  onMounted(() => {
    let bgRotation1 = 350;
    let bgRotation2 = 165;
    let ratio = 10;

    let bgDirection1 = 0.4;
    let bgDirection2 = -1;
    let ratioDirection = -0.1;

    let footer = document.querySelector('#footer') as HTMLElement;

    setInterval(() => {
      if (bgRotation1 >= 360) bgDirection1 = -0.3;
      if (bgRotation1 <= 345) bgDirection1 = 0.3;

      if (bgRotation2 >= 176) bgDirection2 = -0.3;
      if (bgRotation2 <= 165) bgDirection2 = 0.3;

      if (ratio >= 10) ratioDirection = -0.1;
      if (ratio <= 0) ratioDirection = 0.1;

      bgRotation1 += bgDirection1;
      bgRotation2 += bgDirection2;
      // ratio += ratioDirection;

      footer.style.setProperty('--bg-rotation', `${bgRotation1}deg`);
      // hero.style.setProperty('--bg-rotation-2', `${bgRotation2}deg`);
      // hero.style.setProperty('--ratio', `${ratio}%`);
    }, 50);
  });
</script>

<style lang="scss">
  .footer {
    --bg-rotation: 350deg;
    background-image: linear-gradient(var(--bg-rotation), var(--bg-color)0 55%, transparent 60%);
    padding-top: 224px;
    padding-bottom: 0;
    border-right: none;

    @media screen and (max-width: 720px) {
      padding-top: 64px;
    }

    .content {
      text-align: center;

      a { color: var(--primary); }
      p {
        margin-bottom: 64px;

        @media screen and (max-width: 720px) {
          margin-bottom: 32px;
        }
      }
    }
  }
</style>