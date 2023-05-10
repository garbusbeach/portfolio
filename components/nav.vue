<template>
  <div class="nav">
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