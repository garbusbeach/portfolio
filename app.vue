<template>
  <div>
    <Nav />
    <div class="wrapper">
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  </div>
</template>

<style lang="scss">
  .wrapper {
    @media screen and (max-width: 1144px) {
      margin: 32px;
    }
  }
</style>
