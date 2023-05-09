<template>
  <div>
    <Nav />
    <Overlay />
    <div class="wrapper">
      <Hero />
      <AboutMe />
      <Skills />
      <MyExperience />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
  .wrapper {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;

    --offset: 0px;

    @media screen and (max-width: 1272px) {
      --offset: 96px;
      width: calc(100% - var(--offset) * 2);
      margin: 0 var(--offset);
    }

    @media screen and (max-width: 720px) {
      --offset: 32px;
    }

    background-size: 25%;
    background-image:
      linear-gradient(to bottom, red, transparent 5%),
      linear-gradient(to right, #222 1px, transparent 1px),
      linear-gradient(to left, #222 1px, transparent 1px),

    // background-image: linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%);
    // background-position: bottom;
    // background-size: 3px 1px;
    // background-repeat: repeat-x;
    // border-left: solid 1px #555;

  }
</style>
