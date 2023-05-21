<template>
  <div id="about" class="about-me container">
    <Header title="About me" anchor="about" />
    <div class="content">
      <div class="description">
        Keeping balance between passions - music & technology. Ruby on Rails & JS fintech developer with nearly <a href="#experience">5 years of experience</a> and bachelor's degree in jazz.<br><br>

        I love to work with ambitious people and projects that give me the possibility to <span class="hl">leave a mark</span>. During my work experience I've had the pleasure to be frontend / backend / <a href="#skills">fullstack</a> / vue / RoR engineer, but also <a href="#experience">team leader</a>, project manager and lead the discovery team in a fintech company. My favourite environment is a place with a lot of challenges, and potential for self-development.<br><br>

        If you think that something is <span class="hl">impossible</span> - I'll be glad to give you my opinion on that topic!
      </div>
      <div class="photo" :class="{'active': active}">
        <div class="image" />
        <div class="backdrop">
          <div class="primary-light" />
          <div class="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const active = ref(false);
  const currentHeader = useHeader();

  let clientX = 0, clientY = 0, scrolled = 0;

  let backdropPrimaryLight: HTMLElement;
  let backdropPrimary: HTMLElement;
  let image: HTMLElement;

  // animate the box-shadow of the image, and backdrops
  function animateBox(event: MouseEvent | Event) {
    if (window.screen.width < 720) return;

    if (typeof (event as MouseEvent).clientX === 'number') {
      // on mouse move - animate x and y
      clientX = (event as MouseEvent).clientX;
      clientY = (event as MouseEvent).clientY;
      scrolled = window.scrollY;
    } else {
      // on scroll - then we want only animate y
      clientY = clientY + (window.scrollY - scrolled) / 16;
      scrolled = window.scrollY;
    }

    // calc x and y relative to var image position
    let x = clientX - image.getBoundingClientRect().left - image.offsetWidth / 2;
    let y = clientY - image.getBoundingClientRect().top - image.offsetHeight / 2;

    // normalize x and y
    x = x / 16;
    y = y / 16;

    const max = 64;

    if (x > max) x = max;
    if (x < -max) x = -max;
    if (y > max) y = max;
    if (y < -max) y = -max;

    const shadow = ((Math.abs(x) + Math.abs(y)) / 2);

    // animate main image position
    image.style.setProperty('transform', `translate(${x / 4}px, ${y / 4}px)`);

    // animate first backdrop
    backdropPrimary.style.setProperty('top', `${y * 2}px`);
    backdropPrimary.style.setProperty('left', `${x * 2}px`);
    backdropPrimary.style.setProperty('box-shadow', `0 0 ${shadow}px var(--primary), inset 0 0 ${shadow}px var(--primary)`);

    // animate second backdrop
    backdropPrimaryLight.style.setProperty('top', `${y}px`);
    backdropPrimaryLight.style.setProperty('left', `${x}px`);
    backdropPrimaryLight.style.setProperty('box-shadow', `0 0 ${shadow}px var(--primary-light), inset 0 0 ${shadow}px var(--primary-light)`);
  }

  // enable animation only if about section is currently in view
  watch(currentHeader, (header) => {
    if (header.anchor === 'about') {
      setTimeout(() => { active.value = true; }, 750);
    } else {
      active.value = false;
    }
  });

  onMounted(() => {
    backdropPrimaryLight = document.querySelector('.backdrop .primary-light') as HTMLElement;
    backdropPrimary = document.querySelector('.backdrop .primary') as HTMLElement;
    image = document.querySelector('.photo .image') as HTMLElement;

    document.addEventListener('mousemove', (e) => animateBox(e));
    document.addEventListener('scroll', (e) => animateBox(e));
  });
</script>

<style lang="scss" scoped>
  .about-me {
    // initial position for backdrop
    --backdrop-margin: 16px;

    @media screen and (max-width: $medium) {
      // negative for smaller screens - changed direction
      // to be visible, because of the photo position
      --backdrop-margin: -16px;
    }

    // highlight
    span.hl {
      color: var(--primary);
    }

    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 720px) {
        flex-direction: column-reverse;
      }

      .description {
        width: 66%;
        font-size: 18px;
        color: var(--light-2);
        letter-spacing: var(--condensed);

        @media screen and (max-width: 720px) {
          width: 100%;
        }
      }

      .photo {
        width: 25%;
        height: 0;
        padding-bottom: 25%;

        @media screen and (max-width: 720px) {
          width: 50%;
          padding-bottom: 50%;
          margin: 32px auto;
        }

        &.active {
          .image {
             box-shadow: 0 0 32px rgba(255, 255, 255, 0.5);
          }

          .backdrop {
            opacity: 1;
          }
        }

        .image {
          width: 100%;
          height: 100%;
          padding: 50%;
          border-radius: 16px;
          background-image: url('~/assets/images/this_is_picture_of_me.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          z-index: 100;
        }

        .backdrop {
          display: block;
          position: relative;
          margin-top: -100%;
          opacity: 0;
          transition: all 0.5s;

          & > * {
            content: '';
            display: block;
            position: relative;
            border-radius: 16px;
            margin-top: -100%;
            padding: calc(50% - 4px);
            box-sizing: content-box;

            &.primary-light {
              z-index: 50;
              top: var(--backdrop-margin);
              left: var(--backdrop-margin);
              border: solid 4px $primary-light;
              box-shadow: 0 0 32px $primary-light, inset 0 0 32px $primary-light;
            }

            &.primary {
              z-index: 25;
              top: calc(var(--backdrop-margin) * 2);
              left: calc(var(--backdrop-margin) * 2);
              border: solid 4px $primary;
              box-shadow: 0 0 32px $primary, inset 0 0 32px $primary;
            }
          }
        }
      }
    }
  }
</style>
