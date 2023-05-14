<template>
  <div class="item-container">
    <a class="item" href="https://rubyonrails.org/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/ror.png" alt="Ruby On Rails">
      Ruby On Rails
    </a>
    <a class="item" href="https://www.ruby-lang.org/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/ruby.png" alt="Ruby">
      Ruby
    </a>
    <a class="item" href="https://redis.io/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/redis.png" alt="Redis">
      Redis
    </a>
    <a class="item" href="https://www.mysql.com/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/mysql.png" alt="MySQL">
      MySQL
    </a>

    <a class="item" href="https://www.typescriptlang.org/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/ts.png" alt="Typescript">
      Typescript
    </a>
    <a class="item" href="https://262.ecma-international.org/13.0/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/js.png" alt="Javascript">
      Javascript<br>(ES6+)
    </a>
    <a class="item" href="https://nodejs.org/en" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/node.png" alt="Node.js">
      Node.js
    </a>
    <a class="item" href="https://rollupjs.org/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/rollup.png" alt="Rollup.js">
      Rollup.js
    </a>

    <a class="item" href="https://vuejs.org/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/vue.png" alt="Vue">
      Vue
    </a>
    <a class="item" href="https://nuxt.com/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/nuxt.png" alt="Nuxt">
      Nuxt
    </a>
    <a class="item" href="https://git-scm.com/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/git.png" alt="git">
      Git
    </a>
    <a class="item" href="https://about.gitlab.com/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/gitlab.png" alt="Gitlab">
      Gitlab
    </a>

    <a class="item" href="https://sass-lang.com/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/scss.png" alt="SCSS">
      SCSS
    </a>
    <a class="item" href="https://getbootstrap.com/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/bootstrap.png" alt="Bootstrap">
      Bootstrap
    </a>
    <a class="item" href="https://vuetifyjs.com/en/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/vuetify.png" alt="Vuetify">
      Vuetify
    </a>
    <a class="item" href="https://m3.material.io/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/md.png" alt="Material Design">
      Material<br>Design
    </a>

    <a class="item" href="https://www.figma.com/about/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/figma.png" alt="Figma">
      Figma
    </a>
    <a class="item" href="https://code.visualstudio.com/" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/vscode.png" alt="Visual Studio Code">
      Visual Studio<br>Code
    </a>
    <a class="item" href="https://clickup.com/v3" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/clickup.png" alt="Clickup">
      ClicUup
    </a>
    <a class="item" href="https://www.atlassian.com/pl/software/jira" target="_blank" rel="nofollow">
      <img src="~/assets/images/skills/jira.png" alt="Jira">
      Jira
    </a>
  </div>
</template>

<style lang="scss">
  .item-container {
    width: 100%;

    @media screen and (max-width: 720px) {
      width: 100%;
      margin: 0 auto;
    }

    .item {
      width: 25%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 8px 16px;
      font-size: 18px;
      color: var(--light);

      @media screen and (max-width: 720px) {
        background: radial-gradient(closest-side, var(--bg-color) 75%, transparent);
        width: 50%;
        img { width: 64px; height: 64px; }

        &:nth-child(4n) { margin-bottom: 16px; }
      }

      img {
        width: 28px;
        height: 28px;
        object-fit: contain;
        margin-right: 12px;

        transition: all linear 0.05s;
        // filter: saturate(0);
        filter: sepia(1) hue-rotate(120deg);

        @media screen and (max-width: 540px) {
          filter: none;
        }
      }

      &:hover {
        cursor: pointer;
        img {
          filter: saturate(1);
          transform: scale(1.25);
          // transform: perspective(80px) rotateY(15deg) scale(1.25) rotateX(10deg);
        }
      }
    }
  }
</style>
