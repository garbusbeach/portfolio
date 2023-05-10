<template>
  <div class="header">
    <h2 class="title" ref="header">
      {{ props.title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    anchor: string;
  }>();

  const header = ref() as Ref<HTMLElement>;
  const currentHeader = useState('currentHeader', () => { return { title: '', anchor: '' } });

  const checkHeader = () => {
    if (
      window.scrollY >= header.value.offsetTop - 384 &&
      window.scrollY <= header.value.offsetTop + (header.value.parentElement as HTMLElement).offsetHeight &&
      currentHeader.value.title != props.title
    ) {
      currentHeader.value = {
        title: props.title,
        anchor: props.anchor,
      };
    }
  }

  onMounted(() => {
    checkHeader();
    window.addEventListener('scroll', () => {
      checkHeader();
    });
  });

</script>

<style lang="scss">
  .header {
    width: 100%;
    margin-bottom: 96px;

    @media screen and (max-width: 720px) {
      margin-bottom: 64px;
    }

    .title {
      display: inline;
      @media screen and (max-width: 1272px) {
        max-width: calc(50vw - 100px);
      }

      @media screen and (max-width: 720px) {
        max-width: calc(50vw - 36px);
        font-size: 32px;
      }

      @media screen and (max-width: 520px) {
        font-size: 22px;
      }
    }

    .title {
      width: fit-content;
      max-width: 538px;
      font-size: 48px;
      color: var(--primary);
      margin-left: 1px;
      background: radial-gradient(closest-side, var(--bg-color) 75%, transparent);
      font-weight: 500;
      letter-spacing: var(--condensed);
      display: inline-block;

      @media screen and (max-width: 1272px) {
        max-width: calc(50vw - 100px);
      }

      @media screen and (max-width: 720px) {
        max-width: calc(50vw - 36px);
        font-size: 32px;
      }

      @media screen and (max-width: 520px) {
        font-size: 22px;
      }

      &:before {
        content: '// ';
        color: var(--light);
      }
    }
  }
</style>