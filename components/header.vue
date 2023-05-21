<template>
  <div class="header">
    <h2 ref="header" class="title" :class="{'hidden': hidden}">
      {{ props.title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    anchor: string;
  }>();

  const currentHeader = useHeader();

  const header = ref() as Ref<HTMLElement>;
  const hidden = ref(false);

  // Check if changed header is not the current one, and viewport is
  // in range of the header section - then change the current header
  const checkHeader = () => {
    if (
      currentHeader.value.title != props.title &&
      window.scrollY > header.value.offsetTop - 384 &&
      window.scrollY <= header.value.offsetTop + (header.value.parentElement as HTMLElement).offsetHeight + 168
    ) {
      currentHeader.value = {
        title: props.title,
        anchor: props.anchor
      };
    }
  };

  // Check if the header is the current one, if yes, then hide it
  // It will be visible in the nav
  watch(currentHeader, (header) => {
    if (header.title == props.title) {
      hidden.value = true;
    } else {
      hidden.value = false;
    }
  });

  onMounted(() => {
    checkHeader();
    window.addEventListener('scroll', checkHeader);
  });

</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    margin-bottom: 96px;

    @media screen and (max-width: $medium) {
      margin-bottom: 64px;
    }

    .title {
      @include condensed-text;

      width: fit-content;
      max-width: 50%;
      font-size: 48px;
      color: $primary;
      margin-left: 1px;
      background: radial-gradient(closest-side, $dark 75%, transparent);
      font-weight: 500;
      transition: all linear 0.3s;
      opacity: 1;

      &.hidden {
        opacity: 0;
      }

      @media screen and (max-width: $medium) {
        max-width: 100%;
        font-size: 32px;
      }

      @media screen and (max-width: $small) {
        font-size: 22px;
      }

      &:before {
        content: '// ';
        color: var(--light);
      }
    }
  }
</style>
