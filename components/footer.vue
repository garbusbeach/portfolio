<template>
  <div id="footer" class="footer container">
    <div class="content">
      <p>
        Build & Design: <a target="_blank" href="https://www.linkedin.com/in/piotr-garbicz">Piotr Garbicz</a>. Feel free to play around with it - you can find source code on my <a target="_blank" href="https://github.com/garbusbeach/portfolio">GitHub</a>.
        <br/>You can find my resume <a href="./piotr-garbicz-resume.pdf" download>here</a>.
      </p>
      <p>Piotr Garbicz © 2023</p>
    </div>
  </div>
</template>

<style lang="scss">
  .footer {
    background-image: linear-gradient(350deg, var(--bg-color)0 55%, transparent 65%);
    padding-top: 224px;
    padding-bottom: 0;
    border-right: none;

    @media screen and (max-width: 720px) {
      padding-top: 64px;
    }

    .content {
      text-align: center;

      a { color: var(--primary); }
      p {
        margin-bottom: 64px;

        @media screen and (max-width: 720px) {
          margin-bottom: 32px;
        }
      }
    }
  }
</style>