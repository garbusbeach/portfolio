<template>
  <div id="about" class="about-me container">
    <Header title="About me" anchor="about" />
    <div class="content">
      <div class="description">
        Keeping balance between passions - music & technology. Ruby on Rails & JS fintech developer with near <span class="hl">5 years of experience</span> and bachelor degree in jazz.<br/><br/>

        I love to work with ambitious people and projects that give me the possibility to <span class="hl">leave a mark</span>. During my work experience I've had the pleasure to be frontend / backend / <span class="hl">fullstack</span> / vue / RoR engineer, but also <span class="hl">team leader</span>, project manager and lead the discovery team in a fintech company. My favourite environment is a place with a lot of challenges, and potential for self-development.<br/><br/>

        If you think that something is <span class="hl">impossible</span> - I'll be glad to give you my opinion on that topic!
      </div>
      <div class="photo">
        <div class="image" />
        <div class="backdrop">
          <div class="primary-light" />
          <div class="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .about-me {
    // border-image: linear-gradient(to right, red 1px, transparent 1px);
    // border-image-width: 100%;

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

        .image {
          width: 100%;
          height: 100%;
          padding: 50%;
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
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
          & > * {
            content: '';
            display: block;
            position: relative;
            border-radius: 16px;
            margin-top: -100%;
            padding: calc(50% - 4px);
            box-sizing: content-box;

            --backdrop-margin: 16px;

            @media screen and (max-width: 1144px) {
              --backdrop-margin: -16px;
            }

            &.primary-light {
              z-index: 50;
              top: var(--backdrop-margin);
              left: var(--backdrop-margin);
              border: solid 4px var(--primary-light);
              box-shadow: 0 0 4px var(--primary-light);
            }

            &.primary {
              z-index: 25;
              top: calc(var(--backdrop-margin) * 2);
              left: calc(var(--backdrop-margin) * 2);
              border: solid 4px var(--primary);
              box-shadow: 0 0 4px var(--primary);
            }
          }
        }
      }
    }
  }
</style>
