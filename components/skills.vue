<template>
  <div id="skills" class="skills container">
    <Header title="My Skills" anchor="skills" />
    <div class="content">
      <div class="backend">
        <div class="name">
          <div class="title">Backend Dev</div>
          <div class="highlight"/>
          <div class="description">Ruby, Ruby on Rails</div>
        </div>

        <div class="explainer">
          RoR developer with nearly 5 years of experience. I belive that backend and API architecture is place, where Ruby can really shine.
        </div>
      </div>

      <div class="frontend">
        <div class="name">
          <div class="title">Frontend Dev</div>
          <div class="highlight"/>
          <div class="description">Vue, NuxtJS, TS</div>
        </div>

        <div class="explainer">
          Highly passionate about UI/UX. More than 5 years of experience in HTML, CSS and JS.<br/><br/>

          I love to work with tools like Typescript, node.js, Vite, Electron and Vue.js.
        </div>
      </div>
    </div>

    <div class="content">
      <div class="subtitle">but I also like work with this</div>
    </div>
    <SkillsGrid />
  </div>
</template>

<style lang="scss">
  .skills {
    .content {
      .backend, .frontend {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 64px;

        .name {
          width: 25%;
          letter-spacing: var(--condensed);
          font-size: 18px;
          color: var(--light);
          text-align: center;
          display: flex;
          text-align: center;
          flex-direction: column;
          justify-content: center;

          .title {
            position: relative;
            z-index: 50;
            font-weight: 500;
          }

          .highlight {
            z-index: 25;
            content: '';
            display: block;
            position: relative;
            top: -10px;
            width: 100%;
            height: 8px;
          }
        }

        .explainer {
          width: 50%;
          font-size: 16px;
          color: var(--light);
          background: var(--bg-color);
          border: solid 1px var(--light);
          padding: 16px;
        }
      }

      .backend  .highlight { background-color: #cc0000; }
      .frontend .highlight { background-color: #41B883; }
    }

    .subtitle {
      font-size: 24px;
      font-weight: 500;
      color: var(--primary);
      text-align: center;
      margin: 64px 0;
      &::before { content: '// '; color: var(--light); }
    }
  }
</style>