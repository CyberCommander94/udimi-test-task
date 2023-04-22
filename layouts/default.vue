<template>
  <div id="app">
    <AppNavbar />
    <div class="app__content-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/layout/AppNavbar'

export default {
  name: 'Default',
  components: {
    AppNavbar,
  },
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
}
</script>

<style scoped lang="scss">
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    &__content-wrapper {
      width: 100%;
    }
  }
</style>
