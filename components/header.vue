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
        document.querySelector(`.nav li[name=${props.anchor}]`)?.classList.add('active');
      } else {
        locked.value = false;
        document.querySelector(`.nav li[name=${props.anchor}]`)?.classList.remove('active');
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
      width: 538px;
      // text-align: center;
      font-size: 48px;
      color: var(--primary);
      // To not overlay first line
      margin-left: 1px;
      background: radial-gradient(closest-side, var(--bg-color) 75%, transparent);
      font-weight: 500;
      letter-spacing: var(--condensed);
      display: inline-block;

      @media screen and (max-width: 1272px) {
        width: calc(50vw - 100px);
      }

      @media screen and (max-width: 720px) {
        width: calc(50vw - 36px);
        font-size: 32px;
      }

      @media screen and (max-width: 520px) {
        font-size: 24px;
        max-width: 33%;
      }

      position: relative;
      z-index: 10000;

      &.locked {
        position: fixed;
        top: 64px;
        z-index: 10000;
        background: var(--bg-color);
      }

      &:before {
        content: '// ';
        color: var(--light);
      }
    }

    .dummy { font-size: 48px; }
  }
</style>