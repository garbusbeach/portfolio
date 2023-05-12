<template>
  <div class="nav">
    <div class="navbar">
      <div class="info">
        <h1 class="brand">Piotr Garbicz</h1>
        <div class="previous-title" :class="{'animate': animatePreviousTitle}" v-if="previousTitle">
          <span>//</span>
          {{ previousTitle }}
        </div>
        <h2 class="section" :class="{'animate': animateTitle}">
          <span v-if="currentHeader.title">//</span>
          {{ currentTitle }}
        </h2>
      </div>
      <div class="links">
        <ul>
          <li name="about"><a href="#about">About</a></li>
          <li name="skills"><a href="#skills">Skills</a></li>
          <li name="experience"><a href="#experience">Experience</a></li>
          <li name="contact"><a href="#contact">Contact</a></li>
          <li class="btn"><a href="./piotr-garbicz-resume.pdf" download>Download Resume</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const currentHeader = useState('currentHeader', () => { return { anchor: '', title: '' } });
  let firstHeader: HTMLElement;

  let currentTitle = '';
  let previousTitle = '';
  const animateTitle = ref(false);
  const animatePreviousTitle = ref(false);

  function changeTitle(title: string) {
    if (currentTitle == title) return;
    previousTitle = currentTitle;
    currentTitle = title;

    document.title = `Piotr Garbicz // ${title || 'Developer'}`;
    animateTitle.value = true;
    animatePreviousTitle.value = true;

    setTimeout(() => { animateTitle.value = false; }, 200);
    setTimeout(() => { animatePreviousTitle.value = false;; previousTitle = ''; }, 200);
  }

  watch(currentHeader, (header) => {
    changeTitle(header.title);

    const links = document.querySelectorAll(`.nav li`);
    links.forEach(link => link.classList.remove('active'));
    if (!header.anchor) return;

    document.querySelector(`.nav li[name=${header.anchor}]`)?.classList.add('active');
  });

  onMounted(() => {
    firstHeader = document.querySelectorAll('.header .title')[0] as HTMLElement;
    window.addEventListener('scroll', () => {
      if (window.scrollY <= firstHeader.offsetTop - 384) {
        currentHeader.value = {
          anchor: '',
          title: ''
        }
      }
    });
  })
</script>

<style lang="scss">
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  background-color: var(--bg-color);
  // background: linear-gradient(180deg, var(--bg-color) 85%, transparent);

  .navbar {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    justify-content: space-between;

    // background-size: 25%;
    // background-image:
    //   linear-gradient(to right, #555 1px, transparent 1px);
    // border-right: solid 1px #555;

    --offset: 0px;

    @media screen and (max-width: 1272px) {
      --offset: 96px;
      width: calc(100% - var(--offset) * 2);
      margin: 0 var(--offset);
    }

    @media screen and (max-width: 720px) {
      --offset: 32px;
    }

    // @media screen and (max-width: 720px) {
    //   padding:  4px;
    // }

    .info {
      width: 50%;
      padding: 8px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .brand {
      width: 100%;
      font-size: 24px;
      font-weight: 400;
      letter-spacing: var(--condensed);
    }

    .section, .previous-title {
      display: inline;
      color: var(--primary);
      font-size: 32px;
      span { color: var(--light); }

      @media screen and (max-width: 720px) {
        font-size: 24px;
    }
    }

    .section {
      @keyframes animateTitle {
        0% {
          opacity: 0;
          transform: translateX(25px);
        }
        100% {
          opacity: 1;
          transform: translateX(0px);
        }
      }
      &.animate {
        animation: animateTitle 0.2s ease-in-out;
      }
    }

    .previous-title {
      position: absolute;
      bottom: 18px;
      max-width: 540px;

      @media screen and (max-width: 1272px) {
        width: calc(50% - 96px);
      }

      @media screen and (max-width: 720px) {
        width: calc(100% - 64px);
      }
      &.animate {
        animation: animatePreviousTitle 0.1s ease-in-out forwards;
      }

      @keyframes animatePreviousTitle {
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
      @media screen and (max-width: 720px) {
        width: 50%;
        text-align: left;
      }

      @media screen and (max-width: 520px) {
        text-align: right;
      }

      ul > li {
        list-style: none;
        transition: all linear 0.1s;
        // display: inline;
        // margin-right: 16px;

        a { color: var(--light); };

        &:hover, &.active {
          color: var(--primary);
          font-weight: bold;
          // transform: scale(1.5) rotateY(20deg) perspective(1800px) rotateX(10deg);

          a {
            color: var(--primary);
          }

          @media screen and (max-width: 1144px) {
            // transform: scale(1.15) rotateY(20deg) perspective(1800px) rotateX(10deg);
          }
        }

        &.active {
          padding-bottom: 8px;
        }

        &:not(.btn):before { content: '// '; }
        a {
          transition: all linear 0.1s;
        }

        @media screen and (max-width: 520px) {
          &:not(.btn):before { content: ''; }
          &:not(.btn):after { content: ' //'; }
        }

        &.btn {
          display: block;
          margin-top: 8px;
          // display: inline;
          font-weight: 500;
          // margin-right: 16px;
        }
      }
    }
  }
}
</style>