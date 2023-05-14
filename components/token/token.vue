<template>
  <canvas id="token" />
</template>

<script setup lang="ts">
  import TokenElement from './TokenElement';

  let token: TokenElement;

  const currentHeader = useHeader();

  watch(currentHeader, (header) => {
    token.resolveHeader(header);
  });

  onMounted(() => {
    const size = window.innerWidth > 1272 ? 540 : window.innerWidth / 2 - 98;

    token = new TokenElement(
      document.querySelector('#token') as HTMLCanvasElement,
      size
    );
    token.init();
    token.resolveHeader(currentHeader.value);

    window.addEventListener('resize', () => {
      const size = window.innerWidth > 1272 ? 540 : window.innerWidth / 2 - 98;
      token.resize(size);
    });
  });

</script>

<style lang="scss">
  #token {
    width: 540px;
    height: 540px;
    position: absolute;
    top: calc(50vh - 270px);
    // 50% - 270px (1/2 of token size) - 540px (2 bars) - 2px (border)
    right: calc(50vw - 677px);
    z-index: 20;
    transition: all 1s;
    opacity: 0;

    --shadow-size: 100%;
    --shadow-color: var(--primary-transparent-2);

    background-image:
      radial-gradient(var(--shadow-color), transparent calc(var(--shadow-size) * 0.3)),
      radial-gradient(var(--shadow-color), transparent calc(var(--shadow-size) * 0.4)),
      radial-gradient(var(--shadow-color), transparent calc(var(--shadow-size) * 0.5));

      @media screen and (max-width: 1272px) {
      width: calc(50vw - 96px);
      height: calc(50vw - 96px);
      right: calc(96px - (50vw - 96px)/2 + 2px + (50vw - 96px)/4);
      // right: calc(26px - 12.5vw);
    }

    @media screen and (max-width: 720px) {
      display: none;
    }
  }
</style>
