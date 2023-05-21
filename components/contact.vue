<template>
  <div id="contact" class="contact container">
    <Header title="Contact" anchor="contact" />
    <div class="content">
      <div class="contact-links">
        <div class="title">Reach with me online</div>
        <div class="contact-link">
          LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/piotr-garbicz">linkedin.com/in/piotr-garbicz</a>
        </div>
        <div class="contact-link">
          Instagram: <a target="_blank" href="https://instagram.com/garbus_beach">instagram.com/garbus_beach</a>
        </div>
        <div class="contact-link">
          GitHub: <a target="_blank" href="https://github.com/garbusbeach">github.com/garbusbeach</a>
        </div>
      </div>

      <div class="contact-email">
        <div class="title">Or directly via e-mail</div>
        Feel free to ask any questions!
        <div class="contact-link">piotr.garbus.garbicz@gmail.com</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .contact {
    padding-top: 224px;

    @media screen and (max-width: $medium) {
      padding-top: 320px;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media screen and (max-width: $medium) {
        flex-direction: column;
      }

      .title {
        @include condensed-text;

        font-size: 24px;
        font-weight: 400;
        margin-bottom: 32px;
        color: $primary;
      }

      .contact-links, .contact-email {
        width: 50%;
        text-align: center;

        @media screen and (max-width: $medium) {
          width: 100%;
        }
      }

      .contact-links {
        @media screen and (max-width: $medium) {
          margin-bottom: 32px;
        }
      }

      .contact-link {
        font-size: 16px;
        a { text-decoration: underline; }

        @media screen and (max-width: $medium) {
          text-align: left;
          margin-bottom: 16px;

          a { display: block; }
        }

        &::before {
          content: '// ';
          color: $primary;
          font-weight: 600;
        }
      }
    }
  }
</style>
