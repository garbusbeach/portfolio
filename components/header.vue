<template>
  <div class="header">
    <h2
      class="title"
      :class="{'locked': locked}"
    >
      {{ props.title }}
    </h2>
    <h2
      class="dummy"
      ref="header"
    >&nbsp;</h2>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    anchor: string;
  }>();

  const locked = ref(false);
  const header = ref() as Ref<HTMLHeadingElement>;

  onMounted(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= header.value.offsetTop - 64) {
        locked.value = true;
        const links = document.querySelectorAll(`.nav li`);
        links.forEach(link => link.classList.remove('active'));
        document.querySelector(`.nav li#${props.anchor}`)?.classList.add('active');
      } else {
        locked.value = false;
        document.querySelector(`.nav li#${props.anchor}`)?.classList.remove('active');
      }
    });
  });

</script>

<style lang="scss">
  .header {
    width: 100%;
    margin-bottom: 96px;

    .title, .dummy { display: inline; }

    .title {
      font-size: 48px;
      color: var(--primary);
      background: var(--bg-color);
      font-weight: 500;
      letter-spacing: var(--condensed);

      @media screen and (max-width: 720px) {
        font-size: 32px;
      }

      @media screen and (max-width: 520px) {
        font-size: 24px;
      }

      position: relative;
      z-index: 1000;

      &.locked {
        position: fixed;
        top: 64px;
      }

      &:before {
        content: '// ';
        color: var(--light);
      }
    }

    .dummy { font-size: 48px; }
  }
</style>