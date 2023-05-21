<template>
  <div>
    <Nav />
    <Overlay />
    <Token />
    <div id="wrapper" class="wrapper">
      <Hero />
      <AboutMe />
      <Skills />
      <MyExperience />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    @include scaled-width;

    // To stay on top of the token
    position: relative;
    z-index: $z-index-wrapper;

    // Lines between sections effect
    background-size: 25%;
    background-image:
      linear-gradient(to right, #222 1px, transparent 1px),
      linear-gradient(to left, #222 1px, transparent 1px);
  }
</style>
