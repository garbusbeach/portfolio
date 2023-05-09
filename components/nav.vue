<template>
  <div class="nav">
    <div class="grid-lines">
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
    <div class="navbar">
      <h1 class="brand">Piotr Garbicz</h1>
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

<style lang="scss">
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 161px;

  background-color: var(--bg-color);

  .grid-lines {
    background-color: var(--bg-color);
    width: calc(100% - 48px * 4);
    height: 161px;
    position: fixed;
    top: 0;
    left: calc((100% - 1080px)/2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    max-width: 1080px;

    @media screen and (max-width: 720px) {
      display: none;
    }

    @media screen and (max-width: 1272px) {
        left: 96px;
      }

    .line {
      width: 0;
      height: 161px;
      border-left: solid 1px #555;
      opacity: 0.2;
    }
  }


  .navbar {
    width: calc(100% - 48px * 4);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: calc((100% - 1080px)/2);

    @media screen and (max-width: 1272px) {
        left: 96px;
      }

    @media screen and (max-width: 720px) {
      padding: 24px 4px;
    }

    .brand {
      width: 25%;
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      letter-spacing: var(--condensed);
    }

    .links {
      width: 25%;
      ul > li {
        list-style: none;
        transition: all linear 0.1s;
        // display: inline;
        // margin-right: 16px;

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

        &.btn {
          display: block;
          margin-top: 8px;
          // display: inline;
          font-weight: 500;
          margin-right: 16px;
        }
      }
    }
  }
}
</style>