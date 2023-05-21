<template>
  <canvas id="token" />
</template>

<script setup lang="ts">
  import TokenElement from './TokenElement';

  let token: TokenElement;
  const currentHeader = useHeader();

  const calcSize = () => {
    // Set the size of the token - for screen size above 1272px and below
    const size = window.innerWidth > 1272 ? 540 : window.innerWidth / 2 - 98;
    return size;
  };

  // Pass new header to the token, to change animation state
  watch(currentHeader, (header) => {
    token.resolveHeader(header);
  });

  onMounted(() => {
    token = new TokenElement(
      document.querySelector('#token') as HTMLCanvasElement,
      calcSize()
    );

    // If user is on mobile, don't show the token
    if (window.innerWidth >= 720) {
      token.init();
      token.resolveHeader(currentHeader.value);
    }

    window.addEventListener('resize', () => {
      // Skip if user is on mobile
      if (window.innerWidth < 720) return;

      // If user was on mobile, and now is on desktop, show the token
      if (!token.ready) token.init();

      token.resize(calcSize());
    });
  });

</script>

<style lang="scss" scoped>
  #token {
    // Base dimensions, will be overwritten by JS
    width: 540px;
    height: 540px;
    position: absolute;

    // Base position for fade-in animation
    top: calc(50vh - 270px);
    right: calc(50vw - 677px);

    z-index: $z-index-token;
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
      right: calc(96px - (50vw - 96px) / 2 + 2px + (50vw - 96px) / 4);
    }

    @media screen and (max-width: 720px) {
      display: none;
    }
  }
</style>
