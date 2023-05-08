<template>
  <div class="nav">
    <div class="navbar">
      <h1 class="brand">Piotr Garbicz</h1>
      <div class="links">
        <ul>
          <li id="about"><a href="#about">About</a></li>
          <li id="skills"><a href="#skills">Skills</a></li>
          <li id="experience"><a href="#experience">Experience</a></li>
          <li id="contact"><a href="#contact">Contact</a></li>
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

  .navbar {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1144px) {
      padding: 24px 32px;
    }

    .brand {
      font-size: 24px;
      font-weight: 400;
      letter-spacing: var(--condensed);
    }

    .links {
      ul > li {
        list-style: none;
        transition: all linear 0.1s;
        // display: inline;
        // margin-right: 16px;

        &:hover, &.active {
          color: var(--primary);
          transform: scale(1.5) rotateY(20deg) perspective(1800px) rotateX(10deg);

          a {
            color: var(--primary);
          }

          @media screen and (max-width: 1144px) {
            transform: scale(1.15) rotateY(20deg) perspective(1800px) rotateX(10deg);
          }
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