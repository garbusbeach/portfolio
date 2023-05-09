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
    background-image: linear-gradient(345deg, var(--bg-color)0 60%, transparent 70%);
    padding-top: 224px;
    padding-bottom: 0;
    border-right: none;
    .content {
      text-align: center;

      a {
        color: var(--primary);
      }

      p {
        margin-bottom: 64px;
      }
    }
  }
</style>