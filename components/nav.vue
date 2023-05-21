<template>
  <div class="nav">
    <div class="navbar">
      <div class="info">
        <h1 class="brand">Piotr Garbicz</h1>
        <div v-if="previousTitle" class="previous-title" :class="{'animate': animateTitle}">
          {{ previousTitle }}
        </div>
        <h2 v-if="currentHeader.title" class="title" :class="{'animate': animateTitle}">
          {{ currentTitle }}
        </h2>
      </div>
      <div class="links">
        <ul>
          <li name="about"><a href="#about">About</a></li>
          <li name="experience"><a href="#experience">Experience</a></li>
          <li name="skills"><a href="#skills">Skills</a></li>
          <li name="contact"><a href="#contact">Contact</a></li>
          <li class="btn"><a href="./piotr-garbicz-resume.pdf" download>Download Resume</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const currentHeader = useHeader();

  let currentTitle = '';
  let previousTitle = '';
  const animateTitle = ref(false);

  // Update the title of the page, then title in nav and animate it
  function changeTitle(title: string) {
    if (currentTitle == title) return;

    previousTitle = currentTitle;
    currentTitle = title;

    document.title = `Piotr Garbicz // ${title || 'Developer'}`;
    animateTitle.value = true;

    // swipe out the previous title
    setTimeout(() => {
      animateTitle.value = false;
      previousTitle = '';
    }, 200);
  }

  watch(currentHeader, (header) => {
    changeTitle(header.title);

    // deactivate all links
    const links = document.querySelectorAll('.nav li');
    links.forEach(link => link.classList.remove('active'));
    if (!header.anchor) return;

    // change link to active, if there is any binded to the header
    document.querySelector(`.nav li[name=${header.anchor}]`)?.classList.add('active');
  });

  onMounted(() => {
    // Get first header, if user scrolls to the top (above it), remove the title in nav
    const firstHeader = document.querySelectorAll('.header .title')[0] as HTMLElement;
    window.addEventListener('scroll', () => {
      // Only if there is any header and user is above it
      if (currentHeader.value.title && window.scrollY <= firstHeader.offsetTop - 384) {
        currentHeader.value = {
          anchor: '',
          title: ''
        };
      }
    });
  });
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $z-index-nav;

  background-color: $dark;

  .navbar {
    @include scaled-width;

    padding-top: 12px;
    padding-bottom: 12px;

    display: flex;
    justify-content: space-between;

    .info {
      width: 50%;
      padding: 8px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .brand {
      @include condensed-text;

      width: 100%;
      font-size: 24px;
      font-weight: 400;
    }

    .title, .previous-title {
      @include condensed-text;

      color: $primary;
      font-size: 32px;
      font-weight: 500;
      display: inline;
      @media screen and (max-width: $medium) { font-size: 24px; }

      &::before {
        content: '// ';
        color: $light;
      }
    }

    .title {
      @keyframes swipe-in {
        0% {
          opacity: 0;
          transform: translateX(25px);
        }
        100% {
          opacity: 1;
          transform: translateX(0px);
        }
      }

      &.animate { animation: swipe-in 0.2s ease-in-out; }
    }

    .previous-title {
      position: absolute;
      bottom: 18px;
      max-width: $small;

      @media screen and (max-width: $lg-with-offset) {
        width: calc(50% - $offset-lg);
      }

      @media screen and (max-width: $medium) {
        width: calc(50% - $offset-md);
      }
      &.animate {
        animation: swipe-out 0.1s ease-in-out forwards;
      }

      @keyframes swipe-out {
        0% {
          opacity: 1;
          transform: translateX(0px);
        }
        100% {
          opacity: 0;
          transform: translateX(-100px);
        }
      }
    }

    .links {
      width: 25%;
      @media screen and (max-width: $medium) {
        width: 50%;
        text-align: left;
      }

      @media screen and (max-width: $small) {
        text-align: right;
      }

      ul > li {
        list-style: none;
        transition: all linear 0.1s;

        a { color: $light; };

        &:hover, &.active  a {
          font-weight: bold;
          color: $primary;
        }

        &.active { padding-bottom: 8px; }

        &:not(.btn):before { content: '// '; }
        a { transition: all linear 0.1s; }

        @media screen and (max-width: $small) {
          &:not(.btn):before { content: ''; }
          &:not(.btn):after { content: ' //'; }
        }

        &.btn {
          display: block;
          margin-top: 8px;
          font-weight: 500;

          &::before { content: '> '; }
          &::after { content: ' <'; }

          @media screen and (max-width: $small) {
            &::before, &::after { content: ''; }
          }
        }
      }
    }
  }
}
</style>
