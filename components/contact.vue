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

<style lang="scss">
  .contact {
    padding-top: 224px;
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media screen and (max-width: 720px) {
        flex-direction: column;
      }

      .title {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: var(--condensed);
        margin-bottom: 32px;
        color: var(--primary);
      }

      .contact-links, .contact-email {
        width: 50%;
        text-align: center;

        @media screen and (max-width: 720px) {
          width: 100%;
        }
      }

      .contact-links {
        @media screen and (max-width: 720px) {
          margin-bottom: 32px;
        }
      }

      .contact-link {
        // color: var(--light-2);
        font-size: 16px;
        a { text-decoration: underline; }

        @media screen and (max-width: 720px) {
          text-align: left;
          margin-bottom: 16px;

          a {
            display: block;
          }
        }

        &::before {
          content: '// ';
          color: var(--primary);
          font-weight: 600;
        }
      }
    }
  }
</style>
