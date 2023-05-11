<template>
  <div class="header">
    <h2 class="title" :class="{'hidden': hidden}" ref="header">
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
  const hidden = ref(false);
  const currentHeader = useState('currentHeader', () => { return { title: '', anchor: '' } });

  const checkHeader = () => {
    if (
      window.scrollY >= header.value.offsetTop - 384 &&
      window.scrollY <= header.value.offsetTop + (header.value.parentElement as HTMLElement).offsetHeight + 384 &&
      currentHeader.value.title != props.title
    ) {
      currentHeader.value = {
        title: props.title,
        anchor: props.anchor,
      };
    }
  }

  watch(currentHeader, (header) => {
    if (header.title == props.title) {
      hidden.value = true;
    } else {
      hidden.value = false;
    }
  });

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
      transition: all linear 0.3s;
      opacity: 1;

      &.hidden {
        opacity: 0;
      }

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