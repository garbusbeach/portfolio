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
    @media screen and (max-width: 1144px) {
      // margin: 32px;
    }

    position: relative;
    z-index: 10;
  }
</style>
